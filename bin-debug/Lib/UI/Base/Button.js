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
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Button.prototype.buttonReleased = function () {
            _super.prototype.buttonReleased.call(this);
            Lib.SoundManager.Instance.PlaySFX("resource/Sound/UI/SFX_Button_Clicked.wav");
        };
        return Button;
    }(eui.Button));
    Lib.Button = Button;
    __reflect(Button.prototype, "Lib.Button");
})(Lib || (Lib = {}));
//# sourceMappingURL=Button.js.map