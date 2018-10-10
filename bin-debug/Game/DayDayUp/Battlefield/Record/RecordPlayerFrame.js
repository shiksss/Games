var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DayDayUp;
(function (DayDayUp) {
    var RecordPlayerFrame = (function () {
        function RecordPlayerFrame(frameIndex, input) {
            this.input = false;
            this.frameIndex = frameIndex;
            this.input = input;
        }
        return RecordPlayerFrame;
    }());
    DayDayUp.RecordPlayerFrame = RecordPlayerFrame;
    __reflect(RecordPlayerFrame.prototype, "DayDayUp.RecordPlayerFrame");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=RecordPlayerFrame.js.map