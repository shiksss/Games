module DayDayUp {
	export class StageBattlefieldBoard_Quicksand extends StageBattlefieldBoard {
		static ClassName: string = "StageBattlefieldBoard_Quicksand";
		className: string = StageBattlefieldBoard_Quicksand.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldBoard_Quicksand {
			let newOne: StageBattlefieldBoard_Quicksand = pool == null ? new StageBattlefieldBoard_Quicksand() : <StageBattlefieldBoard_Quicksand>pool.Get(StageBattlefieldBoard_Quicksand.ClassName, () => { return new StageBattlefieldBoard_Quicksand(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Quicksand(): BattlefieldBoard_Quicksand {
			return this.data as BattlefieldBoard_Quicksand;
		}

		get BodyColor(): number { return 0xff00ff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("103_png");
			result.texture = texture;
			result.x = bodyRect.x;
			result.y = bodyRect.y;
			result.width = bodyRect.width;
			result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
			
			this.rootGameObject.addChild(result);
		};
	}
}