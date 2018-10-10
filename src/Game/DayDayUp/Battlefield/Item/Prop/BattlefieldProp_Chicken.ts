module DayDayUp {
	export class BattlefieldProp_Chicken extends BattlefieldProp {
		static ClassName: string = "BattlefieldProp_Chicken";
		className: string = BattlefieldProp_Chicken.ClassName;

		get Type(): BattlefieldPropTypeEnum { return BattlefieldPropTypeEnum.Chicken; }

		TouchPlayer(player: BattlefieldPlayer): void {
			super.TouchPlayer(player);

			player.curSuperForce += player.ownerBattlefield.setting.prop_SuperForce_Chicken;
			if (player.curSuperForce > player.ownerBattlefield.setting.superForceMax) {
				player.curSuperForce = player.ownerBattlefield.setting.superForceMax
			}
		}

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, atBoardId: number): BattlefieldProp_Chicken {
			let newOne: BattlefieldProp_Chicken = pool == null ? new BattlefieldProp_Chicken() : <BattlefieldProp_Chicken>pool.Get(BattlefieldProp_Chicken.ClassName, () => { return new BattlefieldProp_Chicken(); });

			newOne.Init_Prop(ownerBattlefield, id, atBoardId);

			return newOne;
		}
	}
}