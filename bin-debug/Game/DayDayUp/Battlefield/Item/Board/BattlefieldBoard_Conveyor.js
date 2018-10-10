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
    var BattlefieldBoard_Conveyor = (function (_super) {
        __extends(BattlefieldBoard_Conveyor, _super);
        function BattlefieldBoard_Conveyor() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldBoard_Conveyor.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldBoard_Conveyor.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldBoardTypeEnum.Conveyor; },
            enumerable: true,
            configurable: true
        });
        BattlefieldBoard_Conveyor.prototype.GetGroundSpeed = function () {
            return this.ownerBattlefield.setting.runSpeed * 0.5 * (this.faceToRight ? 1 : -1);
        };
        BattlefieldBoard_Conveyor.New = function (pool, ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style) {
            var newOne = pool == null ? new BattlefieldBoard_Conveyor() : pool.Get(BattlefieldBoard_Conveyor.ClassName, function () { return new BattlefieldBoard_Conveyor(); });
            newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);
            return newOne;
        };
        BattlefieldBoard_Conveyor.ClassName = "BattlefieldBoard_Conveyor";
        return BattlefieldBoard_Conveyor;
    }(DayDayUp.BattlefieldBoard));
    DayDayUp.BattlefieldBoard_Conveyor = BattlefieldBoard_Conveyor;
    __reflect(BattlefieldBoard_Conveyor.prototype, "DayDayUp.BattlefieldBoard_Conveyor");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldBoard_Conveyor.js.map