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
var KHDXS;
(function (KHDXS) {
    var SubScreenMain = (function (_super) {
        __extends(SubScreenMain, _super);
        function SubScreenMain() {
            return _super !== null && _super.apply(this, arguments) || this;
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
            var playCount = KHDXS.LocalSetting.Instance.PlayCount;
            this.ui = new KHDXS.SubScreenMainUI(true, "KHDXS", this.ClassName, function () {
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
                this.ui.list_test.itemRenderer = KHDXS.ListItem_Test;
            }
            this.CreatRoomController();
        };
        SubScreenMain.prototype.CreatRoomController = function () {
        };
        return SubScreenMain;
    }(Lib.SubScreen));
    KHDXS.SubScreenMain = SubScreenMain;
    __reflect(SubScreenMain.prototype, "KHDXS.SubScreenMain");
})(KHDXS || (KHDXS = {}));
//# sourceMappingURL=SubScreenMain.js.map