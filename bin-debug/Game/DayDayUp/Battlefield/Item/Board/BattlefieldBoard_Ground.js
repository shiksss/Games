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
    var BattlefieldBoard_Ground = (function (_super) {
        __extends(BattlefieldBoard_Ground, _super);
        function BattlefieldBoard_Ground() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldBoard_Ground.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldBoard_Ground.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldBoardTypeEnum.Ground; },
            enumerable: true,
            configurable: true
        });
        BattlefieldBoard_Ground.New = function (pool, ownerBattlefield, id, faceToRight) {
            var newOne = pool == null ? new BattlefieldBoard_Ground() : pool.Get(BattlefieldBoard_Ground.ClassName, function () { return new BattlefieldBoard_Ground(); });
            newOne.Init_Board_Ground(ownerBattlefield, id, faceToRight);
            return newOne;
        };
        BattlefieldBoard_Ground.prototype.Init_Board_Ground = function (ownerBattlefield, id, faceToRight) {
            _super.prototype.Init_Board.call(this, ownerBattlefield, id, faceToRight, ownerBattlefield.setting.showWidth, 0.6, DayDayUp.BattlefieldMapStyle.None);
        };
        BattlefieldBoard_Ground.ClassName = "BattlefieldBoard_Ground";
        return BattlefieldBoard_Ground;
    }(DayDayUp.BattlefieldBoard));
    DayDayUp.BattlefieldBoard_Ground = BattlefieldBoard_Ground;
    __reflect(BattlefieldBoard_Ground.prototype, "DayDayUp.BattlefieldBoard_Ground");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldBoard_Ground.js.map