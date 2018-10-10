module DayDayUp {
	export class StageBattlefield extends Lib.GameObjectComponent {
		static ClassName: string = "StageBattlefield";
		className: string = StageBattlefield.ClassName;

		viewWidth: number;
		viewHeight: number;

		battlefield: Battlefield;

		private boards_root: Lib.GameObject;
		boards: Lib.Dictionary<StageBattlefieldBoard> = new Lib.Dictionary<StageBattlefieldBoard>();
		private needSynBoardsByData: boolean = true;

		private props_root: Lib.GameObject;
		props: Lib.Dictionary<StageBattlefieldProp> = new Lib.Dictionary<StageBattlefieldProp>();
		private needSynPropsByData: boolean = true;

		private players_root: Lib.GameObject;
		players: Lib.Dictionary<StageBattlefieldPlayer> = new Lib.Dictionary<StageBattlefieldPlayer>();
		private needSynPlayersByData: boolean = true;

		onHoldings: Lib.Dictionary<boolean> = new Lib.Dictionary<boolean>();

		static New(pool: Lib.ObjectPool, viewWidth: number, viewHeight: number, battlefield: Battlefield): StageBattlefield {
			let newOne: StageBattlefield = pool == null ? new StageBattlefield() : <StageBattlefield>pool.Get(StageBattlefield.ClassName, () => { return new StageBattlefield(); });

			newOne.Init(viewWidth, viewHeight, battlefield);

			return newOne;
		}

		Init(viewWidth: number, viewHeight: number, battlefield: Battlefield): void {
			this.viewWidth = viewWidth;
			this.viewHeight = viewHeight;
			this.battlefield = battlefield;

			this.needSynBoardsByData = true;
			this.needSynPropsByData = true;
			this.needSynPlayersByData = true;
		}

		Release(): void {
			this.battlefield = null;

			this.boards_root = null;
			this.boards.Clear();

			this.props_root = null;
			this.props.Clear();

			this.players_root = null;
			this.players.Clear();

			this.onHoldings.Clear();

			super.Release();
		}

		Start(): void {
			super.Start();

			this.boards_root = Lib.GameObject.New(Lib.ObjectPool.Instance, false);
			this.GameObject.addChild(this.boards_root);

			this.battlefield.onBoard_Added = () => { this.needSynBoardsByData = true };
			this.battlefield.onBoard_Removed = () => { this.needSynBoardsByData = true };

			this.props_root = Lib.GameObject.New(Lib.ObjectPool.Instance, false);
			this.GameObject.addChild(this.props_root);

			this.battlefield.onProp_Added = () => { this.needSynPropsByData = true };
			this.battlefield.onProp_Removed = () => { this.needSynPropsByData = true };

			this.players_root = Lib.GameObject.New(Lib.ObjectPool.Instance, false);
			this.GameObject.addChild(this.players_root);

			this.battlefield.onPlayer_Added = () => { this.needSynPlayersByData = true };
			this.battlefield.onPlayer_Removed = () => { this.needSynPlayersByData = true };

			this.needSynBoardsByData = true;
			this.TrySynBoardsByData();

			this.needSynPropsByData = true;
			this.TrySynPropsByData();

			this.needSynPlayersByData = true;
			this.TryRefreshPlayersByData();

			this.players.ForEach(
				(key: any, value: StageBattlefieldPlayer) => {
					value.AiEnabled = false;
				}
			);
		}

		TrySynByData(): void {
			this.TrySynBoardsByData();

			this.TrySynPropsByData();

			this.TryRefreshPlayersByData();
		}

		private static SynItemsByData(//
			root: Lib.GameObject, //
			items: Lib.Dictionary<StageBattlefieldItem>, //
			datas: Lib.Dictionary<BattlefieldItem>, //
			newItem: (data: BattlefieldItem) => StageBattlefieldItem): void {

			let keysRemoved: Lib.List<number> = new Lib.List<number>();
			items.ForEachKey((key) => {
				if (!datas.ContainsKey(key)) {
					keysRemoved.Add(key);
				}
			});
			keysRemoved.ForEach((index: number, value) => {
				let stageBattlefieldItem: StageBattlefieldItem = items.Get(value);

				stageBattlefieldItem.GameObject.RemoveSelf();

				items.Remove(value);
			});

			datas.ForEach((key, value: BattlefieldItem) => {
				if (!items.ContainsKey(key)) {
					let item: StageBattlefieldItem = newItem(value);

					if (item != null) {
						let itemGameObject: Lib.GameObject = Lib.GameObject.New(Lib.ObjectPool.Instance);
						itemGameObject.components.Add(item);

						root.addChild(itemGameObject);
						items.Set(item.Id, item);
					}
				}
			});
		}

		private SynBoardsByData(): void {
			// console.info("SynBoardsByData " + this.battlefield.boards.Count);

			StageBattlefield.SynItemsByData(this.boards_root, this.boards, this.battlefield.boards, (data: BattlefieldItem) => {
				if (data instanceof BattlefieldBoard) {
					switch ((data as BattlefieldBoard).Type) {
						case BattlefieldBoardTypeEnum.Bubble: {
							return StageBattlefieldBoard_Bubble.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldBoardTypeEnum.Conveyor: {
							return StageBattlefieldBoard_Conveyor.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldBoardTypeEnum.Ground: {
							return StageBattlefieldBoard_Ground.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldBoardTypeEnum.Ice: {
							return StageBattlefieldBoard_Ice.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldBoardTypeEnum.Marsh: {
							return StageBattlefieldBoard_Marsh.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldBoardTypeEnum.Quicksand: {
							return StageBattlefieldBoard_Quicksand.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldBoardTypeEnum.Spring: {
							return StageBattlefieldBoard_Spring.New(Lib.ObjectPool.Instance, this, data);
						}
					}
				}
				return StageBattlefieldBoard_Normal.New(Lib.ObjectPool.Instance, this, data);
			});
		}

		private TrySynBoardsByData(): void {
			if (this.needSynBoardsByData) {
				this.SynBoardsByData();

				this.needSynBoardsByData = false;
			}

			this.boards.ForEach((key, value: StageBattlefieldBoard) => {
				value.Update();
			});
		}

		private SynPropsByData(): void {
			// console.info("SynPropsByData " + this.battlefield.Props.Count);

			StageBattlefield.SynItemsByData(this.props_root, this.props, this.battlefield.props, (data: BattlefieldItem) => {
				if (data instanceof BattlefieldProp) {
					switch ((data as BattlefieldProp).Type) {
						case BattlefieldPropTypeEnum.Feather: {
							return StageBattlefieldProp_Feather.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldPropTypeEnum.Drinks: {
							return StageBattlefieldProp_Drinks.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldPropTypeEnum.Chicken: {
							return StageBattlefieldProp_Chicken.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldPropTypeEnum.SpringShoe: {
							return StageBattlefieldProp_SpringShoe.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldPropTypeEnum.TurtleShell: {
							return StageBattlefieldProp_TurtleShell.New(Lib.ObjectPool.Instance, this, data);
						}
						case BattlefieldPropTypeEnum.TurnBack: {
							return StageBattlefieldProp_TurnBack.New(Lib.ObjectPool.Instance, this, data);
						}
					}
				}
				return null;
			});
		}

		private TrySynPropsByData(): void {
			if (this.needSynPropsByData) {
				this.SynPropsByData();

				this.needSynPropsByData = false;
			}

			this.props.ForEach((key, value: StageBattlefieldProp) => {
				value.Update();
			});
		}

		private SynPlayersByData(): void {
			// console.info("SynPlayersByData " + this.battlefield.players.Count);

			StageBattlefield.SynItemsByData(this.players_root, this.players, this.battlefield.players, (data: BattlefieldItem) => {
				return StageBattlefieldPlayer.New(Lib.ObjectPool.Instance, this, data, false);
			});
		}

		private TryRefreshPlayersByData(): void {
			if (this.needSynPlayersByData) {
				this.SynPlayersByData();

				this.needSynPlayersByData = false;
			}

			this.players.ForEach((key, value: StageBattlefieldPlayer) => {
				value.Update();
			});
		}
	}
}