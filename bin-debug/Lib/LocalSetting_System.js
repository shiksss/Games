var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lib;
(function (Lib) {
    var LocalSetting_System = (function () {
        function LocalSetting_System() {
        }
        Object.defineProperty(LocalSetting_System, "Instance", {
            get: function () {
                return LocalSetting_System.instance;
            },
            enumerable: true,
            configurable: true
        });
        ;
        LocalSetting_System.GetNumber = function (key, defaultValue) {
            var value = parseInt(egret.localStorage.getItem(key), 10);
            if (isNaN(value)) {
                return defaultValue;
            }
            return value;
        };
        Object.defineProperty(LocalSetting_System.prototype, "BGMVolume", {
            get: function () {
                if (isNaN(this.bgmVolume)) {
                    this.bgmVolume = LocalSetting_System.GetNumber("BGMVolume", 0.5);
                }
                return this.bgmVolume;
            },
            set: function (value) {
                egret.localStorage.setItem("BGMVolume", value.toString());
                this.bgmVolume = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LocalSetting_System.prototype, "SFXVolume", {
            get: function () {
                if (isNaN(this.sfxVolume)) {
                    this.sfxVolume = LocalSetting_System.GetNumber("SFXVolume", 0.8);
                }
                return this.sfxVolume;
            },
            set: function (value) {
                egret.localStorage.setItem("SFXVolume", value.toString());
                this.sfxVolume = value;
            },
            enumerable: true,
            configurable: true
        });
        LocalSetting_System.instance = new LocalSetting_System();
        return LocalSetting_System;
    }());
    Lib.LocalSetting_System = LocalSetting_System;
    __reflect(LocalSetting_System.prototype, "Lib.LocalSetting_System");
})(Lib || (Lib = {}));
//# sourceMappingURL=LocalSetting_System.js.map