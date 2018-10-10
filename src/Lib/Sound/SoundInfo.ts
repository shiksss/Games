module Lib {
	export enum SoundStateEnum {
		Normal = 0,
		Loading = 1,
		Playing = 2
	};

	export class SoundInfo {
		private owner: SoundManager;
		private name: string;
		private volume: number;
		private loopCount: number;
		private sound: egret.Sound = null;
		private channel: egret.SoundChannel = null;
		state: SoundStateEnum = SoundStateEnum.Normal;

		constructor(owner: SoundManager) {
			this.owner = owner;
		}

		Play(name: string, volume: number, loopCount: number): void {
			this.sound = this.owner.PopSound();
			this.name = name;
			this.volume = volume;
			this.loopCount = loopCount;

			this.state = SoundStateEnum.Loading;

			this.sound.addEventListener(egret.Event.COMPLETE, this.LoadOver, this);
			this.sound.addEventListener(egret.IOErrorEvent.IO_ERROR, this.LoadError, this);
			this.sound.load(name);
		}

		private LoadOver(): void {
			this.sound.removeEventListener(egret.Event.COMPLETE, this.LoadOver, this);
			this.sound.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.LoadError, this);

			this.state = SoundStateEnum.Playing;

			this.channel = this.sound.play(0, this.loopCount);
			this.channel.volume = this.volume;
			this.channel.addEventListener(egret.Event.SOUND_COMPLETE, this.PlayOver, this);
		}

		private LoadError(): void {
			this.sound.removeEventListener(egret.Event.COMPLETE, this.LoadOver, this);
			this.sound.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.LoadError, this);

			this.End();

			console.log("播放声音失败: " + this.name);
		}

		private PlayOver(): void {
			this.channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.PlayOver, this);

			this.End();
		}

		Stop(): void {
			if (this.channel != null) {
				this.channel.stop();
			}

			this.End();
		}

		private End(): void {
			this.state = SoundStateEnum.Normal;

			this.owner.PushSound(this.sound);
			this.sound = null;

			this.channel = null;
		}
	}
}