module Lib {
	export abstract class Command extends PoolableObj {
		public maxSpeed: boolean;
		endEvent: (command: Command) => void;
		private started: boolean;
		removed: boolean;

		private startTime: number;
		get DeltaTime(): number {
			return this.maxSpeed ? Number.MAX_VALUE : egret.getTimer() / 1000 - this.startTime;
		}

		protected Init(maxSpeed: boolean, endEvent: (command: Command) => void): void {
			this.maxSpeed = maxSpeed;
			this.endEvent = endEvent;
			this.started = false;
			this.removed = false;
		}

		Start(): void {//这里执行产生所有结果，抓住所有要用的对象，不能调用End()
			this.started = true;
			this.startTime = egret.getTimer() / 1000;
		}

		Update(): void {//这里仅仅播放视觉，只能使用已有对象，不获取对象
			if (!this.started) {
				this.Start();
			}
		}

		End(): void {
			this.removed = true;
			if (this.endEvent != null) {
				this.endEvent(this);
			}
		}

		Release(): void {
			this.endEvent = null;
			super.Release();
		}

		static Commands_Clear(commands: List<Command>): void {
			for (let i: number = 0; i < commands.Count; i++) {
				commands.Get(i).Release();
			}
			commands.Clear();
		}

		static Commands_RemoveAt(commands: List<Command>, index: number): void {
			commands.Get(index).Release();
			commands.RemoveAt(index);
		}
	}
}