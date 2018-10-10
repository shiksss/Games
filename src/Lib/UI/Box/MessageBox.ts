module Lib {
	export enum MessageBoxModeEnum {
		YesNo = 0,
		OK = 1
	};

	export class MessageBox extends View {
		label_Title: eui.Label;
		label_Message: eui.Label;

		button_Yes: eui.Button;
		button_No: eui.Button;
		button_Ok: eui.Button;

		public constructor(skinName: string, onAddUIEvents: () => void, title: string, message: string, mode: MessageBoxModeEnum) {
			super(true, "", skinName != null && skinName.length > 0 ? skinName : "MessageBox", onAddUIEvents);

			this.label_Title.text = title;
			this.label_Message.text = message;

			this.button_Yes.visible = false;
			this.button_No.visible = false;
			this.button_Ok.visible = false;
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
			messageBox.button_No.visible = true;

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

			if (okText != null) {
				messageBox.button_Ok.label = okText;
			}

			ViewManager.ShowBox(messageBox);

			return messageBox;
		}
	}
}