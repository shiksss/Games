module DayDayUp {
	export class BattlefieldBoard_Ground extends BattlefieldBoard {
		static ClassName: string = "BattlefieldBoard_Ground";
		className: string = BattlefieldBoard_Ground.ClassName;

		get Type(): BattlefieldBoardTypeEnum { return BattlefieldBoardTypeEnum.Ground; }

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, faceToRight: boolean): BattlefieldBoard_Ground {
			let newOne: BattlefieldBoard_Ground = pool == null ? new BattlefieldBoard_Ground() : <BattlefieldBoard_Ground>pool.Get(BattlefieldBoard_Ground.ClassName, () => { return new BattlefieldBoard_Ground(); });

			newOne.Init_Board_Ground(ownerBattlefield, id, faceToRight);

			return newOne;
		}

		protected Init_Board_Ground(ownerBattlefield: Battlefield, id: number, faceToRight: boolean): void {
			super.Init_Board(ownerBattlefield, id, faceToRight, ownerBattlefield.setting.showWidth, 0.6, BattlefieldMapStyle.None);
		}
	}
}