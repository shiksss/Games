module Lib {
	export class Dictionary<TValue> {
		private items: any;

		private count: number;

		public constructor() {
			this.count = 0;
			this.items = new Array();
		}

		public get Count() {
			return this.count;
		}

		public GetKeys(): any[] {
			let keys: any[];

			for (var key in this.items) {
				keys.push(key);
			}

			return keys;
		}

		public GetValues(): TValue[] {
			let values: TValue[];

			for (var key in this.items) {
				values.push(this.items[key]);
			}

			return values;
		}

		public Get(key: any): TValue {
			return this.ContainsKey(key) ? this.items[key] : null;
		}

		public Set(key: any, value: TValue): void {
			if (!this.ContainsKey(key)) { this.count++; }
			this.items[key] = value;
		}

		public Clear(): void {
			this.count = 0;
			this.items = {};
		}

		public ContainsKey(key: any): boolean {
			return key in this.items;
		}

		public Remove(key: any): boolean {
			if (!this.ContainsKey(key)) { return false; }

			this.count--;

			delete this.items[key];

			return true;
		}

		public ForEachKey(callback: (key: any) => void, callback_needBreak: () => boolean = null): void {
			for (var key in this.items) {
				callback(key);
				if (callback_needBreak != null && callback_needBreak()) {
					break;
				}
			}
		}

		public ForEach(callback: (key: any, value: TValue) => void, callback_needBreak: () => boolean = null): void {
			for (var key in this.items) {
				callback(key, this.items[key]);
				if (callback_needBreak != null && callback_needBreak()) {
					break;
				}
			}
		}
	}
}