module DayDayUp {
	export class StageBattlefieldProp_Chicken extends StageBattlefieldProp {
		static ClassName: string = "StageBattlefieldProp_Chicken";
		className: string = StageBattlefieldProp_Chicken.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldProp_Chicken {
			let newOne: StageBattlefieldProp_Chicken = pool == null ? new StageBattlefieldProp_Chicken() : <StageBattlefieldProp_Chicken>pool.Get(StageBattlefieldProp_Chicken.ClassName, () => { return new StageBattlefieldProp_Chicken(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Chicken(): BattlefieldProp_Chicken {
			return this.data as BattlefieldProp_Chicken;
		}

		get BodyColor(): number { return 0x0000ff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("9_png");
			result.texture = texture;
			result.width = texture.textureWidth * this.Scale;
			result.height = texture.textureHeight * this.Scale;
			result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
			result.y = bodyRect.y + (bodyRect.height - result.height) / 2;

			this.rootGameObject.addChild(result);
		};
	}
}