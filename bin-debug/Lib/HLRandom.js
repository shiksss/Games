var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lib;
(function (Lib) {
    var HLRandom = (function () {
        /**
         * 创建一个随机数生成器
         */
        function HLRandom(seed) {
            this.SetSeed(seed);
        }
        HLRandom.prototype.SetSeed = function (seed) {
            this.seed = seed;
        };
        /**
         * 返回一个在min和max之间的随机浮点数
         */
        HLRandom.prototype.Next = function (min, max) {
            max = max || 1;
            min = min || 0;
            this.seed = (this.seed * 9301 + 49297) % 233280;
            var rnd = this.seed / 233280.0;
            return min + rnd * (max - min);
        };
        HLRandom.prototype.NextWithSeed = function (seed, min, max) {
            this.seed = seed;
            return this.Next(min, max);
        };
        return HLRandom;
    }());
    Lib.HLRandom = HLRandom;
    __reflect(HLRandom.prototype, "Lib.HLRandom");
})(Lib || (Lib = {}));
//# sourceMappingURL=HLRandom.js.map