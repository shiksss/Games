module DayDayUp {
	export class BattlefieldProp_Drinks extends BattlefieldProp {
		static ClassName: string = "BattlefieldProp_Drinks";
		className: string = BattlefieldProp_Drinks.ClassName;

		get Type(): BattlefieldPropTypeEnum { return BattlefieldPropTypeEnum.Drinks; }

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, atBoardId: number): BattlefieldProp_Drinks {
			let newOne: BattlefieldProp_Drinks = pool == null ? new BattlefieldProp_Drinks() : <BattlefieldProp_Drinks>pool.Get(BattlefieldProp_Drinks.ClassName, () => { return new BattlefieldProp_Drinks(); });

			newOne.Init_Prop(ownerBattlefield, id, atBoardId);

			return newOne;
		}
	}
}