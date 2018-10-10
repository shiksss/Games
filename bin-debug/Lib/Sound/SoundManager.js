var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lib;
(function (Lib) {
    var SoundManager = (function () {
        function SoundManager() {
            this.sounds = new Lib.List();
            this.soundInfoGroups = new Lib.Dictionary();
        }
        Object.defineProperty(SoundManager, "Instance", {
            get: function () {
                return SoundManager.instance;
            },
            enumerable: true,
            configurable: true
        });
        SoundManager.prototype.PopSound = function () {
            return this.sounds.Count > 0 ? this.sounds.Get(this.sounds.Count - 1) : new egret.Sound();
        };
        SoundManager.prototype.PushSound = function (sound) {
            this.sounds.Add(sound);
        };
        SoundManager.prototype.PlaySFX = function (name, volume, loopCount) {
            if (volume === void 0) { volume = 1; }
            if (loopCount === void 0) { loopCount = 1; }
            volume *= Lib.LocalSetting_System.Instance.SFXVolume;
            if (volume <= 0) {
                return;
            }
            var soundInfo = this.GetSoundInfo_New(name);
            soundInfo.Play(name, volume, loopCount);
        };
        SoundManager.prototype.PlayBGM = function (name, volume, loopCount) {
            if (volume === void 0) { volume = 1; }
            if (loopCount === void 0) { loopCount = -1; }
            volume *= Lib.LocalSetting_System.Instance.BGMVolume;
            if (volume <= 0) {
                return;
            }
            var soundInfo = this.GetSoundInfo_New(name);
            soundInfo.Play(name, volume, loopCount);
        };
        SoundManager.prototype.StopBGM = function (name) {
            var soundInfo = this.GetSoundInfo_Playing(name);
            if (soundInfo == null) {
                return;
            }
            soundInfo.Stop();
        };
        SoundManager.prototype.GetSoundInfo_Playing = function (name) {
            if (!this.soundInfoGroups.ContainsKey(name)) {
                return null;
            }
            var soundInfoGroup = this.soundInfoGroups.Get(name);
            var soundInfo = null;
            soundInfoGroup.ForEach(function (index, value) {
                if (value.state != Lib.SoundStateEnum.Normal) {
                    soundInfo = value;
                }
            }, function () { return soundInfo != null; });
            return soundInfo;
        };
        SoundManager.prototype.GetSoundInfo_New = function (name) {
            var soundInfoGroup = null;
            if (!this.soundInfoGroups.ContainsKey(name)) {
                soundInfoGroup = new Lib.List();
                this.soundInfoGroups.Set(name, soundInfoGroup);
            }
            else {
                soundInfoGroup = this.soundInfoGroups.Get(name);
            }
            var soundInfo = null;
            soundInfoGroup.ForEach(function (index, value) {
                if (value.state == Lib.SoundStateEnum.Normal) {
                    soundInfo = value;
                }
            }, function () { return soundInfo != null; });
            if (soundInfo == null) {
                soundInfo = new Lib.SoundInfo(this);
                soundInfoGroup.Add(soundInfo);
            }
            return soundInfo;
        };
        SoundManager.instance = new SoundManager();
        return SoundManager;
    }());
    Lib.SoundManager = SoundManager;
    __reflect(SoundManager.prototype, "Lib.SoundManager");
})(Lib || (Lib = {}));
//# sourceMappingURL=SoundManager.js.map