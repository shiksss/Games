module Lib {
	export abstract class ListItem extends eui.ItemRenderer {
		abstract get ModuleName(): string;
		abstract get ClassName(): string;

		abstract Refersh(): void;

		public constructor() {
			super();
			
			this.skinName = "resource/Skin/" + this.ModuleName + "/" + this.ClassName + "Skin.exml";
		}

		protected dataChanged(): void {
			this.Refersh();
		}
	}
}