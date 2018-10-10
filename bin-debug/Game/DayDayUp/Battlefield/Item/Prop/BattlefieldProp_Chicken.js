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
    var BattlefieldProp_Chicken = (function (_super) {
        __extends(BattlefieldProp_Chicken, _super);
        function BattlefieldProp_Chicken() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldProp_Chicken.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldProp_Chicken.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldPropTypeEnum.Chicken; },
            enumerable: true,
            configurable: true
        });
        BattlefieldProp_Chicken.prototype.TouchPlayer = function (player) {
            _super.prototype.TouchPlayer.call(this, player);
            player.curSuperForce += player.ownerBattlefield.setting.prop_SuperForce_Chicken;
            if (player.curSuperForce > player.ownerBattlefield.setting.superForceMax) {
                player.curSuperForce = player.ownerBattlefield.setting.superForceMax;
            }
        };
        BattlefieldProp_Chicken.New = function (pool, ownerBattlefield, id, atBoardId) {
            var newOne = pool == null ? new BattlefieldProp_Chicken() : pool.Get(BattlefieldProp_Chicken.ClassName, function () { return new BattlefieldProp_Chicken(); });
            newOne.Init_Prop(ownerBattlefield, id, atBoardId);
            return newOne;
        };
        BattlefieldProp_Chicken.ClassName = "BattlefieldProp_Chicken";
        return BattlefieldProp_Chicken;
    }(DayDayUp.BattlefieldProp));
    DayDayUp.BattlefieldProp_Chicken = BattlefieldProp_Chicken;
    __reflect(BattlefieldProp_Chicken.prototype, "DayDayUp.BattlefieldProp_Chicken");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldProp_Chicken.js.map