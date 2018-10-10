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
    var BattlefieldBoardTypeEnum;
    (function (BattlefieldBoardTypeEnum) {
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["None"] = -1] = "None";
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["Normal"] = 0] = "Normal";
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["Bubble"] = 1] = "Bubble";
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["Conveyor"] = 2] = "Conveyor";
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["Ground"] = 3] = "Ground";
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["Ice"] = 4] = "Ice";
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["Marsh"] = 5] = "Marsh";
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["Quicksand"] = 6] = "Quicksand";
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["Spring"] = 7] = "Spring";
        BattlefieldBoardTypeEnum[BattlefieldBoardTypeEnum["COUNT"] = 8] = "COUNT";
    })(BattlefieldBoardTypeEnum = DayDayUp.BattlefieldBoardTypeEnum || (DayDayUp.BattlefieldBoardTypeEnum = {}));
    ;
    var BattlefieldBoard = (function (_super) {
        __extends(BattlefieldBoard, _super);
        function BattlefieldBoard() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.startX = 0;
            _this.startY = 0;
            _this.amplitudeX = 0; //横向最大偏移
            _this.amplitudeY = 0; //纵向最大偏移
            _this.amplitudeFrameCount = 0; //从原点到最大偏移帧数
            return _this;
        }
        Object.defineProperty(BattlefieldBoard.prototype, "Type", {
            get: function () { return BattlefieldBoardTypeEnum.None; },
            enumerable: true,
            configurable: true
        });
        BattlefieldBoard.prototype.SetStartPos = function (startX, startY) {
            this.startX = startX;
            this.startY = startY;
            this.x = this.startX;
            this.y = this.startY;
            this.lastX = this.startX;
            this.lastY = this.startY;
        };
        BattlefieldBoard.prototype.GetGroundOffsetMax = function () {
            return 0;
        };
        BattlefieldBoard.prototype.GetGroundOffsetPerFrame = function () {
            return 0;
        };
        BattlefieldBoard.prototype.GetGroundSpeed = function () {
            return 0;
        };
        BattlefieldBoard.prototype.GetPlayerRunSpeedRate = function () {
            return 1;
        };
        BattlefieldBoard.prototype.GetPlayerJumpSpeedRate = function () {
            return 1;
        };
        BattlefieldBoard.prototype.GetPlayerSuperJumpSpeedRate = function () {
            return 1;
        };
        BattlefieldBoard.prototype.Init_Board = function (ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style) {
            _super.prototype.Init.call(this, ownerBattlefield, id, faceToRight);
            this.style = style;
            this.body.setTo(-bodyWidth * 0.5, 0, bodyWidth, bodyHeight);
            this.amplitudeX = 0; //横向最大偏移
            this.amplitudeY = 0; //纵向最大偏移
            this.amplitudeFrameCount = 0;
        };
        BattlefieldBoard.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (this.amplitudeFrameCount > 0) {
                this.x = this.startX + Math.sin(this.ownerBattlefield.finishedFrameCount / this.amplitudeFrameCount) * this.amplitudeX;
                this.y = this.startY + Math.sin(this.ownerBattlefield.finishedFrameCount / this.amplitudeFrameCount) * this.amplitudeY;
            }
            //向下出2/3屏后删除
            if (this.y >= this.ownerBattlefield.curBottomPos + this.ownerBattlefield.setting.showHeight * 0.5) {
                this.needRemoved = true;
            }
        };
        return BattlefieldBoard;
    }(DayDayUp.BattlefieldItem));
    DayDayUp.BattlefieldBoard = BattlefieldBoard;
    __reflect(BattlefieldBoard.prototype, "DayDayUp.BattlefieldBoard");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldBoard.js.map