var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Lib;
(function (Lib) {
    var MessageBoxModeEnum;
    (function (MessageBoxModeEnum) {
        MessageBoxModeEnum[MessageBoxModeEnum["YesNo"] = 0] = "YesNo";
        MessageBoxModeEnum[MessageBoxModeEnum["OK"] = 1] = "OK";
    })(MessageBoxModeEnum = Lib.MessageBoxModeEnum || (Lib.MessageBoxModeEnum = {}));
    ;
    var MessageBox = (function (_super) {
        __extends(MessageBox, _super);
        function MessageBox(skinName, onAddUIEvents, title, message, mode) {
            var _this = _super.call(this, true, null, skinName != null && skinName.length > 0 ? skinName : "MessageBox", onAddUIEvents) || this;
            _this.label_Title.text = title;
            _this.label_Message.text = message;
            _this.button_Yes.visible = false;
            _this.button_No.visible = false;
            _this.button_Ok.visible = false;
            return _this;
        }
        MessageBox.ShowYesNo = function (skinName, title, message, onYes, onNo, yesText, noText) {
            if (onNo === void 0) { onNo = null; }
            if (yesText === void 0) { yesText = null; }
            if (noText === void 0) { noText = null; }
            var messageBox = new MessageBox(skinName, function () {
                messageBox.button_Yes.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    if (onYes != null) {
                        onYes();
                    }
                    messageBox.Close();
                }, messageBox.button_Yes);
                messageBox.button_No.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    if (onNo != null) {
                        onNo();
                    }
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
            Lib.ViewManager.ShowBox(messageBox);
            return messageBox;
        };
        MessageBox.ShowOk = function (skinName, title, message, onOk, okText) {
            if (onOk === void 0) { onOk = null; }
            if (okText === void 0) { okText = null; }
            var messageBox = new MessageBox(skinName, function () {
                messageBox.button_Ok.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    if (onOk != null) {
                        onOk();
                    }
                    messageBox.Close();
                }, messageBox.button_Ok);
            }, title, message, MessageBoxModeEnum.OK);
            messageBox.button_Ok.visible = true;
            if (okText != null) {
                messageBox.button_Ok.label = okText;
            }
            Lib.ViewManager.ShowBox(messageBox);
            return messageBox;
        };
        return MessageBox;
    }(Lib.View));
    Lib.MessageBox = MessageBox;
    __reflect(MessageBox.prototype, "Lib.MessageBox");
})(Lib || (Lib = {}));
//# sourceMappingURL=MessageBox.js.map