module DayDayUp {
	export class RoomController_Demo extends RoomController {
		static ClassName: string = "RoomController_Demo";
		className: string = RoomController_Demo.ClassName;

		static New(pool: Lib.ObjectPool, stageBattlefieldController: StageBattlefieldController): RoomController_Demo {
			let newOne: RoomController_Demo = pool == null ? new RoomController_Demo() : <RoomController_Demo>pool.Get(RoomController_Demo.ClassName, () => { return new RoomController_Demo(); });

			newOne.Init(stageBattlefieldController);

			return newOne;
		}

		static NewWithGameObject(width: number, height: number): RoomController_Demo {
			let gameObject = Lib.GameObject.New(Lib.ObjectPool.Instance);

			let battlefield: Battlefield = new Battlefield(new BattlefieldSetting());

			let stageBattlefield: StageBattlefield = StageBattlefield.New(gameObject.pool, width, height - width / 4, battlefield);
			gameObject.components.Add(stageBattlefield);

			let stageBattlefieldController: StageBattlefieldController_Ai = StageBattlefieldController_Ai.New(gameObject.pool, stageBattlefield);
			gameObject.components.Add(stageBattlefieldController);

			let roomController: RoomController_Demo = RoomController_Demo.New(gameObject.pool, stageBattlefieldController);
			gameObject.components.Add(roomController);

			return roomController;
		}

		Update(): void {
			super.Update();

			let mainPlayer: BattlefieldPlayer = this.stageBattlefieldController.stageBattlefield.battlefield.MainPlayer;

			if (mainPlayer != null) {
				switch (mainPlayer.state) {
					case BattlefieldPlayerStateEnum.Dead: {
						this.OnEnd();

						break;
					}
				}
			}
		}
	}
}