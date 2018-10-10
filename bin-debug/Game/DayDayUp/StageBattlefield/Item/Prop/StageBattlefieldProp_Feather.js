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
    var StageBattlefieldProp_Feather = (function (_super) {
        __extends(StageBattlefieldProp_Feather, _super);
        function StageBattlefieldProp_Feather() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldProp_Feather.ClassName;
            return _this;
        }
        StageBattlefieldProp_Feather.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldProp_Feather() : pool.Get(StageBattlefieldProp_Feather.ClassName, function () { return new StageBattlefieldProp_Feather(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldProp_Feather.prototype, "Feather", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldProp_Feather.prototype, "BodyColor", {
            get: function () { return 0x0000ff; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldProp_Feather.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("3_png");
            result.texture = texture;
            result.width = texture.textureWidth * this.Scale;
            result.height = texture.textureHeight * this.Scale;
            result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
            result.y = bodyRect.y + (bodyRect.height - result.height) / 2;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldProp_Feather.ClassName = "StageBattlefieldProp_Feather";
        return StageBattlefieldProp_Feather;
    }(DayDayUp.StageBattlefieldProp));
    DayDayUp.StageBattlefieldProp_Feather = StageBattlefieldProp_Feather;
    __reflect(StageBattlefieldProp_Feather.prototype, "DayDayUp.StageBattlefieldProp_Feather");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldProp_Feather.js.map