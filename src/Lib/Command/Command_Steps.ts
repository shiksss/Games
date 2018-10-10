module Lib {
	export class Command_Steps extends Command {//依次执行
		static ClassName: string = "Command_Steps";
		className: string = Command_Steps.ClassName;

		private steps: List<Command> = new List<Command>();

		get Count(): number {
			return this.steps.Count;
		}

		static New(pool: ObjectPool, maxSpeed: boolean, endEvent: (step: Command) => void): Command_Steps {
			let newOne: Command_Steps = pool == null ? new Command_Steps() : <Command_Steps>pool.Get(Command_Steps.ClassName, () => { return new Command_Steps(); });

			newOne.Init(maxSpeed, endEvent);

			return newOne;
		}

		Release(): void {
			this.Clear();
			super.Release();
		}

		Add(step: Command): Command {
			this.steps.Add(step);
			return step;
		}

		Clear(): void {
			Command.Commands_Clear(this.steps);
		}

		Update(): void {
			super.Update();

			//执行
			if (this.steps.Count > 0) {//依次执行
				let step: Command = this.steps.Get(0);
				step.Update();

				//删除
				if (step.removed) {
					Command.Commands_RemoveAt(this.steps, 0);
				}
			}

			if (this.steps.Count <= 0) {
				this.End();
			}
		}
	}
}