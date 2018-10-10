module DayDayUp {
	export class BattlefieldBoard_Normal extends BattlefieldBoard {
		static ClassName: string = "BattlefieldBoard_Normal";
		className: string = BattlefieldBoard_Normal.ClassName;

		get Type(): BattlefieldBoardTypeEnum { return BattlefieldBoardTypeEnum.Normal; }

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, faceToRight: boolean, bodyWidth: number, bodyHeight: number, style: BattlefieldMapStyle): BattlefieldBoard_Normal {
			let newOne: BattlefieldBoard_Normal = pool == null ? new BattlefieldBoard_Normal() : <BattlefieldBoard_Normal>pool.Get(BattlefieldBoard_Normal.ClassName, () => { return new BattlefieldBoard_Normal(); });

			newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);

			return newOne;
		}
	}
}