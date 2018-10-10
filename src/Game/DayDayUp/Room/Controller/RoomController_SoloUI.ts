module DayDayUp {
	export class RoomController_SoloUI extends Lib.View {
		get LogicScale(): number { return Lib.ViewManager.Instance.logicScreenWidth / 240; }

		bitmapLabel_Level: eui.BitmapLabel;
		bitmapLabel_JumpLevel: eui.BitmapLabel;
		bitmapLabel_JumpSpeed: eui.BitmapLabel;

		progressBar_JumpPower: eui.ProgressBar;
		image_JumpPower_Blue: eui.Image;
		image_JumpPower_Red: eui.Image;

		progressBar_SuperForce: eui.ProgressBar;
		image_SuperForceMax_False: eui.Image;
		image_SuperForceMax_True: eui.Image;

		group_Feather: eui.Group;
		bitmapLabel_Feather: eui.BitmapLabel;

		group_Drinks: eui.Group;
		bitmapLabel_Drinks: eui.BitmapLabel;

		group_SpringShoe: eui.Group;
		bitmapLabel_SpringShoe: eui.BitmapLabel;

		group_TurtleShell: eui.Group;
		bitmapLabel_TurtleShell: eui.BitmapLabel;
	}
}