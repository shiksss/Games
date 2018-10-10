module DayDayUp {
	export class RoomController_Solo_PlayRecord extends RoomController_Solo {
		static ClassName: string = "RoomController_Solo_PlayRecord";
		className: string = RoomController_Solo_PlayRecord.ClassName;

		static New(pool: Lib.ObjectPool, stageBattlefieldController: StageBattlefieldController, ui: RoomController_SoloUI): RoomController_Solo_PlayRecord {
			let newOne: RoomController_Solo_PlayRecord = pool == null ? new RoomController_Solo_PlayRecord() : <RoomController_Solo_PlayRecord>pool.Get(RoomController_Solo_PlayRecord.ClassName, () => { return new RoomController_Solo_PlayRecord(); });

			newOne.Init(stageBattlefieldController);

			newOne.ui = ui;

			return newOne;
		}

		static NewWithGameObject(width: number, height: number, battlefield: Battlefield, ui: RoomController_SoloUI): RoomController_Solo_PlayRecord {
			let gameObject = Lib.GameObject.New(Lib.ObjectPool.Instance);

			let stageBattlefield: StageBattlefield = StageBattlefield.New(gameObject.pool, width, height - width / 4, battlefield);
			gameObject.components.Add(stageBattlefield);

			let stageBattlefieldController: StageBattlefieldController_Ai = StageBattlefieldController_Ai.New(gameObject.pool, stageBattlefield);
			gameObject.components.Add(stageBattlefieldController);

			let roomController: RoomController_Solo_PlayRecord = RoomController_Solo_PlayRecord.New(gameObject.pool, stageBattlefieldController, ui);
			gameObject.components.Add(roomController);

			return roomController;
		}
	}
}