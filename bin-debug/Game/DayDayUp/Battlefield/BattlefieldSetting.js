var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DayDayUp;
(function (DayDayUp) {
    var BattlefieldSetting = (function () {
        function BattlefieldSetting() {
            this.fps = 60;
            this.seed = egret.getTimer();
            this.showWidth = 9;
            this.showHeight = 16;
            this.hp = 1; // 基础生命 = 0;
            this.superForcePerMaxJump = 1; //每次满力量跳时增加的能量
            this.superForceMax = 6;
            this.jumpPowerPerFrame = 1; //力量每帧增量
            this.jumpPowerMax = 30; //力量最大值
            this.jumpPowerAtMaxFrameCount = 60; //力量最大值维持帧数
            this.g = 0.01;
            this.airSpeed = 0.03;
            this.runSpeed = 0.03;
            this.jumpSpeedMax = -Math.sqrt((this.showHeight * 0.4) * (2 * this.g)); //根据需要跳几倍板间隔高度自动算起跳速度
            this.jumpSpeedMin = this.jumpSpeedMax * 0.25;
            this.superJumpSpeed = this.jumpSpeedMax * 5;
            this.propFrameCounts = new Lib.Dictionary();
            this.prop_SuperForce_Chicken = this.superForceMax / 2;
            this.propRate_G_Feather = 0.75;
            this.propRate_SpeedX_TurtleShell = 0.75;
            this.propRate_JumpPowerPerFrame_Drinks = 2;
            this.propRate_JumpSpeed_SpringShoe = 1.5;
            this.propRate_SuperJumpSpeed_SpringShoe = 1.25;
            this.lifeFrameCount_Quicksand = 60;
            this.elapseLifePerFrame_Quicksand = 1;
            this.groundOffsetMax_Marsh = 0.8;
            this.groundOffsetPerFrame_Marsh = this.groundOffsetMax_Marsh / 50;
            this.propFrameCounts.Set(DayDayUp.BattlefieldPropTypeEnum.Feather, this.fps * 5);
            this.propFrameCounts.Set(DayDayUp.BattlefieldPropTypeEnum.Drinks, this.fps * 5);
            this.propFrameCounts.Set(DayDayUp.BattlefieldPropTypeEnum.SpringShoe, this.fps * 5);
            this.propFrameCounts.Set(DayDayUp.BattlefieldPropTypeEnum.TurtleShell, this.fps * 5);
        }
        return BattlefieldSetting;
    }());
    DayDayUp.BattlefieldSetting = BattlefieldSetting;
    __reflect(BattlefieldSetting.prototype, "DayDayUp.BattlefieldSetting");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldSetting.js.map