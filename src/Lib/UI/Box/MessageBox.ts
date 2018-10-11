module Lib {
	export enum MessageBoxModeEnum {
		YesNo = 0,
		OK = 1
	};

	export class MessageBox extends View {
		public content: eui.Group;
		public label_Title: eui.Label;
		public label_Message: eui.Label;
		public grooup_buttons: eui.Group;
		public button_Ok: Lib.Button;
		public button_No: Lib.Button;
		public button_Yes: Lib.Button;

		private constructor(skinName: string, onAddUIEvents: () => void, title: string, message: string, mode: MessageBoxModeEnum) {
			super(true, null, skinName != null && skinName.length > 0 ? skinName : "MessageBox", onAddUIEvents, false);

			this.label_Title.text = title;
			this.label_Message.text = message;

			this.button_Yes.visible = false;
			this.button_Yes.includeInLayout = false;

			this.button_No.visible = false;
			this.button_No.includeInLayout = false;

			this.button_Ok.visible = false;
			this.button_Ok.includeInLayout = false;

			let layout: eui.HorizontalLayout = new eui.HorizontalLayout();
			layout.gap = 80;
			layout.verticalAlign = egret.VerticalAlign.MIDDLE;
			layout.horizontalAlign = egret.HorizontalAlign.CENTER;
			this.grooup_buttons.layout = layout;

			this.alpha = 0;
		}

		protected createChildren(): void {
			super.createChildren();

			if (this.label_Message.textHeight > this.label_Message.height) {
				this.content.height += this.label_Message.textHeight - this.label_Message.height;
				this.label_Message.height = this.label_Message.textHeight;
			}

			new DoTween(this).AlphaTo(1, 0.2);

			new DoTween(this.content).Jelly();
		}

		public static ShowYesNo(skinName: string, title: string, message: string, onYes: () => void, onNo: () => void = null, yesText: string = null, noText: string = null): MessageBox {
			let messageBox: MessageBox = new MessageBox(skinName, () => {
				messageBox.button_Yes.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
					if (onYes != null) { onYes(); }
					messageBox.Close();
				}, messageBox.button_Yes);

				messageBox.button_No.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
					if (onNo != null) { onNo(); }
					messageBox.Close();
				}, messageBox.button_No);

			}, title, message, MessageBoxModeEnum.YesNo);

			messageBox.button_Yes.visible = true;
			messageBox.button_Yes.includeInLayout = true;
			messageBox.button_No.visible = true;
			messageBox.button_No.includeInLayout = true;

			if (yesText != null) {
				messageBox.button_Yes.label = yesText;
			}
			if (noText != null) {
				messageBox.button_No.label = noText;
			}

			ViewManager.ShowBox(messageBox);

			return messageBox;
		}

		public static ShowOk(skinName: string, title: string, message: string, onOk: () => void = null, okText: string = null): MessageBox {
			let messageBox: MessageBox = new MessageBox(skinName, () => {
				messageBox.button_Ok.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
					if (onOk != null) { onOk(); }
					messageBox.Close();
				}, messageBox.button_Ok);

			}, title, message, MessageBoxModeEnum.OK);

			messageBox.button_Ok.visible = true;
			messageBox.button_Ok.includeInLayout = true;

			if (okText != null) {
				messageBox.button_Ok.label = okText;
			}

			ViewManager.ShowBox(messageBox);

			return messageBox;
		}
	}
}