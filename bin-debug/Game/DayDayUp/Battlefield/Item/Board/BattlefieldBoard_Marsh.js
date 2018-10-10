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
    var BattlefieldBoard_Marsh = (function (_super) {
        __extends(BattlefieldBoard_Marsh, _super);
        function BattlefieldBoard_Marsh() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldBoard_Marsh.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldBoard_Marsh.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldBoardTypeEnum.Marsh; },
            enumerable: true,
            configurable: true
        });
        BattlefieldBoard_Marsh.prototype.GetGroundOffsetMax = function () {
            return this.ownerBattlefield.setting.groundOffsetMax_Marsh;
        };
        BattlefieldBoard_Marsh.prototype.GetGroundOffsetPerFrame = function () {
            return this.ownerBattlefield.setting.groundOffsetPerFrame_Marsh;
        };
        BattlefieldBoard_Marsh.prototype.GetPlayerRunSpeedRate = function () {
            return 0.9;
        };
        BattlefieldBoard_Marsh.prototype.GetPlayerJumpSpeedRate = function () {
            return 0.9;
        };
        BattlefieldBoard_Marsh.prototype.GetPlayerSuperJumpSpeedRate = function () {
            return 0.9;
        };
        BattlefieldBoard_Marsh.New = function (pool, ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style) {
            var newOne = pool == null ? new BattlefieldBoard_Marsh() : pool.Get(BattlefieldBoard_Marsh.ClassName, function () { return new BattlefieldBoard_Marsh(); });
            newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);
            return newOne;
        };
        BattlefieldBoard_Marsh.ClassName = "BattlefieldBoard_Marsh";
        return BattlefieldBoard_Marsh;
    }(DayDayUp.BattlefieldBoard));
    DayDayUp.BattlefieldBoard_Marsh = BattlefieldBoard_Marsh;
    __reflect(BattlefieldBoard_Marsh.prototype, "DayDayUp.BattlefieldBoard_Marsh");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldBoard_Marsh.js.map