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
    var BattlefieldBoard_Normal = (function (_super) {
        __extends(BattlefieldBoard_Normal, _super);
        function BattlefieldBoard_Normal() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldBoard_Normal.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldBoard_Normal.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldBoardTypeEnum.Normal; },
            enumerable: true,
            configurable: true
        });
        BattlefieldBoard_Normal.New = function (pool, ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style) {
            var newOne = pool == null ? new BattlefieldBoard_Normal() : pool.Get(BattlefieldBoard_Normal.ClassName, function () { return new BattlefieldBoard_Normal(); });
            newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);
            return newOne;
        };
        BattlefieldBoard_Normal.ClassName = "BattlefieldBoard_Normal";
        return BattlefieldBoard_Normal;
    }(DayDayUp.BattlefieldBoard));
    DayDayUp.BattlefieldBoard_Normal = BattlefieldBoard_Normal;
    __reflect(BattlefieldBoard_Normal.prototype, "DayDayUp.BattlefieldBoard_Normal");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldBoard_Normal.js.map