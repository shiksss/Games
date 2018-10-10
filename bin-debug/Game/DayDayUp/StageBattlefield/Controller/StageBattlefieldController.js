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
    var StageBattlefieldController = (function (_super) {
        __extends(StageBattlefieldController, _super);
        function StageBattlefieldController() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.startTime = 0;
            return _this;
        }
        StageBattlefieldController.prototype.Init = function (stageBattlefield) {
            this.stageBattlefield = stageBattlefield;
            this.startTime = 0;
        };
        StageBattlefieldController.prototype.Release = function () {
            this.stageBattlefield = null;
            _super.prototype.Release.call(this);
        };
        StageBattlefieldController.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.startTime = egret.getTimer() / 1000;
        };
        return StageBattlefieldController;
    }(Lib.GameObjectComponent));
    DayDayUp.StageBattlefieldController = StageBattlefieldController;
    __reflect(StageBattlefieldController.prototype, "DayDayUp.StageBattlefieldController");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldController.js.map