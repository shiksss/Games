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
    var StageBattlefieldController_Manual = (function (_super) {
        __extends(StageBattlefieldController_Manual, _super);
        function StageBattlefieldController_Manual() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldController_Manual.ClassName;
            return _this;
        }
        StageBattlefieldController_Manual.New = function (pool, stageBattlefield) {
            var newOne = pool == null ? new StageBattlefieldController_Manual() : pool.Get(StageBattlefieldController_Manual.ClassName, function () { return new StageBattlefieldController_Manual(); });
            newOne.Init(stageBattlefield);
            return newOne;
        };
        StageBattlefieldController_Manual.prototype.Start = function () {
            var _this = this;
            _super.prototype.Start.call(this);
            this.stageBattlefield.players.ForEach(function (key, value) {
                value.AiEnabled = value.Id != _this.stageBattlefield.battlefield.mainPlayerId;
            });
            this.GameObject.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
            this.GameObject.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchEnd, this);
            this.GameObject.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnTouchEnd, this);
            this.GameObject.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchEnd, this);
        };
        StageBattlefieldController_Manual.prototype.Release = function () {
            this.GameObject.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
            this.GameObject.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchEnd, this);
            this.GameObject.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnTouchEnd, this);
            this.GameObject.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchEnd, this);
            _super.prototype.Release.call(this);
        };
        StageBattlefieldController_Manual.prototype.Update = function () {
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
        StageBattlefieldController_Manual.prototype.OnTouchBegin = function (event) {
            this.stageBattlefield.onHoldings.Set(this.stageBattlefield.battlefield.mainPlayerId, true);
        };
        StageBattlefieldController_Manual.prototype.OnTouchEnd = function (event) {
            this.stageBattlefield.onHoldings.Set(this.stageBattlefield.battlefield.mainPlayerId, false);
        };
        StageBattlefieldController_Manual.ClassName = "StageBattlefieldController_Manual";
        return StageBattlefieldController_Manual;
    }(DayDayUp.StageBattlefieldController));
    DayDayUp.StageBattlefieldController_Manual = StageBattlefieldController_Manual;
    __reflect(StageBattlefieldController_Manual.prototype, "DayDayUp.StageBattlefieldController_Manual");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldController_Manual.js.map