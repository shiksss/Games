module DayDayUp {
	export class RoomController_Solo extends RoomController {
		static ClassName: string = "RoomController_Solo";
		className: string = RoomController_Solo.ClassName;

		ui: RoomController_SoloUI;

		lastLevelMax: number = -1;

		static New(pool: Lib.ObjectPool, stageBattlefieldController: StageBattlefieldController, ui: RoomController_SoloUI): RoomController_Solo {
			let newOne: RoomController_Solo = pool == null ? new RoomController_Solo() : <RoomController_Solo>pool.Get(RoomController_Solo.ClassName, () => { return new RoomController_Solo(); });

			newOne.Init(stageBattlefieldController);

			newOne.ui = ui;

			return newOne;
		}

		static NewWithGameObject(width: number, height: number, battlefield: Battlefield, ui: RoomController_SoloUI): RoomController_Solo {
			let gameObject = Lib.GameObject.New(Lib.ObjectPool.Instance);

			let stageBattlefield: StageBattlefield = StageBattlefield.New(gameObject.pool, width, height - width / 4, battlefield);
			gameObject.components.Add(stageBattlefield);

			let stageBattlefieldController: StageBattlefieldController_Manual = StageBattlefieldController_Manual.New(gameObject.pool, stageBattlefield);
			gameObject.components.Add(stageBattlefieldController);

			let roomController: RoomController_Solo = RoomController_Solo.New(gameObject.pool, stageBattlefieldController, ui);
			gameObject.components.Add(roomController);

			return roomController;
		}

		Update(): void {
			super.Update();

			this.RefreshUI();

			let mainPlayer: BattlefieldPlayer = this.stageBattlefieldController.stageBattlefield.battlefield.MainPlayer;

			if (mainPlayer != null) {
				switch (mainPlayer.state) {
					case BattlefieldPlayerStateEnum.Dead: {
						console.info("最高层数 " + this.lastLevelMax);
						this.OnEnd();
						break;
					}
				}
			}
		}

		Release(): void {
			this.ui = null;
			this.lastLevelMax = -1;

			super.Release();
		}

		RefreshUI(): void {
			if (this.ui != null) {
				let mainPlayer: BattlefieldPlayer = this.stageBattlefieldController.stageBattlefield.battlefield.MainPlayer;

				if (mainPlayer != null) {
					if (this.lastLevelMax != mainPlayer.LevelMax) {
						this.lastLevelMax = mainPlayer.LevelMax;
						this.ui.bitmapLabel_Level.text = this.lastLevelMax.toString();
					}

					this.ui.progressBar_JumpPower.value = 100 * mainPlayer.curJumpPower / mainPlayer.ownerBattlefield.setting.jumpPowerMax;
					if (mainPlayer.curJumpPower >= mainPlayer.ownerBattlefield.setting.jumpPowerMax) {
						this.ui.image_JumpPower_Blue.visible = false;
						this.ui.image_JumpPower_Red.visible = true;
					} else {
						this.ui.image_JumpPower_Blue.visible = true;
						this.ui.image_JumpPower_Red.visible = false;
					}

					this.ui.progressBar_SuperForce.value = 100 * mainPlayer.curSuperForce / mainPlayer.ownerBattlefield.setting.superForceMax;
					if (mainPlayer.curSuperForce >= mainPlayer.ownerBattlefield.setting.superForceMax) {
						this.ui.image_SuperForceMax_False.visible = false;
						this.ui.image_SuperForceMax_True.visible = true;
					} else {
						this.ui.image_SuperForceMax_False.visible = true;
						this.ui.image_SuperForceMax_True.visible = false;
					}

					let propLeftFrameCount: number = mainPlayer.GetPropLeftFrameCount(BattlefieldPropTypeEnum.Feather);
					if (propLeftFrameCount > 0) {
						this.ui.bitmapLabel_Feather.text = Math.ceil(propLeftFrameCount / mainPlayer.ownerBattlefield.setting.fps).toString();
						this.ui.group_Feather.visible = true;
					} else {
						this.ui.group_Feather.visible = false;
					}

					propLeftFrameCount = mainPlayer.GetPropLeftFrameCount(BattlefieldPropTypeEnum.Drinks);
					if (propLeftFrameCount > 0) {
						this.ui.bitmapLabel_Drinks.text = Math.ceil(propLeftFrameCount / mainPlayer.ownerBattlefield.setting.fps).toString();
						this.ui.group_Drinks.visible = true;
					} else {
						this.ui.group_Drinks.visible = false;
					}

					propLeftFrameCount = mainPlayer.GetPropLeftFrameCount(BattlefieldPropTypeEnum.SpringShoe);
					if (propLeftFrameCount > 0) {
						this.ui.bitmapLabel_SpringShoe.text = Math.ceil(propLeftFrameCount / mainPlayer.ownerBattlefield.setting.fps).toString();
						this.ui.group_SpringShoe.visible = true;
					} else {
						this.ui.group_SpringShoe.visible = false;
					}

					propLeftFrameCount = mainPlayer.GetPropLeftFrameCount(BattlefieldPropTypeEnum.TurtleShell);
					if (propLeftFrameCount > 0) {
						this.ui.bitmapLabel_TurtleShell.text = Math.ceil(propLeftFrameCount / mainPlayer.ownerBattlefield.setting.fps).toString();
						this.ui.group_TurtleShell.visible = true;
					} else {
						this.ui.group_TurtleShell.visible = false;
					}

					switch (mainPlayer.state) {
						case BattlefieldPlayerStateEnum.JumpUp:
						case BattlefieldPlayerStateEnum.SuperJumpUp: {
							if (mainPlayer.record_levelAtOnceJump >= 2) {
								this.ui.bitmapLabel_JumpLevel.text = mainPlayer.record_levelAtOnceJump.toString() + "层";
							}
							let tempKMPH: number = Math.ceil(-mainPlayer.record_speedOfJump * mainPlayer.ownerBattlefield.setting.fps * 3.6);
							this.ui.bitmapLabel_JumpSpeed.text = tempKMPH.toString() + "速";

							break;
						}
						case BattlefieldPlayerStateEnum.Idle:
						case BattlefieldPlayerStateEnum.Run: {
							this.ui.bitmapLabel_JumpLevel.text = "";
							this.ui.bitmapLabel_JumpSpeed.text = "";
							break;
						}
						case BattlefieldPlayerStateEnum.Dead: {
							if (SubScreenBattlefield_Solo_PlayRecord.lastRecord == null) {
								SubScreenBattlefield_Solo_PlayRecord.lastRecord = mainPlayer.ownerBattlefield.record.Clone();
							}
							break;
						}
					}
				}
			}
		}
	}
}