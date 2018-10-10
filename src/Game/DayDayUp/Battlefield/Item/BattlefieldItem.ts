module DayDayUp {
	export abstract class BattlefieldItem extends Lib.PoolableObj {
		ownerBattlefield: Battlefield;

		id: number;

		x: number = 0;
		y: number = 0;

		lastX: number;
		lastY: number;

		body: Rectangle = new Rectangle();

		faceToRight: boolean = true;

		needRemoved: boolean = false;

		GetLastDeltaX(): number {
			return this.x - this.lastX;
		}

		GetLastDeltaY(): number {
			return this.y - this.lastY;
		}

		protected Init(ownerBattlefield: Battlefield, id: number, faceToRight: boolean): void {
			this.ownerBattlefield = ownerBattlefield;
			this.id = id;
			this.faceToRight = faceToRight;

			this.x = 0;
			this.y = 0;

			this.lastX = 0;
			this.lastY = 0;

			this.needRemoved = false;
		}

		Release(): void {
			this.ownerBattlefield = null;

			super.Release();
		}

		public Update(): void {
			this.lastX = this.x;
			this.lastY = this.y;
		}

		public static Touched(
			sx: number, sy: number, sw: number, sh: number,
			dx: number, dy: number, dw: number, dh: number): boolean {
			return sw > 0 && sh > 0 && dw > 0 && dh > 0 &&
				sx < dx + dw && dx < sx + sw &&
				sy < dy + dh && dy < sy + sh;
		}
	}
}