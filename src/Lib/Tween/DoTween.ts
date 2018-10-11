module Lib {
	export class DoTween {
		private target: any;
		private tween: egret.Tween;

		public constructor(target: any) {
			this.target = target;
			this.tween = egret.Tween.get(target);
		}

		public OnCompleted(onEnd: () => void): DoTween {
			this.tween.call(() => {
				if (onEnd != null) {
					onEnd();
				}
			}, this.target);

			return this;
		}

		public Wait(duration?: number): DoTween {
			this.tween.wait(duration * 1000);

			return this;
		}

		public AlphaTo(to: number, duration?: number, ease?: Function): DoTween {
			this.tween.to({ alpha: to }, duration * 1000, ease);

			return this;
		}

		public AlphaFromTo(from: number, to: number, duration?: number, ease?: Function): DoTween {
			this.target.alpha = from;

			return this.AlphaTo(to, duration, ease);
		}

		public AlphaFrom(from: number, duration?: number, ease?: Function): DoTween {
			return this.AlphaFromTo(from, this.target.alpha, duration, ease);
		}

		public Jelly(anchorRateX: number = 0.5, anchorRateY: number = 0.5, from: number = 0.8, duration: number = 0.6): DoTween {
			this.target.anchorOffsetX = this.target.width * anchorRateX;
			this.target.anchorOffsetY = this.target.height * anchorRateY;

			let toX: number = this.target.scaleX;
			this.target.scaleX *= from;

			let toY: number = this.target.scaleY;
			this.target.scaleY *= from;

			this.tween.to({ scaleX: toX, scaleY: toY }, duration * 1000, egret.Ease.elasticOut);

			return this;
		}
	}
}