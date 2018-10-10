module DayDayUp {
	export class StageBattlefieldBoard_Conveyor extends StageBattlefieldBoard {
		static ClassName: string = "StageBattlefieldBoard_Conveyor";
		className: string = StageBattlefieldBoard_Conveyor.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldBoard_Conveyor {
			let newOne: StageBattlefieldBoard_Conveyor = pool == null ? new StageBattlefieldBoard_Conveyor() : <StageBattlefieldBoard_Conveyor>pool.Get(StageBattlefieldBoard_Conveyor.ClassName, () => { return new StageBattlefieldBoard_Conveyor(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}

		get Conveyor(): BattlefieldBoard_Conveyor {
			return this.data as BattlefieldBoard_Conveyor;
		}

		get BodyColor(): number { return 0xffff00; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("101_png");
			result.texture = texture;
			result.x = bodyRect.x;
			result.y = bodyRect.y;
			result.width = bodyRect.width;
			result.height = texture.textureHeight * bodyRect.width / texture.textureWidth;
			
			this.rootGameObject.addChild(result);
		};
	}
}