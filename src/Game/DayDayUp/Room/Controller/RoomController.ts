module DayDayUp {
	export abstract class RoomController extends Lib.GameObjectComponent {
		stageBattlefieldController: StageBattlefieldController;

		onEnd: () => void;
		protected OnEnd(): void { if (this.onEnd != null) this.onEnd(); }

		protected Init(stageBattlefieldController: StageBattlefieldController): void {
			this.stageBattlefieldController = stageBattlefieldController;
		}

		Release(): void {
			this.stageBattlefieldController = null;

			super.Release();
		}
	}
}