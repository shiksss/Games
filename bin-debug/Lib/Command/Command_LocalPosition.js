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
    var Command_LocalPosition = (function (_super) {
        __extends(Command_LocalPosition, _super);
        function Command_LocalPosition() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = Command_LocalPosition.ClassName;
            return _this;
        }
        Command_LocalPosition.New = function (pool, gameObject, startX, startY, endX, endY, lifeTime, mi, maxSpeed, endEvent) {
            var newOne = pool == null ? new Command_LocalPosition() : pool.Get(Command_LocalPosition.ClassName, function () { return new Command_LocalPosition(); });
            newOne.Init_GameObjectPosition(gameObject, startX, startY, endX, endY, lifeTime, mi, maxSpeed, endEvent);
            return newOne;
        };
        Command_LocalPosition.prototype.Init_GameObjectPosition = function (gameObject, startX, startY, endX, endY, lifeTime, mi, maxSpeed, endEvent) {
            _super.prototype.Init.call(this, maxSpeed, endEvent);
            this.gameObject = gameObject;
            this.startX = startX;
            this.startY = startY;
            this.endX = endX;
            this.endY = endY;
            this.lifeTime = lifeTime;
            this.mi = mi;
            gameObject.x = startX;
            gameObject.y = startY;
        };
        Command_LocalPosition.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (this.gameObject == null) {
                this.End();
                return;
            }
            var deltaTime = this.DeltaTime;
            if (deltaTime < this.lifeTime) {
                var rate = Math.pow(deltaTime / this.lifeTime, this.mi);
                this.gameObject.x = this.startX + (this.endX - this.startX) * rate;
                this.gameObject.y = this.startY + (this.endY - this.startY) * rate;
            }
            else {
                this.gameObject.x = this.endX;
                this.gameObject.y = this.endY;
                this.End();
            }
        };
        Command_LocalPosition.prototype.Release = function () {
            this.gameObject = null;
            _super.prototype.Release.call(this);
        };
        Command_LocalPosition.ClassName = "Command_LocalPosition";
        return Command_LocalPosition;
    }(Lib.Command));
    Lib.Command_LocalPosition = Command_LocalPosition;
    __reflect(Command_LocalPosition.prototype, "Lib.Command_LocalPosition");
})(Lib || (Lib = {}));
//# sourceMappingURL=Command_LocalPosition.js.map