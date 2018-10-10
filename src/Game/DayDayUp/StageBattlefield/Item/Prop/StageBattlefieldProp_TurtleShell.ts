module DayDayUp {
	export class StageBattlefieldProp_TurtleShell extends StageBattlefieldProp {
		static ClassName: string = "StageBattlefieldProp_TurtleShell";
		className: string = StageBattlefieldProp_TurtleShell.ClassName;

		static New(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): StageBattlefieldProp_TurtleShell {
			let newOne: StageBattlefieldProp_TurtleShell = pool == null ? new StageBattlefieldProp_TurtleShell() : <StageBattlefieldProp_TurtleShell>pool.Get(StageBattlefieldProp_TurtleShell.ClassName, () => { return new StageBattlefieldProp_TurtleShell(); });

			newOne.Init(pool, ownerStageBattlefield, data);

			return newOne;
		}
		
		get TurtleShell(): BattlefieldProp_TurtleShell {
			return this.data as BattlefieldProp_TurtleShell;
		}

		get BodyColor(): number { return 0x0000ff; }

		Start(): void {
			super.Start();

			let bodyRect: Rectangle = this.GetBodyRect();

			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes("12_png");
			result.texture = texture;
			result.width = texture.textureWidth * this.Scale;
			result.height = texture.textureHeight * this.Scale;
			result.x = bodyRect.x + (bodyRect.width - result.width) / 2;
			result.y = bodyRect.y + (bodyRect.height - result.height) / 2;

			this.rootGameObject.addChild(result);
		};
	}
}