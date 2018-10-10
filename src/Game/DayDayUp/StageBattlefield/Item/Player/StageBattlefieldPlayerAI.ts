module DayDayUp {
	export class StageBattlefieldPlayerAI extends Lib.PoolableObj {
		static ClassName: string = "StageBattlefieldPlayerAI";
		className: string = StageBattlefieldPlayerAI.ClassName;

		player: StageBattlefieldPlayer;

		random: Lib.HLRandom = new Lib.HLRandom(egret.getTimer());

		edgeOffset: number;
		maxDelay: number;

		static New(pool: Lib.ObjectPool, player: StageBattlefieldPlayer): StageBattlefieldPlayerAI {
			let newOne: StageBattlefieldPlayerAI = pool == null ? new StageBattlefieldPlayerAI() : <StageBattlefieldPlayerAI>pool.Get(StageBattlefieldPlayerAI.ClassName, () => { return new StageBattlefieldPlayerAI(); });

			newOne.Init(player);

			return newOne;
		}

		protected Init(player: StageBattlefieldPlayer): void {
			this.player = player;
			this.edgeOffset = 0;
			this.maxDelay = 0;
		}

		Release(): void {
			this.player = null;

			super.Release();
		}

		Ai(): void {
			let atBoard: StageBattlefieldBoard = this.player.ownerStageBattlefield.boards.Get(this.player.Player.AtBoardId);

			let onHolding: boolean = true;

			if (this.player.Player.curJumpPower >= this.player.Player.JumpPowerMax && this.player.Player.curJumpPowerAtMaxFrameCount >= this.maxDelay) {// 蓄力到头的处理
				onHolding = false;
			} else if (atBoard != null) {// 如果处于板的边缘
				if (this.player.Player.AtEdge(this.edgeOffset)) {// 如果是在沼泽上穿透之前释放
					onHolding = false;
				}
			}

			this.player.ownerStageBattlefield.onHoldings.Set(this.player.Id, onHolding);
		}

		Refresh(): void {
			//蓄满延迟
			this.maxDelay = this.random.Next(0, this.player.Player.JumpPowerAtMaxFrameCount * 0.2);

			//边缘偏移
			this.edgeOffset = this.random.Next(0, this.player.Player.body.width * 0.2);
		}
	}
}