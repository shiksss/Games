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
    var BattlefieldBoard_Spring = (function (_super) {
        __extends(BattlefieldBoard_Spring, _super);
        function BattlefieldBoard_Spring() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldBoard_Spring.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldBoard_Spring.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldBoardTypeEnum.Spring; },
            enumerable: true,
            configurable: true
        });
        BattlefieldBoard_Spring.prototype.GetPlayerJumpSpeedRate = function () {
            return 2;
        };
        BattlefieldBoard_Spring.prototype.GetPlayerSuperJumpSpeedRate = function () {
            return 2;
        };
        BattlefieldBoard_Spring.New = function (pool, ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style) {
            var newOne = pool == null ? new BattlefieldBoard_Spring() : pool.Get(BattlefieldBoard_Spring.ClassName, function () { return new BattlefieldBoard_Spring(); });
            newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);
            return newOne;
        };
        BattlefieldBoard_Spring.ClassName = "BattlefieldBoard_Spring";
        return BattlefieldBoard_Spring;
    }(DayDayUp.BattlefieldBoard));
    DayDayUp.BattlefieldBoard_Spring = BattlefieldBoard_Spring;
    __reflect(BattlefieldBoard_Spring.prototype, "DayDayUp.BattlefieldBoard_Spring");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldBoard_Spring.js.map