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
    var StageBattlefieldBoard_Quicksand = (function (_super) {
        __extends(StageBattlefieldBoard_Quicksand, _super);
        function StageBattlefieldBoard_Quicksand() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldBoard_Quicksand.ClassName;
            return _this;
        }
        StageBattlefieldBoard_Quicksand.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldBoard_Quicksand() : pool.Get(StageBattlefieldBoard_Quicksand.ClassName, function () { return new StageBattlefieldBoard_Quicksand(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldBoard_Quicksand.prototype, "Quicksand", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldBoard_Quicksand.prototype, "BodyColor", {
            get: function () { return 0xff00ff; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldBoard_Quicksand.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("103_png");
            result.texture = texture;
            result.x = bodyRect.x;
            result.y = bodyRect.y;
            result.width = bodyRect.width;
            result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldBoard_Quicksand.ClassName = "StageBattlefieldBoard_Quicksand";
        return StageBattlefieldBoard_Quicksand;
    }(DayDayUp.StageBattlefieldBoard));
    DayDayUp.StageBattlefieldBoard_Quicksand = StageBattlefieldBoard_Quicksand;
    __reflect(StageBattlefieldBoard_Quicksand.prototype, "DayDayUp.StageBattlefieldBoard_Quicksand");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldBoard_Quicksand.js.map