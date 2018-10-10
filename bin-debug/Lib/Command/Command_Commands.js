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
    var Command_Commands = (function (_super) {
        __extends(Command_Commands, _super);
        function Command_Commands() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = Command_Commands.ClassName;
            _this.commands = new Lib.List();
            return _this;
        }
        Object.defineProperty(Command_Commands.prototype, "Count", {
            get: function () {
                return this.commands.Count;
            },
            enumerable: true,
            configurable: true
        });
        Command_Commands.New = function (pool, old, maxSpeed, endEvent) {
            if (old != null) {
                old.Release();
                old = null;
            }
            var newOne = pool == null ? new Command_Commands() : pool.Get(Command_Commands.ClassName, function () { return new Command_Commands(); });
            newOne.Init(maxSpeed, endEvent);
            return newOne;
        };
        Command_Commands.prototype.Release = function () {
            this.Clear();
            _super.prototype.Release.call(this);
        };
        Command_Commands.prototype.Add = function (command, replace) {
            if (replace === void 0) { replace = false; }
            if (replace) {
                for (var i = this.commands.Count - 1; i >= 0; i--) {
                    if (command.className == this.commands.Get(i).className) {
                        Lib.Command.Commands_RemoveAt(this.commands, i);
                    }
                }
            }
            this.commands.Add(command);
            return command;
        };
        Command_Commands.prototype.Clear = function () {
            Lib.Command.Commands_Clear(this.commands);
        };
        Command_Commands.prototype.Update = function () {
            _super.prototype.Update.call(this);
            for (var i = 0; i < this.commands.Count; i++) {
                this.commands.Get(i).Update();
            }
            //删除
            for (var i = this.commands.Count - 1; i >= 0; i--) {
                if (this.commands.Get(i).removed) {
                    Lib.Command.Commands_RemoveAt(this.commands, i);
                }
            }
            if (this.commands.Count <= 0) {
                this.End();
            }
        };
        Command_Commands.prototype.ClearTypeOf = function (className) {
            var result = false;
            for (var i = this.commands.Count - 1; i >= 0; i--) {
                if (className == this.commands.Get(i).className) {
                    Lib.Command.Commands_RemoveAt(this.commands, i);
                    result = true;
                }
            }
            return result;
        };
        Command_Commands.prototype.ContainsTypeOf = function (className) {
            for (var i = 0; i < this.commands.Count; i++) {
                if (className == this.commands.Get(i).className) {
                    return true;
                }
            }
            return false;
        };
        Command_Commands.prototype.ContainsTypesOf = function (classNames) {
            for (var i = 0; i < this.commands.Count; i++) {
                if (classNames.Contains(this.commands.Get(i).className)) {
                    return true;
                }
            }
            return false;
        };
        Command_Commands.ClassName = "Command_Commands";
        return Command_Commands;
    }(Lib.Command));
    Lib.Command_Commands = Command_Commands;
    __reflect(Command_Commands.prototype, "Lib.Command_Commands");
})(Lib || (Lib = {}));
//# sourceMappingURL=Command_Commands.js.map