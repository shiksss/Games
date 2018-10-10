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
    var RoomController = (function (_super) {
        __extends(RoomController, _super);
        function RoomController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RoomController.prototype.OnEnd = function () { if (this.onEnd != null)
            this.onEnd(); };
        RoomController.prototype.Init = function (stageBattlefieldController) {
            this.stageBattlefieldController = stageBattlefieldController;
        };
        RoomController.prototype.Release = function () {
            this.stageBattlefieldController = null;
            _super.prototype.Release.call(this);
        };
        return RoomController;
    }(Lib.GameObjectComponent));
    DayDayUp.RoomController = RoomController;
    __reflect(RoomController.prototype, "DayDayUp.RoomController");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=RoomController.js.map