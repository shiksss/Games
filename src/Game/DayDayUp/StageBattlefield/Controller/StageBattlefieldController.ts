module DayDayUp {
	export abstract class StageBattlefieldController extends Lib.GameObjectComponent {
		stageBattlefield: StageBattlefield;

		startTime: number = 0;

		Init(stageBattlefield: StageBattlefield): void {
			this.stageBattlefield = stageBattlefield;

			this.startTime = 0;
		}

		Release(): void {
			this.stageBattlefield = null;

			super.Release();
		}

		Start(): void {
			super.Start();

			this.startTime = egret.getTimer() / 1000;
		}
	}
}