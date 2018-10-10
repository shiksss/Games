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
    var StageBattlefieldBoard_Ice = (function (_super) {
        __extends(StageBattlefieldBoard_Ice, _super);
        function StageBattlefieldBoard_Ice() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldBoard_Ice.ClassName;
            return _this;
        }
        StageBattlefieldBoard_Ice.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldBoard_Ice() : pool.Get(StageBattlefieldBoard_Ice.ClassName, function () { return new StageBattlefieldBoard_Ice(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldBoard_Ice.prototype, "Ice", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldBoard_Ice.prototype, "BodyColor", {
            get: function () { return 0xffffff; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldBoard_Ice.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("132_png");
            result.texture = texture;
            result.x = bodyRect.x;
            result.y = bodyRect.y;
            result.width = bodyRect.width;
            result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldBoard_Ice.ClassName = "StageBattlefieldBoard_Ice";
        return StageBattlefieldBoard_Ice;
    }(DayDayUp.StageBattlefieldBoard));
    DayDayUp.StageBattlefieldBoard_Ice = StageBattlefieldBoard_Ice;
    __reflect(StageBattlefieldBoard_Ice.prototype, "DayDayUp.StageBattlefieldBoard_Ice");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldBoard_Ice.js.map