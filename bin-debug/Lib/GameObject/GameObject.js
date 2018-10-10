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
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = GameObject.ClassName;
            _this.components = null;
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "Inited", {
            get: function () { return this._inited; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "ParentGameObject", {
            get: function () { return this.parent; },
            enumerable: true,
            configurable: true
        });
        GameObject.New = function (pool, enabled) {
            if (enabled === void 0) { enabled = true; }
            var newOne = pool == null ? new GameObject() : pool.Get(GameObject.ClassName, function () { return new GameObject(); });
            newOne.Init(enabled);
            return newOne;
        };
        GameObject.prototype.Init = function (enabled) {
            if (enabled === void 0) { enabled = true; }
            this._inited = false;
            this.enabled = enabled;
            this.components = Lib.GameObjectComponentManager.New(this.pool, this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.OnConfigComplete, this);
        };
        GameObject.prototype.Release = function () {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Release, this);
            this.enabled = false;
            if (this.components != null) {
                this.components.Release();
                this.components = null;
            }
            this.removeChildren();
            if (this.pool == null) {
                console.info("重复Release");
                return;
            }
            this.pool.Free(this);
            this.pool = null;
        };
        GameObject.prototype.OnConfigComplete = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.OnConfigComplete, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Release, this);
            this._inited = true;
            this.Ready();
            if (this.enabled) {
                this.addEventListener(egret.Event.ENTER_FRAME, this.Update, this);
            }
        };
        GameObject.prototype.RemoveSelf = function () {
            if (this.parent != null) {
                this.parent.removeChild(this);
            }
        };
        GameObject.prototype.Ready = function () {
            this.components.Start();
        };
        GameObject.prototype.Update = function () {
            if (this.components != null) {
                this.components.Update();
            }
        };
        GameObject.ClassName = "GameObject";
        return GameObject;
    }(GameObjectBase));
    Lib.GameObject = GameObject;
    __reflect(GameObject.prototype, "Lib.GameObject", ["Lib.IPoolableObj"]);
})(Lib || (Lib = {}));
//# sourceMappingURL=GameObject.js.map