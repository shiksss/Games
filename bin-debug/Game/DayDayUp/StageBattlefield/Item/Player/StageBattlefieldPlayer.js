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
    var StageBattlefieldPlayer = (function (_super) {
        __extends(StageBattlefieldPlayer, _super);
        function StageBattlefieldPlayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldPlayer.ClassName;
            _this.ai = null;
            return _this;
        }
        Object.defineProperty(StageBattlefieldPlayer.prototype, "Player", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldPlayer.prototype, "BodyColor", {
            get: function () { return 0x00ff00; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBattlefieldPlayer.prototype, "AiEnabled", {
            set: function (aiEnabled) {
                if (aiEnabled) {
                    if (this.ai == null) {
                        this.ai = DayDayUp.StageBattlefieldPlayerAI.New(this.pool, this);
                    }
                }
                else {
                    if (this.ai != null) {
                        this.ai.Release();
                        this.ai = null;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        StageBattlefieldPlayer.New = function (pool, owner, data, aiEnabled) {
            var newOne = pool == null ? new StageBattlefieldPlayer() : pool.Get(StageBattlefieldPlayer.ClassName, function () { return new StageBattlefieldPlayer(); });
            newOne.Init_Player(pool, owner, data, aiEnabled);
            return newOne;
        };
        StageBattlefieldPlayer.prototype.Init_Player = function (pool, owner, data, aiEnabled) {
            _super.prototype.Init.call(this, pool, owner, data);
            this.AiEnabled = aiEnabled;
        };
        StageBattlefieldPlayer.prototype.Release = function () {
            this.AiEnabled = false;
            this.result = null;
            _super.prototype.Release.call(this);
        };
        StageBattlefieldPlayer.prototype.Start = function () {
            _super.prototype.Start.call(this);
            var bodyRect = this.GetBodyRect();
            this.result = new egret.Bitmap();
            var texture = RES.getRes("164_png");
            this.result.texture = texture;
            this.result.width = bodyRect.width * 2;
            this.result.height = texture.textureHeight * bodyRect.width / texture.textureWidth * 2;
            this.result.x = -this.result.width / 2;
            this.result.y = -this.result.height;
            this.rootGameObject.addChild(this.result);
        };
        StageBattlefieldPlayer.prototype.Update = function () {
            _super.prototype.Update.call(this);
            if (this.ai != null) {
                this.ai.Ai();
            }
            var atBoard = this.ownerStageBattlefield.boards.Get(this.Player.AtBoardId);
            if (this.Player.state != this.playerLastState && this.Player.state == DayDayUp.BattlefieldPlayerStateEnum.Run) {
                //尝试落地弹力和起跳弹力表现
                atBoard.WhenTrampled(this);
                if (this.ai != null) {
                    this.ai.Refresh();
                }
            }
            if (atBoard != null) {
                this.SetShowOffset(atBoard.ShowOffsetX, atBoard.ShowOffsetY);
            }
            else {
                this.SetShowOffset(0, 0);
            }
            this.result.alpha = this.Player.curSuperForce >= this.Player.SuperForceMax ? 0.5 : 1;
            this.playerLastState = this.Player.state;
        };
        StageBattlefieldPlayer.ClassName = "StageBattlefieldPlayer";
        return StageBattlefieldPlayer;
    }(DayDayUp.StageBattlefieldItem));
    DayDayUp.StageBattlefieldPlayer = StageBattlefieldPlayer;
    __reflect(StageBattlefieldPlayer.prototype, "DayDayUp.StageBattlefieldPlayer");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldPlayer.js.map