module DayDayUp {
	export abstract class StageBattlefieldBoard extends StageBattlefieldItem {
		get Board(): BattlefieldBoard {
			return this.data as BattlefieldBoard;
		}

		WhenTrampled(player: StageBattlefieldPlayer): void {
			let steps: Lib.Command_Steps = Lib.Command_Steps.New(this.ownerComponentManager.pool, false, null);

			this.rootGameObject.y = 10;
			steps.Add(Lib.Command_LocalPosition.New(this.ownerComponentManager.pool, this.rootGameObject, this.rootGameObject.x, this.rootGameObject.y, this.rootGameObject.x, 0, 0.1, 2, false, null));

			this.commands.Add(steps);
		}
	}
}