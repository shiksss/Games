module DayDayUp {
	export class Battlefield {
		objectPool: Lib.ObjectPool = Lib.ObjectPool.Instance;

		setting: BattlefieldSetting;

		mapManager: BattlefieldMapManager;

		boards: Lib.Dictionary<BattlefieldBoard> = new Lib.Dictionary<BattlefieldBoard>();
		props: Lib.Dictionary<BattlefieldProp> = new Lib.Dictionary<BattlefieldProp>();
		players: Lib.Dictionary<BattlefieldPlayer> = new Lib.Dictionary<BattlefieldPlayer>();

		mainPlayerId: number;

		get MainPlayer(): BattlefieldPlayer { return this.players.Get(this.mainPlayerId) };

		finishedFrameCount: number = 0;

		curBottomPos: number = 0;

		lastRefreshMapIndex: number = 0;
		lastRefreshRowIndex: number = 0;

		onBoard_Added: () => void;
		private OnBoard_Added(): void { if (this.onBoard_Added != null) this.onBoard_Added(); }
		onBoard_Removed: () => void;
		private OnBoard_Removed(): void { if (this.onBoard_Removed != null) this.onBoard_Removed(); }

		onProp_Added: () => void;
		private OnProp_Added(): void { if (this.onProp_Added != null) this.onProp_Added(); }
		onProp_Removed: () => void;
		private OnProp_Removed(): void { if (this.onProp_Removed != null) this.onProp_Removed(); }

		onPlayer_Added: () => void;
		private OnPlayer_Added(): void { if (this.onPlayer_Added != null) this.onPlayer_Added(); }
		onPlayer_Removed: () => void;
		private OnPlayer_Removed(): void { if (this.onPlayer_Removed != null) this.onPlayer_Removed(); }

		random_main: Lib.HLRandom;

		record: Record;

		public constructor(setting: BattlefieldSetting, playRecord: Record = null) {
			this.setting = setting;

			this.mapManager = new BattlefieldMapManager(this.setting.showWidth, this.setting.showHeight);

			this.random_main = new Lib.HLRandom(this.setting.seed);

			this.mainPlayerId = 0;

			let ground: BattlefieldBoard_Ground = this.CreateGround();

			this.RefreshBoards();

			this.CreatePlayer(0, true, ground.id, -ground.body.height);

			this.record = new Record();
			this.record.Init(this);
		}

		private CreateGround(): BattlefieldBoard_Ground {
			let ground: BattlefieldBoard_Ground = BattlefieldBoard_Ground.New(this.objectPool, this, 0, true);

			ground.SetStartPos(ground.body.width / 2, -ground.body.height);

			this.boards.Set(ground.id, ground);

			this.OnBoard_Added();

			return ground;
		}

		private CreatePlayer(id: number, faceToRight: boolean, atBoardId: number, groundPos: number): BattlefieldPlayer {
			let player: BattlefieldPlayer = BattlefieldPlayer.New(this.objectPool, this, id, faceToRight, atBoardId, new BattlefieldPlayerRates());

			player.x = this.setting.showWidth / 4;
			player.y = groundPos;

			this.players.Set(player.id, player);

			this.OnPlayer_Added();

			return player;
		}

		private RefreshBoards(): void {
			let curRefreshEndPos: number = this.curBottomPos - this.setting.showHeight * 1.25;

			this.mapManager.RefreshBoards(this, this.lastRefreshMapIndex, this.lastRefreshRowIndex, curRefreshEndPos,
				(newBoard: BattlefieldBoard) => {
					this.boards.Set(newBoard.id, newBoard);
					this.OnBoard_Added();
				},
				(newProp: BattlefieldProp) => {
					this.props.Set(newProp.id, newProp);
					this.OnProp_Added();
				},
				(mapIndex: number, rowIndex: number) => {
					this.lastRefreshMapIndex = mapIndex;
					this.lastRefreshRowIndex = rowIndex + 1;
				});
		}

		public Update(toFrameIndex: number, onHoldings: Lib.Dictionary<boolean> = null): boolean {
			if (toFrameIndex < this.finishedFrameCount) { return false; }

			this.record.AddFrame(this.finishedFrameCount, onHoldings);

			//处理板子
			{
				let keys_removed: Lib.List<number> = new Lib.List<number>();
				this.boards.ForEach((key, value: BattlefieldBoard) => {
					value.Update();
					if (value.needRemoved) {
						keys_removed.Add(key);
					}
				});

				keys_removed.ForEach((index: number, value: number) => {
					this.boards.Get(value).Release();
					this.boards.Remove(value);

					this.OnBoard_Removed();
				});
			}

			//处理道具
			{
				let keys_removed: Lib.List<number> = new Lib.List<number>();
				this.props.ForEach((key, value: BattlefieldProp) => {
					value.Update();
					if (value.needRemoved) {
						keys_removed.Add(key);
					}
				});

				keys_removed.ForEach((index: number, value: number) => {
					this.props.Get(value).Release();

					this.props.Remove(value);

					this.OnProp_Removed();
				});
			}

			//处理角色
			{
				let keys_removed: Lib.List<number> = new Lib.List<number>();
				this.players.ForEach((key, value: BattlefieldPlayer) => {
					value.onHolding = onHoldings.Get(key);
					value.Update();
					if (value.needRemoved) {
						keys_removed.Add(key);
					}
				});

				keys_removed.ForEach((index: number, value: number) => {
					this.players.Get(value).Release();

					this.players.Remove(value);

					this.OnPlayer_Removed();
				});
			}

			//根据MainPlayer处理groundY
			{
				let mainPlayer: BattlefieldPlayer = this.MainPlayer;
				if (mainPlayer != null) {
					this.curBottomPos = Math.min(this.curBottomPos, mainPlayer.y + this.setting.showHeight * 2 / 5);
				}
			}

			this.RefreshBoards();

			this.finishedFrameCount++;

			return true;
		}
	}
}