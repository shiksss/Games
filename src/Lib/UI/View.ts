module Lib {
	export abstract class View extends eui.Component {
		get LogicScale(): number { return 1; }

		private isFull: boolean;

		onAddUIEvents: () => void;
		private OnAddUIEvents(): void { if (this.onAddUIEvents != null) this.onAddUIEvents(); }

		private updatable: boolean;

		public constructor(isFull: boolean, moduleName: string, skinName: string, onAddUIEvents: () => void, updatable: boolean = false) {
			super();

			this.isFull = isFull;

			if (moduleName != null && moduleName.length > 0) {
				skinName = moduleName + "/" + skinName;
			}

			this.skinName = "resource/Skin/" + skinName + "Skin.exml";

			this.onAddUIEvents = onAddUIEvents;

			this.updatable = updatable;

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.OnConfigComplete, this);
		}

		protected Release(): void {
			this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Release, this);

			if (this.updatable) {
				this.removeEventListener(egret.Event.ENTER_FRAME, this.Update, this);
			}
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

			if (this.updatable) {
				this.addEventListener(egret.Event.ENTER_FRAME, this.Update, this);
			}

			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Release, this);
		}

		protected createChildren(): void {
			super.createChildren();

			this.OnAddUIEvents();
		}

		public Close(): void {
			ViewManager.Close(this);
		}

		protected Update(): void {
		}
	}
}