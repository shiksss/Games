module DayDayUp {
	export class StageBattlefieldController_Ai extends StageBattlefieldController {
		static ClassName: string = "StageBattlefieldController_Ai";
		className: string = StageBattlefieldController_Ai.ClassName;

		static New(pool: Lib.ObjectPool, stageBattlefield: StageBattlefield): StageBattlefieldController_Ai {
			let newOne: StageBattlefieldController_Ai = pool == null ? new StageBattlefieldController_Ai() : <StageBattlefieldController_Ai>pool.Get(StageBattlefieldController_Ai.ClassName, () => { return new StageBattlefieldController_Ai(); });

			newOne.Init(stageBattlefield);

			return newOne;
		}

		Start(): void {
			super.Start();

			this.stageBattlefield.players.ForEach(
				(key: any, value: StageBattlefieldPlayer) => {
					value.AiEnabled = true;
				}
			);
		}

		Update(): void {
			super.Update();

			let now: number = egret.getTimer() / 1000;

			let toFrameIndex: number = Math.floor((now - this.startTime) * this.stageBattlefield.battlefield.setting.fps);

			while (this.stageBattlefield.battlefield.Update(toFrameIndex, this.stageBattlefield.onHoldings)) {
				if (now - egret.getTimer() / 1000 >= 0.5) {
					break;
				}
			}

			this.stageBattlefield.TrySynByData();
		}
	}
}