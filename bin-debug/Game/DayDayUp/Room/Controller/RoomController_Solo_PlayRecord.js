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
    var RoomController_Solo_PlayRecord = (function (_super) {
        __extends(RoomController_Solo_PlayRecord, _super);
        function RoomController_Solo_PlayRecord() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = RoomController_Solo_PlayRecord.ClassName;
            return _this;
        }
        RoomController_Solo_PlayRecord.New = function (pool, stageBattlefieldController, ui) {
            var newOne = pool == null ? new RoomController_Solo_PlayRecord() : pool.Get(RoomController_Solo_PlayRecord.ClassName, function () { return new RoomController_Solo_PlayRecord(); });
            newOne.Init(stageBattlefieldController);
            newOne.ui = ui;
            return newOne;
        };
        RoomController_Solo_PlayRecord.NewWithGameObject = function (width, height, battlefield, ui) {
            var gameObject = Lib.GameObject.New(Lib.ObjectPool.Instance);
            var stageBattlefield = DayDayUp.StageBattlefield.New(gameObject.pool, width, height - width / 4, battlefield);
            gameObject.components.Add(stageBattlefield);
            var stageBattlefieldController = DayDayUp.StageBattlefieldController_Ai.New(gameObject.pool, stageBattlefield);
            gameObject.components.Add(stageBattlefieldController);
            var roomController = RoomController_Solo_PlayRecord.New(gameObject.pool, stageBattlefieldController, ui);
            gameObject.components.Add(roomController);
            return roomController;
        };
        RoomController_Solo_PlayRecord.ClassName = "RoomController_Solo_PlayRecord";
        return RoomController_Solo_PlayRecord;
    }(DayDayUp.RoomController_Solo));
    DayDayUp.RoomController_Solo_PlayRecord = RoomController_Solo_PlayRecord;
    __reflect(RoomController_Solo_PlayRecord.prototype, "DayDayUp.RoomController_Solo_PlayRecord");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=RoomController_Solo_PlayRecord.js.map