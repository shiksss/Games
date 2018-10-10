module Lib {
	export class List<T> {
		private items: Array<T>;

		constructor() {
			this.items = [];
		}

		get Count(): number {
			return this.items.length;
		}

		Get(index: number): T {
			return this.items[index];
		}

		Add(value: T): void {
			this.items.push(value);
		}

		Contains(value: T): boolean {
			for (let i = 0; i < this.items.length; i++) {
				if (value == this.items[i]) {
					return true;
				}
			}

			return false;
		}

		RemoveAt(index: number): void {
			this.items.splice(index, 1);
		}

		Clear(): void {
			this.items.splice(0, this.items.length);
		}

		public ForEach(callback: (index: number, value: T) => void, callback_needBreak: () => boolean = null): void {
			for (let i = 0; i < this.items.length; i++) {
				callback(i, this.items[i]);
				if (callback_needBreak != null && callback_needBreak()) {
					break;
				}
			}
		}

		public ForEachInverted(callback: (index: number, value: T) => void, callback_needBreak: () => boolean = null): void {
			for (let i = this.items.length - 1; i >= 0; i--) {
				callback(i, this.items[i]);
				if (callback_needBreak != null && callback_needBreak()) {
					break;
				}
			}
		}
	}
}