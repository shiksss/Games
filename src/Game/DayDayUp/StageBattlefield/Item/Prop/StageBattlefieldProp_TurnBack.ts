module DayDayUp {
	export class StageBattlefieldProp_TurnBack extends StageBattlefieldProp {
		static ClassName: string = "StageBattlefieldProp_TurnBack";
		className: string = StageBattlefieldProp_TurnBack.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldProp_TurnBack {
			let newOne: StageBattlefieldProp_TurnBack = pool == null ? new StageBattlefieldProp_TurnBack() : <StageBattlefieldProp_TurnBack>pool.Get(StageBattlefieldProp_TurnBack.ClassName, () => { return new StageBattlefieldProp_TurnBack(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get TurnBack(): BattlefieldProp_TurnBack {
			return this.data as BattlefieldProp_TurnBack;
		}

		get BodyColor(): number { return 0x0000ff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("13_png");
			result.texture = texture;
			result.width = texture.textureWidth * this.Scale;
			result.height = texture.textureHeight * this.Scale;
			result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
			result.y = bodyRect.y + (bodyRect.height - result.height) / 2;
			
			this.rootGameObject.addChild(result);
		};
	}
}