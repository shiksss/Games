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
    var GameObjectComponent = (function (_super) {
        __extends(GameObjectComponent, _super);
        function GameObjectComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.enabled = true;
            return _this;
        }
        Object.defineProperty(GameObjectComponent.prototype, "GameObject", {
            get: function () { return this.ownerComponentManager == null ? null : this.ownerComponentManager.gameObject; },
            enumerable: true,
            configurable: true
        });
        GameObjectComponent.prototype.Start = function () { };
        GameObjectComponent.prototype.Update = function () { };
        GameObjectComponent.prototype.Release = function () {
            this.ownerComponentManager = null;
            _super.prototype.Release.call(this);
        };
        return GameObjectComponent;
    }(Lib.PoolableObj));
    Lib.GameObjectComponent = GameObjectComponent;
    __reflect(GameObjectComponent.prototype, "Lib.GameObjectComponent");
})(Lib || (Lib = {}));
//# sourceMappingURL=GameObjectComponent.js.map