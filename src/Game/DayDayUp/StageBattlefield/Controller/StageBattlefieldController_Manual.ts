module DayDayUp {
	export class StageBattlefieldController_Manual extends StageBattlefieldController {
		static ClassName: string = "StageBattlefieldController_Manual";
		className: string = StageBattlefieldController_Manual.ClassName;

		static New(pool: Lib.ObjectPool, stageBattlefield: StageBattlefield): StageBattlefieldController_Manual {
			let newOne: StageBattlefieldController_Manual = pool == null ? new StageBattlefieldController_Manual() : <StageBattlefieldController_Manual>pool.Get(StageBattlefieldController_Manual.ClassName, () => { return new StageBattlefieldController_Manual(); });

			newOne.Init(stageBattlefield);

			return newOne;
		}

		Start(): void {
			super.Start();

			this.stageBattlefield.players.ForEach(
				(key: any, value: StageBattlefieldPlayer) => {
					value.AiEnabled = value.Id != this.stageBattlefield.battlefield.mainPlayerId;
				}
			);

			this.GameObject.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
			this.GameObject.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchEnd, this);
			this.GameObject.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnTouchEnd, this);
			this.GameObject.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchEnd, this);
		}

		Release(): void {
			this.GameObject.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnTouchBegin, this);
			this.GameObject.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.OnTouchEnd, this);
			this.GameObject.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnTouchEnd, this);
			this.GameObject.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchEnd, this);

			super.Release();
		}

		Update(): void {
			super.Update();

			let now: number = egret.getTimer() / 1000;

			let toFrameIndex: number = Math.floor((now - this.startTime) * this.stageBattlefield.battlefield.setting.fps);

			while (this.stageBattlefield.battlefield.Update(toFrameIndex, this.stageBattlefield.onHoldings)) {
				if (now - egret.getTimer() / 1000 >= 0.5) {
					break;
				}
			}

			this.stageBattlefield.TrySynByData();
		}

		OnTouchBegin(event: egret.TouchEvent) {
			this.stageBattlefield.onHoldings.Set(this.stageBattlefield.battlefield.mainPlayerId, true);
		}

		OnTouchEnd(event: egret.TouchEvent) {
			this.stageBattlefield.onHoldings.Set(this.stageBattlefield.battlefield.mainPlayerId, false);
		}
	}
}