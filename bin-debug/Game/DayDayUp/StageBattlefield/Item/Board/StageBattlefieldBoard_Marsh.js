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
    var StageBattlefieldBoard_Marsh = (function (_super) {
        __extends(StageBattlefieldBoard_Marsh, _super);
        function StageBattlefieldBoard_Marsh() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldBoard_Marsh.ClassName;
            return _this;
        }
        StageBattlefieldBoard_Marsh.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldBoard_Marsh() : pool.Get(StageBattlefieldBoard_Marsh.ClassName, function () { return new StageBattlefieldBoard_Marsh(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldBoard_Marsh.prototype, "Marsh", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldBoard_Marsh.prototype, "BodyColor", {
            get: function () { return 0x0000ff; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldBoard_Marsh.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("89_png");
            result.texture = texture;
            result.x = bodyRect.x;
            result.y = bodyRect.y;
            result.width = bodyRect.width;
            result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldBoard_Marsh.ClassName = "StageBattlefieldBoard_Marsh";
        return StageBattlefieldBoard_Marsh;
    }(DayDayUp.StageBattlefieldBoard));
    DayDayUp.StageBattlefieldBoard_Marsh = StageBattlefieldBoard_Marsh;
    __reflect(StageBattlefieldBoard_Marsh.prototype, "DayDayUp.StageBattlefieldBoard_Marsh");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldBoard_Marsh.js.map