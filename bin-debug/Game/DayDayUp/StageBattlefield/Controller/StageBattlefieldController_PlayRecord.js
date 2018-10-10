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
    var StageBattlefieldController_PlayRecord = (function (_super) {
        __extends(StageBattlefieldController_PlayRecord, _super);
        function StageBattlefieldController_PlayRecord() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefieldController_PlayRecord.ClassName;
            _this.record = null;
            _this.playerFrameIndexes = new Lib.Dictionary();
            return _this;
            // GetInputs(frameIndex: number): Lib.Dictionary<boolean> {
            // 	let inputs: Lib.Dictionary<boolean> = new Lib.Dictionary<boolean>();
            // 	this.players.ForEach((key: any, value: RecordPlayer) => {
            // 		inputs.Set(key, value.GetInput(frameIndex));
            // 	});
            // 	return inputs;
            // }
        }
        StageBattlefieldController_PlayRecord.New = function (pool, stageBattlefield, record) {
            var newOne = pool == null ? new StageBattlefieldController_PlayRecord() : pool.Get(StageBattlefieldController_PlayRecord.ClassName, function () { return new StageBattlefieldController_PlayRecord(); });
            newOne.Init(stageBattlefield);
            newOne.record = record;
            return newOne;
        };
        StageBattlefieldController_PlayRecord.prototype.Start = function () {
            var _this = this;
            _super.prototype.Start.call(this);
            this.stageBattlefield.players.ForEach(function (key, value) {
                value.AiEnabled = false;
                _this.playerFrameIndexes.Set(key, 0);
            });
        };
        StageBattlefieldController_PlayRecord.prototype.Update = function () {
            var _this = this;
            _super.prototype.Update.call(this);
            var now = egret.getTimer() / 1000;
            var toFrameIndex = Math.floor((now - this.startTime) * this.stageBattlefield.battlefield.setting.fps);
            while (true) {
                this.record.players.ForEach(function (playerId, player) {
                    for (var i = _this.playerFrameIndexes.Get(playerId); i < player.frames.Count; i++) {
                        var frame = player.frames.Get(i);
                        if (frame.frameIndex > _this.stageBattlefield.battlefield.finishedFrameCount) {
                            break;
                        }
                        _this.playerFrameIndexes.Set(playerId, i);
                    }
                    _this.stageBattlefield.onHoldings.Set(playerId, player.frames.Get(_this.playerFrameIndexes.Get(playerId)).input);
                });
                if (!this.stageBattlefield.battlefield.Update(toFrameIndex, this.stageBattlefield.onHoldings)) {
                    break;
                }
                if (now - egret.getTimer() / 1000 >= 0.5) {
                    break;
                }
            }
            this.stageBattlefield.TrySynByData();
        };
        StageBattlefieldController_PlayRecord.ClassName = "StageBattlefieldController_PlayRecord";
        return StageBattlefieldController_PlayRecord;
    }(DayDayUp.StageBattlefieldController));
    DayDayUp.StageBattlefieldController_PlayRecord = StageBattlefieldController_PlayRecord;
    __reflect(StageBattlefieldController_PlayRecord.prototype, "DayDayUp.StageBattlefieldController_PlayRecord");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefieldController_PlayRecord.js.map