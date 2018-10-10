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
    var StageBattlefieldBoard_Ground = (function (_super) {
        __extends(StageBattlefieldBoard_Ground, _super);
        function StageBattlefieldBoard_Ground() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldBoard_Ground.ClassName;
            return _this;
        }
        StageBattlefieldBoard_Ground.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldBoard_Ground() : pool.Get(StageBattlefieldBoard_Ground.ClassName, function () { return new StageBattlefieldBoard_Ground(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldBoard_Ground.prototype, "Ground", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldBoard_Ground.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("93_png");
            result.texture = texture;
            result.x = bodyRect.x;
            result.y = bodyRect.y;
            result.width = bodyRect.width;
            result.height = bodyRect.height;
            this.rootGameObject.addChild(result);
        };
        ;
        Object.defineProperty(StageBattlefieldBoard_Ground.prototype, "BodyColor", {
            get: function () { return 0x000000; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldBoard_Ground.prototype.WhenTrampled = function (player) { };
        StageBattlefieldBoard_Ground.ClassName = "StageBattlefieldBoard_Ground";
        return StageBattlefieldBoard_Ground;
    }(DayDayUp.StageBattlefieldBoard));
    DayDayUp.StageBattlefieldBoard_Ground = StageBattlefieldBoard_Ground;
    __reflect(StageBattlefieldBoard_Ground.prototype, "DayDayUp.StageBattlefieldBoard_Ground");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldBoard_Ground.js.map