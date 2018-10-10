module DayDayUp {
	export enum BattlefieldPlayerStateEnum {
		None,
		Init,
		Idle,
		Run,
		JumpUp,
		SuperJumpUp,
		Fall,
		Hurt,
		Dead
	};

	export class BattlefieldPlayerRates {
		hp: number = 1;// 基础生命 = 0;

		jumpPowerPerFrame: number = 1;// 蓄力速度 = 16;
		jumpPowerAtMaxFrameCount: number = 1;// 蓄满维持时间 = 17;

		superForcePerMaxJump: number = 1;// 内力增加速度 = 17;

		g: number = 1;// 重力 = 7;
		airSpeed: number = 1;// 横向速度 = 8;
		shotSpeed_cannon: number = 1;// 大炮发射速度 = 1;

		runSpeed: number = 1;// 
		runSpeeds: Lib.Dictionary<number> = new Lib.Dictionary<number>();

		jumpSpeed: number = 1;// 
		jumpSpeeds: Lib.Dictionary<number> = new Lib.Dictionary<number>();

		superJumpSpeed: number = 1;// 
		superJumpSpeeds: Lib.Dictionary<number> = new Lib.Dictionary<number>();

		elapseLifePerFrame_Quicksand: number = 1;// 流沙消耗 = 14;

		groundOffsetPerFrame: number = 1;// 沼泽陷入速度 = 15;
	}

	export class BattlefieldPlayer extends BattlefieldItem {
		static ClassName: string = "BattlefieldPlayer";
		className: string = BattlefieldPlayer.ClassName;

		stateNames: string[] = [
			"None",
			"Init",
			"Idle",
			"Run",
			"JumpUp",
			"SuperJumpUp",
			"Fall",
			"Hurt",
			"Dead"
		];

		rates: BattlefieldPlayerRates;

		record_yMax: number = 0;
		get LevelMax(): number { return Math.floor(-this.record_yMax / this.ownerBattlefield.setting.showHeight); }
		record_yOfJump: number = 0;//起跳时Y
		record_yOfFall: number = 0;//下落时Y
		record_speedOfJump: number = 0;
		record_speedOfJumpMax: number = 0;
		record_levelAtOnceJump: number = 0;
		record_levelAtOnceJumpMax: number = 0;

		RecordJumpInfo(jumpSpeed: number): void {
			// 记录起跳y坐标
			this.record_yOfJump = this.y;
			this.record_yOfFall = this.y;

			//记录本次起跳速度
			this.record_speedOfJump = jumpSpeed;
			if (this.record_speedOfJump < this.record_speedOfJumpMax) {
				this.record_speedOfJumpMax = this.record_speedOfJump;
			}

			this.record_levelAtOnceJump = 0;
		}

		RecordRefresh(): void {
			if (this.record_yMax > this.y) {
				this.record_yMax = this.y;
			}

			if (this.record_yOfFall > this.y) {
				this.record_yOfFall = this.y;
			}

			let tempLevelAtOnceJump: number = Math.floor((this.record_yOfJump - this.record_yOfFall) / this.ownerBattlefield.setting.showHeight);

			if (this.record_levelAtOnceJump < tempLevelAtOnceJump) {
				this.record_levelAtOnceJump = tempLevelAtOnceJump;

				if (this.record_levelAtOnceJumpMax < this.record_levelAtOnceJump) {
					this.record_levelAtOnceJumpMax = this.record_levelAtOnceJump;
				}
			}
		}

		onProp_Added: (propType: BattlefieldPropTypeEnum) => void;
		private OnProp_Added(propType: BattlefieldPropTypeEnum): void { if (this.onProp_Added != null) this.onProp_Added(propType); }
		onProp_Removed: (propType: BattlefieldPropTypeEnum) => void;
		private OnProp_Removed(propType: BattlefieldPropTypeEnum): void { if (this.onProp_Removed != null) this.onProp_Removed(propType); }

		curPropFrameCounts: Lib.Dictionary<number> = new Lib.Dictionary<number>();
		AddProp(propType: BattlefieldPropTypeEnum): void {
			if (!this.ownerBattlefield.setting.propFrameCounts.ContainsKey(propType)) {
				return;
			}

			let propFrameCount: number = this.ownerBattlefield.setting.propFrameCounts.Get(propType);
			if (propFrameCount > 0) {
				this.curPropFrameCounts.Set(propType, propFrameCount);

				this.OnProp_Added(propType);
			}
		}

		GetPropLeftFrameCount(propType: BattlefieldPropTypeEnum): number {
			if (this.curPropFrameCounts.ContainsKey(propType)) {
				return this.curPropFrameCounts.Get(propType);
			}
			return 0;
		}

		get PropRate_G(): number {
			if (!this.curPropFrameCounts.ContainsKey(BattlefieldPropTypeEnum.Feather)
				|| this.curPropFrameCounts.Get(BattlefieldPropTypeEnum.Feather) <= 0) {
				return 1;
			}
			return this.ownerBattlefield.setting.propRate_G_Feather;
		}


		get PropRate_SpeedX(): number {
			if (!this.curPropFrameCounts.ContainsKey(BattlefieldPropTypeEnum.TurtleShell)
				|| this.curPropFrameCounts.Get(BattlefieldPropTypeEnum.TurtleShell) <= 0) {
				return 1;
			}
			return this.ownerBattlefield.setting.propRate_SpeedX_TurtleShell;
		}

		get PropRate_JumpPowerPerFrame(): number {
			if (!this.curPropFrameCounts.ContainsKey(BattlefieldPropTypeEnum.Drinks)
				|| this.curPropFrameCounts.Get(BattlefieldPropTypeEnum.Drinks) <= 0) {
				return 1;
			}
			return this.ownerBattlefield.setting.propRate_JumpPowerPerFrame_Drinks;
		}

		get PropRate_JumpSpeed(): number {
			if (!this.curPropFrameCounts.ContainsKey(BattlefieldPropTypeEnum.SpringShoe)
				|| this.curPropFrameCounts.Get(BattlefieldPropTypeEnum.SpringShoe) <= 0) {
				return 1;
			}
			return this.ownerBattlefield.setting.propRate_JumpSpeed_SpringShoe;
		}

		get PropRate_SuperJumpSpeed(): number {
			if (!this.curPropFrameCounts.ContainsKey(BattlefieldPropTypeEnum.SpringShoe)
				|| this.curPropFrameCounts.Get(BattlefieldPropTypeEnum.SpringShoe) <= 0) {
				return 1;
			}
			return this.ownerBattlefield.setting.propRate_SuperJumpSpeed_SpringShoe;
		}

		get ElapseLifePerFrame_Quicksand(): number {
			return this.ownerBattlefield.setting.elapseLifePerFrame_Quicksand * this.rates.elapseLifePerFrame_Quicksand * this.PropRate_G;
		}

		get GroundOffsetPerFrame(): number {
			let atBoard = this.GetAtBoard();
			if (atBoard != null) {
				return atBoard.GetGroundOffsetPerFrame() * this.rates.groundOffsetPerFrame * this.PropRate_G;
			}
			return 0;
		}

		curSuperForce: number = 0;//当前超级能量
		curJumpPower: number = 0;//当前跳跃力量
		curJumpPowerAtMaxFrameCount: number = 0;

		curSpeedY: number = 0;

		public score: number = 0;
		public life: number;//自身的血值

		onHolding: boolean = false;

		state: BattlefieldPlayerStateEnum = BattlefieldPlayerStateEnum.None;
		nextState: BattlefieldPlayerStateEnum;
		stateCount: number = 0;

		private atBoardId: number = -1;
		get AtBoardId(): number { return this.atBoardId; }
		GetAtBoard(): BattlefieldBoard {
			return this.ownerBattlefield.boards.Get(this.atBoardId);
		}

		boardGroundOffset: number = 0;
		AdjustYAtBoard(): void {
			let atBoard = this.GetAtBoard();
			if (atBoard != null) {
				this.curSpeedY = 0;
				this.y = atBoard.y + atBoard.body.top + this.boardGroundOffset - this.body.bottom;
			}
		}

		IsAtBoard(): boolean {
			let atBoard = this.GetAtBoard();
			if (atBoard == null) { return false; }

			return this.x + this.body.left < atBoard.x + atBoard.body.right && this.x + this.body.right > atBoard.x + atBoard.body.left;
		}

		IsTouched_Board(board: BattlefieldBoard): boolean {
			return !board.needRemoved && BattlefieldItem.Touched(
				this.x + this.body.x, this.y + this.body.y, this.body.width, this.body.height,
				board.x + board.body.x, board.y + board.body.y, board.body.width, board.body.height
			);
		}

		IsTouched_Prop(prop: BattlefieldProp): boolean {
			return !prop.needRemoved && BattlefieldItem.Touched(
				this.x + this.body.x, this.y + this.body.y, this.body.width, this.body.height,
				prop.x + prop.body.x, prop.y + prop.body.y, prop.body.width, prop.body.height
			);
		}

		get Hp(): number { return this.ownerBattlefield.setting.hp * this.rates.hp; }

		get SuperForcePerMaxJump(): number { return this.ownerBattlefield.setting.superForcePerMaxJump * this.rates.superForcePerMaxJump; }
		get SuperForceMax(): number { return this.ownerBattlefield.setting.superForceMax; }

		get JumpPowerPerFrame(): number { return this.ownerBattlefield.setting.jumpPowerPerFrame * this.rates.jumpPowerPerFrame * this.PropRate_JumpPowerPerFrame; }
		get JumpPowerMax(): number { return this.ownerBattlefield.setting.jumpPowerMax; }
		get JumpPowerAtMaxFrameCount(): number { return this.ownerBattlefield.setting.jumpPowerAtMaxFrameCount * this.rates.jumpPowerAtMaxFrameCount; }

		get G(): number { return this.ownerBattlefield.setting.g * this.rates.g * this.PropRate_G; }

		get AirSpeed(): number { return this.ownerBattlefield.setting.airSpeed * this.rates.airSpeed * this.PropRate_SpeedX; }
		get RunSpeed(): number {
			let atBoard = this.GetAtBoard();
			if (atBoard != null) {
				if (this.rates.runSpeeds.ContainsKey(atBoard.id)) {
					return this.ownerBattlefield.setting.runSpeed * atBoard.GetPlayerRunSpeedRate() * this.rates.runSpeeds.Get(atBoard.id) * this.PropRate_SpeedX;
				}
				return this.ownerBattlefield.setting.runSpeed * atBoard.GetPlayerRunSpeedRate() * this.rates.runSpeed * this.PropRate_SpeedX;
			}
			return this.ownerBattlefield.setting.runSpeed * this.rates.runSpeed * this.PropRate_SpeedX;
		}
		GetJumpSpeed(rate: number): number {
			let jumpSeppd: number = this.ownerBattlefield.setting.jumpSpeedMin + (this.ownerBattlefield.setting.jumpSpeedMax - this.ownerBattlefield.setting.jumpSpeedMin) * rate;

			let atBoard = this.GetAtBoard();
			if (atBoard != null) {
				if (this.rates.jumpSpeeds.ContainsKey(atBoard.id)) {
					return jumpSeppd * atBoard.GetPlayerJumpSpeedRate() * this.rates.jumpSpeeds.Get(atBoard.id) * this.PropRate_JumpSpeed + atBoard.GetLastDeltaY();
				}
				return jumpSeppd * atBoard.GetPlayerJumpSpeedRate() * this.rates.jumpSpeed * this.PropRate_JumpSpeed + atBoard.GetLastDeltaY();
			}
			return jumpSeppd * this.rates.jumpSpeed * this.PropRate_JumpSpeed;
		}
		get SuperJumpSpeed(): number {
			let atBoard = this.GetAtBoard();
			if (atBoard != null) {
				if (this.rates.superJumpSpeeds.ContainsKey(atBoard.id)) {
					return this.ownerBattlefield.setting.superJumpSpeed * atBoard.GetPlayerSuperJumpSpeedRate() * this.rates.superJumpSpeeds.Get(atBoard.id) * this.PropRate_SuperJumpSpeed + atBoard.GetLastDeltaY();
				}
				return this.ownerBattlefield.setting.superJumpSpeed * atBoard.GetPlayerSuperJumpSpeedRate() * this.rates.superJumpSpeed * this.PropRate_SuperJumpSpeed + atBoard.GetLastDeltaY();
			}
			return this.ownerBattlefield.setting.superJumpSpeed * this.rates.superJumpSpeed * this.PropRate_SuperJumpSpeed;
		}

		MoveX(speedXToRight: number, groundSpeed: number = 0): void {
			if (this.faceToRight) {
				this.x += groundSpeed + speedXToRight;
			} else {
				this.x += groundSpeed - speedXToRight;
			}
		}

		CheckTouchWall(): void {
			if (this.x + this.body.right >= this.ownerBattlefield.setting.showWidth) {//检查右墙
				this.x = this.ownerBattlefield.setting.showWidth - this.body.right;
				this.faceToRight = false;
			}

			if (this.x + this.body.left <= 0) {//检查左墙
				this.x = -this.body.left;
				this.faceToRight = true;
			}
		}

		MoveY(onAtBoard: () => void): void {
			this.y += this.curSpeedY;

			let isTouched: boolean = false;

			//检查是否落到板上
			this.ownerBattlefield.boards.ForEach((key: any, value: BattlefieldBoard) => {
				if (this.IsTouched_Board(value)) {
					if (this.lastY + this.body.bottom < value.lastY + value.body.bottom) {
						this.atBoardId = value.id;
						this.boardGroundOffset = 0;
						this.AdjustYAtBoard();

						if (onAtBoard != null) {
							onAtBoard();
						}

						isTouched = true;
					}
				}
			}, () => { return isTouched; });

			if (!isTouched) {
				this.curSpeedY += this.G;
			}
		}

		AtEdge(edgeOffset: number): boolean {
			let atBoard: BattlefieldBoard = this.GetAtBoard();

			if (atBoard == null) { return false; }

			if (this.faceToRight) {
				if (this.x + this.body.left + (this.RunSpeed + edgeOffset) >= atBoard.x + atBoard.body.right) {
					return true;
				}
			} else {
				if (this.x + this.body.right - (this.RunSpeed + edgeOffset) <= atBoard.x + atBoard.body.left) {
					return true;
				}
			}

			return false;
		}

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, faceToRight: boolean, atBoardId: number, rates: BattlefieldPlayerRates): BattlefieldPlayer {
			let newOne: BattlefieldPlayer = pool == null ? new BattlefieldPlayer() : <BattlefieldPlayer>pool.Get(BattlefieldPlayer.ClassName, () => { return new BattlefieldPlayer(); });

			newOne.Init_Player(ownerBattlefield, id, faceToRight, atBoardId, rates);

			return newOne;
		}

		protected Init_Player(ownerBattlefield: Battlefield, id: number, faceToRight: boolean, atBoardId: number, rates: BattlefieldPlayerRates): void {
			super.Init(ownerBattlefield, id, faceToRight);

			this.faceToRight = faceToRight;
			this.atBoardId = atBoardId;

			let width: number = 0.5;
			let height: number = 1.5;
			this.body.setTo(-width * 0.5, -height, width, height);

			this.rates = rates;

			this.nextState = BattlefieldPlayerStateEnum.Init;
		}

		public Update(): void {
			super.Update();

			if (this.nextState != BattlefieldPlayerStateEnum.None) {
				switch (this.nextState) {
					case BattlefieldPlayerStateEnum.Init: {
						break;
					}
					case BattlefieldPlayerStateEnum.Idle: {
						break;
					}
					case BattlefieldPlayerStateEnum.Run: {
						this.curSpeedY = 0;
						this.curJumpPower = 0;//用光力量
						this.curJumpPowerAtMaxFrameCount = 0;

						break;
					}
					case BattlefieldPlayerStateEnum.JumpUp: {
						if (this.curJumpPower >= this.JumpPowerMax) {
							this.curSuperForce++;
						}

						this.curSpeedY = this.GetJumpSpeed(this.curJumpPower / this.JumpPowerMax);

						this.curJumpPower = 0;//用光力量

						this.atBoardId = -1;//脱离板子

						this.RecordJumpInfo(this.curSpeedY);

						break;
					}
					case BattlefieldPlayerStateEnum.SuperJumpUp: {
						this.curSpeedY = this.SuperJumpSpeed;

						this.curSuperForce = 0;

						this.curJumpPower = 0;//用光力量

						this.atBoardId = -1;//脱离板子

						this.RecordJumpInfo(this.curSpeedY);

						break;
					}
					case BattlefieldPlayerStateEnum.Fall: {
						this.curJumpPower = 0;//用光力量

						this.atBoardId = -1;//脱离板子

						break;
					}
					case BattlefieldPlayerStateEnum.Dead: {
						break;
					}
				}
				if (this.state == this.nextState) {
					this.stateCount++;
				} else {
					this.stateCount = 0;
					this.state = this.nextState;
				}
				this.nextState = BattlefieldPlayerStateEnum.None;

				// console.info(this.ownerBattlefield.finishedFrameCount + " " + this.stateNames[this.state]);
			}

			if (this.state == BattlefieldPlayerStateEnum.None) {
				return;
			}

			switch (this.state) {
				case BattlefieldPlayerStateEnum.Init: {
					this.nextState = BattlefieldPlayerStateEnum.Idle;

					break;
				}
				case BattlefieldPlayerStateEnum.Idle: {
					// if (this.onHolding) 
					{
						this.nextState = BattlefieldPlayerStateEnum.Run;
					}

					break;
				}
				case BattlefieldPlayerStateEnum.Run: {
					let atBoard: BattlefieldBoard = this.GetAtBoard();
					if (atBoard != null) {
						if (this.onHolding) {//正在蓄力
							if (this.curJumpPower >= this.JumpPowerMax) {//已经蓄满
								this.curJumpPowerAtMaxFrameCount++;
								if (this.curJumpPowerAtMaxFrameCount >= this.JumpPowerAtMaxFrameCount) {//超过蓄满维持时间
									this.curJumpPower = 0;
									this.curJumpPowerAtMaxFrameCount = 0;
								}
							} else {
								this.curJumpPower += this.JumpPowerPerFrame;
								if (this.curJumpPower > this.JumpPowerMax) {
									this.curJumpPower = this.JumpPowerMax;
								}
							}
						} else {//已经释放
							if (this.curJumpPower >= this.JumpPowerMax && this.curSuperForce >= this.SuperForceMax) {//超级跳
								this.nextState = BattlefieldPlayerStateEnum.SuperJumpUp;
							} else if (this.curJumpPower > 0) {//蓄力但没蓄满
								this.nextState = BattlefieldPlayerStateEnum.JumpUp;
							}
						}

						if (this.nextState == BattlefieldPlayerStateEnum.None) {
							//处理移动
							this.MoveX(this.RunSpeed, atBoard.GetLastDeltaX() + atBoard.GetGroundSpeed());

							if (this.IsAtBoard()) {
								this.boardGroundOffset += this.GroundOffsetPerFrame;

								this.AdjustYAtBoard();

								if (this.boardGroundOffset > atBoard.GetGroundOffsetMax()) {
									this.nextState = BattlefieldPlayerStateEnum.Fall;
								}
							} else {//移动后超出板子
								this.nextState = BattlefieldPlayerStateEnum.Fall;
							}

							this.CheckTouchWall();
						}
					} else {//根本不在板子上
						this.nextState = BattlefieldPlayerStateEnum.Fall;
					}

					break;
				}
				case BattlefieldPlayerStateEnum.JumpUp:
				case BattlefieldPlayerStateEnum.SuperJumpUp: {
					this.MoveX(this.AirSpeed);

					this.CheckTouchWall();

					this.MoveY(() => {
						this.nextState = BattlefieldPlayerStateEnum.Run;
					});

					if (this.nextState == BattlefieldPlayerStateEnum.None && this.curSpeedY >= 0) {
						this.nextState = BattlefieldPlayerStateEnum.Fall;
					}

					this.RecordRefresh();

					break;
				}
				case BattlefieldPlayerStateEnum.Fall: {
					this.MoveX(this.AirSpeed);

					this.CheckTouchWall();

					this.MoveY(() => {
						this.nextState = BattlefieldPlayerStateEnum.Run;
					});

					if (this.nextState == BattlefieldPlayerStateEnum.None) {
						if (this.y + this.body.top > this.ownerBattlefield.curBottomPos) {
							this.nextState = BattlefieldPlayerStateEnum.Dead;
						}
					}

					break;
				}
				case BattlefieldPlayerStateEnum.Dead: {
					break;
				}
			}

			if (this.state != BattlefieldPlayerStateEnum.Dead && this.nextState != BattlefieldPlayerStateEnum.Dead) {
				{//处理道具剩余时间
					let keys_removed: Lib.List<BattlefieldPropTypeEnum> = new Lib.List<BattlefieldPropTypeEnum>();
					this.curPropFrameCounts.ForEachKey((key: any) => {
						let tempFrameCount: number = this.curPropFrameCounts.Get(key);

						if (tempFrameCount <= 1) {
							keys_removed.Add(key);
						} else {
							this.curPropFrameCounts.Set(key, tempFrameCount - 1);
						}
					});

					keys_removed.ForEach((index: number, value: BattlefieldPropTypeEnum) => {
						this.curPropFrameCounts.Remove(value);

						this.OnProp_Removed(value);
					});
				}

				//接道具
				this.ownerBattlefield.props.ForEach((key: any, value: BattlefieldProp) => {
					if (this.IsTouched_Prop(value)) {
						value.TouchPlayer(this);
					}
				});
			}
		}
	}
}