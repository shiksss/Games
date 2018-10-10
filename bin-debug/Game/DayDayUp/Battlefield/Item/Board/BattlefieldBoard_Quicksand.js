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
    var BattlefieldBoard_Quicksand = (function (_super) {
        __extends(BattlefieldBoard_Quicksand, _super);
        function BattlefieldBoard_Quicksand() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldBoard_Quicksand.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldBoard_Quicksand.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldBoardTypeEnum.Quicksand; },
            enumerable: true,
            configurable: true
        });
        BattlefieldBoard_Quicksand.prototype.GetPlayerRunSpeedRate = function () {
            return 0.95;
        };
        BattlefieldBoard_Quicksand.prototype.GetPlayerJumpSpeedRate = function () {
            return 0.95;
        };
        BattlefieldBoard_Quicksand.prototype.GetPlayerSuperJumpSpeedRate = function () {
            return 0.95;
        };
        BattlefieldBoard_Quicksand.New = function (pool, ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style) {
            var newOne = pool == null ? new BattlefieldBoard_Quicksand() : pool.Get(BattlefieldBoard_Quicksand.ClassName, function () { return new BattlefieldBoard_Quicksand(); });
            newOne.Init_Board_Quicksand(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);
            return newOne;
        };
        BattlefieldBoard_Quicksand.prototype.Init_Board_Quicksand = function (ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style) {
            _super.prototype.Init_Board.call(this, ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);
            this.leftLifeFrameCount = this.ownerBattlefield.setting.lifeFrameCount_Quicksand;
        };
        BattlefieldBoard_Quicksand.prototype.Update = function () {
            var _this = this;
            _super.prototype.Update.call(this);
            this.ownerBattlefield.players.ForEach(function (key, value) {
                if (!_this.needRemoved && value.AtBoardId == _this.id) {
                    if (_this.leftLifeFrameCount <= 0) {
                        _this.needRemoved = true;
                    }
                    else {
                        _this.leftLifeFrameCount -= value.ElapseLifePerFrame_Quicksand;
                    }
                }
            });
        };
        BattlefieldBoard_Quicksand.ClassName = "BattlefieldBoard_Quicksand";
        return BattlefieldBoard_Quicksand;
    }(DayDayUp.BattlefieldBoard));
    DayDayUp.BattlefieldBoard_Quicksand = BattlefieldBoard_Quicksand;
    __reflect(BattlefieldBoard_Quicksand.prototype, "DayDayUp.BattlefieldBoard_Quicksand");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldBoard_Quicksand.js.map