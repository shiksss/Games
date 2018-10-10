module Lib {
	export class GameObjectComponentManager extends PoolableObj {
		static ClassName: string = "GameObjectComponentManager";
		className: string = GameObjectComponentManager.ClassName;

		gameObject: GameObject;

		private components: List<GameObjectComponent> = new List<GameObjectComponent>();

		static New(pool: ObjectPool, gameObject: GameObject): GameObjectComponentManager {
			let newOne: GameObjectComponentManager = pool == null ? new GameObjectComponentManager() : <GameObjectComponentManager>pool.Get(GameObjectComponentManager.ClassName, () => { return new GameObjectComponentManager(); });

			newOne.Init(gameObject);

			return newOne;
		}

		Init(gameObject: GameObject): void {
			this.gameObject = gameObject;
		}

		Release(): void {
			this.components.ForEach((index: number, component: GameObjectComponent) => {
				component.Release();
			});

			this.components.Clear();

			this.gameObject = null;

			super.Release();
		}

		Get(type: string): GameObjectComponent {
			this.components.ForEach((index: number, component: GameObjectComponent) => {
				if (typeof component == type) {
					return component;
				}
			});

			return null;
		}

		Add(component: GameObjectComponent): GameObjectComponent {
			component.ownerComponentManager = this;

			this.components.Add(component);

			return component;
		}

		Remove(type: string): void {
			this.components.ForEachInverted((index: number, component: GameObjectComponent) => {
				if (typeof component == type) {
					component.Release();
					this.components.RemoveAt(index);
				}
			});
		}

		Clear(): void {
			this.components.ForEachInverted((index: number, component: GameObjectComponent) => {
				component.Release();
				this.components.RemoveAt(index);
			});
		}

		Start(): void {
			this.components.ForEach((index: number, component: GameObjectComponent) => {
				component.Start();
			});
		}

		Update(): void {
			this.components.ForEach((index: number, component: GameObjectComponent) => {
				if (component.enabled) {
					component.Update();
				}
			});
		}
	}
}