module Lib {
	export abstract class View extends eui.Component {
		get LogicScale(): number { return 1; }

		private isFull: boolean;

		onAddUIEvents: () => void;
		private OnAddUIEvents(): void { if (this.onAddUIEvents != null) this.onAddUIEvents(); }

		public constructor(isFull: boolean, moduleName: string, skinName: string, onAddUIEvents: () => void) {
			super();
			
			this.isFull = isFull;

			if (moduleName != null && moduleName.length > 0) {
				skinName = moduleName + "/" + skinName;
			}

			this.skinName = "resource/Skin/" + skinName + "Skin.exml";

			this.onAddUIEvents = onAddUIEvents;

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.OnConfigComplete, this);
		}

		protected OnConfigComplete(event: RES.ResourceEvent): void {
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.OnConfigComplete, this);

			if (this.isFull) {
				this.width = ViewManager.Instance.logicScreenWidth / this.LogicScale;
				this.height = ViewManager.Instance.logicScreenHeight / this.LogicScale;

				this.scaleX = this.stage.stageWidth / this.width;
				this.scaleY = this.stage.stageHeight / this.height;
			} else {
				this.scaleX = this.LogicScale;
				this.scaleY = this.LogicScale;
			}
		}

		protected createChildren(): void {
			super.createChildren();

			this.OnAddUIEvents();
		}

		Close(): void {
			ViewManager.Close(this);
		}
	}
}