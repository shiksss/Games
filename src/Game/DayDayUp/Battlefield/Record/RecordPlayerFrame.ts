module DayDayUp {
	export class RecordPlayerFrame {
		frameIndex: number;

		input: boolean = false;

		public constructor(frameIndex: number, input: boolean) {
			this.frameIndex = frameIndex;
			this.input = input;
		}
	}
}