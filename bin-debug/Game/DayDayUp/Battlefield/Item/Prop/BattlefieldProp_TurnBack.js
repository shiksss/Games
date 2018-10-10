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
    var BattlefieldProp_TurnBack = (function (_super) {
        __extends(BattlefieldProp_TurnBack, _super);
        function BattlefieldProp_TurnBack() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldProp_TurnBack.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldProp_TurnBack.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldPropTypeEnum.TurnBack; },
            enumerable: true,
            configurable: true
        });
        BattlefieldProp_TurnBack.prototype.TouchPlayer = function (player) {
            _super.prototype.TouchPlayer.call(this, player);
            player.faceToRight = !player.faceToRight;
        };
        BattlefieldProp_TurnBack.New = function (pool, ownerBattlefield, id, atBoardId) {
            var newOne = pool == null ? new BattlefieldProp_TurnBack() : pool.Get(BattlefieldProp_TurnBack.ClassName, function () { return new BattlefieldProp_TurnBack(); });
            newOne.Init_Prop(ownerBattlefield, id, atBoardId);
            return newOne;
        };
        BattlefieldProp_TurnBack.ClassName = "BattlefieldProp_TurnBack";
        return BattlefieldProp_TurnBack;
    }(DayDayUp.BattlefieldProp));
    DayDayUp.BattlefieldProp_TurnBack = BattlefieldProp_TurnBack;
    __reflect(BattlefieldProp_TurnBack.prototype, "DayDayUp.BattlefieldProp_TurnBack");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldProp_TurnBack.js.map