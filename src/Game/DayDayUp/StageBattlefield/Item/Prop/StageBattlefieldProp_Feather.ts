module DayDayUp {
	export class StageBattlefieldProp_Feather extends StageBattlefieldProp {
		static ClassName: string = "StageBattlefieldProp_Feather";
		className: string = StageBattlefieldProp_Feather.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldProp_Feather {
			let newOne: StageBattlefieldProp_Feather = pool == null ? new StageBattlefieldProp_Feather() : <StageBattlefieldProp_Feather>pool.Get(StageBattlefieldProp_Feather.ClassName, () => { return new StageBattlefieldProp_Feather(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Feather(): BattlefieldProp_Feather {
			return this.data as BattlefieldProp_Feather;
		}

		get BodyColor(): number { return 0x0000ff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("3_png");
			result.texture = texture;
			result.width = texture.textureWidth * this.Scale;
			result.height = texture.textureHeight * this.Scale;
			result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
			result.y = bodyRect.y + (bodyRect.height - result.height) / 2;
			
			this.rootGameObject.addChild(result);
		};
	}
}