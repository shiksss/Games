module DayDayUp {
	export class StageBattlefieldProp_SpringShoe extends StageBattlefieldProp {
		static ClassName: string = "StageBattlefieldProp_SpringShoe";
		className: string = StageBattlefieldProp_SpringShoe.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldProp_SpringShoe {
			let newOne: StageBattlefieldProp_SpringShoe = pool == null ? new StageBattlefieldProp_SpringShoe() : <StageBattlefieldProp_SpringShoe>pool.Get(StageBattlefieldProp_SpringShoe.ClassName, () => { return new StageBattlefieldProp_SpringShoe(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get SpringShoe(): BattlefieldProp_SpringShoe {
			return this.data as BattlefieldProp_SpringShoe;
		}

		get BodyColor(): number { return 0x0000ff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("11_png");
			result.texture = texture;
			result.width = texture.textureWidth * this.Scale;
			result.height = texture.textureHeight * this.Scale;
			result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
			result.y = bodyRect.y + (bodyRect.height - result.height) / 2;
			
			this.rootGameObject.addChild(result);
		};
	}
}