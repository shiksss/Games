module DayDayUp {
	export enum BattlefieldMapStyle {
		None = -1,
		Asia,//亚洲
		Australia,//大洋州
		Europe,//欧洲
		Antarctica,//南极洲
		NorthAmerica,//北美洲
		SouthAmerica,//南美洲
		Moon,//月球
		COUNT
	}

	export class BattlefieldMapBoardInfo {
		type: BattlefieldBoardTypeEnum = BattlefieldBoardTypeEnum.Normal;

		startLevel: number = 0;//起始层数
		startRate: number = 1;//占比
		endLevel: number = Number.MAX_VALUE;//起始层数
		endRate: number = 1;//占比

		moveStartLevel: number = 0;//起始层数
		moveStartRate: number = 0;//占比
		moveStartRate_All: number = 0;//占比
		moveEndLevel: number = 0;//起始层数
		moveEndRate: number = 0;//占比
		moveEndRate_All: number = 0;//占比

		moveLengthRate_Min: number = 0;//占比
		moveLengthRate_Max: number = 0;//占比

		moveFrameCount_Min: number = 0;//占比
		moveFrameCount_Max: number = 0;//占比

		public constructor(type: BattlefieldBoardTypeEnum) {
			this.type = type;
		}

		SetMove(
			moveStartLevel: number, moveStartRate: number, moveStartRate_All: number,
			moveEndLevel: number, moveEndRate: number, moveEndRate_All: number,
			moveLengthRate_Min: number, moveLengthRate_Max: number,
			moveFrameCount_Min: number, moveFrameCount_Max: number): void {
			this.moveStartLevel = moveStartLevel;
			this.moveStartRate = moveStartRate;
			this.moveStartRate_All = moveStartRate_All;
			this.moveEndLevel = moveEndLevel;
			this.moveEndRate = moveEndRate;
			this.moveEndRate_All = moveEndRate_All;

			this.moveLengthRate_Min = moveLengthRate_Min;
			this.moveLengthRate_Max = moveLengthRate_Max;

			this.moveFrameCount_Min = moveFrameCount_Min;
			this.moveFrameCount_Max = moveFrameCount_Max;
		}

		GetRate(level: number): number {
			if (level < this.startLevel || level > this.endLevel) { return 0; }

			if (this.endLevel == this.startLevel || this.endRate == this.startRate) { return this.startRate; }

			return this.startRate + (this.endRate - this.startRate) * (level - this.startLevel) / (this.endLevel - this.startLevel);
		}

		GetMoveRate(level: number): number {
			if (level < this.moveStartLevel || level > this.moveEndLevel) { return 0; }

			if (this.moveEndLevel == this.moveStartLevel || this.moveEndRate == this.moveStartRate) { return this.moveStartRate; }

			return this.moveStartRate + (this.moveEndRate - this.moveStartRate) * (level - this.moveStartLevel) / (this.moveEndLevel - this.moveStartLevel);
		}

		GetMoveAllRate(level: number): number {
			if (level < this.moveStartLevel || level > this.moveEndLevel) { return 0; }

			if (this.moveEndLevel == this.moveStartLevel || this.moveEndRate_All == this.moveStartRate_All) { return this.moveStartRate_All; }

			return this.moveStartRate_All + (this.moveEndRate_All - this.moveStartRate_All) * (level - this.moveStartLevel) / (this.moveEndLevel - this.moveStartLevel);
		}
	}

	export class BattlefieldMapPropInfo {
		type: BattlefieldPropTypeEnum;

		startLevel: number;//起始层数
		startRate: number//占比
		endLevel: number;//起始层数
		endRate: number//占比

		GetRate(level: number): number {
			if (level < this.startLevel || level > this.endLevel) { return 0; }

			if (this.endLevel == this.startLevel || this.endRate == this.startRate) { return this.startRate; }

			return this.startRate + (this.endRate - this.startRate) * (level - this.startLevel) / (this.endLevel - this.startLevel);
		}
	}

	export class BattlefieldMap {
		style: BattlefieldMapStyle;//背景风格

		height: number;//高度

		range: Lib.Range;

		columCount: number = 4;// 列數

		columWidth: number;

		rowIndexMin: number;
		rowHeight: number;//行高

		columIndexes: Array<number> = new Array<number>();

		boardWidth_Min: number;
		boardWidth_Max: number;

		GetBoardWidth(rate: number) {
			return this.boardWidth_Min + (this.boardWidth_Max - this.boardWidth_Min) * rate;
		}

		boardInfos: Lib.List<BattlefieldMapBoardInfo> = new Lib.List<BattlefieldMapBoardInfo>();
		get DefaultBoardInfo(): BattlefieldMapBoardInfo { return this.boardInfos.Count <= 0 ? null : this.boardInfos.Get(0) };//默认板类型

		propInfos: Lib.List<BattlefieldMapPropInfo> = new Lib.List<BattlefieldMapPropInfo>();

		constructor(showWidth: number, showHeight: number, style: BattlefieldMapStyle, columCount: number, rowIndexMin: number, levelRowCount: number, levelCount: number, boardWidth_Min: number, boardWidth_Max: number) {
			this.style = style;

			this.columCount = columCount;
			this.columWidth = showWidth / this.columCount;

			this.rowIndexMin = rowIndexMin;
			this.rowHeight = showHeight / levelRowCount;

			this.height = Math.ceil(showHeight * levelCount / this.rowHeight) * this.rowHeight;

			this.boardWidth_Min = boardWidth_Min;
			this.boardWidth_Max = boardWidth_Max;

			let tempColumIndex = 1;
			for (let i: number = 0; i < this.columCount; i++) {
				this.columIndexes.push(tempColumIndex);
				tempColumIndex += 2;

				if (tempColumIndex >= this.columCount) {
					tempColumIndex = 0;
				}
			}
		}

		private GetNewBoardInfo(level: number, rate: number): BattlefieldMapBoardInfo {
			let boardInfo: BattlefieldMapBoardInfo = null;

			let rateMax: number = 0;
			let rates: Lib.List<number> = new Lib.List<number>();

			this.boardInfos.ForEach(
				(index: number, value: BattlefieldMapBoardInfo) => {
					let tempRate: number = value.GetRate(level);
					rates.Add(tempRate);
					rateMax += tempRate;
				}
			);

			rate *= rateMax;

			this.boardInfos.ForEach(
				(index: number, value: BattlefieldMapBoardInfo) => {
					let tempRate: number = rates.Get(index);
					if (tempRate > rate) {
						boardInfo = value;
					} else {
						rate -= tempRate;
					}
				},
				() => {
					return boardInfo != null;
				}
			);

			return boardInfo == null ? this.DefaultBoardInfo : boardInfo;
		}

		private CreateBoard(battlefield: Battlefield, random: Lib.HLRandom, rowIndex: number, level: number): BattlefieldBoard {
			let columIndex: number = this.columIndexes[rowIndex % this.columCount];

			//根据配置确定板类型
			let boardInfo: BattlefieldMapBoardInfo = this.GetNewBoardInfo(level, random.Next(0, 1));

			if (boardInfo.type == BattlefieldBoardTypeEnum.None) { return null; }

			let newBoard: BattlefieldBoard;
			let newBoardId: number = this.style + rowIndex * 10;
			let faceToRight: boolean = random.Next(0, 1) < 0.5;// 随机方向

			let y: number = -this.rowHeight * rowIndex + this.range.min;
			let boardWidth: number = this.GetBoardWidth(Math.min(-y / this.height, 1));
			let boardHeight: number = boardWidth * 0.0001;
			switch (boardInfo.type) {
				case BattlefieldBoardTypeEnum.Bubble: {
					let newBoardWithType: BattlefieldBoard_Bubble = BattlefieldBoard_Bubble.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
					newBoard = newBoardWithType;
					break;
				}
				case BattlefieldBoardTypeEnum.Conveyor: {
					let newBoardWithType: BattlefieldBoard_Conveyor = BattlefieldBoard_Conveyor.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
					newBoard = newBoardWithType;
					break;
				}
				case BattlefieldBoardTypeEnum.Ice: {
					let newBoardWithType: BattlefieldBoard_Ice = BattlefieldBoard_Ice.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
					newBoard = newBoardWithType;
					break;
				}
				case BattlefieldBoardTypeEnum.Marsh: {
					let newBoardWithType: BattlefieldBoard_Marsh = BattlefieldBoard_Marsh.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
					newBoard = newBoardWithType;
					break;
				}
				case BattlefieldBoardTypeEnum.Quicksand: {
					let newBoardWithType: BattlefieldBoard_Quicksand = BattlefieldBoard_Quicksand.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
					newBoard = newBoardWithType;
					break;
				}
				case BattlefieldBoardTypeEnum.Spring: {
					let newBoardWithType: BattlefieldBoard_Spring = BattlefieldBoard_Spring.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
					newBoard = newBoardWithType;
					break;
				}
				case BattlefieldBoardTypeEnum.Normal: {
					let newBoardWithType: BattlefieldBoard_Normal = BattlefieldBoard_Normal.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
					newBoard = newBoardWithType;
					break;
				}
			}

			newBoard.SetStartPos(
				(columIndex + 0.5) * this.columWidth + random.Next(-newBoard.body.width / 3, newBoard.body.width / 3),
				y);

			//确定移动模式
			if (random.Next(0, 1) < boardInfo.GetMoveRate(level)) {
				// 先计算双向移动
				let tempRate = boardInfo.GetMoveAllRate(level);
				let moveAll: boolean = random.Next(0, 1) <= boardInfo.GetMoveAllRate(level);
				let moveH: boolean = moveAll;
				let moveV: boolean = moveAll;
				if (!moveAll) {// 计算单向移动
					if (random.Next(0, 1) < 0.5) {
						moveH = true;
					} else {
						moveV = true;
					}
				}
				if (moveH) {
					let amplitude: number = newBoard.body.width * random.Next(boardInfo.moveLengthRate_Min, boardInfo.moveLengthRate_Max);
					if (moveAll) {
						amplitude = amplitude * 2 / 3;
					}
					newBoard.amplitudeX = random.Next(0, 1) < 0.5 ? amplitude : -amplitude;
				}
				if (moveV) {
					let amplitude: number = newBoard.body.width * random.Next(boardInfo.moveLengthRate_Min, boardInfo.moveLengthRate_Max);
					if (moveAll) {
						amplitude = amplitude * 2 / 3;
					}
					newBoard.amplitudeY = random.Next(0, 1) < 0.5 ? amplitude : -amplitude;
				}
				if (moveH || moveV) {
					newBoard.amplitudeFrameCount = Math.floor(random.Next(boardInfo.moveFrameCount_Min, boardInfo.moveFrameCount_Max));
				}
			}

			return newBoard;
		}

		private GetNewPropType(level: number, rate: number): BattlefieldPropTypeEnum {
			let propType: BattlefieldPropTypeEnum = BattlefieldPropTypeEnum.None;

			let rateMax: number = 0;
			let rates: Lib.List<number> = new Lib.List<number>();

			this.propInfos.ForEach(
				(index: number, value: BattlefieldMapPropInfo) => {
					let tempRate: number = value.GetRate(level);
					rates.Add(tempRate);
					rateMax += tempRate;
				}
			);



if(rate*4.1<1){
let tempIndex:number = Math.floor( rate*BattlefieldPropTypeEnum.COUNT*4.1);

return tempIndex;
		}else{
			return BattlefieldPropTypeEnum.None;
		}

			

			// rate *= rateMax;

			// this.propInfos.ForEach(
			// 	(index: number, value: BattlefieldMapPropInfo) => {
			// 		let tempRate: number = rates.Get(index);
			// 		if (tempRate > rate) {
			// 			propType = value.type;
			// 		} else {
			// 			rate -= tempRate;
			// 		}
			// 	},
			// 	() => {
			// 		return propType != BattlefieldPropTypeEnum.None;
			// 	}
			// );

			// return propType;
		}

		private CreateProp(battlefield: Battlefield, random: Lib.HLRandom, atBoardId: number, level: number): BattlefieldProp {
			let propType: number = this.GetNewPropType(level, random.Next(0, 1));

			let newProp: BattlefieldProp;
			switch (propType) {
				case BattlefieldPropTypeEnum.Feather: {
					let newPropWithType: BattlefieldProp_Feather = BattlefieldProp_Feather.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
					newProp = newPropWithType;
					break;
				}
				case BattlefieldPropTypeEnum.Drinks: {
					let newPropWithType: BattlefieldProp_Drinks = BattlefieldProp_Drinks.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
					newProp = newPropWithType;
					break;
				}
				case BattlefieldPropTypeEnum.Chicken: {
					let newPropWithType: BattlefieldProp_Chicken = BattlefieldProp_Chicken.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
					newProp = newPropWithType;
					break;
				}
				case BattlefieldPropTypeEnum.SpringShoe: {
					let newPropWithType: BattlefieldProp_SpringShoe = BattlefieldProp_SpringShoe.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
					newProp = newPropWithType;
					break;
				}
				case BattlefieldPropTypeEnum.TurtleShell: {
					let newPropWithType: BattlefieldProp_TurtleShell = BattlefieldProp_TurtleShell.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
					newProp = newPropWithType;
					break;
				}
				case BattlefieldPropTypeEnum.TurnBack: {
					let newPropWithType: BattlefieldProp_TurnBack = BattlefieldProp_TurnBack.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
					newProp = newPropWithType;
					break;
				}
				default: {
					newProp = null;
					break;
				}
			}

			return newProp;
		}

		RefreshBoards(battlefield: Battlefield, lastRefreshRowIndex: number, endPos: number//
			, onCreateNewBoard: (newBoard: BattlefieldBoard) => void
			, onCreateNewProp: (newProp: BattlefieldProp) => void
			, onRowIndexChanged: (rowIndex: number) => void): void {

			let startRowIndex: number = Math.max(this.rowIndexMin, lastRefreshRowIndex);
			let endRowIndex: number = Math.ceil(-endPos / this.rowHeight);

			for (let i: number = startRowIndex; i < endRowIndex; i++) {
				let tempPos: number = i * this.rowHeight;
				if (tempPos >= this.height) {
					break;
				}

				let random: Lib.HLRandom = battlefield.random_main;
				random.SetSeed(this.style + i * 10 + battlefield.setting.seed * 10000);

				let level: number = Math.floor(tempPos / battlefield.setting.showHeight);

				let newBoard: BattlefieldBoard = this.CreateBoard(battlefield, random, i, level);
				if (newBoard != null) {
					if (onCreateNewBoard != null) {
						onCreateNewBoard(newBoard);
					}

					let newProp: BattlefieldProp = this.CreateProp(battlefield, random, newBoard.id, level);
					if (newProp != null && onCreateNewProp != null) {
						onCreateNewProp(newProp);
					}
				}

				if (onRowIndexChanged != null) {
					onRowIndexChanged(i);
				}
			}
		}
	}

	export class BattlefieldMapManager {
		maps: Lib.List<BattlefieldMap> = new Lib.List<BattlefieldMap>();

		GetMapIndexByPos(pos: number): number {
			let mapIndex: number = -1;

			this.maps.ForEach(
				(index, value) => {
					if (pos <= value.range.min && pos > value.range.max) {
						mapIndex = index;
					}
				},
				() => {
					return mapIndex >= 0;;
				});

			if (mapIndex < 0) {
				mapIndex = this.maps.Count - 1;
			}

			return mapIndex;
		}

		constructor(showWidth: number, showHeight: number) {
			{
				let map: BattlefieldMap = new BattlefieldMap(showWidth, showHeight, BattlefieldMapStyle.Australia, 5, 3, 17, 20, showWidth / 4, showWidth / 4);

				{
					let newBoardInfo: BattlefieldMapBoardInfo = new BattlefieldMapBoardInfo(BattlefieldBoardTypeEnum.Normal);
					newBoardInfo.SetMove(
						2, 0.3, 0.3,
						2, 0.3, 0.3,
						0.25, 0.5,
						15, 20);
					map.boardInfos.Add(newBoardInfo);
				}

				{
					let newBoardInfo: BattlefieldMapBoardInfo = new BattlefieldMapBoardInfo(BattlefieldBoardTypeEnum.Bubble);
					newBoardInfo.startRate=0.25;
					newBoardInfo.endRate=0.25;
					newBoardInfo.SetMove(
						2, 0.3, 0.3,
						2, 0.3, 0.3,
						0.25, 0.5,
						15, 20);
					map.boardInfos.Add(newBoardInfo);
				}
				
				// map.propInfos.Set();

				this.maps.Add(map);
			}

			{
				let map: BattlefieldMap = new BattlefieldMap(showWidth, showHeight, BattlefieldMapStyle.Europe, 5, 0, 17, 20, showWidth / 4, showWidth / 4 * 0.9);

				{
					let newBoardInfo: BattlefieldMapBoardInfo = new BattlefieldMapBoardInfo(BattlefieldBoardTypeEnum.Normal);
								newBoardInfo.SetMove(
									0, 0.3, 0.3,
									2, 0.3, 0.3,
									0.25, 0.5,
									15, 25);
								map.boardInfos.Add(newBoardInfo);
				}
				
				{
					let newBoardInfo: BattlefieldMapBoardInfo = new BattlefieldMapBoardInfo(BattlefieldBoardTypeEnum.Conveyor);
								newBoardInfo.SetMove(
									0, 0.3, 0.3,
									2, 0.3, 0.3,
									0.25, 0.5,
									15, 25);
								map.boardInfos.Add(newBoardInfo);
				}

				// map.propInfos.Set();

				this.maps.Add(map);
			}

			{
				let map: BattlefieldMap = new BattlefieldMap(showWidth, showHeight, BattlefieldMapStyle.Asia, 4, 0, 17, Number.MAX_VALUE, showWidth / 4 * 0.9, showWidth / 4 * 0.9);

				{
					let newBoardInfo: BattlefieldMapBoardInfo = new BattlefieldMapBoardInfo(BattlefieldBoardTypeEnum.Normal);
								newBoardInfo.SetMove(0, 1, 0.5, Number.MAX_VALUE, 1, 0.5, 0.4, 0.6, 15, 30);
								map.boardInfos.Add(newBoardInfo);
				}

				{
					let newBoardInfo: BattlefieldMapBoardInfo = new BattlefieldMapBoardInfo(BattlefieldBoardTypeEnum.Spring);
								newBoardInfo.SetMove(0, 1, 0.5, Number.MAX_VALUE, 1, 0.5, 0.4, 0.6, 15, 30);
								map.boardInfos.Add(newBoardInfo);
				}
				

				// map.propInfos.Set();

				this.maps.Add(map);
			}

			let curMapStartPos: number = 0;
			this.maps.ForEach((index, value) => {
				let curMapEndPos: number = curMapStartPos - value.height;
				value.range = new Lib.Range(curMapStartPos, curMapEndPos);
				curMapStartPos = curMapEndPos;
			});
		}

		GetBoardType(battlefield: Battlefield, rowIndex: number): BattlefieldBoardTypeEnum {
			return BattlefieldBoardTypeEnum.None;
		}

		GetPropType(battlefield: Battlefield, rowIndex: number): BattlefieldPropTypeEnum {
			return BattlefieldPropTypeEnum.None;
		}

		RefreshBoards(battlefield: Battlefield, lastRefreshMapIndex: number, lastRefreshRowIndex: number, endPos: number//
			, onCreateNewBoard: (newBoard: BattlefieldBoard) => void
			, onCreateNewProp: (newProp: BattlefieldProp) => void
			, onRowIndexChanged: (mapIndex: number, rowIndex: number) => void): void {

			let curMapIndex: number = lastRefreshMapIndex;
			let curRowIndex: number = lastRefreshRowIndex;
			while (true) {
				let map: BattlefieldMap = this.maps.Get(curMapIndex);

				map.RefreshBoards(
					battlefield,
					curRowIndex,
					endPos - map.range.min,
					onCreateNewBoard, onCreateNewProp,
					(rowIndex: number) => {
						if (onRowIndexChanged != null) {
							onRowIndexChanged(curMapIndex, rowIndex);
						}
					});

				if (endPos > map.range.max) {
					break;
				}

				curMapIndex++;
				curRowIndex = 0;
			}
		}
	}
}