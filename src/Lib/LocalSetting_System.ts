module Lib {
	export class LocalSetting_System {
		private static instance: LocalSetting_System = new LocalSetting_System();
		static get Instance(): LocalSetting_System {
			return LocalSetting_System.instance;
		};

		static GetNumber(key: string, defaultValue: number): number {
			let value: number = parseInt(egret.localStorage.getItem(key), 10);
			if (isNaN(value)) { return defaultValue; }

			return value;
		}

		private bgmVolume: number;
		get BGMVolume(): number {
			if (isNaN(this.bgmVolume)) {
				this.bgmVolume = LocalSetting_System.GetNumber("BGMVolume", 0.5);
			}
			return this.bgmVolume;
		}
		set BGMVolume(value: number) {
			egret.localStorage.setItem("BGMVolume", value.toString());
			this.bgmVolume = value;
		}

		private sfxVolume: number;
		get SFXVolume(): number {
			if (isNaN(this.sfxVolume)) {
				this.sfxVolume = LocalSetting_System.GetNumber("SFXVolume", 0.8);
			}
			return this.sfxVolume;
		}
		set SFXVolume(value: number) {
			egret.localStorage.setItem("SFXVolume", value.toString());
			this.sfxVolume = value;
		}
	}
}