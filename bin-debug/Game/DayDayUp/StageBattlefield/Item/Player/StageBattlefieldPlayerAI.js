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
    var StageBattlefieldPlayerAI = (function (_super) {
        __extends(StageBattlefieldPlayerAI, _super);
        function StageBattlefieldPlayerAI() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldPlayerAI.ClassName;
            _this.random = new Lib.HLRandom(egret.getTimer());
            return _this;
        }
        StageBattlefieldPlayerAI.New = function (pool, player) {
            var newOne = pool == null ? new StageBattlefieldPlayerAI() : pool.Get(StageBattlefieldPlayerAI.ClassName, function () { return new StageBattlefieldPlayerAI(); });
            newOne.Init(player);
            return newOne;
        };
        StageBattlefieldPlayerAI.prototype.Init = function (player) {
            this.player = player;
            this.edgeOffset = 0;
            this.maxDelay = 0;
        };
        StageBattlefieldPlayerAI.prototype.Release = function () {
            this.player = null;
            _super.prototype.Release.call(this);
        };
        StageBattlefieldPlayerAI.prototype.Ai = function () {
            var atBoard = this.player.ownerStageBattlefield.boards.Get(this.player.Player.AtBoardId);
            var onHolding = true;
            if (this.player.Player.curJumpPower >= this.player.Player.JumpPowerMax && this.player.Player.curJumpPowerAtMaxFrameCount >= this.maxDelay) {
                onHolding = false;
            }
            else if (atBoard != null) {
                if (this.player.Player.AtEdge(this.edgeOffset)) {
                    onHolding = false;
                }
            }
            this.player.ownerStageBattlefield.onHoldings.Set(this.player.Id, onHolding);
        };
        StageBattlefieldPlayerAI.prototype.Refresh = function () {
            //蓄满延迟
            this.maxDelay = this.random.Next(0, this.player.Player.JumpPowerAtMaxFrameCount * 0.2);
            //边缘偏移
            this.edgeOffset = this.random.Next(0, this.player.Player.body.width * 0.2);
        };
        StageBattlefieldPlayerAI.ClassName = "StageBattlefieldPlayerAI";
        return StageBattlefieldPlayerAI;
    }(Lib.PoolableObj));
    DayDayUp.StageBattlefieldPlayerAI = StageBattlefieldPlayerAI;
    __reflect(StageBattlefieldPlayerAI.prototype, "DayDayUp.StageBattlefieldPlayerAI");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldPlayerAI.js.map