var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lib;
(function (Lib) {
    var PoolableObj = (function () {
        function PoolableObj() {
        }
        PoolableObj.prototype.Release = function () {
            if (this.pool == null) {
                console.info("重复Release");
                return;
            }
            this.pool.Free(this);
            this.pool = null;
        };
        return PoolableObj;
    }());
    Lib.PoolableObj = PoolableObj;
    __reflect(PoolableObj.prototype, "Lib.PoolableObj", ["Lib.IPoolableObj"]);
    var ObjectPool = (function () {
        function ObjectPool() {
            this.stacks = new Lib.Dictionary();
        }
        ObjectPool.prototype.Get = function (className, onCreateNewPoolableObj) {
            if (this.stacks.ContainsKey(className)) {
                var stack = this.stacks.Get(className);
                if (stack.length > 0) {
                    var tempPoolableObj = stack.pop();
                    tempPoolableObj.pool = this;
                    return tempPoolableObj;
                }
            }
            // console.info("未命中");
            var newPoolableObj = onCreateNewPoolableObj();
            newPoolableObj.pool = this;
            return newPoolableObj;
        };
        ObjectPool.prototype.Free = function (poolableObj) {
            var stack;
            if (this.stacks.ContainsKey(poolableObj.className)) {
                stack = this.stacks.Get(poolableObj.className);
            }
            else {
                stack = new Array();
                this.stacks.Set(poolableObj.className, stack);
            }
            poolableObj.pool = null;
            stack.push(poolableObj);
        };
        ObjectPool.prototype.Clear = function (className) {
            this.stacks.Remove(className);
        };
        ObjectPool.prototype.ClearAll = function () {
            this.stacks.Clear();
        };
        ObjectPool.Instance = new ObjectPool();
        return ObjectPool;
    }());
    Lib.ObjectPool = ObjectPool;
    __reflect(ObjectPool.prototype, "Lib.ObjectPool");
})(Lib || (Lib = {}));
//# sourceMappingURL=ObjectPool.js.map