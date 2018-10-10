module DayDayUp {
	export class StageBattlefieldController_PlayRecord extends StageBattlefieldController {
		static ClassName: string = "StageBattlefieldController_PlayRecord";
		className: string = StageBattlefieldController_PlayRecord.ClassName;

		record: Record = null;

		playerFrameIndexes: Lib.Dictionary<number> = new Lib.Dictionary<number>();

		static New(pool: Lib.ObjectPool, stageBattlefield: StageBattlefield, record: Record): StageBattlefieldController_PlayRecord {
			let newOne: StageBattlefieldController_PlayRecord = pool == null ? new StageBattlefieldController_PlayRecord() : <StageBattlefieldController_PlayRecord>pool.Get(StageBattlefieldController_PlayRecord.ClassName, () => { return new StageBattlefieldController_PlayRecord(); });

			newOne.Init(stageBattlefield);

			newOne.record = record;

			return newOne;
		}

		Start(): void {
			super.Start();

			this.stageBattlefield.players.ForEach(
				(key: any, value: StageBattlefieldPlayer) => {
					value.AiEnabled = false;
					this.playerFrameIndexes.Set(key, 0);
				}
			);
		}

		Update(): void {
			super.Update();

			let now: number = egret.getTimer() / 1000;

			let toFrameIndex: number = Math.floor((now - this.startTime) * this.stageBattlefield.battlefield.setting.fps);

			while (true) {
				this.record.players.ForEach((playerId: any, player: RecordPlayer) => {
					for (let i = this.playerFrameIndexes.Get(playerId); i < player.frames.Count; i++) {
						let frame: RecordPlayerFrame = player.frames.Get(i);
						if (frame.frameIndex > this.stageBattlefield.battlefield.finishedFrameCount) {
							break;
						}
						this.playerFrameIndexes.Set(playerId, i);
					}
					
					this.stageBattlefield.onHoldings.Set(playerId, player.frames.Get(this.playerFrameIndexes.Get(playerId)).input);
				});
				if (!this.stageBattlefield.battlefield.Update(toFrameIndex, this.stageBattlefield.onHoldings)) {
					break;
				}
				if (now - egret.getTimer() / 1000 >= 0.5) {
					break;
				}
			}

			this.stageBattlefield.TrySynByData();
		}

		// GetInputs(frameIndex: number): Lib.Dictionary<boolean> {
		// 	let inputs: Lib.Dictionary<boolean> = new Lib.Dictionary<boolean>();

		// 	this.players.ForEach((key: any, value: RecordPlayer) => {
		// 		inputs.Set(key, value.GetInput(frameIndex));
		// 	});

		// 	return inputs;
		// }
	}
}