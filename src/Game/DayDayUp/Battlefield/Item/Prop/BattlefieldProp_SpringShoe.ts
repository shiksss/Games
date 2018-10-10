module DayDayUp {
	export class BattlefieldProp_SpringShoe extends BattlefieldProp {
		static ClassName: string = "BattlefieldProp_SpringShoe";
		className: string = BattlefieldProp_SpringShoe.ClassName;

		get Type(): BattlefieldPropTypeEnum { return BattlefieldPropTypeEnum.SpringShoe; }

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, atBoardId: number): BattlefieldProp_SpringShoe {
			let newOne: BattlefieldProp_SpringShoe = pool == null ? new BattlefieldProp_SpringShoe() : <BattlefieldProp_SpringShoe>pool.Get(BattlefieldProp_SpringShoe.ClassName, () => { return new BattlefieldProp_SpringShoe(); });

			newOne.Init_Prop(ownerBattlefield, id, atBoardId);

			return newOne;
		}
	}
}