module DayDayUp {
	export class StageBattlefieldProp_Drinks extends StageBattlefieldProp {
		static ClassName: string = "StageBattlefieldProp_Drinks";
		className: string = StageBattlefieldProp_Drinks.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldProp_Drinks {
			let newOne: StageBattlefieldProp_Drinks = pool == null ? new StageBattlefieldProp_Drinks() : <StageBattlefieldProp_Drinks>pool.Get(StageBattlefieldProp_Drinks.ClassName, () => { return new StageBattlefieldProp_Drinks(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Drinks(): BattlefieldProp_Drinks {
			return this.data as BattlefieldProp_Drinks;
		}

		get BodyColor(): number { return 0x0000ff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("4_png");
			result.texture = texture;
			result.width = texture.textureWidth * this.Scale;
			result.height = texture.textureHeight * this.Scale;
			result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
			result.y = bodyRect.y + (bodyRect.height - result.height) / 2;

			this.rootGameObject.addChild(result);
		};
	}
}