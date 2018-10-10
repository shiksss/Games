module DayDayUp {
	export class BattlefieldBoard_Ice extends BattlefieldBoard {
		static ClassName: string = "BattlefieldBoard_Ice";
		className: string = BattlefieldBoard_Ice.ClassName;

		get Type(): BattlefieldBoardTypeEnum { return BattlefieldBoardTypeEnum.Ice; }

		GetPlayerRunSpeedRate(): number {
			return 1.5;
		}

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, faceToRight: boolean, bodyWidth: number, bodyHeight: number, style: BattlefieldMapStyle): BattlefieldBoard_Ice {
			let newOne: BattlefieldBoard_Ice = pool == null ? new BattlefieldBoard_Ice() : <BattlefieldBoard_Ice>pool.Get(BattlefieldBoard_Ice.ClassName, () => { return new BattlefieldBoard_Ice(); });

			newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);

			return newOne;
		}
	}
}