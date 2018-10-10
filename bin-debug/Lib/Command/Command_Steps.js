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
    var Command_Steps = (function (_super) {
        __extends(Command_Steps, _super);
        function Command_Steps() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = Command_Steps.ClassName;
            _this.steps = new Lib.List();
            return _this;
        }
        Object.defineProperty(Command_Steps.prototype, "Count", {
            get: function () {
                return this.steps.Count;
            },
            enumerable: true,
            configurable: true
        });
        Command_Steps.New = function (pool, maxSpeed, endEvent) {
            var newOne = pool == null ? new Command_Steps() : pool.Get(Command_Steps.ClassName, function () { return new Command_Steps(); });
            newOne.Init(maxSpeed, endEvent);
            return newOne;
        };
        Command_Steps.prototype.Release = function () {
            this.Clear();
            _super.prototype.Release.call(this);
        };
        Command_Steps.prototype.Add = function (step) {
            this.steps.Add(step);
            return step;
        };
        Command_Steps.prototype.Clear = function () {
            Lib.Command.Commands_Clear(this.steps);
        };
        Command_Steps.prototype.Update = function () {
            _super.prototype.Update.call(this);
            //执行
            if (this.steps.Count > 0) {
                var step = this.steps.Get(0);
                step.Update();
                //删除
                if (step.removed) {
                    Lib.Command.Commands_RemoveAt(this.steps, 0);
                }
            }
            if (this.steps.Count <= 0) {
                this.End();
            }
        };
        Command_Steps.ClassName = "Command_Steps";
        return Command_Steps;
    }(Lib.Command));
    Lib.Command_Steps = Command_Steps;
    __reflect(Command_Steps.prototype, "Lib.Command_Steps");
})(Lib || (Lib = {}));
//# sourceMappingURL=Command_Steps.js.map