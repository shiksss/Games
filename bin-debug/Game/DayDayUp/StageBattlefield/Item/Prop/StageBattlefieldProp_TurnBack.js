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
    var StageBattlefieldProp_TurnBack = (function (_super) {
        __extends(StageBattlefieldProp_TurnBack, _super);
        function StageBattlefieldProp_TurnBack() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldProp_TurnBack.ClassName;
            return _this;
        }
        StageBattlefieldProp_TurnBack.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldProp_TurnBack() : pool.Get(StageBattlefieldProp_TurnBack.ClassName, function () { return new StageBattlefieldProp_TurnBack(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldProp_TurnBack.prototype, "TurnBack", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldProp_TurnBack.prototype, "BodyColor", {
            get: function () { return 0x0000ff; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldProp_TurnBack.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("13_png");
            result.texture = texture;
            result.width = texture.textureWidth * this.Scale;
            result.height = texture.textureHeight * this.Scale;
            result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
            result.y = bodyRect.y + (bodyRect.height - result.height) / 2;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldProp_TurnBack.ClassName = "StageBattlefieldProp_TurnBack";
        return StageBattlefieldProp_TurnBack;
    }(DayDayUp.StageBattlefieldProp));
    DayDayUp.StageBattlefieldProp_TurnBack = StageBattlefieldProp_TurnBack;
    __reflect(StageBattlefieldProp_TurnBack.prototype, "DayDayUp.StageBattlefieldProp_TurnBack");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldProp_TurnBack.js.map