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
    var StageBattlefieldController_Ai = (function (_super) {
        __extends(StageBattlefieldController_Ai, _super);
        function StageBattlefieldController_Ai() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldController_Ai.ClassName;
            return _this;
        }
        StageBattlefieldController_Ai.New = function (pool, stageBattlefield) {
            var newOne = pool == null ? new StageBattlefieldController_Ai() : pool.Get(StageBattlefieldController_Ai.ClassName, function () { return new StageBattlefieldController_Ai(); });
            newOne.Init(stageBattlefield);
            return newOne;
        };
        StageBattlefieldController_Ai.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.stageBattlefield.players.ForEach(function (key, value) {
                value.AiEnabled = true;
            });
        };
        StageBattlefieldController_Ai.prototype.Update = function () {
            _super.prototype.Update.call(this);
            var now = egret.getTimer() / 1000;
            var toFrameIndex = Math.floor((now - this.startTime) * this.stageBattlefield.battlefield.setting.fps);
            while (this.stageBattlefield.battlefield.Update(toFrameIndex, this.stageBattlefield.onHoldings)) {
                if (now - egret.getTimer() / 1000 >= 0.5) {
                    break;
                }
            }
            this.stageBattlefield.TrySynByData();
        };
        StageBattlefieldController_Ai.ClassName = "StageBattlefieldController_Ai";
        return StageBattlefieldController_Ai;
    }(DayDayUp.StageBattlefieldController));
    DayDayUp.StageBattlefieldController_Ai = StageBattlefieldController_Ai;
    __reflect(StageBattlefieldController_Ai.prototype, "DayDayUp.StageBattlefieldController_Ai");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldController_Ai.js.map