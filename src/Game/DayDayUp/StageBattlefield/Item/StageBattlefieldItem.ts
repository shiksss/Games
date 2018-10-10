module DayDayUp {
	export abstract class StageBattlefieldItem extends Lib.GameObjectComponent {
		ownerStageBattlefield: StageBattlefield;

		data: BattlefieldItem;

		commands: Lib.Command_Commands;

		rootGameObject: Lib.GameObject;
		get ShowOffsetX(): number { return this.rootGameObject.x; }
		get ShowOffsetY(): number { return this.rootGameObject.y; }
		SetShowOffset(x: number, y: number): void {
			this.rootGameObject.x = x;
			this.rootGameObject.y = y;
		}

		get Id(): number { return this.data.id; }

		protected Init(pool: Lib.ObjectPool, ownerStageBattlefield: StageBattlefield, data: BattlefieldItem): void {
			this.ownerStageBattlefield = ownerStageBattlefield;
			this.data = data;

			this.commands = Lib.Command_Commands.New(pool, this.commands, false, null);
		}

		Release(): void {
			this.GameObject.x = 0;
			this.GameObject.y = 0;
			this.GameObject.scaleX = 1;
			this.GameObject.scaleY = 1;

			this.ownerStageBattlefield = null;
			this.data = null;

			this.commands.Release();
			this.commands = null;

			this.rootGameObject.x = 0;
			this.rootGameObject.y = 0;
			this.rootGameObject.scaleX = 1;
			this.rootGameObject.scaleY = 1;
			this.rootGameObject = null;

			super.Release();
		}

		Start(): void {
			super.Start();
			// this.DrawBody();

			this.rootGameObject = Lib.GameObject.New(this.ownerComponentManager.pool, false);
			this.GameObject.addChild(this.rootGameObject);
		}

		Update(): void {
			if (this.data.faceToRight) {
				if (this.GameObject.scaleX > 0) {
					this.GameObject.scaleX *= -1;
				}
			} else {
				if (this.GameObject.scaleX < 0) {
					this.GameObject.scaleX *= -1;
				}
			}
			this.GameObject.x = this.data.x * this.ownerStageBattlefield.viewWidth / this.data.ownerBattlefield.setting.showWidth;
			this.GameObject.y = this.ownerStageBattlefield.viewHeight - (this.data.ownerBattlefield.curBottomPos - this.data.y) * this.ownerStageBattlefield.viewHeight / this.data.ownerBattlefield.setting.showHeight;

			this.commands.Update();
		}

		GetBodyRect(): Rectangle {
			return new Rectangle(
				this.data.body.x * this.ownerStageBattlefield.viewWidth / this.data.ownerBattlefield.setting.showWidth,
				this.data.body.y * this.ownerStageBattlefield.viewHeight / this.data.ownerBattlefield.setting.showHeight,
				this.data.body.width * this.ownerStageBattlefield.viewWidth / this.data.ownerBattlefield.setting.showWidth,
				this.data.body.height * this.ownerStageBattlefield.viewHeight / this.data.ownerBattlefield.setting.showHeight
			);
		}

		get BodyColor(): number { return 0xffffff; }
		get BodyAlpha(): number { return 1; }
		get LineColor(): number { return 0xffffff; }
		get LineThickness(): number { return 1; }

		DrawBody(): void {
			let bodyRect: Rectangle = this.GetBodyRect();

			let shp: egret.Shape = new egret.Shape();
			shp.graphics.beginFill(this.BodyColor, this.BodyAlpha);
			shp.graphics.lineStyle(this.LineThickness, this.LineColor);
			shp.graphics.drawRect(bodyRect.x, bodyRect.y, bodyRect.width, bodyRect.height);
			shp.graphics.endFill();
			this.GameObject.addChild(shp);
		}
	}
}