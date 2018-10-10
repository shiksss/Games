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
    var BattlefieldProp_SpringShoe = (function (_super) {
        __extends(BattlefieldProp_SpringShoe, _super);
        function BattlefieldProp_SpringShoe() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldProp_SpringShoe.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldProp_SpringShoe.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldPropTypeEnum.SpringShoe; },
            enumerable: true,
            configurable: true
        });
        BattlefieldProp_SpringShoe.New = function (pool, ownerBattlefield, id, atBoardId) {
            var newOne = pool == null ? new BattlefieldProp_SpringShoe() : pool.Get(BattlefieldProp_SpringShoe.ClassName, function () { return new BattlefieldProp_SpringShoe(); });
            newOne.Init_Prop(ownerBattlefield, id, atBoardId);
            return newOne;
        };
        BattlefieldProp_SpringShoe.ClassName = "BattlefieldProp_SpringShoe";
        return BattlefieldProp_SpringShoe;
    }(DayDayUp.BattlefieldProp));
    DayDayUp.BattlefieldProp_SpringShoe = BattlefieldProp_SpringShoe;
    __reflect(BattlefieldProp_SpringShoe.prototype, "DayDayUp.BattlefieldProp_SpringShoe");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldProp_SpringShoe.js.map