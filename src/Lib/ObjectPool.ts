module Lib {
	export interface IPoolableObj {
		pool: ObjectPool;

		className: string;

		Release(): void;
	}

	export abstract class PoolableObj implements IPoolableObj {
		pool: ObjectPool;

		abstract className: string;

		Release(): void {
			if (this.pool == null) {
				console.info("重复Release");
				return;
			}

			this.pool.Free(this);
			this.pool = null;
		}
	}

	export class ObjectPool {
		static Instance: ObjectPool = new ObjectPool();

		stacks: Dictionary<Array<IPoolableObj>> = new Dictionary<Array<IPoolableObj>>();

		Get(className: string, onCreateNewPoolableObj: () => IPoolableObj): IPoolableObj {
			if (this.stacks.ContainsKey(className)) {
				let stack: Array<IPoolableObj> = this.stacks.Get(className);

				if (stack.length > 0) {
					let tempPoolableObj: IPoolableObj = stack.pop();

					tempPoolableObj.pool = this;

					return tempPoolableObj;
				}
			}

			// console.info("未命中");

			let newPoolableObj: IPoolableObj = onCreateNewPoolableObj();

			newPoolableObj.pool = this;

			return newPoolableObj;
		}

		Free(poolableObj: IPoolableObj): void {
			let stack: Array<IPoolableObj>;

			if (this.stacks.ContainsKey(poolableObj.className)) {
				stack = this.stacks.Get(poolableObj.className);
			} else {
				stack = new Array<IPoolableObj>();
				this.stacks.Set(poolableObj.className, stack);
			}

			poolableObj.pool = null;

			stack.push(poolableObj);
		}

		Clear(className: string): void {
			this.stacks.Remove(className);
		}

		ClearAll(): void {
			this.stacks.Clear();
		}
	}
}