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
    var SubScreenBattlefield_Solo = (function (_super) {
        __extends(SubScreenBattlefield_Solo, _super);
        function SubScreenBattlefield_Solo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(SubScreenBattlefield_Solo.prototype, "ClassName", {
            get: function () { return "SubScreenBattlefield_Solo"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SubScreenBattlefield_Solo.prototype, "BGMFilePath", {
            get: function () { return "resource/Sound/BGM/BGM_Main.mp3"; },
            enumerable: true,
            configurable: true
        });
        SubScreenBattlefield_Solo.prototype.GetResGroupNames = function () {
            var resGroupNames = new Lib.List();
            resGroupNames.Add("Battlefield");
            return resGroupNames;
        };
        SubScreenBattlefield_Solo.prototype.Start = function () {
            // await platform.login();
            // const userInfo = await platform.getUserInfo();
            // console.log(userInfo);
            var _this = this;
            var ui = new DayDayUp.RoomController_SoloUI(true, "DayDayUp", DayDayUp.RoomController_Solo.ClassName, null);
            this.DisplayRoot.addChild(ui);
            var battlefield = new DayDayUp.Battlefield(new DayDayUp.BattlefieldSetting());
            this.roomController = DayDayUp.RoomController_Solo.NewWithGameObject(this.owner.stage.stageWidth, this.owner.stage.stageHeight, battlefield, ui);
            this.roomController.onEnd = function () {
                _this.owner.ChangeTo(new DayDayUp.SubScreenMain());
            };
            this.DisplayRoot.addChildAt(this.roomController.GameObject, 0);
        };
        return SubScreenBattlefield_Solo;
    }(Lib.SubScreen));
    DayDayUp.SubScreenBattlefield_Solo = SubScreenBattlefield_Solo;
    __reflect(SubScreenBattlefield_Solo.prototype, "DayDayUp.SubScreenBattlefield_Solo");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=SubScreenBattlefield_Solo.js.map