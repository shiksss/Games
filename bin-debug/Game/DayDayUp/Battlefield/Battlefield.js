var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DayDayUp;
(function (DayDayUp) {
    var Battlefield = (function () {
        function Battlefield(setting, playRecord) {
            if (playRecord === void 0) { playRecord = null; }
            this.objectPool = Lib.ObjectPool.Instance;
            this.boards = new Lib.Dictionary();
            this.props = new Lib.Dictionary();
            this.players = new Lib.Dictionary();
            this.finishedFrameCount = 0;
            this.curBottomPos = 0;
            this.lastRefreshMapIndex = 0;
            this.lastRefreshRowIndex = 0;
            this.setting = setting;
            this.mapManager = new DayDayUp.BattlefieldMapManager(this.setting.showWidth, this.setting.showHeight);
            this.random_main = new Lib.HLRandom(this.setting.seed);
            this.mainPlayerId = 0;
            var ground = this.CreateGround();
            this.RefreshBoards();
            this.CreatePlayer(0, true, ground.id, -ground.body.height);
            this.record = new DayDayUp.Record();
            this.record.Init(this);
        }
        Object.defineProperty(Battlefield.prototype, "MainPlayer", {
            get: function () { return this.players.Get(this.mainPlayerId); },
            enumerable: true,
            configurable: true
        });
        ;
        Battlefield.prototype.OnBoard_Added = function () { if (this.onBoard_Added != null)
            this.onBoard_Added(); };
        Battlefield.prototype.OnBoard_Removed = function () { if (this.onBoard_Removed != null)
            this.onBoard_Removed(); };
        Battlefield.prototype.OnProp_Added = function () { if (this.onProp_Added != null)
            this.onProp_Added(); };
        Battlefield.prototype.OnProp_Removed = function () { if (this.onProp_Removed != null)
            this.onProp_Removed(); };
        Battlefield.prototype.OnPlayer_Added = function () { if (this.onPlayer_Added != null)
            this.onPlayer_Added(); };
        Battlefield.prototype.OnPlayer_Removed = function () { if (this.onPlayer_Removed != null)
            this.onPlayer_Removed(); };
        Battlefield.prototype.CreateGround = function () {
            var ground = DayDayUp.BattlefieldBoard_Ground.New(this.objectPool, this, 0, true);
            ground.SetStartPos(ground.body.width / 2, -ground.body.height);
            this.boards.Set(ground.id, ground);
            this.OnBoard_Added();
            return ground;
        };
        Battlefield.prototype.CreatePlayer = function (id, faceToRight, atBoardId, groundPos) {
            var player = DayDayUp.BattlefieldPlayer.New(this.objectPool, this, id, faceToRight, atBoardId, new DayDayUp.BattlefieldPlayerRates());
            player.x = this.setting.showWidth / 4;
            player.y = groundPos;
            this.players.Set(player.id, player);
            this.OnPlayer_Added();
            return player;
        };
        Battlefield.prototype.RefreshBoards = function () {
            var _this = this;
            var curRefreshEndPos = this.curBottomPos - this.setting.showHeight * 1.25;
            this.mapManager.RefreshBoards(this, this.lastRefreshMapIndex, this.lastRefreshRowIndex, curRefreshEndPos, function (newBoard) {
                _this.boards.Set(newBoard.id, newBoard);
                _this.OnBoard_Added();
            }, function (newProp) {
                _this.props.Set(newProp.id, newProp);
                _this.OnProp_Added();
            }, function (mapIndex, rowIndex) {
                _this.lastRefreshMapIndex = mapIndex;
                _this.lastRefreshRowIndex = rowIndex + 1;
            });
        };
        Battlefield.prototype.Update = function (toFrameIndex, onHoldings) {
            var _this = this;
            if (onHoldings === void 0) { onHoldings = null; }
            if (toFrameIndex < this.finishedFrameCount) {
                return false;
            }
            this.record.AddFrame(this.finishedFrameCount, onHoldings);
            //处理板子
            {
                var keys_removed_1 = new Lib.List();
                this.boards.ForEach(function (key, value) {
                    value.Update();
                    if (value.needRemoved) {
                        keys_removed_1.Add(key);
                    }
                });
                keys_removed_1.ForEach(function (index, value) {
                    _this.boards.Get(value).Release();
                    _this.boards.Remove(value);
                    _this.OnBoard_Removed();
                });
            }
            //处理道具
            {
                var keys_removed_2 = new Lib.List();
                this.props.ForEach(function (key, value) {
                    value.Update();
                    if (value.needRemoved) {
                        keys_removed_2.Add(key);
                    }
                });
                keys_removed_2.ForEach(function (index, value) {
                    _this.props.Get(value).Release();
                    _this.props.Remove(value);
                    _this.OnProp_Removed();
                });
            }
            //处理角色
            {
                var keys_removed_3 = new Lib.List();
                this.players.ForEach(function (key, value) {
                    value.onHolding = onHoldings.Get(key);
                    value.Update();
                    if (value.needRemoved) {
                        keys_removed_3.Add(key);
                    }
                });
                keys_removed_3.ForEach(function (index, value) {
                    _this.players.Get(value).Release();
                    _this.players.Remove(value);
                    _this.OnPlayer_Removed();
                });
            }
            //根据MainPlayer处理groundY
            {
                var mainPlayer = this.MainPlayer;
                if (mainPlayer != null) {
                    this.curBottomPos = Math.min(this.curBottomPos, mainPlayer.y + this.setting.showHeight * 2 / 5);
                }
            }
            this.RefreshBoards();
            this.finishedFrameCount++;
            return true;
        };
        return Battlefield;
    }());
    DayDayUp.Battlefield = Battlefield;
    __reflect(Battlefield.prototype, "DayDayUp.Battlefield");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=Battlefield.js.map