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
    var SubScreenMain = (function (_super) {
        __extends(SubScreenMain, _super);
        function SubScreenMain() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.roomController = null;
            return _this;
        }
        Object.defineProperty(SubScreenMain.prototype, "ClassName", {
            get: function () { return "SubScreenMain"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SubScreenMain.prototype, "BGMFilePath", {
            get: function () { return "resource/Sound/BGM/BGM_Main.mp3"; },
            enumerable: true,
            configurable: true
        });
        SubScreenMain.prototype.GetResGroupNames = function () {
            var resGroupNames = new Lib.List();
            resGroupNames.Add("preload");
            resGroupNames.Add("Battlefield");
            return resGroupNames;
        };
        SubScreenMain.prototype.Start = function () {
            var _this = this;
            var playCount = DayDayUp.LocalSetting.Instance.PlayCount;
            this.ui = new DayDayUp.SubScreenMainUI(true, "DayDayUp", this.ClassName, function () {
                _this.ui.button_FirstStart.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.OnButtonClicked_Start, _this);
                _this.ui.button_Start.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.OnButtonClicked_Start, _this);
            });
            this.ui.group_First.visible = playCount <= 0;
            this.ui.group_Main.visible = playCount > 0;
            this.DisplayRoot.addChild(this.ui);
            {
                var collection = new eui.ArrayCollection();
                for (var i = 0; i < 20; i++) {
                    collection.addItem({ "label": "Text" + i });
                }
                this.ui.list_test.dataProvider = collection;
                this.ui.list_test.itemRenderer = DayDayUp.ListItem_Test;
            }
            this.CreatRoomController();
        };
        SubScreenMain.prototype.CreatRoomController = function () {
            var _this = this;
            this.roomController = DayDayUp.RoomController_Demo.NewWithGameObject(this.owner.stage.stageWidth, this.owner.stage.stageHeight);
            this.DisplayRoot.addChildAt(this.roomController.GameObject, 0);
            this.roomController.onEnd = function () {
                _this.roomController.GameObject.RemoveSelf();
                _this.CreatRoomController();
            };
        };
        SubScreenMain.prototype.OnButtonClicked_Start = function () {
            var _this = this;
            Lib.MessageBox.ShowYesNo(null, "测试", "开始游戏", function () {
                _this.owner.ChangeTo(new DayDayUp.SubScreenBattlefield_Solo());
                DayDayUp.LocalSetting.Instance.PlayCount++;
            });
        };
        SubScreenMain.prototype.OnButtonClicked_Start0 = function () {
            if (DayDayUp.SubScreenBattlefield_Solo_PlayRecord.lastRecord == null) {
                this.owner.ChangeTo(new DayDayUp.SubScreenBattlefield_Solo());
            }
            else {
                this.owner.ChangeTo(new DayDayUp.SubScreenBattlefield_Solo_PlayRecord());
            }
        };
        return SubScreenMain;
    }(Lib.SubScreen));
    DayDayUp.SubScreenMain = SubScreenMain;
    __reflect(SubScreenMain.prototype, "DayDayUp.SubScreenMain");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=SubScreenMain.js.map