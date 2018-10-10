module DayDayUp {
	export class BattlefieldBoard_Marsh extends BattlefieldBoard {
		static ClassName: string = "BattlefieldBoard_Marsh";
		className: string = BattlefieldBoard_Marsh.ClassName;

		get Type(): BattlefieldBoardTypeEnum { return BattlefieldBoardTypeEnum.Marsh; }

		GetGroundOffsetMax(): number {
			return this.ownerBattlefield.setting.groundOffsetMax_Marsh;
		}

		GetGroundOffsetPerFrame(): number {
			return this.ownerBattlefield.setting.groundOffsetPerFrame_Marsh;
		}

		GetPlayerRunSpeedRate(): number {
			return 0.9;
		}

		GetPlayerJumpSpeedRate(): number {
			return 0.9;
		}

		GetPlayerSuperJumpSpeedRate(): number {
			return 0.9;
		}

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, faceToRight: boolean, bodyWidth: number, bodyHeight: number, style: BattlefieldMapStyle): BattlefieldBoard_Marsh {
			let newOne: BattlefieldBoard_Marsh = pool == null ? new BattlefieldBoard_Marsh() : <BattlefieldBoard_Marsh>pool.Get(BattlefieldBoard_Marsh.ClassName, () => { return new BattlefieldBoard_Marsh(); });

			newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);

			return newOne;
		}
	}
}