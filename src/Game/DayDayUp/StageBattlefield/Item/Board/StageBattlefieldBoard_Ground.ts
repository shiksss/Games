module DayDayUp {
	export class StageBattlefieldBoard_Ground extends StageBattlefieldBoard {
		static ClassName: string = "StageBattlefieldBoard_Ground";
		className: string = StageBattlefieldBoard_Ground.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldBoard_Ground {
			let newOne: StageBattlefieldBoard_Ground = pool == null ? new StageBattlefieldBoard_Ground() : <StageBattlefieldBoard_Ground>pool.Get(StageBattlefieldBoard_Ground.ClassName, () => { return new StageBattlefieldBoard_Ground(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Ground(): BattlefieldBoard_Ground {
			return this.data as BattlefieldBoard_Ground;
		}

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("93_png");
			result.texture = texture;
			result.x = bodyRect.x;
			result.y = bodyRect.y;
			result.width = bodyRect.width;
			result.height = bodyRect.height;

			this.rootGameObject.addChild(result);
		};

		get BodyColor(): number { return 0x000000; }

		WhenTrampled(player: StageBattlefieldPlayer): void { }
	}
}