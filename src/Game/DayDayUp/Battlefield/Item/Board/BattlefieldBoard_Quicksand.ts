module DayDayUp {
	export class BattlefieldBoard_Quicksand extends BattlefieldBoard {
		static ClassName: string = "BattlefieldBoard_Quicksand";
		className: string = BattlefieldBoard_Quicksand.ClassName;

		get Type(): BattlefieldBoardTypeEnum { return BattlefieldBoardTypeEnum.Quicksand; }

		GetPlayerRunSpeedRate(): number {
			return 0.95;
		}

		GetPlayerJumpSpeedRate(): number {
			return 0.95;
		}

		GetPlayerSuperJumpSpeedRate(): number {
			return 0.95;
		}

		leftLifeFrameCount: number;

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, faceToRight: boolean, bodyWidth: number, bodyHeight: number, style: BattlefieldMapStyle): BattlefieldBoard_Quicksand {
			let newOne: BattlefieldBoard_Quicksand = pool == null ? new BattlefieldBoard_Quicksand() : <BattlefieldBoard_Quicksand>pool.Get(BattlefieldBoard_Quicksand.ClassName, () => { return new BattlefieldBoard_Quicksand(); });

			newOne.Init_Board_Quicksand(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);

			return newOne;
		}

		protected Init_Board_Quicksand(ownerBattlefield: Battlefield, id: number, faceToRight: boolean, bodyWidth: number, bodyHeight: number, style: BattlefieldMapStyle): void {
			super.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);

			this.leftLifeFrameCount = this.ownerBattlefield.setting.lifeFrameCount_Quicksand;
		}

		public Update(): void {
			super.Update();

			this.ownerBattlefield.players.ForEach((key: any, value: BattlefieldPlayer) => {
				if (!this.needRemoved && value.AtBoardId == this.id) {
					if (this.leftLifeFrameCount <= 0) {
						this.needRemoved = true;
					} else {
						this.leftLifeFrameCount -= value.ElapseLifePerFrame_Quicksand;
					}
				}
			});
		}
	}
}