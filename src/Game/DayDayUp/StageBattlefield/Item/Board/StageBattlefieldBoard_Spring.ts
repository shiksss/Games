module DayDayUp {
	export class StageBattlefieldBoard_Spring extends StageBattlefieldBoard {
		static ClassName: string = "StageBattlefieldBoard_Spring";
		className: string = StageBattlefieldBoard_Spring.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldBoard_Spring {
			let newOne: StageBattlefieldBoard_Spring = pool == null ? new StageBattlefieldBoard_Spring() : <StageBattlefieldBoard_Spring>pool.Get(StageBattlefieldBoard_Spring.ClassName, () => { return new StageBattlefieldBoard_Spring(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Spring(): BattlefieldBoard_Spring {
			return this.data as BattlefieldBoard_Spring;
		}

		get BodyColor(): number { return 0x00ffff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("128_png");
			result.texture = texture;
			result.x = bodyRect.x;
			result.y = bodyRect.y;
			result.width = bodyRect.width;
			result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
			
			this.rootGameObject.addChild(result);
		};
	}
}