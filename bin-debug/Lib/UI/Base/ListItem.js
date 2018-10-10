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
    var ListItem = (function (_super) {
        __extends(ListItem, _super);
        function ListItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/Skin/" + _this.ModuleName + "/" + _this.ClassName + "Skin.exml";
            return _this;
        }
        ListItem.prototype.dataChanged = function () {
            this.Refersh();
        };
        return ListItem;
    }(eui.ItemRenderer));
    Lib.ListItem = ListItem;
    __reflect(ListItem.prototype, "Lib.ListItem");
})(Lib || (Lib = {}));
//# sourceMappingURL=ListItem.js.map