module Lib {
	export abstract class GameObjectComponent extends PoolableObj {
		ownerComponentManager: GameObjectComponentManager;

		enabled: boolean = true;

		get GameObject(): GameObject { return this.ownerComponentManager == null ? null : this.ownerComponentManager.gameObject; }

		Start(): void { }

		Update(): void { }

		Release(): void {
			this.ownerComponentManager = null;

			super.Release();
		}
	}
}