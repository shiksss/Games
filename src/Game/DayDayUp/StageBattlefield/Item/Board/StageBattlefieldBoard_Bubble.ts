module DayDayUp {
	export class StageBattlefieldBoard_Bubble extends StageBattlefieldBoard {
		static ClassName: string = "StageBattlefieldBoard_Bubble";
		className: string = StageBattlefieldBoard_Bubble.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldBoard_Bubble {
			let newOne: StageBattlefieldBoard_Bubble = pool == null ? new StageBattlefieldBoard_Bubble() : <StageBattlefieldBoard_Bubble>pool.Get(StageBattlefieldBoard_Bubble.ClassName, () => { return new StageBattlefieldBoard_Bubble(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Bubble(): BattlefieldBoard_Bubble {
			return this.data as BattlefieldBoard_Bubble;
		}

		get BodyColor(): number { return 0x0000ff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("116_png");
			result.texture = texture;
			result.x = bodyRect.x;
			result.y = bodyRect.y;
			result.width = bodyRect.width;
			result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;

			this.rootGameObject.addChild(result);
		};
	}
}