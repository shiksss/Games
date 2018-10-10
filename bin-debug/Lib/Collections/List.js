var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lib;
(function (Lib) {
    var List = (function () {
        function List() {
            this.items = [];
        }
        Object.defineProperty(List.prototype, "Count", {
            get: function () {
                return this.items.length;
            },
            enumerable: true,
            configurable: true
        });
        List.prototype.Get = function (index) {
            return this.items[index];
        };
        List.prototype.Add = function (value) {
            this.items.push(value);
        };
        List.prototype.Contains = function (value) {
            for (var i = 0; i < this.items.length; i++) {
                if (value == this.items[i]) {
                    return true;
                }
            }
            return false;
        };
        List.prototype.RemoveAt = function (index) {
            this.items.splice(index, 1);
        };
        List.prototype.Clear = function () {
            this.items.splice(0, this.items.length);
        };
        List.prototype.ForEach = function (callback, callback_needBreak) {
            if (callback_needBreak === void 0) { callback_needBreak = null; }
            for (var i = 0; i < this.items.length; i++) {
                callback(i, this.items[i]);
                if (callback_needBreak != null && callback_needBreak()) {
                    break;
                }
            }
        };
        List.prototype.ForEachInverted = function (callback, callback_needBreak) {
            if (callback_needBreak === void 0) { callback_needBreak = null; }
            for (var i = this.items.length - 1; i >= 0; i--) {
                callback(i, this.items[i]);
                if (callback_needBreak != null && callback_needBreak()) {
                    break;
                }
            }
        };
        return List;
    }());
    Lib.List = List;
    __reflect(List.prototype, "Lib.List");
})(Lib || (Lib = {}));
//# sourceMappingURL=List.js.map