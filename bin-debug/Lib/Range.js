var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lib;
(function (Lib) {
    var Range = (function () {
        function Range(min, max) {
            this.min = min;
            this.max = max;
        }
        return Range;
    }());
    Lib.Range = Range;
    __reflect(Range.prototype, "Lib.Range");
})(Lib || (Lib = {}));
//# sourceMappingURL=Range.js.map