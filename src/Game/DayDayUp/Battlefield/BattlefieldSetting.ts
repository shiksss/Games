module DayDayUp {
	export class BattlefieldSetting {
		fps: number = 60;

		seed: number = egret.getTimer();

		showWidth: number = 9;
		showHeight: number = 16;
		
		hp: number = 1;// 基础生命 = 0;

		superForcePerMaxJump: number = 1;//每次满力量跳时增加的能量
		superForceMax: number = 6;

		jumpPowerPerFrame: number = 1;//力量每帧增量
		jumpPowerMax: number = 30;//力量最大值
		jumpPowerAtMaxFrameCount: number = 60;//力量最大值维持帧数

		g: number = 0.01;

		airSpeed: number = 0.03;
		runSpeed: number = 0.03;
		jumpSpeedMax: number = -Math.sqrt((this.showHeight * 0.4) * (2 * this.g));//根据需要跳几倍板间隔高度自动算起跳速度
		jumpSpeedMin: number = this.jumpSpeedMax * 0.25;
		superJumpSpeed: number = this.jumpSpeedMax * 5;

		propFrameCounts: Lib.Dictionary<number> = new Lib.Dictionary<number>();
		prop_SuperForce_Chicken: number = this.superForceMax / 2;
		propRate_G_Feather: number = 0.75;
		propRate_SpeedX_TurtleShell: number = 0.75;
		propRate_JumpPowerPerFrame_Drinks: number = 2;
		propRate_JumpSpeed_SpringShoe: number = 1.5;
		propRate_SuperJumpSpeed_SpringShoe: number = 1.25;

		lifeFrameCount_Quicksand: number = 60;
		elapseLifePerFrame_Quicksand: number = 1;

		groundOffsetMax_Marsh: number = 0.8;
		groundOffsetPerFrame_Marsh: number = this.groundOffsetMax_Marsh / 50;

		constructor() {
			this.propFrameCounts.Set(BattlefieldPropTypeEnum.Feather, this.fps * 5);
			this.propFrameCounts.Set(BattlefieldPropTypeEnum.Drinks, this.fps * 5);
			this.propFrameCounts.Set(BattlefieldPropTypeEnum.SpringShoe, this.fps * 5);
			this.propFrameCounts.Set(BattlefieldPropTypeEnum.TurtleShell, this.fps * 5);
		}
	}
}