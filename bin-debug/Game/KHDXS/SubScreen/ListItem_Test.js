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
var KHDXS;
(function (KHDXS) {
    var ListItem_Test = (function (_super) {
        __extends(ListItem_Test, _super);
        function ListItem_Test() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ListItem_Test.prototype, "ModuleName", {
            get: function () { return "KHDXS"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListItem_Test.prototype, "ClassName", {
            get: function () { return "ListItem_Test"; },
            enumerable: true,
            configurable: true
        });
        ListItem_Test.prototype.Refersh = function () {
            this.touchChildren = true;
            this.label.text = this.data.label;
        };
        return ListItem_Test;
    }(Lib.ListItem));
    KHDXS.ListItem_Test = ListItem_Test;
    __reflect(ListItem_Test.prototype, "KHDXS.ListItem_Test");
})(KHDXS || (KHDXS = {}));
//# sourceMappingURL=ListItem_Test.js.map