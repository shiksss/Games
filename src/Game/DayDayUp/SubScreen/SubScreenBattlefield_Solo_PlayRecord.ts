module DayDayUp {
	export class SubScreenBattlefield_Solo_PlayRecord extends Lib.SubScreen {
		get ClassName(): string { return "SubScreenBattlefield_Solo_PlayRecord"; }

		get BGMFilePath(): string { return "resource/Sound/BGM/BGM_Main.mp3"; }

		private roomController: RoomController_Solo_PlayRecord;

		static lastRecord: Record = null;

		GetResGroupNames(): Lib.List<string> {
			let resGroupNames: Lib.List<string> = new Lib.List<string>();
			resGroupNames.Add("Battlefield");

			return resGroupNames;
		}

		Start(): void {
			let ui: RoomController_SoloUI = new RoomController_SoloUI(true ,"DayDayUp", RoomController_Solo.ClassName, null);
			this.DisplayRoot.addChild(ui);

			let battlefieldSetting: BattlefieldSetting = new BattlefieldSetting();
			battlefieldSetting.seed = SubScreenBattlefield_Solo_PlayRecord.lastRecord.seed;

			let battlefield: Battlefield = new Battlefield(battlefieldSetting);
			this.roomController = RoomController_Solo_PlayRecord.NewWithGameObject(this.owner.stage.stageWidth, this.owner.stage.stageHeight, battlefield, ui);
			this.roomController.onEnd = () => {
				this.owner.ChangeTo(new SubScreenMain());
			};
			this.DisplayRoot.addChildAt(this.roomController.GameObject, 0);
		}
	}
}