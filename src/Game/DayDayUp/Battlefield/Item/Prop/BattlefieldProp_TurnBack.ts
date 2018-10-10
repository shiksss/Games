module DayDayUp {
	export class BattlefieldProp_TurnBack extends BattlefieldProp {
		static ClassName: string = "BattlefieldProp_TurnBack";
		className: string = BattlefieldProp_TurnBack.ClassName;

		get Type(): BattlefieldPropTypeEnum { return BattlefieldPropTypeEnum.TurnBack; }
		
		TouchPlayer(player: BattlefieldPlayer): void {
			super.TouchPlayer(player);

			player.faceToRight = !player.faceToRight;
		}

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, atBoardId: number): BattlefieldProp_TurnBack {
			let newOne: BattlefieldProp_TurnBack = pool == null ? new BattlefieldProp_TurnBack() : <BattlefieldProp_TurnBack>pool.Get(BattlefieldProp_TurnBack.ClassName, () => { return new BattlefieldProp_TurnBack(); });

			newOne.Init_Prop(ownerBattlefield, id, atBoardId);

			return newOne;
		}
	}
}