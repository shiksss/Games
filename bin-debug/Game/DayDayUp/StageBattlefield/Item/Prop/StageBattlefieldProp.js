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
var DayDayUp;
(function (DayDayUp) {
    var StageBattlefieldProp = (function (_super) {
        __extends(StageBattlefieldProp, _super);
        function StageBattlefieldProp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StageBattlefieldProp.prototype, "Scale", {
            get: function () {
                return 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldProp.prototype, "Prop", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        return StageBattlefieldProp;
    }(DayDayUp.StageBattlefieldItem));
    DayDayUp.StageBattlefieldProp = StageBattlefieldProp;
    __reflect(StageBattlefieldProp.prototype, "DayDayUp.StageBattlefieldProp");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldProp.js.map