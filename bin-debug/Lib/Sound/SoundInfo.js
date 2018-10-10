var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lib;
(function (Lib) {
    var SoundStateEnum;
    (function (SoundStateEnum) {
        SoundStateEnum[SoundStateEnum["Normal"] = 0] = "Normal";
        SoundStateEnum[SoundStateEnum["Loading"] = 1] = "Loading";
        SoundStateEnum[SoundStateEnum["Playing"] = 2] = "Playing";
    })(SoundStateEnum = Lib.SoundStateEnum || (Lib.SoundStateEnum = {}));
    ;
    var SoundInfo = (function () {
        function SoundInfo(owner) {
            this.sound = null;
            this.channel = null;
            this.state = SoundStateEnum.Normal;
            this.owner = owner;
        }
        SoundInfo.prototype.Play = function (name, volume, loopCount) {
            this.sound = this.owner.PopSound();
            this.name = name;
            this.volume = volume;
            this.loopCount = loopCount;
            this.state = SoundStateEnum.Loading;
            this.sound.addEventListener(egret.Event.COMPLETE, this.LoadOver, this);
            this.sound.addEventListener(egret.IOErrorEvent.IO_ERROR, this.LoadError, this);
            this.sound.load(name);
        };
        SoundInfo.prototype.LoadOver = function () {
            this.sound.removeEventListener(egret.Event.COMPLETE, this.LoadOver, this);
            this.sound.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.LoadError, this);
            this.state = SoundStateEnum.Playing;
            this.channel = this.sound.play(0, this.loopCount);
            this.channel.volume = this.volume;
            this.channel.addEventListener(egret.Event.SOUND_COMPLETE, this.PlayOver, this);
        };
        SoundInfo.prototype.LoadError = function () {
            this.sound.removeEventListener(egret.Event.COMPLETE, this.LoadOver, this);
            this.sound.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.LoadError, this);
            this.End();
            console.log("播放声音失败: " + this.name);
        };
        SoundInfo.prototype.PlayOver = function () {
            this.channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.PlayOver, this);
            this.End();
        };
        SoundInfo.prototype.Stop = function () {
            if (this.channel != null) {
                this.channel.stop();
            }
            this.End();
        };
        SoundInfo.prototype.End = function () {
            this.state = SoundStateEnum.Normal;
            this.owner.PushSound(this.sound);
            this.sound = null;
            this.channel = null;
        };
        return SoundInfo;
    }());
    Lib.SoundInfo = SoundInfo;
    __reflect(SoundInfo.prototype, "Lib.SoundInfo");
})(Lib || (Lib = {}));
//# sourceMappingURL=SoundInfo.js.map