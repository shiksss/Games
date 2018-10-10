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
    var BattlefieldProp_Feather = (function (_super) {
        __extends(BattlefieldProp_Feather, _super);
        function BattlefieldProp_Feather() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldProp_Feather.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldProp_Feather.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldPropTypeEnum.Feather; },
            enumerable: true,
            configurable: true
        });
        BattlefieldProp_Feather.New = function (pool, ownerBattlefield, id, atBoardId) {
            var newOne = pool == null ? new BattlefieldProp_Feather() : pool.Get(BattlefieldProp_Feather.ClassName, function () { return new BattlefieldProp_Feather(); });
            newOne.Init_Prop(ownerBattlefield, id, atBoardId);
            return newOne;
        };
        BattlefieldProp_Feather.ClassName = "BattlefieldProp_Feather";
        return BattlefieldProp_Feather;
    }(DayDayUp.BattlefieldProp));
    DayDayUp.BattlefieldProp_Feather = BattlefieldProp_Feather;
    __reflect(BattlefieldProp_Feather.prototype, "DayDayUp.BattlefieldProp_Feather");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldProp_Feather.js.map