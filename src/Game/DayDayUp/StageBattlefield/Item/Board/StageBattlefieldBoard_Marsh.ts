module DayDayUp {
	export class StageBattlefieldBoard_Marsh extends StageBattlefieldBoard {
		static ClassName: string = "StageBattlefieldBoard_Marsh";
		className: string = StageBattlefieldBoard_Marsh.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldBoard_Marsh {
			let newOne: StageBattlefieldBoard_Marsh = pool == null ? new StageBattlefieldBoard_Marsh() : <StageBattlefieldBoard_Marsh>pool.Get(StageBattlefieldBoard_Marsh.ClassName, () => { return new StageBattlefieldBoard_Marsh(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}
		
		get Marsh(): BattlefieldBoard_Marsh {
			return this.data as BattlefieldBoard_Marsh;
		}

		get BodyColor(): number { return 0x0000ff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("89_png");
			result.texture = texture;
			result.x = bodyRect.x;
			result.y = bodyRect.y;
			result.width = bodyRect.width;
			result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
			
			this.rootGameObject.addChild(result);
		};
	}
}