module DayDayUp {
	export class RecordPlayer {
		playerId: number;

		frames: Lib.List<RecordPlayerFrame> = new Lib.List<RecordPlayerFrame>();

		public constructor(playerId: number) {
			this.playerId = playerId;
		}

		AddFrame(frameIndex: number, input: boolean): void {
			if (this.frames.Count <= 0 || input != this.GetLastInput()) {
				this.frames.Add(new RecordPlayerFrame(frameIndex, input));
			}
		}

		private GetLastInput(): boolean {
			return this.frames.Count > 0 && this.frames.Get(this.frames.Count - 1).input;
		}
	}
}