module DayDayUp {
	export class BattlefieldBoard_Conveyor extends BattlefieldBoard {
		static ClassName: string = "BattlefieldBoard_Conveyor";
		className: string = BattlefieldBoard_Conveyor.ClassName;
		
		get Type(): BattlefieldBoardTypeEnum { return BattlefieldBoardTypeEnum.Conveyor; }

		GetGroundSpeed(): number {
			return this.ownerBattlefield.setting.runSpeed * 0.5 * (this.faceToRight ? 1 : -1);
		}

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, faceToRight: boolean, bodyWidth: number, bodyHeight: number, style: BattlefieldMapStyle): BattlefieldBoard_Conveyor {
			let newOne: BattlefieldBoard_Conveyor = pool == null ? new BattlefieldBoard_Conveyor() : <BattlefieldBoard_Conveyor>pool.Get(BattlefieldBoard_Conveyor.ClassName, () => { return new BattlefieldBoard_Conveyor(); });

			newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);

			return newOne;
		}
	}
}