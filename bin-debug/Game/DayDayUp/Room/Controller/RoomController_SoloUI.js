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
    var RoomController_SoloUI = (function (_super) {
        __extends(RoomController_SoloUI, _super);
        function RoomController_SoloUI() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(RoomController_SoloUI.prototype, "LogicScale", {
            get: function () { return Lib.ViewManager.Instance.logicScreenWidth / 240; },
            enumerable: true,
            configurable: true
        });
        return RoomController_SoloUI;
    }(Lib.View));
    DayDayUp.RoomController_SoloUI = RoomController_SoloUI;
    __reflect(RoomController_SoloUI.prototype, "DayDayUp.RoomController_SoloUI");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=RoomController_SoloUI.js.map