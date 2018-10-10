module DayDayUp {
	export class BattlefieldProp_Feather extends BattlefieldProp {
		static ClassName: string = "BattlefieldProp_Feather";
		className: string = BattlefieldProp_Feather.ClassName;

		get Type(): BattlefieldPropTypeEnum { return BattlefieldPropTypeEnum.Feather; }

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, atBoardId: number): BattlefieldProp_Feather {
			let newOne: BattlefieldProp_Feather = pool == null ? new BattlefieldProp_Feather() : <BattlefieldProp_Feather>pool.Get(BattlefieldProp_Feather.ClassName, () => { return new BattlefieldProp_Feather(); });

			newOne.Init_Prop(ownerBattlefield, id, atBoardId);

			return newOne;
		}
	}
}