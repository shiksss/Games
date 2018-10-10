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
    var BattlefieldProp_Drinks = (function (_super) {
        __extends(BattlefieldProp_Drinks, _super);
        function BattlefieldProp_Drinks() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldProp_Drinks.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldProp_Drinks.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldPropTypeEnum.Drinks; },
            enumerable: true,
            configurable: true
        });
        BattlefieldProp_Drinks.New = function (pool, ownerBattlefield, id, atBoardId) {
            var newOne = pool == null ? new BattlefieldProp_Drinks() : pool.Get(BattlefieldProp_Drinks.ClassName, function () { return new BattlefieldProp_Drinks(); });
            newOne.Init_Prop(ownerBattlefield, id, atBoardId);
            return newOne;
        };
        BattlefieldProp_Drinks.ClassName = "BattlefieldProp_Drinks";
        return BattlefieldProp_Drinks;
    }(DayDayUp.BattlefieldProp));
    DayDayUp.BattlefieldProp_Drinks = BattlefieldProp_Drinks;
    __reflect(BattlefieldProp_Drinks.prototype, "DayDayUp.BattlefieldProp_Drinks");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldProp_Drinks.js.map