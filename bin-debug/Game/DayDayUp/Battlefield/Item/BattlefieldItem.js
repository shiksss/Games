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
var DayDayUp;
(function (DayDayUp) {
    var BattlefieldItem = (function (_super) {
        __extends(BattlefieldItem, _super);
        function BattlefieldItem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.x = 0;
            _this.y = 0;
            _this.body = new Rectangle();
            _this.faceToRight = true;
            _this.needRemoved = false;
            return _this;
        }
        BattlefieldItem.prototype.GetLastDeltaX = function () {
            return this.x - this.lastX;
        };
        BattlefieldItem.prototype.GetLastDeltaY = function () {
            return this.y - this.lastY;
        };
        BattlefieldItem.prototype.Init = function (ownerBattlefield, id, faceToRight) {
            this.ownerBattlefield = ownerBattlefield;
            this.id = id;
            this.faceToRight = faceToRight;
            this.x = 0;
            this.y = 0;
            this.lastX = 0;
            this.lastY = 0;
            this.needRemoved = false;
        };
        BattlefieldItem.prototype.Release = function () {
            this.ownerBattlefield = null;
            _super.prototype.Release.call(this);
        };
        BattlefieldItem.prototype.Update = function () {
            this.lastX = this.x;
            this.lastY = this.y;
        };
        BattlefieldItem.Touched = function (sx, sy, sw, sh, dx, dy, dw, dh) {
            return sw > 0 && sh > 0 && dw > 0 && dh > 0 &&
                sx < dx + dw && dx < sx + sw &&
                sy < dy + dh && dy < sy + sh;
        };
        return BattlefieldItem;
    }(Lib.PoolableObj));
    DayDayUp.BattlefieldItem = BattlefieldItem;
    __reflect(BattlefieldItem.prototype, "DayDayUp.BattlefieldItem");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldItem.js.map