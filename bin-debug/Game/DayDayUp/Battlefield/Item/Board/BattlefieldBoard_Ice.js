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
    var BattlefieldBoard_Ice = (function (_super) {
        __extends(BattlefieldBoard_Ice, _super);
        function BattlefieldBoard_Ice() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldBoard_Ice.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldBoard_Ice.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldBoardTypeEnum.Ice; },
            enumerable: true,
            configurable: true
        });
        BattlefieldBoard_Ice.prototype.GetPlayerRunSpeedRate = function () {
            return 1.5;
        };
        BattlefieldBoard_Ice.New = function (pool, ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style) {
            var newOne = pool == null ? new BattlefieldBoard_Ice() : pool.Get(BattlefieldBoard_Ice.ClassName, function () { return new BattlefieldBoard_Ice(); });
            newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);
            return newOne;
        };
        BattlefieldBoard_Ice.ClassName = "BattlefieldBoard_Ice";
        return BattlefieldBoard_Ice;
    }(DayDayUp.BattlefieldBoard));
    DayDayUp.BattlefieldBoard_Ice = BattlefieldBoard_Ice;
    __reflect(BattlefieldBoard_Ice.prototype, "DayDayUp.BattlefieldBoard_Ice");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldBoard_Ice.js.map