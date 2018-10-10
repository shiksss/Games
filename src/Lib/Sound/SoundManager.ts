module Lib {
	export class SoundManager {
		private static instance: SoundManager = new SoundManager();
		static get Instance(): SoundManager {
			return SoundManager.instance;
		}

		private sounds: List<egret.Sound> = new List<egret.Sound>();
		private soundInfoGroups: Dictionary<List<SoundInfo>> = new Dictionary<List<SoundInfo>>();

		PopSound(): egret.Sound {
			return this.sounds.Count > 0 ? this.sounds.Get(this.sounds.Count - 1) : new egret.Sound();
		}

		PushSound(sound: egret.Sound): void {
			this.sounds.Add(sound);
		}

		PlaySFX(name: string, volume: number = 1, loopCount: number = 1): void {
			volume *= LocalSetting_System.Instance.SFXVolume;

			if (volume <= 0) { return; }

			let soundInfo = this.GetSoundInfo_New(name);

			soundInfo.Play(name, volume, loopCount);
		}

		PlayBGM(name: string, volume: number = 1, loopCount: number = -1): void {
			volume *= LocalSetting_System.Instance.BGMVolume;

			if (volume <= 0) { return; }

			let soundInfo = this.GetSoundInfo_New(name);

			soundInfo.Play(name, volume, loopCount);
		}

		StopBGM(name: string): void {
			let soundInfo = this.GetSoundInfo_Playing(name);

			if (soundInfo == null) { return; }

			soundInfo.Stop();
		}

		GetSoundInfo_Playing(name: string): SoundInfo {
			if (!this.soundInfoGroups.ContainsKey(name)) {
				return null;
			}

			let soundInfoGroup: List<SoundInfo> = this.soundInfoGroups.Get(name);

			let soundInfo: SoundInfo = null;
			soundInfoGroup.ForEach((index: number, value: SoundInfo) => {
				if (value.state != SoundStateEnum.Normal) {
					soundInfo = value;
				}
			}, () => { return soundInfo != null; });

			return soundInfo;
		}

		GetSoundInfo_New(name: string): SoundInfo {
			let soundInfoGroup: List<SoundInfo> = null;
			if (!this.soundInfoGroups.ContainsKey(name)) {
				soundInfoGroup = new List<SoundInfo>();
				this.soundInfoGroups.Set(name, soundInfoGroup);
			} else {
				soundInfoGroup = this.soundInfoGroups.Get(name);
			}

			let soundInfo: SoundInfo = null;
			soundInfoGroup.ForEach((index: number, value: SoundInfo) => {
				if (value.state == SoundStateEnum.Normal) {
					soundInfo = value;
				}
			}, () => { return soundInfo != null; });

			if (soundInfo == null) {
				soundInfo = new SoundInfo(this);
				soundInfoGroup.Add(soundInfo);
			}

			return soundInfo;
		}
	}
}