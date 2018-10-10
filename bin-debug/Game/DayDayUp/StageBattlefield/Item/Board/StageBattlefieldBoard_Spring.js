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
    var StageBattlefieldBoard_Spring = (function (_super) {
        __extends(StageBattlefieldBoard_Spring, _super);
        function StageBattlefieldBoard_Spring() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldBoard_Spring.ClassName;
            return _this;
        }
        StageBattlefieldBoard_Spring.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldBoard_Spring() : pool.Get(StageBattlefieldBoard_Spring.ClassName, function () { return new StageBattlefieldBoard_Spring(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldBoard_Spring.prototype, "Spring", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldBoard_Spring.prototype, "BodyColor", {
            get: function () { return 0x00ffff; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldBoard_Spring.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("128_png");
            result.texture = texture;
            result.x = bodyRect.x;
            result.y = bodyRect.y;
            result.width = bodyRect.width;
            result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldBoard_Spring.ClassName = "StageBattlefieldBoard_Spring";
        return StageBattlefieldBoard_Spring;
    }(DayDayUp.StageBattlefieldBoard));
    DayDayUp.StageBattlefieldBoard_Spring = StageBattlefieldBoard_Spring;
    __reflect(StageBattlefieldBoard_Spring.prototype, "DayDayUp.StageBattlefieldBoard_Spring");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldBoard_Spring.js.map