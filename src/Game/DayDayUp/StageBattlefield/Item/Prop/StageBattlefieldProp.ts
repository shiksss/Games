module DayDayUp {
	export abstract class StageBattlefieldProp extends StageBattlefieldItem {
		get Scale(): number {
			return 2;
		}

		get Prop(): BattlefieldProp {
			return this.data as BattlefieldProp;
		}
	}
}