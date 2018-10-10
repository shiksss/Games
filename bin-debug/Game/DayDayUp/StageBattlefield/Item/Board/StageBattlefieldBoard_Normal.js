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
    var StageBattlefieldBoard_Normal = (function (_super) {
        __extends(StageBattlefieldBoard_Normal, _super);
        function StageBattlefieldBoard_Normal() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldBoard_Normal.ClassName;
            return _this;
        }
        StageBattlefieldBoard_Normal.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldBoard_Normal() : pool.Get(StageBattlefieldBoard_Normal.ClassName, function () { return new StageBattlefieldBoard_Normal(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldBoard_Normal.prototype, "Normal", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldBoard_Normal.prototype, "BodyColor", {
            get: function () { return 0x000000; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldBoard_Normal.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture;
            switch (this.Normal.style) {
                case DayDayUp.BattlefieldMapStyle.Asia: {
                    texture = RES.getRes("144_png");
                    break;
                }
                case DayDayUp.BattlefieldMapStyle.Australia: {
                    texture = RES.getRes("109_png");
                    break;
                }
                default: {
                    texture = RES.getRes("78_png");
                    break;
                }
            }
            result.texture = texture;
            result.x = bodyRect.x;
            result.y = bodyRect.y;
            result.width = bodyRect.width;
            result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldBoard_Normal.ClassName = "StageBattlefieldBoard_Normal";
        return StageBattlefieldBoard_Normal;
    }(DayDayUp.StageBattlefieldBoard));
    DayDayUp.StageBattlefieldBoard_Normal = StageBattlefieldBoard_Normal;
    __reflect(StageBattlefieldBoard_Normal.prototype, "DayDayUp.StageBattlefieldBoard_Normal");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldBoard_Normal.js.map