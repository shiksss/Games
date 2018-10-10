module DayDayUp {
	export class BattlefieldBoard_Bubble extends BattlefieldBoard {
		static ClassName: string = "BattlefieldBoard_Bubble";
		className: string = BattlefieldBoard_Bubble.ClassName;

		get Type(): BattlefieldBoardTypeEnum { return BattlefieldBoardTypeEnum.Bubble; }

		GetPlayerRunSpeedRate(): number {
			return 0.95;
		}

		GetPlayerJumpSpeedRate(): number {
			return 1.5;
		}

		GetPlayerSuperJumpSpeedRate(): number {
			return 1.5;
		}

		static New(pool: Lib.ObjectPool, ownerBattlefield: Battlefield, id: number, faceToRight: boolean, bodyWidth: number, bodyHeight: number, style: BattlefieldMapStyle): BattlefieldBoard_Bubble {
			let newOne: BattlefieldBoard_Bubble = pool == null ? new BattlefieldBoard_Bubble() : <BattlefieldBoard_Bubble>pool.Get(BattlefieldBoard_Bubble.ClassName, () => { return new BattlefieldBoard_Bubble(); });

			newOne.Init_Board(ownerBattlefield, id, faceToRight, bodyWidth, bodyHeight, style);

			return newOne;
		}
	}
}