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
    var View = (function (_super) {
        __extends(View, _super);
        function View(isFull, moduleName, skinName, onAddUIEvents) {
            var _this = _super.call(this) || this;
            _this.isFull = isFull;
            if (moduleName != null && moduleName.length > 0) {
                skinName = moduleName + "/" + skinName;
            }
            _this.skinName = "resource/Skin/" + skinName + "Skin.exml";
            _this.onAddUIEvents = onAddUIEvents;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.OnConfigComplete, _this);
            return _this;
        }
        Object.defineProperty(View.prototype, "LogicScale", {
            get: function () { return 1; },
            enumerable: true,
            configurable: true
        });
        View.prototype.OnAddUIEvents = function () { if (this.onAddUIEvents != null)
            this.onAddUIEvents(); };
        View.prototype.OnConfigComplete = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.OnConfigComplete, this);
            if (this.isFull) {
                this.width = Lib.ViewManager.Instance.logicScreenWidth / this.LogicScale;
                this.height = Lib.ViewManager.Instance.logicScreenHeight / this.LogicScale;
                this.scaleX = this.stage.stageWidth / this.width;
                this.scaleY = this.stage.stageHeight / this.height;
            }
            else {
                this.scaleX = this.LogicScale;
                this.scaleY = this.LogicScale;
            }
        };
        View.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.OnAddUIEvents();
        };
        View.prototype.Close = function () {
            Lib.ViewManager.Close(this);
        };
        return View;
    }(eui.Component));
    Lib.View = View;
    __reflect(View.prototype, "Lib.View");
})(Lib || (Lib = {}));
//# sourceMappingURL=View.js.map