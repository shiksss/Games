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
var Lib;
(function (Lib) {
    var Command = (function (_super) {
        __extends(Command, _super);
        function Command() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Command.prototype, "DeltaTime", {
            get: function () {
                return this.maxSpeed ? Number.MAX_VALUE : egret.getTimer() / 1000 - this.startTime;
            },
            enumerable: true,
            configurable: true
        });
        Command.prototype.Init = function (maxSpeed, endEvent) {
            this.maxSpeed = maxSpeed;
            this.endEvent = endEvent;
            this.started = false;
            this.removed = false;
        };
        Command.prototype.Start = function () {
            this.started = true;
            this.startTime = egret.getTimer() / 1000;
        };
        Command.prototype.Update = function () {
            if (!this.started) {
                this.Start();
            }
        };
        Command.prototype.End = function () {
            this.removed = true;
            if (this.endEvent != null) {
                this.endEvent(this);
            }
        };
        Command.prototype.Release = function () {
            this.endEvent = null;
            _super.prototype.Release.call(this);
        };
        Command.Commands_Clear = function (commands) {
            for (var i = 0; i < commands.Count; i++) {
                commands.Get(i).Release();
            }
            commands.Clear();
        };
        Command.Commands_RemoveAt = function (commands, index) {
            commands.Get(index).Release();
            commands.RemoveAt(index);
        };
        return Command;
    }(Lib.PoolableObj));
    Lib.Command = Command;
    __reflect(Command.prototype, "Lib.Command");
})(Lib || (Lib = {}));
//# sourceMappingURL=Command.js.map