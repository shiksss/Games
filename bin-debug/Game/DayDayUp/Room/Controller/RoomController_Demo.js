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
    var RoomController_Demo = (function (_super) {
        __extends(RoomController_Demo, _super);
        function RoomController_Demo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = RoomController_Demo.ClassName;
            return _this;
        }
        RoomController_Demo.New = function (pool, stageBattlefieldController) {
            var newOne = pool == null ? new RoomController_Demo() : pool.Get(RoomController_Demo.ClassName, function () { return new RoomController_Demo(); });
            newOne.Init(stageBattlefieldController);
            return newOne;
        };
        RoomController_Demo.NewWithGameObject = function (width, height) {
            var gameObject = Lib.GameObject.New(Lib.ObjectPool.Instance);
            var battlefield = new DayDayUp.Battlefield(new DayDayUp.BattlefieldSetting());
            var stageBattlefield = DayDayUp.StageBattlefield.New(gameObject.pool, width, height - width / 4, battlefield);
            gameObject.components.Add(stageBattlefield);
            var stageBattlefieldController = DayDayUp.StageBattlefieldController_Ai.New(gameObject.pool, stageBattlefield);
            gameObject.components.Add(stageBattlefieldController);
            var roomController = RoomController_Demo.New(gameObject.pool, stageBattlefieldController);
            gameObject.components.Add(roomController);
            return roomController;
        };
        RoomController_Demo.prototype.Update = function () {
            _super.prototype.Update.call(this);
            var mainPlayer = this.stageBattlefieldController.stageBattlefield.battlefield.MainPlayer;
            if (mainPlayer != null) {
                switch (mainPlayer.state) {
                    case DayDayUp.BattlefieldPlayerStateEnum.Dead: {
                        this.OnEnd();
                        break;
                    }
                }
            }
        };
        RoomController_Demo.ClassName = "RoomController_Demo";
        return RoomController_Demo;
    }(DayDayUp.RoomController));
    DayDayUp.RoomController_Demo = RoomController_Demo;
    __reflect(RoomController_Demo.prototype, "DayDayUp.RoomController_Demo");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=RoomController_Demo.js.map