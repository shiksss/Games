module DayDayUp {
	export class StageBattlefieldBoard_Ice extends StageBattlefieldBoard {
		static ClassName: string = "StageBattlefieldBoard_Ice";
		className: string = StageBattlefieldBoard_Ice.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldBoard_Ice {
			let newOne: StageBattlefieldBoard_Ice = pool == null ? new StageBattlefieldBoard_Ice() : <StageBattlefieldBoard_Ice>pool.Get(StageBattlefieldBoard_Ice.ClassName, () => { return new StageBattlefieldBoard_Ice(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Ice(): BattlefieldBoard_Ice {
			return this.data as BattlefieldBoard_Ice;
		}

		get BodyColor(): number { return 0xffffff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("132_png");
			result.texture = texture;
			result.x = bodyRect.x;
			result.y = bodyRect.y;
			result.width = bodyRect.width;
			result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
			
			this.rootGameObject.addChild(result);
		};
	}
}