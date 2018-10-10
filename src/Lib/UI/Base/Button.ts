module Lib {
	export class Button extends eui.Button {
		protected buttonReleased(): void {
			super.buttonReleased();

			SoundManager.Instance.PlaySFX("resource/Sound/UI/SFX_Button_Clicked.wav");
		}
	}
}