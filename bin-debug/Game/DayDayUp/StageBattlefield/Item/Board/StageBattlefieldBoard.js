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
    var StageBattlefieldBoard = (function (_super) {
        __extends(StageBattlefieldBoard, _super);
        function StageBattlefieldBoard() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StageBattlefieldBoard.prototype, "Board", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldBoard.prototype.WhenTrampled = function (player) {
            var steps = Lib.Command_Steps.New(this.ownerComponentManager.pool, false, null);
            this.rootGameObject.y = 10;
            steps.Add(Lib.Command_LocalPosition.New(this.ownerComponentManager.pool, this.rootGameObject, this.rootGameObject.x, this.rootGameObject.y, this.rootGameObject.x, 0, 0.1, 2, false, null));
            this.commands.Add(steps);
        };
        return StageBattlefieldBoard;
    }(DayDayUp.StageBattlefieldItem));
    DayDayUp.StageBattlefieldBoard = StageBattlefieldBoard;
    __reflect(StageBattlefieldBoard.prototype, "DayDayUp.StageBattlefieldBoard");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldBoard.js.map