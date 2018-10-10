module DayDayUp {
	export enum BattlefieldPropTypeEnum {
		None = -1,
		Feather,//羽毛，重力变小
		Drinks,//饮料，蓄力变快
		SpringShoe,//弹簧鞋，起跳速度更大
		TurtleShell,//龟壳，跑得慢
		Chicken,//鸡肉，增加能量
		TurnBack,//转向
		COUNT,
	}

	export abstract class BattlefieldProp extends BattlefieldItem {
		get Type(): BattlefieldPropTypeEnum { return BattlefieldPropTypeEnum.None; }

		private atBoardId: number = -1;
		GetAtBoard(): BattlefieldBoard {
			return this.ownerBattlefield.boards.Get(this.atBoardId);
		}

		AdjustAtBoard(): void {
			let atBoard = this.GetAtBoard();
			if (atBoard != null) {
				this.x = atBoard.x;
				this.y = atBoard.y + atBoard.body.top - this.body.bottom - this.body.height * 0.5;
			}
		}

		protected Init_Prop(ownerBattlefield: Battlefield, id: number, atBoardId: number): void {
			super.Init(ownerBattlefield, id, true);

			this.atBoardId = atBoardId;

			let width: number = 0.5;
			let height: number = 0.5;
			this.body.setTo(-width * 0.5, 0, width, height);

			this.AdjustAtBoard();
		}

		public Update(): void {
			super.Update();

			let atBoard = this.GetAtBoard();
			if (atBoard != null) {
				this.AdjustAtBoard();
			} else {
				this.needRemoved = true;
			}
		}

		TouchPlayer(player: BattlefieldPlayer): void {
			this.needRemoved = true;

			player.AddProp(this.Type);
		}
	}
}