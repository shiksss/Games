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
    var StageBattlefieldItem = (function (_super) {
        __extends(StageBattlefieldItem, _super);
        function StageBattlefieldItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StageBattlefieldItem.prototype, "ShowOffsetX", {
            get: function () { return this.rootGameObject.x; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldItem.prototype, "ShowOffsetY", {
            get: function () { return this.rootGameObject.y; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldItem.prototype.SetShowOffset = function (x, y) {
            this.rootGameObject.x = x;
            this.rootGameObject.y = y;
        };
        Object.defineProperty(StageBattlefieldItem.prototype, "Id", {
            get: function () { return this.data.id; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldItem.prototype.Init = function (pool, ownerStageBattlefield, data) {
            this.ownerStageBattlefield = ownerStageBattlefield;
            this.data = data;
            this.commands = Lib.Command_Commands.New(pool, this.commands, false, null);
        };
        StageBattlefieldItem.prototype.Release = function () {
            this.GameObject.x = 0;
            this.GameObject.y = 0;
            this.GameObject.scaleX = 1;
            this.GameObject.scaleY = 1;
            this.ownerStageBattlefield = null;
            this.data = null;
            this.commands.Release();
            this.commands = null;
            this.rootGameObject.x = 0;
            this.rootGameObject.y = 0;
            this.rootGameObject.scaleX = 1;
            this.rootGameObject.scaleY = 1;
            this.rootGameObject = null;
            _super.prototype.Release.call(this);
        };
        StageBattlefieldItem.prototype.Start = function () {
            _super.prototype.Start.call(this);
            // this.DrawBody();
            this.rootGameObject = Lib.GameObject.New(this.ownerComponentManager.pool, false);
            this.GameObject.addChild(this.rootGameObject);
        };
        StageBattlefieldItem.prototype.Update = function () {
            if (this.data.faceToRight) {
                if (this.GameObject.scaleX > 0) {
                    this.GameObject.scaleX *= -1;
                }
            }
            else {
                if (this.GameObject.scaleX < 0) {
                    this.GameObject.scaleX *= -1;
                }
            }
            this.GameObject.x = this.data.x * this.ownerStageBattlefield.viewWidth / this.data.ownerBattlefield.setting.showWidth;
            this.GameObject.y = this.ownerStageBattlefield.viewHeight - (this.data.ownerBattlefield.curBottomPos - this.data.y) * this.ownerStageBattlefield.viewHeight / this.data.ownerBattlefield.setting.showHeight;
            this.commands.Update();
        };
        StageBattlefieldItem.prototype.GetBodyRect = function () {
            return new Rectangle(this.data.body.x * this.ownerStageBattlefield.viewWidth / this.data.ownerBattlefield.setting.showWidth, this.data.body.y * this.ownerStageBattlefield.viewHeight / this.data.ownerBattlefield.setting.showHeight, this.data.body.width * this.ownerStageBattlefield.viewWidth / this.data.ownerBattlefield.setting.showWidth, this.data.body.height * this.ownerStageBattlefield.viewHeight / this.data.ownerBattlefield.setting.showHeight);
        };
        Object.defineProperty(StageBattlefieldItem.prototype, "BodyColor", {
            get: function () { return 0xffffff; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldItem.prototype, "BodyAlpha", {
            get: function () { return 1; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldItem.prototype, "LineColor", {
            get: function () { return 0xffffff; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldItem.prototype, "LineThickness", {
            get: function () { return 1; },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldItem.prototype.DrawBody = function () {
            var bodyRect = this.GetBodyRect();
            var shp = new egret.Shape();
            shp.graphics.beginFill(this.BodyColor, this.BodyAlpha);
            shp.graphics.lineStyle(this.LineThickness, this.LineColor);
            shp.graphics.drawRect(bodyRect.x, bodyRect.y, bodyRect.width, bodyRect.height);
            shp.graphics.endFill();
            this.GameObject.addChild(shp);
        };
        return StageBattlefieldItem;
    }(Lib.GameObjectComponent));
    DayDayUp.StageBattlefieldItem = StageBattlefieldItem;
    __reflect(StageBattlefieldItem.prototype, "DayDayUp.StageBattlefieldItem");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldItem.js.map