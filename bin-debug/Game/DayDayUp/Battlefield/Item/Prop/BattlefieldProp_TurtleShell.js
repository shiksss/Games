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
    var BattlefieldProp_TurtleShell = (function (_super) {
        __extends(BattlefieldProp_TurtleShell, _super);
        function BattlefieldProp_TurtleShell() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldProp_TurtleShell.ClassName;
            return _this;
        }
        Object.defineProperty(BattlefieldProp_TurtleShell.prototype, "Type", {
            get: function () { return DayDayUp.BattlefieldPropTypeEnum.TurtleShell; },
            enumerable: true,
            configurable: true
        });
        BattlefieldProp_TurtleShell.New = function (pool, ownerBattlefield, id, atBoardId) {
            var newOne = pool == null ? new BattlefieldProp_TurtleShell() : pool.Get(BattlefieldProp_TurtleShell.ClassName, function () { return new BattlefieldProp_TurtleShell(); });
            newOne.Init_Prop(ownerBattlefield, id, atBoardId);
            return newOne;
        };
        BattlefieldProp_TurtleShell.ClassName = "BattlefieldProp_TurtleShell";
        return BattlefieldProp_TurtleShell;
    }(DayDayUp.BattlefieldProp));
    DayDayUp.BattlefieldProp_TurtleShell = BattlefieldProp_TurtleShell;
    __reflect(BattlefieldProp_TurtleShell.prototype, "DayDayUp.BattlefieldProp_TurtleShell");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldProp_TurtleShell.js.map