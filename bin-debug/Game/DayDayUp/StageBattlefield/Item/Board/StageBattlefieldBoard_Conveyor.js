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
    var StageBattlefieldBoard_Conveyor = (function (_super) {
        __extends(StageBattlefieldBoard_Conveyor, _super);
        function StageBattlefieldBoard_Conveyor() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldBoard_Conveyor.ClassName;
            return _this;
        }
        StageBattlefieldBoard_Conveyor.New = function (pool, ownerStageBattlefield, data) {
            var newOne = pool == null ? new StageBattlefieldBoard_Conveyor() : pool.Get(StageBattlefieldBoard_Conveyor.ClassName, function () { return new StageBattlefieldBoard_Conveyor(); });
            newOne.Init(pool, ownerStageBattlefield, data);
            return newOne;
        };
        Object.defineProperty(StageBattlefieldBoard_Conveyor.prototype, "Conveyor", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldBoard_Conveyor.prototype, "BodyColor", {
            get: function () { return 0xffff00; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldBoard_Conveyor.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            var result = new egret.Bitmap();
            var texture = RES.getRes("101_png");
            result.texture = texture;
            result.x = bodyRect.x;
            result.y = bodyRect.y;
            result.width = bodyRect.width;
            result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
            this.rootGameObject.addChild(result);
        };
        ;
        StageBattlefieldBoard_Conveyor.ClassName = "StageBattlefieldBoard_Conveyor";
        return StageBattlefieldBoard_Conveyor;
    }(DayDayUp.StageBattlefieldBoard));
    DayDayUp.StageBattlefieldBoard_Conveyor = StageBattlefieldBoard_Conveyor;
    __reflect(StageBattlefieldBoard_Conveyor.prototype, "DayDayUp.StageBattlefieldBoard_Conveyor");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldBoard_Conveyor.js.map