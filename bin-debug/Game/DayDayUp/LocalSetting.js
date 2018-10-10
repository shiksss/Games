var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DayDayUp;
(function (DayDayUp) {
    var LocalSetting = (function () {
        function LocalSetting() {
        }
        Object.defineProperty(LocalSetting, "Instance", {
            get: function () {
                return LocalSetting.instance;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(LocalSetting.prototype, "PlayCount", {
            get: function () {
                if (isNaN(this.playCount)) {
                    this.playCount = Lib.LocalSetting_System.GetNumber("PlayCount", 0);
                }
                return this.playCount;
            },
            set: function (value) {
                egret.localStorage.setItem("PlayCount", value.toString());
                this.playCount = value;
            },
            enumerable: true,
            configurable: true
        });
        LocalSetting.instance = new LocalSetting();
        return LocalSetting;
    }());
    DayDayUp.LocalSetting = LocalSetting;
    __reflect(LocalSetting.prototype, "DayDayUp.LocalSetting");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=LocalSetting.js.map