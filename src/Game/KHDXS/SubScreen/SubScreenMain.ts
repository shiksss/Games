module KHDXS {
	export class SubScreenMain extends Lib.SubScreen {
		get ClassName(): string { return "SubScreenMain"; }

		get BGMFilePath(): string { return "resource/Sound/BGM/BGM_Main.mp3"; }

		ui: SubScreenMainUI;

		GetResGroupNames(): Lib.List<string> {
			let resGroupNames: Lib.List<string> = new Lib.List<string>();
			resGroupNames.Add("preload");
			resGroupNames.Add("Battlefield");

			return resGroupNames;
		}

		Start(): void {
			let playCount: number = LocalSetting.Instance.PlayCount;

			this.ui = new SubScreenMainUI(true ,"KHDXS", this.ClassName, () => {
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
		}
	}
}