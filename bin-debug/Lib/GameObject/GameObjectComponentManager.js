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
    var GameObjectComponentManager = (function (_super) {
        __extends(GameObjectComponentManager, _super);
        function GameObjectComponentManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = GameObjectComponentManager.ClassName;
            _this.components = new Lib.List();
            return _this;
        }
        GameObjectComponentManager.New = function (pool, gameObject) {
            var newOne = pool == null ? new GameObjectComponentManager() : pool.Get(GameObjectComponentManager.ClassName, function () { return new GameObjectComponentManager(); });
            newOne.Init(gameObject);
            return newOne;
        };
        GameObjectComponentManager.prototype.Init = function (gameObject) {
            this.gameObject = gameObject;
        };
        GameObjectComponentManager.prototype.Release = function () {
            this.components.ForEach(function (index, component) {
                component.Release();
            });
            this.components.Clear();
            this.gameObject = null;
            _super.prototype.Release.call(this);
        };
        GameObjectComponentManager.prototype.Get = function (type) {
            this.components.ForEach(function (index, component) {
                if (typeof component == type) {
                    return component;
                }
            });
            return null;
        };
        GameObjectComponentManager.prototype.Add = function (component) {
            component.ownerComponentManager = this;
            this.components.Add(component);
            return component;
        };
        GameObjectComponentManager.prototype.Remove = function (type) {
            var _this = this;
            this.components.ForEachInverted(function (index, component) {
                if (typeof component == type) {
                    component.Release();
                    _this.components.RemoveAt(index);
                }
            });
        };
        GameObjectComponentManager.prototype.Clear = function () {
            var _this = this;
            this.components.ForEachInverted(function (index, component) {
                component.Release();
                _this.components.RemoveAt(index);
            });
        };
        GameObjectComponentManager.prototype.Start = function () {
            this.components.ForEach(function (index, component) {
                component.Start();
            });
        };
        GameObjectComponentManager.prototype.Update = function () {
            this.components.ForEach(function (index, component) {
                if (component.enabled) {
                    component.Update();
                }
            });
        };
        GameObjectComponentManager.ClassName = "GameObjectComponentManager";
        return GameObjectComponentManager;
    }(Lib.PoolableObj));
    Lib.GameObjectComponentManager = GameObjectComponentManager;
    __reflect(GameObjectComponentManager.prototype, "Lib.GameObjectComponentManager");
})(Lib || (Lib = {}));
//# sourceMappingURL=GameObjectComponentManager.js.map