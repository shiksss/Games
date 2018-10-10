var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DayDayUp;
(function (DayDayUp) {
    var BattlefieldMapStyle;
    (function (BattlefieldMapStyle) {
        BattlefieldMapStyle[BattlefieldMapStyle["None"] = -1] = "None";
        BattlefieldMapStyle[BattlefieldMapStyle["Asia"] = 0] = "Asia";
        BattlefieldMapStyle[BattlefieldMapStyle["Australia"] = 1] = "Australia";
        BattlefieldMapStyle[BattlefieldMapStyle["Europe"] = 2] = "Europe";
        BattlefieldMapStyle[BattlefieldMapStyle["Antarctica"] = 3] = "Antarctica";
        BattlefieldMapStyle[BattlefieldMapStyle["NorthAmerica"] = 4] = "NorthAmerica";
        BattlefieldMapStyle[BattlefieldMapStyle["SouthAmerica"] = 5] = "SouthAmerica";
        BattlefieldMapStyle[BattlefieldMapStyle["Moon"] = 6] = "Moon";
        BattlefieldMapStyle[BattlefieldMapStyle["COUNT"] = 7] = "COUNT";
    })(BattlefieldMapStyle = DayDayUp.BattlefieldMapStyle || (DayDayUp.BattlefieldMapStyle = {}));
    var BattlefieldMapBoardInfo = (function () {
        function BattlefieldMapBoardInfo(type) {
            this.type = DayDayUp.BattlefieldBoardTypeEnum.Normal;
            this.startLevel = 0; //起始层数
            this.startRate = 1; //占比
            this.endLevel = Number.MAX_VALUE; //起始层数
            this.endRate = 1; //占比
            this.moveStartLevel = 0; //起始层数
            this.moveStartRate = 0; //占比
            this.moveStartRate_All = 0; //占比
            this.moveEndLevel = 0; //起始层数
            this.moveEndRate = 0; //占比
            this.moveEndRate_All = 0; //占比
            this.moveLengthRate_Min = 0; //占比
            this.moveLengthRate_Max = 0; //占比
            this.moveFrameCount_Min = 0; //占比
            this.moveFrameCount_Max = 0; //占比
            this.type = type;
        }
        BattlefieldMapBoardInfo.prototype.SetMove = function (moveStartLevel, moveStartRate, moveStartRate_All, moveEndLevel, moveEndRate, moveEndRate_All, moveLengthRate_Min, moveLengthRate_Max, moveFrameCount_Min, moveFrameCount_Max) {
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
        };
        BattlefieldMapBoardInfo.prototype.GetRate = function (level) {
            if (level < this.startLevel || level > this.endLevel) {
                return 0;
            }
            if (this.endLevel == this.startLevel || this.endRate == this.startRate) {
                return this.startRate;
            }
            return this.startRate + (this.endRate - this.startRate) * (level - this.startLevel) / (this.endLevel - this.startLevel);
        };
        BattlefieldMapBoardInfo.prototype.GetMoveRate = function (level) {
            if (level < this.moveStartLevel || level > this.moveEndLevel) {
                return 0;
            }
            if (this.moveEndLevel == this.moveStartLevel || this.moveEndRate == this.moveStartRate) {
                return this.moveStartRate;
            }
            return this.moveStartRate + (this.moveEndRate - this.moveStartRate) * (level - this.moveStartLevel) / (this.moveEndLevel - this.moveStartLevel);
        };
        BattlefieldMapBoardInfo.prototype.GetMoveAllRate = function (level) {
            if (level < this.moveStartLevel || level > this.moveEndLevel) {
                return 0;
            }
            if (this.moveEndLevel == this.moveStartLevel || this.moveEndRate_All == this.moveStartRate_All) {
                return this.moveStartRate_All;
            }
            return this.moveStartRate_All + (this.moveEndRate_All - this.moveStartRate_All) * (level - this.moveStartLevel) / (this.moveEndLevel - this.moveStartLevel);
        };
        return BattlefieldMapBoardInfo;
    }());
    DayDayUp.BattlefieldMapBoardInfo = BattlefieldMapBoardInfo;
    __reflect(BattlefieldMapBoardInfo.prototype, "DayDayUp.BattlefieldMapBoardInfo");
    var BattlefieldMapPropInfo = (function () {
        function BattlefieldMapPropInfo() {
        }
        BattlefieldMapPropInfo.prototype.GetRate = function (level) {
            if (level < this.startLevel || level > this.endLevel) {
                return 0;
            }
            if (this.endLevel == this.startLevel || this.endRate == this.startRate) {
                return this.startRate;
            }
            return this.startRate + (this.endRate - this.startRate) * (level - this.startLevel) / (this.endLevel - this.startLevel);
        };
        return BattlefieldMapPropInfo;
    }());
    DayDayUp.BattlefieldMapPropInfo = BattlefieldMapPropInfo;
    __reflect(BattlefieldMapPropInfo.prototype, "DayDayUp.BattlefieldMapPropInfo");
    var BattlefieldMap = (function () {
        function BattlefieldMap(showWidth, showHeight, style, columCount, rowIndexMin, levelRowCount, levelCount, boardWidth_Min, boardWidth_Max) {
            this.columCount = 4; // 列數
            this.columIndexes = new Array();
            this.boardInfos = new Lib.List();
            this.propInfos = new Lib.List();
            this.style = style;
            this.columCount = columCount;
            this.columWidth = showWidth / this.columCount;
            this.rowIndexMin = rowIndexMin;
            this.rowHeight = showHeight / levelRowCount;
            this.height = Math.ceil(showHeight * levelCount / this.rowHeight) * this.rowHeight;
            this.boardWidth_Min = boardWidth_Min;
            this.boardWidth_Max = boardWidth_Max;
            var tempColumIndex = 1;
            for (var i = 0; i < this.columCount; i++) {
                this.columIndexes.push(tempColumIndex);
                tempColumIndex += 2;
                if (tempColumIndex >= this.columCount) {
                    tempColumIndex = 0;
                }
            }
        }
        BattlefieldMap.prototype.GetBoardWidth = function (rate) {
            return this.boardWidth_Min + (this.boardWidth_Max - this.boardWidth_Min) * rate;
        };
        Object.defineProperty(BattlefieldMap.prototype, "DefaultBoardInfo", {
            get: function () { return this.boardInfos.Count <= 0 ? null : this.boardInfos.Get(0); },
            enumerable: true,
            configurable: true
        });
        ; //默认板类型
        BattlefieldMap.prototype.GetNewBoardInfo = function (level, rate) {
            var boardInfo = null;
            var rateMax = 0;
            var rates = new Lib.List();
            this.boardInfos.ForEach(function (index, value) {
                var tempRate = value.GetRate(level);
                rates.Add(tempRate);
                rateMax += tempRate;
            });
            rate *= rateMax;
            this.boardInfos.ForEach(function (index, value) {
                var tempRate = rates.Get(index);
                if (tempRate > rate) {
                    boardInfo = value;
                }
                else {
                    rate -= tempRate;
                }
            }, function () {
                return boardInfo != null;
            });
            return boardInfo == null ? this.DefaultBoardInfo : boardInfo;
        };
        BattlefieldMap.prototype.CreateBoard = function (battlefield, random, rowIndex, level) {
            var columIndex = this.columIndexes[rowIndex % this.columCount];
            //根据配置确定板类型
            var boardInfo = this.GetNewBoardInfo(level, random.Next(0, 1));
            if (boardInfo.type == DayDayUp.BattlefieldBoardTypeEnum.None) {
                return null;
            }
            var newBoard;
            var newBoardId = this.style + rowIndex * 10;
            var faceToRight = random.Next(0, 1) < 0.5; // 随机方向
            var y = -this.rowHeight * rowIndex + this.range.min;
            var boardWidth = this.GetBoardWidth(Math.min(-y / this.height, 1));
            var boardHeight = boardWidth * 0.0001;
            switch (boardInfo.type) {
                case DayDayUp.BattlefieldBoardTypeEnum.Bubble: {
                    var newBoardWithType = DayDayUp.BattlefieldBoard_Bubble.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
                    newBoard = newBoardWithType;
                    break;
                }
                case DayDayUp.BattlefieldBoardTypeEnum.Conveyor: {
                    var newBoardWithType = DayDayUp.BattlefieldBoard_Conveyor.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
                    newBoard = newBoardWithType;
                    break;
                }
                case DayDayUp.BattlefieldBoardTypeEnum.Ice: {
                    var newBoardWithType = DayDayUp.BattlefieldBoard_Ice.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
                    newBoard = newBoardWithType;
                    break;
                }
                case DayDayUp.BattlefieldBoardTypeEnum.Marsh: {
                    var newBoardWithType = DayDayUp.BattlefieldBoard_Marsh.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
                    newBoard = newBoardWithType;
                    break;
                }
                case DayDayUp.BattlefieldBoardTypeEnum.Quicksand: {
                    var newBoardWithType = DayDayUp.BattlefieldBoard_Quicksand.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
                    newBoard = newBoardWithType;
                    break;
                }
                case DayDayUp.BattlefieldBoardTypeEnum.Spring: {
                    var newBoardWithType = DayDayUp.BattlefieldBoard_Spring.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
                    newBoard = newBoardWithType;
                    break;
                }
                case DayDayUp.BattlefieldBoardTypeEnum.Normal: {
                    var newBoardWithType = DayDayUp.BattlefieldBoard_Normal.New(battlefield.objectPool, battlefield, newBoardId, faceToRight, boardWidth, boardHeight, this.style);
                    newBoard = newBoardWithType;
                    break;
                }
            }
            newBoard.SetStartPos((columIndex + 0.5) * this.columWidth + random.Next(-newBoard.body.width / 3, newBoard.body.width / 3), y);
            //确定移动模式
            if (random.Next(0, 1) < boardInfo.GetMoveRate(level)) {
                // 先计算双向移动
                var tempRate = boardInfo.GetMoveAllRate(level);
                var moveAll = random.Next(0, 1) <= boardInfo.GetMoveAllRate(level);
                var moveH = moveAll;
                var moveV = moveAll;
                if (!moveAll) {
                    if (random.Next(0, 1) < 0.5) {
                        moveH = true;
                    }
                    else {
                        moveV = true;
                    }
                }
                if (moveH) {
                    var amplitude = newBoard.body.width * random.Next(boardInfo.moveLengthRate_Min, boardInfo.moveLengthRate_Max);
                    if (moveAll) {
                        amplitude = amplitude * 2 / 3;
                    }
                    newBoard.amplitudeX = random.Next(0, 1) < 0.5 ? amplitude : -amplitude;
                }
                if (moveV) {
                    var amplitude = newBoard.body.width * random.Next(boardInfo.moveLengthRate_Min, boardInfo.moveLengthRate_Max);
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
        };
        BattlefieldMap.prototype.GetNewPropType = function (level, rate) {
            var propType = DayDayUp.BattlefieldPropTypeEnum.None;
            var rateMax = 0;
            var rates = new Lib.List();
            this.propInfos.ForEach(function (index, value) {
                var tempRate = value.GetRate(level);
                rates.Add(tempRate);
                rateMax += tempRate;
            });
            if (rate * 4.1 < 1) {
                var tempIndex = Math.floor(rate * DayDayUp.BattlefieldPropTypeEnum.COUNT * 4.1);
                return tempIndex;
            }
            else {
                return DayDayUp.BattlefieldPropTypeEnum.None;
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
        };
        BattlefieldMap.prototype.CreateProp = function (battlefield, random, atBoardId, level) {
            var propType = this.GetNewPropType(level, random.Next(0, 1));
            var newProp;
            switch (propType) {
                case DayDayUp.BattlefieldPropTypeEnum.Feather: {
                    var newPropWithType = DayDayUp.BattlefieldProp_Feather.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
                    newProp = newPropWithType;
                    break;
                }
                case DayDayUp.BattlefieldPropTypeEnum.Drinks: {
                    var newPropWithType = DayDayUp.BattlefieldProp_Drinks.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
                    newProp = newPropWithType;
                    break;
                }
                case DayDayUp.BattlefieldPropTypeEnum.Chicken: {
                    var newPropWithType = DayDayUp.BattlefieldProp_Chicken.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
                    newProp = newPropWithType;
                    break;
                }
                case DayDayUp.BattlefieldPropTypeEnum.SpringShoe: {
                    var newPropWithType = DayDayUp.BattlefieldProp_SpringShoe.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
                    newProp = newPropWithType;
                    break;
                }
                case DayDayUp.BattlefieldPropTypeEnum.TurtleShell: {
                    var newPropWithType = DayDayUp.BattlefieldProp_TurtleShell.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
                    newProp = newPropWithType;
                    break;
                }
                case DayDayUp.BattlefieldPropTypeEnum.TurnBack: {
                    var newPropWithType = DayDayUp.BattlefieldProp_TurnBack.New(battlefield.objectPool, battlefield, atBoardId, atBoardId);
                    newProp = newPropWithType;
                    break;
                }
                default: {
                    newProp = null;
                    break;
                }
            }
            return newProp;
        };
        BattlefieldMap.prototype.RefreshBoards = function (battlefield, lastRefreshRowIndex, endPos //
            , onCreateNewBoard, onCreateNewProp, onRowIndexChanged) {
            var startRowIndex = Math.max(this.rowIndexMin, lastRefreshRowIndex);
            var endRowIndex = Math.ceil(-endPos / this.rowHeight);
            for (var i = startRowIndex; i < endRowIndex; i++) {
                var tempPos = i * this.rowHeight;
                if (tempPos >= this.height) {
                    break;
                }
                var random = battlefield.random_main;
                random.SetSeed(this.style + i * 10 + battlefield.setting.seed * 10000);
                var level = Math.floor(tempPos / battlefield.setting.showHeight);
                var newBoard = this.CreateBoard(battlefield, random, i, level);
                if (newBoard != null) {
                    if (onCreateNewBoard != null) {
                        onCreateNewBoard(newBoard);
                    }
                    var newProp = this.CreateProp(battlefield, random, newBoard.id, level);
                    if (newProp != null && onCreateNewProp != null) {
                        onCreateNewProp(newProp);
                    }
                }
                if (onRowIndexChanged != null) {
                    onRowIndexChanged(i);
                }
            }
        };
        return BattlefieldMap;
    }());
    DayDayUp.BattlefieldMap = BattlefieldMap;
    __reflect(BattlefieldMap.prototype, "DayDayUp.BattlefieldMap");
    var BattlefieldMapManager = (function () {
        function BattlefieldMapManager(showWidth, showHeight) {
            this.maps = new Lib.List();
            {
                var map = new BattlefieldMap(showWidth, showHeight, BattlefieldMapStyle.Australia, 5, 3, 17, 20, showWidth / 4, showWidth / 4);
                {
                    var newBoardInfo = new BattlefieldMapBoardInfo(DayDayUp.BattlefieldBoardTypeEnum.Normal);
                    newBoardInfo.SetMove(2, 0.3, 0.3, 2, 0.3, 0.3, 0.25, 0.5, 15, 20);
                    map.boardInfos.Add(newBoardInfo);
                }
                {
                    var newBoardInfo = new BattlefieldMapBoardInfo(DayDayUp.BattlefieldBoardTypeEnum.Bubble);
                    newBoardInfo.startRate = 0.25;
                    newBoardInfo.endRate = 0.25;
                    newBoardInfo.SetMove(2, 0.3, 0.3, 2, 0.3, 0.3, 0.25, 0.5, 15, 20);
                    map.boardInfos.Add(newBoardInfo);
                }
                // map.propInfos.Set();
                this.maps.Add(map);
            }
            {
                var map = new BattlefieldMap(showWidth, showHeight, BattlefieldMapStyle.Europe, 5, 0, 17, 20, showWidth / 4, showWidth / 4 * 0.9);
                {
                    var newBoardInfo = new BattlefieldMapBoardInfo(DayDayUp.BattlefieldBoardTypeEnum.Normal);
                    newBoardInfo.SetMove(0, 0.3, 0.3, 2, 0.3, 0.3, 0.25, 0.5, 15, 25);
                    map.boardInfos.Add(newBoardInfo);
                }
                {
                    var newBoardInfo = new BattlefieldMapBoardInfo(DayDayUp.BattlefieldBoardTypeEnum.Conveyor);
                    newBoardInfo.SetMove(0, 0.3, 0.3, 2, 0.3, 0.3, 0.25, 0.5, 15, 25);
                    map.boardInfos.Add(newBoardInfo);
                }
                // map.propInfos.Set();
                this.maps.Add(map);
            }
            {
                var map = new BattlefieldMap(showWidth, showHeight, BattlefieldMapStyle.Asia, 4, 0, 17, Number.MAX_VALUE, showWidth / 4 * 0.9, showWidth / 4 * 0.9);
                {
                    var newBoardInfo = new BattlefieldMapBoardInfo(DayDayUp.BattlefieldBoardTypeEnum.Normal);
                    newBoardInfo.SetMove(0, 1, 0.5, Number.MAX_VALUE, 1, 0.5, 0.4, 0.6, 15, 30);
                    map.boardInfos.Add(newBoardInfo);
                }
                {
                    var newBoardInfo = new BattlefieldMapBoardInfo(DayDayUp.BattlefieldBoardTypeEnum.Spring);
                    newBoardInfo.SetMove(0, 1, 0.5, Number.MAX_VALUE, 1, 0.5, 0.4, 0.6, 15, 30);
                    map.boardInfos.Add(newBoardInfo);
                }
                // map.propInfos.Set();
                this.maps.Add(map);
            }
            var curMapStartPos = 0;
            this.maps.ForEach(function (index, value) {
                var curMapEndPos = curMapStartPos - value.height;
                value.range = new Lib.Range(curMapStartPos, curMapEndPos);
                curMapStartPos = curMapEndPos;
            });
        }
        BattlefieldMapManager.prototype.GetMapIndexByPos = function (pos) {
            var mapIndex = -1;
            this.maps.ForEach(function (index, value) {
                if (pos <= value.range.min && pos > value.range.max) {
                    mapIndex = index;
                }
            }, function () {
                return mapIndex >= 0;
                ;
            });
            if (mapIndex < 0) {
                mapIndex = this.maps.Count - 1;
            }
            return mapIndex;
        };
        BattlefieldMapManager.prototype.GetBoardType = function (battlefield, rowIndex) {
            return DayDayUp.BattlefieldBoardTypeEnum.None;
        };
        BattlefieldMapManager.prototype.GetPropType = function (battlefield, rowIndex) {
            return DayDayUp.BattlefieldPropTypeEnum.None;
        };
        BattlefieldMapManager.prototype.RefreshBoards = function (battlefield, lastRefreshMapIndex, lastRefreshRowIndex, endPos //
            , onCreateNewBoard, onCreateNewProp, onRowIndexChanged) {
            var curMapIndex = lastRefreshMapIndex;
            var curRowIndex = lastRefreshRowIndex;
            while (true) {
                var map = this.maps.Get(curMapIndex);
                map.RefreshBoards(battlefield, curRowIndex, endPos - map.range.min, onCreateNewBoard, onCreateNewProp, function (rowIndex) {
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
        };
        return BattlefieldMapManager;
    }());
    DayDayUp.BattlefieldMapManager = BattlefieldMapManager;
    __reflect(BattlefieldMapManager.prototype, "DayDayUp.BattlefieldMapManager");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldMapManager.js.map