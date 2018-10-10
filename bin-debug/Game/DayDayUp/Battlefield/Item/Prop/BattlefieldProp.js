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
    var BattlefieldPropTypeEnum;
    (function (BattlefieldPropTypeEnum) {
        BattlefieldPropTypeEnum[BattlefieldPropTypeEnum["None"] = -1] = "None";
        BattlefieldPropTypeEnum[BattlefieldPropTypeEnum["Feather"] = 0] = "Feather";
        BattlefieldPropTypeEnum[BattlefieldPropTypeEnum["Drinks"] = 1] = "Drinks";
        BattlefieldPropTypeEnum[BattlefieldPropTypeEnum["SpringShoe"] = 2] = "SpringShoe";
        BattlefieldPropTypeEnum[BattlefieldPropTypeEnum["TurtleShell"] = 3] = "TurtleShell";
        BattlefieldPropTypeEnum[BattlefieldPropTypeEnum["Chicken"] = 4] = "Chicken";
        BattlefieldPropTypeEnum[BattlefieldPropTypeEnum["TurnBack"] = 5] = "TurnBack";
        BattlefieldPropTypeEnum[BattlefieldPropTypeEnum["COUNT"] = 6] = "COUNT";
    })(BattlefieldPropTypeEnum = DayDayUp.BattlefieldPropTypeEnum || (DayDayUp.BattlefieldPropTypeEnum = {}));
    var BattlefieldProp = (function (_super) {
        __extends(BattlefieldProp, _super);
        function BattlefieldProp() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.atBoardId = -1;
            return _this;
        }
        Object.defineProperty(BattlefieldProp.prototype, "Type", {
            get: function () { return BattlefieldPropTypeEnum.None; },
            enumerable: true,
            configurable: true
        });
        BattlefieldProp.prototype.GetAtBoard = function () {
            return this.ownerBattlefield.boards.Get(this.atBoardId);
        };
        BattlefieldProp.prototype.AdjustAtBoard = function () {
            var atBoard = this.GetAtBoard();
            if (atBoard != null) {
                this.x = atBoard.x;
                this.y = atBoard.y + atBoard.body.top - this.body.bottom - this.body.height * 0.5;
            }
        };
        BattlefieldProp.prototype.Init_Prop = function (ownerBattlefield, id, atBoardId) {
            _super.prototype.Init.call(this, ownerBattlefield, id, true);
            this.atBoardId = atBoardId;
            var width = 0.5;
            var height = 0.5;
            this.body.setTo(-width * 0.5, 0, width, height);
            this.AdjustAtBoard();
        };
        BattlefieldProp.prototype.Update = function () {
            _super.prototype.Update.call(this);
            var atBoard = this.GetAtBoard();
            if (atBoard != null) {
                this.AdjustAtBoard();
            }
            else {
                this.needRemoved = true;
            }
        };
        BattlefieldProp.prototype.TouchPlayer = function (player) {
            this.needRemoved = true;
            player.AddProp(this.Type);
        };
        return BattlefieldProp;
    }(DayDayUp.BattlefieldItem));
    DayDayUp.BattlefieldProp = BattlefieldProp;
    __reflect(BattlefieldProp.prototype, "DayDayUp.BattlefieldProp");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldProp.js.map