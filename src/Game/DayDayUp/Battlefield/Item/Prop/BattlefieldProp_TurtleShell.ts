module DayDayUp {
	export class BattlefieldProp_TurtleShell extends BattlefieldProp {
		static ClassName: string = "BattlefieldProp_TurtleShell";
		className: string = BattlefieldProp_TurtleShell.ClassName;

		get Type(): BattlefieldPropTypeEnum { return BattlefieldPropTypeEnum.TurtleShell; }

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, atBoardId: number): BattlefieldProp_TurtleShell {
			let newOne: BattlefieldProp_TurtleShell = pool == null ? new BattlefieldProp_TurtleShell() : <BattlefieldProp_TurtleShell>pool.Get(BattlefieldProp_TurtleShell.ClassName, () => { return new BattlefieldProp_TurtleShell(); });

			newOne.Init_Prop(ownerBattlefield, id, atBoardId);

			return newOne;
		}
	}
}