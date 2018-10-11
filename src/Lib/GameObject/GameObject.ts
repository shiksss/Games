module Lib {
	export class GameObject extends GameObjectBase implements IPoolableObj {
		static ClassName: string = "GameObject";
		className: string = GameObject.ClassName;

		pool: ObjectPool;

		private _inited: boolean;

		public get Inited(): boolean { return this._inited; }

		private updatable: boolean;

		get ParentGameObject(): GameObject { return this.parent as GameObject; }

		components: GameObjectComponentManager = null;

		static New(pool: ObjectPool, updatable: boolean = true): GameObject {
			let newOne: GameObject = pool == null ? new GameObject() : <GameObject>pool.Get(GameObject.ClassName, () => { return new GameObject(); });

			newOne.Init(updatable);

			return newOne;
		}

		protected Init(updatable: boolean = true): void {
			this._inited = false;

			this.updatable = updatable;

			this.components = GameObjectComponentManager.New(this.pool, this);

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.OnConfigComplete, this);
		}

		Release(): void {
			this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Release, this);

			if (this.updatable) {
				this.removeEventListener(egret.Event.ENTER_FRAME, this.Update, this);
			}

			this.updatable = false;

			if (this.components != null) {
				this.components.Release();
				this.components = null;
			}

			this.removeChildren();

			if (this.pool == null) {
				console.info("重复Release");
				return;
			}

			this.pool.Free(this);
			this.pool = null;
		}

		private OnConfigComplete(event: RES.ResourceEvent): void {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.OnConfigComplete, this);

			this._inited = true;

			this.Ready();

			if (this.updatable) {
				this.addEventListener(egret.Event.ENTER_FRAME, this.Update, this);
			}

			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Release, this);
		}

		RemoveSelf(): void {
			if (this.parent != null) {
				this.parent.removeChild(this);
			}
		}

		Ready(): void {
			this.components.Start();
		}

		Update(): void {
			if (this.components != null) {
				this.components.Update();
			}
		}
	}
}