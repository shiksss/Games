module KHDXS {
	export class LocalSetting {
		private static instance: LocalSetting = new LocalSetting();
		static get Instance(): LocalSetting {
			return LocalSetting.instance;
		};

		private playCount: number;
		get PlayCount(): number {
			if (isNaN(this.playCount)) {
				this.playCount = Lib.LocalSetting_System.GetNumber("PlayCount", 0);
			}
			return this.playCount;
		}
		set PlayCount(value: number) {
			egret.localStorage.setItem("PlayCount", value.toString());
			this.playCount = value;
		}
	}
}