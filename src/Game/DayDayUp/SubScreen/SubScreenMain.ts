module DayDayUp {
	export class SubScreenMain extends Lib.SubScreen {
		get ClassName(): string { return "SubScreenMain"; }

		get BGMFilePath(): string { return "resource/Sound/BGM/BGM_Main.mp3"; }

		roomController: RoomController_Demo = null;

		ui: SubScreenMainUI;

		GetResGroupNames(): Lib.List<string> {
			let resGroupNames: Lib.List<string> = new Lib.List<string>();
			resGroupNames.Add("preload");
			resGroupNames.Add("Battlefield");

			return resGroupNames;
		}

		Start(): void {
			let playCount: number = LocalSetting.Instance.PlayCount;

			this.ui = new SubScreenMainUI(true ,"DayDayUp", this.ClassName, () => {
				this.ui.button_FirstStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnButtonClicked_Start, this);
				this.ui.button_Start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnButtonClicked_Start, this);
			});

			this.ui.group_First.visible = playCount <= 0;
			this.ui.group_Main.visible = playCount > 0;

			this.DisplayRoot.addChild(this.ui);

			{
				var collection = new eui.ArrayCollection();

				for (var i = 0; i < 20; i++) {
					collection.addItem({ "label": "Text" + i });
				}

				this.ui.list_test.dataProvider = collection;

				this.ui.list_test.itemRenderer = ListItem_Test;
			}

			this.CreatRoomController();
		}

		CreatRoomController(): void {
			this.roomController = RoomController_Demo.NewWithGameObject(this.owner.stage.stageWidth, this.owner.stage.stageHeight);
			this.DisplayRoot.addChildAt(this.roomController.GameObject, 0);
			this.roomController.onEnd = () => {
				this.roomController.GameObject.RemoveSelf();

				this.CreatRoomController();
			};
		}

		private OnButtonClicked_Start(): void {
			Lib.MessageBox.ShowYesNo(null, "测试", "开始游戏", () => {
				this.owner.ChangeTo(new SubScreenBattlefield_Solo());
				LocalSetting.Instance.PlayCount++;
			});
		}

		private OnButtonClicked_Start0(): void {
			if (SubScreenBattlefield_Solo_PlayRecord.lastRecord == null) {
				this.owner.ChangeTo(new SubScreenBattlefield_Solo());
			} else {
				this.owner.ChangeTo(new SubScreenBattlefield_Solo_PlayRecord());
			}
		}
	}
}