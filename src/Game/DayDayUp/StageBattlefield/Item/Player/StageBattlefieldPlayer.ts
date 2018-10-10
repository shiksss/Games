module DayDayUp {
	export class StageBattlefieldPlayer extends StageBattlefieldItem {
		static ClassName: string = "StageBattlefieldPlayer";
		className: string = StageBattlefieldPlayer.ClassName;

		get Player(): BattlefieldPlayer {
			return this.data as BattlefieldPlayer;
		}

		playerLastState: BattlefieldPlayerStateEnum;

		get BodyColor(): number { return 0x00ff00; }

		result: egret.Bitmap;

		ai: StageBattlefieldPlayerAI = null;
		set AiEnabled(aiEnabled: boolean) {
			if (aiEnabled) {
				if (this.ai == null) {
					this.ai = StageBattlefieldPlayerAI.New(this.pool, this);
				}
			} else {
				if (this.ai != null) {
					this.ai.Release();
					this.ai = null;
				}
			}
		}

		static New(pool: Lib.ObjectPool, owner: StageBattlefield, data: BattlefieldItem, aiEnabled: boolean): StageBattlefieldPlayer {
			let newOne: StageBattlefieldPlayer = pool == null ? new StageBattlefieldPlayer() : <StageBattlefieldPlayer>pool.Get(StageBattlefieldPlayer.ClassName, () => { return new StageBattlefieldPlayer(); });

			newOne.Init_Player(pool, owner, data, aiEnabled);

			return newOne;
		}

		protected Init_Player(pool: Lib.ObjectPool, owner: StageBattlefield, data: BattlefieldItem, aiEnabled: boolean): void {
			super.Init(pool, owner, data);
			this.AiEnabled = aiEnabled;
		}

		Release(): void {
			this.AiEnabled = false;

			this.result = null;

			super.Release();
		}

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			this.result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("164_png");
			this.result.texture = texture;
			this.result.width = bodyRect.width * 2;
			this.result.height = texture.textureHeight * bodyRect.width / texture.textureWidth * 2;
			this.result.x = -this.result.width / 2;
			this.result.y = -this.result.height;

			this.rootGameObject.addChild(this.result);
		}

		Update(): void {
			super.Update();

			if (this.ai != null) {
				this.ai.Ai();
			}

			let atBoard: StageBattlefieldBoard = this.ownerStageBattlefield.boards.Get(this.Player.AtBoardId);

			if (this.Player.state != this.playerLastState && this.Player.state == BattlefieldPlayerStateEnum.Run) {
				//尝试落地弹力和起跳弹力表现
				atBoard.WhenTrampled(this);

				if (this.ai != null) {
					this.ai.Refresh();
				}
			}

			if (atBoard != null) {
				this.SetShowOffset(atBoard.ShowOffsetX, atBoard.ShowOffsetY);
			} else {
				this.SetShowOffset(0, 0);
			}

			this.result.alpha = this.Player.curSuperForce >= this.Player.SuperForceMax ? 0.5 : 1;

			this.playerLastState = this.Player.state;
		}
	}
}