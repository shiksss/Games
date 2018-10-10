module DayDayUp {
	export class BattlefieldBoard_Spring extends BattlefieldBoard {
		static ClassName: string = "BattlefieldBoard_Spring";
		className: string = BattlefieldBoard_Spring.ClassName;

		get Type(): BattlefieldBoardTypeEnum { return BattlefieldBoardTypeEnum.Spring; }
		
		GetPlayerJumpSpeedRate(): number {
			return 2;
		}

		GetPlayerSuperJumpSpeedRate(): number {
			return 2;
		}

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, faceToRight: boolean, bodyWidth: number, bodyHeight: number, style: BattlefieldMapStyle): BattlefieldBoard_Spring {
			let newOne: BattlefieldBoard_Spring = pool == null ? new BattlefieldBoard_Spring() : <BattlefieldBoard_Spring>pool.Get(BattlefieldBoard_Spring.ClassName, () => { return new BattlefieldBoard_Spring(); });

			newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);

			return newOne;
		}
	}
}