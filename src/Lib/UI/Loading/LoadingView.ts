module Lib {
    export class LoadingView extends View implements RES.PromiseTaskReporter {
        label_Progress: eui.Label;

        private resGroupCount: number = 0;
        private resGroupIndex: number = 0;

        public constructor(isFull: boolean = true, skinName: string = null, onAddUIEvents: () => void = null) {
            super(isFull, "", skinName != null && skinName.length > 0 ? skinName : "LoadingView", onAddUIEvents);
        }

        public onProgress(current: number, total: number): void {
            let progress: number = Math.round((this.resGroupIndex + current / total) / this.resGroupCount * 100);

            this.label_Progress.text = `Loading...${progress}`;
        }

        async LoadResGroups(resGroupNames: Lib.List<string>) {
            this.resGroupCount = resGroupNames.Count;

            for (this.resGroupIndex = 0; this.resGroupIndex < this.resGroupCount; this.resGroupIndex++) {
                await RES.loadGroup(resGroupNames.Get(this.resGroupIndex), 0, this);
            }
        }
    }
}