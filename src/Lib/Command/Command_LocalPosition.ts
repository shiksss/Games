module Lib {
	export class Command_LocalPosition extends Command {
		static ClassName: string = "Command_LocalPosition";
		className: string = Command_LocalPosition.ClassName;

		gameObject: GameObject;
		startX: number;
		startY: number;
		endX: number;
		endY: number;
		lifeTime: number;
		mi: number;

		static New(pool: ObjectPool, gameObject: GameObject, startX: number, startY: number, endX: number, endY: number, lifeTime: number, mi: number, maxSpeed: boolean, endEvent: (Command) => void): Command_LocalPosition {
			let newOne: Command_LocalPosition = pool == null ? new Command_LocalPosition() : <Command_LocalPosition>pool.Get(Command_LocalPosition.ClassName, () => { return new Command_LocalPosition(); });

			newOne.Init_GameObjectPosition(gameObject, startX, startY, endX, endY, lifeTime, mi, maxSpeed, endEvent);

			return newOne;
		}

		protected Init_GameObjectPosition(gameObject: GameObject, startX: number, startY: number, endX: number, endY: number, lifeTime: number, mi: number, maxSpeed: boolean, endEvent: (Command) => void): void {
			super.Init(maxSpeed, endEvent);

			this.gameObject = gameObject;
			this.startX = startX;
			this.startY = startY;
			this.endX = endX;
			this.endY = endY;
			this.lifeTime = lifeTime;
			this.mi = mi;

			gameObject.x = startX;
			gameObject.y = startY;
		}

		Update(): void {
			super.Update();

			if (this.gameObject == null) {
				this.End();
				return;
			}

			let deltaTime: number = this.DeltaTime;
			if (deltaTime < this.lifeTime) {
				let rate: number = Math.pow(deltaTime / this.lifeTime, this.mi);
				this.gameObject.x = this.startX + (this.endX - this.startX) * rate;
				this.gameObject.y = this.startY + (this.endY - this.startY) * rate;
			} else {
				this.gameObject.x = this.endX;
				this.gameObject.y = this.endY;
				this.End();
			}
		}

		Release(): void {
			this.gameObject = null;
			super.Release();
		}
	}
}