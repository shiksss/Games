module Lib {
	export abstract class SubScreen {
		owner: ViewManager;

		abstract get ClassName(): string;

		abstract get BGMFilePath(): string;

		get DisplayRoot(): egret.DisplayObjectContainer {
			return this.owner.displayRoot_SubScreen;
		};

		abstract GetResGroupNames(): List<string>;

		NewLoadingView(): LoadingView {
			return new LoadingView();
		};

		public constructor() { }

		async Init(owner: ViewManager) {
			this.owner = owner;

			await this.owner.LoadResGroups(this.GetResGroupNames(), this.NewLoadingView);

			this.Start();

			if (this.BGMFilePath != null) {
				Lib.SoundManager.Instance.PlayBGM(this.BGMFilePath);
			}
		}

		abstract Start(): void;

		async End() {
			if (this.BGMFilePath != null) {
				Lib.SoundManager.Instance.StopBGM(this.BGMFilePath);
			}
			// ObjectPool.Instance.ClearAll();
			// await this.owner.UnLoadResGroups(this.GetResGroupNames());
		}
	}
}