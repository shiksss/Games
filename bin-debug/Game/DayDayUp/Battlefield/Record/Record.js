var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DayDayUp;
(function (DayDayUp) {
    var Record = (function () {
        function Record() {
            this.players = new Lib.Dictionary();
        }
        Record.prototype.Init = function (battlefield) {
            var _this = this;
            battlefield.players.ForEachKey(function (key) {
                _this.players.Set(key, new DayDayUp.RecordPlayer(key));
            });
            this.seed = battlefield.setting.seed;
        };
        Record.prototype.AddFrame = function (frameIndex, inputs) {
            var _this = this;
            inputs.ForEach(function (key, value) {
                var player = _this.players.Get(key);
                player.AddFrame(frameIndex, value);
            });
        };
        Record.prototype.CopyFrom = function (record) {
            this.seed = record.seed;
            this.players = record.players;
        };
        Record.prototype.Clone = function () {
            var clone = new Record();
            clone.CopyFrom(this);
            return clone;
        };
        return Record;
    }());
    DayDayUp.Record = Record;
    __reflect(Record.prototype, "DayDayUp.Record");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=Record.js.map