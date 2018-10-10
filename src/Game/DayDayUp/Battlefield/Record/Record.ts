module DayDayUp {
	export class Record {
		seed: number;

		players: Lib.Dictionary<RecordPlayer> = new Lib.Dictionary<RecordPlayer>();

		public Init(battlefield: Battlefield): void {
			battlefield.players.ForEachKey((key: any) => {
				this.players.Set(key, new RecordPlayer(key));
			});

			this.seed = battlefield.setting.seed;
		}

		AddFrame(frameIndex: number, inputs: Lib.Dictionary<boolean>): void {
			inputs.ForEach((key: number, value: boolean) => {
				let player: RecordPlayer = this.players.Get(key);

				player.AddFrame(frameIndex, value);
			});
		}

		CopyFrom(record: Record): void {
			this.seed = record.seed;

			this.players = record.players;
		}

		Clone(): Record {
			let clone: Record = new Record();
			clone.CopyFrom(this);
			return clone;
		}
	}
}