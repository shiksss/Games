module DayDayUp {
	export class ListItem_Test extends Lib.ListItem {
		public label: eui.Label;

		get ModuleName(): string { return "DayDayUp"; }
		get ClassName(): string { return "ListItem_Test"; }

		Refersh(): void {
			this.touchChildren = true;
			
			this.label.text = this.data.label;
		}
	}
}