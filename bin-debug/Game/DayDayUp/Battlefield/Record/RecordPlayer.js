var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DayDayUp;
(function (DayDayUp) {
    var RecordPlayer = (function () {
        function RecordPlayer(playerId) {
            this.frames = new Lib.List();
            this.playerId = playerId;
        }
        RecordPlayer.prototype.AddFrame = function (frameIndex, input) {
            if (this.frames.Count <= 0 || input != this.GetLastInput()) {
                this.frames.Add(new DayDayUp.RecordPlayerFrame(frameIndex, input));
            }
        };
        RecordPlayer.prototype.GetLastInput = function () {
            return this.frames.Count > 0 && this.frames.Get(this.frames.Count - 1).input;
        };
        return RecordPlayer;
    }());
    DayDayUp.RecordPlayer = RecordPlayer;
    __reflect(RecordPlayer.prototype, "DayDayUp.RecordPlayer");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=RecordPlayer.js.map