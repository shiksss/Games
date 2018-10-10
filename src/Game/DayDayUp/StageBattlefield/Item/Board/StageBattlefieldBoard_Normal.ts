module DayDayUp {
	export class StageBattlefieldBoard_Normal extends StageBattlefieldBoard {
		static ClassName: string = "StageBattlefieldBoard_Normal";
		className: string = StageBattlefieldBoard_Normal.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldBoard_Normal {
			let newOne: StageBattlefieldBoard_Normal = pool == null ? new StageBattlefieldBoard_Normal() : <StageBattlefieldBoard_Normal>pool.Get(StageBattlefieldBoard_Normal.ClassName, () => { return new StageBattlefieldBoard_Normal(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Normal(): BattlefieldBoard_Normal {
			return this.data as BattlefieldBoard_Normal;
		}

		get BodyColor(): number { return 0x000000; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture;
			switch (this.Normal.style) {
				case BattlefieldMapStyle.Asia: {
					texture = RES.getRes("144_png");
					break;
				}
				case BattlefieldMapStyle.Australia: {
					texture = RES.getRes("109_png");
					break;
				}
				default: {
					texture = RES.getRes("78_png");
					break;
				}
			}
			result.texture = texture;
			result.x = bodyRect.x;
			result.y = bodyRect.y;
			result.width = bodyRect.width;
			result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;

			this.rootGameObject.addChild(result);
		};
	}
}