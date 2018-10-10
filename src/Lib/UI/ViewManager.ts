module Lib {
	export class ViewManager extends egret.DisplayObjectContainer {
		private static instance: ViewManager;
		static get Instance(): ViewManager { return ViewManager.instance };

		displayRoot_SubScreen: egret.DisplayObjectContainer;

		displayRoot_Loading: egret.DisplayObjectContainer;

		displayRoot_Box: egret.DisplayObjectContainer;

		logicScreenWidth: number;
		logicScreenHeight: number;

		private rect_BackColor: eui.Rect;
		get BackColor(): number { return this.rect_BackColor.fillColor; }
		set BackColor(backColor: number) { this.rect_BackColor.fillColor = backColor; }

		curSubScreen: SubScreen = null;

		public constructor() {
			super();

			ViewManager.instance = this;

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.OnAddToStage, this);
		}

		private OnAddToStage(event: egret.Event) {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.OnAddToStage, this);

			this.logicScreenWidth = 0;
			if (this.stage.stageWidth * 3 <= this.stage.stageHeight * 2) {
				this.logicScreenWidth = 720;
				this.logicScreenHeight = Math.ceil(this.stage.stageHeight * this.logicScreenWidth / this.stage.stageWidth);
			} else {
				let tempHeight: number = 1680 - 400 * (this.stage.stageHeight / this.stage.stageWidth);
				this.logicScreenWidth = Math.ceil(this.stage.stageWidth * tempHeight / this.stage.stageHeight);
				this.logicScreenHeight = Math.ceil(tempHeight);
			}

			egret.lifecycle.addLifecycleListener((context) => {
				// context.onUpdate = () => {
				// }
			});

			egret.lifecycle.onPause = () => {
				// egret.ticker.pause();
			};

			egret.lifecycle.onResume = () => {
				// egret.ticker.resume();
			};

			//注入自定义的素材解析器
			egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
			egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

			this.Init().catch(e => {
				console.log(e);
			});
		}

		private LoadTheme() {
			return new Promise((resolve, reject) => {
				// load skin theme configuration file, you can manually modify the file. And replace the default skin.
				//加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
				let theme = new eui.Theme("resource/default.thm.json", this.stage);
				theme.addEventListener(eui.UIEvent.COMPLETE, () => {
					resolve();
				}, this);
			})
		}

		private async Init() {
			this.displayRoot_SubScreen = new egret.DisplayObjectContainer();
			this.addChild(this.displayRoot_SubScreen);

			this.displayRoot_Box = new egret.DisplayObjectContainer();
			this.addChild(this.displayRoot_Box);

			this.displayRoot_Loading = new egret.DisplayObjectContainer();
			this.addChild(this.displayRoot_Loading);

			await RES.loadConfig("resource/default.res.json", "resource/");

			await this.LoadTheme();

			this.rect_BackColor = new eui.Rect(this.stage.stageWidth, this.stage.stageHeight);
			this.rect_BackColor.fillColor = 0;
			this.stage.addChildAt(this.rect_BackColor, 0);

			this.OnInited();
		}

		protected OnInited() {
			console.info(wx.getBatteryInfoSync());
		}

		async ChangeTo(subScreen: SubScreen) {
			if (this.curSubScreen != null) {
				await this.curSubScreen.End();
				this.curSubScreen = null;

				this.displayRoot_SubScreen.removeChildren();
			}

			this.curSubScreen = subScreen;
			await this.curSubScreen.Init(this);
		}

		async LoadResGroups(resGroupNames: List<string>, newLoadingView: () => LoadingView) {
			if (resGroupNames == null || resGroupNames.Count <= 0) {
				return;
			}

			let needLoad: boolean = false;
			resGroupNames.ForEach((index: number, value: string) => {
				if (!RES.isGroupLoaded(value)) {
					needLoad = true;
				}
			}, () => { return needLoad; });

			if (!needLoad) {
				return;
			}

			let loadingView: LoadingView = newLoadingView();

			this.displayRoot_Loading.addChild(loadingView);

			await loadingView.LoadResGroups(resGroupNames);

			this.displayRoot_Loading.removeChild(loadingView);
		}

		async UnLoadResGroups(resGroupNames: List<string>) {
			if (resGroupNames == null || resGroupNames.Count <= 0) {
				return;
			}

			for (let i: number = 0; i < resGroupNames.Count; i++) {
				await RES.destroyRes(resGroupNames.Get(i), false);
			}
		}

		static ShowBox(ui: View): void {
			ViewManager.instance.displayRoot_Box.addChild(ui);
		}

		static Close(ui: View): void {
			ui.parent.removeChild(ui);
			// UIManager.instance.displayRoot_Box.removeChild(ui);
		}
	}
}