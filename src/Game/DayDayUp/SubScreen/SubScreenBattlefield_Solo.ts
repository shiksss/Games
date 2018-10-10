module DayDayUp {
	export class SubScreenBattlefield_Solo extends Lib.SubScreen {
		get ClassName(): string { return "SubScreenBattlefield_Solo"; }

		get BGMFilePath(): string { return "resource/Sound/BGM/BGM_Main.mp3"; }

		private roomController: RoomController_Solo;

		GetResGroupNames(): Lib.List<string> {
			let resGroupNames: Lib.List<string> = new Lib.List<string>();
			resGroupNames.Add("Battlefield");

			return resGroupNames;
		}

		Start(): void {
			// await platform.login();
			// const userInfo = await platform.getUserInfo();
			// console.log(userInfo);

			let ui: RoomController_SoloUI = new RoomController_SoloUI(true, "DayDayUp", RoomController_Solo.ClassName, null);
			this.DisplayRoot.addChild(ui);

			let battlefield: Battlefield = new Battlefield(new BattlefieldSetting());
			this.roomController = RoomController_Solo.NewWithGameObject(this.owner.stage.stageWidth, this.owner.stage.stageHeight, battlefield, ui);
			this.roomController.onEnd = () => {
				this.owner.ChangeTo(new SubScreenMain());
			};
			this.DisplayRoot.addChildAt(this.roomController.GameObject, 0);
		}
	}
}