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
var Match3;
(function (Match3) {
    var MainMenuUI = (function (_super) {
        __extends(MainMenuUI, _super);
        function MainMenuUI() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MainMenuUI;
    }(Lib.View));
    Match3.MainMenuUI = MainMenuUI;
    __reflect(MainMenuUI.prototype, "Match3.MainMenuUI");
})(Match3 || (Match3 = {}));
//# sourceMappingURL=MainMenuUI.js.map