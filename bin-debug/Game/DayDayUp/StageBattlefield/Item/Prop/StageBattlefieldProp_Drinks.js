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
    var StageBattlefieldProp_Drinks = (function (_super) {
        __extends(StageBattlefieldProp_Drinks, _super);
        function StageBattlefieldProp_Drinks() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldProp_Drinks.ClassName;
            return _this;
        }
        StageBattlefieldProp_Drinks.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldProp_Drinks() : pool.Get(StageBattlefieldProp_Drinks.ClassName, function () { return new StageBattlefieldProp_Drinks(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldProp_Drinks.prototype, "Drinks", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldProp_Drinks.prototype, "BodyColor", {
            get: function () { return 0x0000ff; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldProp_Drinks.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("4_png");
            result.texture = texture;
            result.width = texture.textureWidth * this.Scale;
            result.height = texture.textureHeight * this.Scale;
            result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
            result.y = bodyRect.y + (bodyRect.height - result.height) / 2;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldProp_Drinks.ClassName = "StageBattlefieldProp_Drinks";
        return StageBattlefieldProp_Drinks;
    }(DayDayUp.StageBattlefieldProp));
    DayDayUp.StageBattlefieldProp_Drinks = StageBattlefieldProp_Drinks;
    __reflect(StageBattlefieldProp_Drinks.prototype, "DayDayUp.StageBattlefieldProp_Drinks");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldProp_Drinks.js.map