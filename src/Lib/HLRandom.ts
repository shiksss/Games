module Lib {
	export class HLRandom {
        /**
         * 设置用于随机数生成器的种子，如果不设置则实际是取当前时间毫秒数
         */
		public seed: number;

		/**
         * 创建一个随机数生成器
         */
		public constructor(seed: number) {
			this.SetSeed(seed);
		}

		public SetSeed(seed: number) {
			this.seed = seed;
		}

        /**
         * 返回一个在min和max之间的随机浮点数
         */
		public Next(min: number, max: number): number {
			max = max || 1;
			min = min || 0;
			this.seed = (this.seed * 9301 + 49297) % 233280;
			var rnd = this.seed / 233280.0;
			return min + rnd * (max - min);
		}

		public NextWithSeed(seed: number, min: number, max: number): number {
			this.seed = seed;
			return this.Next(min, max);
		}
	}
}