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
    var BattlefieldBoard_Bubble = (function (_super) {
        __extends(BattlefieldBoard_Bubble, _super);
        function BattlefieldBoard_Bubble() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldBoard_Bubble.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldBoard_Bubble.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldBoardTypeEnum.Bubble; },
            enumerable: true,
            configurable: true
        });
        BattlefieldBoard_Bubble.prototype.GetPlayerRunSpeedRate = function () {
            return 0.95;
        };
        BattlefieldBoard_Bubble.prototype.GetPlayerJumpSpeedRate = function () {
            return 1.5;
        };
        BattlefieldBoard_Bubble.prototype.GetPlayerSuperJumpSpeedRate = function () {
            return 1.5;
        };
        BattlefieldBoard_Bubble.New = function (pool, ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style) {
            var newOne = pool == null ? new BattlefieldBoard_Bubble() : pool.Get(BattlefieldBoard_Bubble.ClassName, function () { return new BattlefieldBoard_Bubble(); });
            newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);
            return newOne;
        };
        BattlefieldBoard_Bubble.ClassName = "BattlefieldBoard_Bubble";
        return BattlefieldBoard_Bubble;
    }(DayDayUp.BattlefieldBoard));
    DayDayUp.BattlefieldBoard_Bubble = BattlefieldBoard_Bubble;
    __reflect(BattlefieldBoard_Bubble.prototype, "DayDayUp.BattlefieldBoard_Bubble");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldBoard_Bubble.js.map