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
    var StageBattlefieldProp_SpringShoe = (function (_super) {
        __extends(StageBattlefieldProp_SpringShoe, _super);
        function StageBattlefieldProp_SpringShoe() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldProp_SpringShoe.ClassName;
            return _this;
        }
        StageBattlefieldProp_SpringShoe.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldProp_SpringShoe() : pool.Get(StageBattlefieldProp_SpringShoe.ClassName, function () { return new StageBattlefieldProp_SpringShoe(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldProp_SpringShoe.prototype, "SpringShoe", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldProp_SpringShoe.prototype, "BodyColor", {
            get: function () { return 0x0000ff; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldProp_SpringShoe.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("11_png");
            result.texture = texture;
            result.width = texture.textureWidth * this.Scale;
            result.height = texture.textureHeight * this.Scale;
            result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
            result.y = bodyRect.y + (bodyRect.height - result.height) / 2;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldProp_SpringShoe.ClassName = "StageBattlefieldProp_SpringShoe";
        return StageBattlefieldProp_SpringShoe;
    }(DayDayUp.StageBattlefieldProp));
    DayDayUp.StageBattlefieldProp_SpringShoe = StageBattlefieldProp_SpringShoe;
    __reflect(StageBattlefieldProp_SpringShoe.prototype, "DayDayUp.StageBattlefieldProp_SpringShoe");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldProp_SpringShoe.js.map