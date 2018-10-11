var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Lib;
(function (Lib) {
    var DoTween = (function () {
        function DoTween(target) {
            this.target = target;
            this.tween = egret.Tween.get(target);
        }
        DoTween.prototype.OnCompleted = function (onEnd) {
            this.tween.call(function () {
                if (onEnd != null) {
                    onEnd();
                }
            }, this.target);
            return this;
        };
        DoTween.prototype.Wait = function (duration) {
            this.tween.wait(duration * 1000);
            return this;
        };
        DoTween.prototype.AlphaTo = function (to, duration, ease) {
            this.tween.to({ alpha: to }, duration * 1000, ease);
            return this;
        };
        DoTween.prototype.AlphaFromTo = function (from, to, duration, ease) {
            this.target.alpha = from;
            return this.AlphaTo(to, duration, ease);
        };
        DoTween.prototype.AlphaFrom = function (from, duration, ease) {
            return this.AlphaFromTo(from, this.target.alpha, duration, ease);
        };
        DoTween.prototype.Jelly = function (anchorRateX, anchorRateY, from, duration) {
            if (anchorRateX === void 0) { anchorRateX = 0.5; }
            if (anchorRateY === void 0) { anchorRateY = 0.5; }
            if (from === void 0) { from = 0.8; }
            if (duration === void 0) { duration = 0.6; }
            this.target.anchorOffsetX = this.target.width * anchorRateX;
            this.target.anchorOffsetY = this.target.height * anchorRateY;
            var toX = this.target.scaleX;
            this.target.scaleX *= from;
            var toY = this.target.scaleY;
            this.target.scaleY *= from;
            this.tween.to({ scaleX: toX, scaleY: toY }, duration * 1000, egret.Ease.elasticOut);
            return this;
        };
        return DoTween;
    }());
    Lib.DoTween = DoTween;
    __reflect(DoTween.prototype, "Lib.DoTween");
})(Lib || (Lib = {}));
//# sourceMappingURL=DoTween.js.map