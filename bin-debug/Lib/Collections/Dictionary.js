var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lib;
(function (Lib) {
    var Dictionary = (function () {
        function Dictionary() {
            this.count = 0;
            this.items = new Array();
        }
        Object.defineProperty(Dictionary.prototype, "Count", {
            get: function () {
                return this.count;
            },
            enumerable: true,
            configurable: true
        });
        Dictionary.prototype.GetKeys = function () {
            var keys;
            for (var key in this.items) {
                keys.push(key);
            }
            return keys;
        };
        Dictionary.prototype.GetValues = function () {
            var values;
            for (var key in this.items) {
                values.push(this.items[key]);
            }
            return values;
        };
        Dictionary.prototype.Get = function (key) {
            return this.ContainsKey(key) ? this.items[key] : null;
        };
        Dictionary.prototype.Set = function (key, value) {
            if (!this.ContainsKey(key)) {
                this.count++;
            }
            this.items[key] = value;
        };
        Dictionary.prototype.Clear = function () {
            this.count = 0;
            this.items = {};
        };
        Dictionary.prototype.ContainsKey = function (key) {
            return key in this.items;
        };
        Dictionary.prototype.Remove = function (key) {
            if (!this.ContainsKey(key)) {
                return false;
            }
            this.count--;
            delete this.items[key];
            return true;
        };
        Dictionary.prototype.ForEachKey = function (callback, callback_needBreak) {
            if (callback_needBreak === void 0) { callback_needBreak = null; }
            for (var key in this.items) {
                callback(key);
                if (callback_needBreak != null && callback_needBreak()) {
                    break;
                }
            }
        };
        Dictionary.prototype.ForEach = function (callback, callback_needBreak) {
            if (callback_needBreak === void 0) { callback_needBreak = null; }
            for (var key in this.items) {
                callback(key, this.items[key]);
                if (callback_needBreak != null && callback_needBreak()) {
                    break;
                }
            }
        };
        return Dictionary;
    }());
    Lib.Dictionary = Dictionary;
    __reflect(Dictionary.prototype, "Lib.Dictionary");
})(Lib || (Lib = {}));
//# sourceMappingURL=Dictionary.js.map