module DayDayUp {
	export enum BattlefieldBoardTypeEnum {
		None = -1,
		Normal,//平板
		Bubble,//泡泡
		Conveyor,//传送带
		Ground,//地面
		Ice,//冰面
		Marsh,//沼泽
		Quicksand,//流沙
		Spring,//弹簧板
		COUNT
	};

	export abstract class BattlefieldBoard extends BattlefieldItem {
		get Type(): BattlefieldBoardTypeEnum { return BattlefieldBoardTypeEnum.None; }

		startX: number = 0;
		startY: number = 0;

		amplitudeX: number = 0;//横向最大偏移
		amplitudeY: number = 0;//纵向最大偏移

		amplitudeFrameCount: number = 0;//从原点到最大偏移帧数

		style: BattlefieldMapStyle;

		SetStartPos(startX: number, startY: number) {
			this.startX = startX;
			this.startY = startY;

			this.x = this.startX;
			this.y = this.startY;

			this.lastX = this.startX;
			this.lastY = this.startY;
		}

		GetGroundOffsetMax(): number {
			return 0;
		}

		GetGroundOffsetPerFrame(): number {
			return 0;
		}

		GetGroundSpeed(): number {
			return 0;
		}

		GetPlayerRunSpeedRate(): number {
			return 1;
		}

		GetPlayerJumpSpeedRate(): number {
			return 1;
		}

		GetPlayerSuperJumpSpeedRate(): number {
			return 1;
		}

		protected Init_Board(ownerBattlefield: Battlefield, id: number, faceToRight: boolean, bodyWidth: number, bodyHeight: number, style: BattlefieldMapStyle): void {
			super.Init(ownerBattlefield, id, faceToRight);

			this.style = style;

			this.body.setTo(-bodyWidth * 0.5, 0, bodyWidth, bodyHeight);

			this.amplitudeX = 0;//横向最大偏移
			this.amplitudeY = 0;//纵向最大偏移
			this.amplitudeFrameCount = 0;
		}

		public Update(): void {
			super.Update();

			if (this.amplitudeFrameCount > 0) {
				this.x = this.startX + Math.sin(this.ownerBattlefield.finishedFrameCount / this.amplitudeFrameCount) * this.amplitudeX;
				this.y = this.startY + Math.sin(this.ownerBattlefield.finishedFrameCount / this.amplitudeFrameCount) * this.amplitudeY;
			}

			//向下出2/3屏后删除
			if (this.y >= this.ownerBattlefield.curBottomPos + this.ownerBattlefield.setting.showHeight * 0.5) {
				this.needRemoved = true;
			}
		}
	}
}