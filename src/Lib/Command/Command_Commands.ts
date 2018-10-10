module Lib {
	export class Command_Commands extends Command {//同步执行
		static ClassName: string = "Command_Commands";
		className: string = Command_Commands.ClassName;

		private commands: List<Command> = new List<Command>();

		get Count(): number {
			return this.commands.Count;
		}

		static New(pool: ObjectPool, old: Command_Commands, maxSpeed: boolean, endEvent: (command: Command) => void): Command_Commands {
			if (old != null) {
				old.Release();
				old = null;
			}

			let newOne: Command_Commands = pool == null ? new Command_Commands() : <Command_Commands>pool.Get(Command_Commands.ClassName, () => { return new Command_Commands(); });

			newOne.Init(maxSpeed, endEvent);

			return newOne;
		}

		Release(): void {
			this.Clear();
			super.Release();
		}

		Add(command: Command, replace: boolean = false): Command {
			if (replace) {//剔除类型一样的
				for (let i: number = this.commands.Count - 1; i >= 0; i--) {
					if (command.className == this.commands.Get(i).className) {
						Command.Commands_RemoveAt(this.commands, i);
					}
				}
			}
			this.commands.Add(command);
			return command;
		}

		Clear(): void {
			Command.Commands_Clear(this.commands);
		}

		Update(): void {
			super.Update();

			for (let i: number = 0; i < this.commands.Count; i++) {
				this.commands.Get(i).Update();
			}

			//删除
			for (let i: number = this.commands.Count - 1; i >= 0; i--) {
				if (this.commands.Get(i).removed) {
					Command.Commands_RemoveAt(this.commands, i);
				}
			}

			if (this.commands.Count <= 0) {
				this.End();
			}
		}

		ClearTypeOf(className: string): boolean {
			let result: boolean = false;
			for (let i: number = this.commands.Count - 1; i >= 0; i--) {
				if (className == this.commands.Get(i).className) {
					Command.Commands_RemoveAt(this.commands, i);
					result = true;
				}
			}

			return result;
		}

		ContainsTypeOf(className: string): boolean {
			for (let i: number = 0; i < this.commands.Count; i++) {
				if (className == this.commands.Get(i).className) {
					return true;
				}
			}

			return false;
		}

		ContainsTypesOf(classNames: List<string>): boolean {
			for (let i: number = 0; i < this.commands.Count; i++) {
				if (classNames.Contains(this.commands.Get(i).className)) {
					return true;
				}
			}

			return false;
		}
	}
}