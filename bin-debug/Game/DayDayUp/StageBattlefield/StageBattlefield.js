var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var DayDayUp;
(function (DayDayUp) {
    var StageBattlefield = (function (_super) {
        __extends(StageBattlefield, _super);
        function StageBattlefield() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = StageBattlefield.ClassName;
            _this.boards = new Lib.Dictionary();
            _this.needSynBoardsByData = true;
            _this.props = new Lib.Dictionary();
            _this.needSynPropsByData = true;
            _this.players = new Lib.Dictionary();
            _this.needSynPlayersByData = true;
            _this.onHoldings = new Lib.Dictionary();
            return _this;
        }
        StageBattlefield.New = function (pool, viewWidth, viewHeight, battlefield) {
            var newOne = pool == null ? new StageBattlefield() : pool.Get(StageBattlefield.ClassName, function () { return new StageBattlefield(); });
            newOne.Init(viewWidth, viewHeight, battlefield);
            return newOne;
        };
        StageBattlefield.prototype.Init = function (viewWidth, viewHeight, battlefield) {
            this.viewWidth = viewWidth;
            this.viewHeight = viewHeight;
            this.battlefield = battlefield;
            this.needSynBoardsByData = true;
            this.needSynPropsByData = true;
            this.needSynPlayersByData = true;
        };
        StageBattlefield.prototype.Release = function () {
            this.battlefield = null;
            this.boards_root = null;
            this.boards.Clear();
            this.props_root = null;
            this.props.Clear();
            this.players_root = null;
            this.players.Clear();
            this.onHoldings.Clear();
            _super.prototype.Release.call(this);
        };
        StageBattlefield.prototype.Start = function () {
            var _this = this;
            _super.prototype.Start.call(this);
            this.boards_root = Lib.GameObject.New(Lib.ObjectPool.Instance, false);
            this.GameObject.addChild(this.boards_root);
            this.battlefield.onBoard_Added = function () { _this.needSynBoardsByData = true; };
            this.battlefield.onBoard_Removed = function () { _this.needSynBoardsByData = true; };
            this.props_root = Lib.GameObject.New(Lib.ObjectPool.Instance, false);
            this.GameObject.addChild(this.props_root);
            this.battlefield.onProp_Added = function () { _this.needSynPropsByData = true; };
            this.battlefield.onProp_Removed = function () { _this.needSynPropsByData = true; };
            this.players_root = Lib.GameObject.New(Lib.ObjectPool.Instance, false);
            this.GameObject.addChild(this.players_root);
            this.battlefield.onPlayer_Added = function () { _this.needSynPlayersByData = true; };
            this.battlefield.onPlayer_Removed = function () { _this.needSynPlayersByData = true; };
            this.needSynBoardsByData = true;
            this.TrySynBoardsByData();
            this.needSynPropsByData = true;
            this.TrySynPropsByData();
            this.needSynPlayersByData = true;
            this.TryRefreshPlayersByData();
            this.players.ForEach(function (key, value) {
                value.AiEnabled = false;
            });
        };
        StageBattlefield.prototype.TrySynByData = function () {
            this.TrySynBoardsByData();
            this.TrySynPropsByData();
            this.TryRefreshPlayersByData();
        };
        StageBattlefield.SynItemsByData = function (//
            root, //
            items, //
            datas, //
            newItem) {
            var keysRemoved = new Lib.List();
            items.ForEachKey(function (key) {
                if (!datas.ContainsKey(key)) {
                    keysRemoved.Add(key);
                }
            });
            keysRemoved.ForEach(function (index, value) {
                var stageBattlefieldItem = items.Get(value);
                stageBattlefieldItem.GameObject.RemoveSelf();
                items.Remove(value);
            });
            datas.ForEach(function (key, value) {
                if (!items.ContainsKey(key)) {
                    var item = newItem(value);
                    if (item != null) {
                        var itemGameObject = Lib.GameObject.New(Lib.ObjectPool.Instance);
                        itemGameObject.components.Add(item);
                        root.addChild(itemGameObject);
                        items.Set(item.Id, item);
                    }
                }
            });
        };
        StageBattlefield.prototype.SynBoardsByData = function () {
            // console.info("SynBoardsByData " + this.battlefield.boards.Count);
            var _this = this;
            StageBattlefield.SynItemsByData(this.boards_root, this.boards, this.battlefield.boards, function (data) {
                if (data instanceof DayDayUp.BattlefieldBoard) {
                    switch (data.Type) {
                        case DayDayUp.BattlefieldBoardTypeEnum.Bubble: {
                            return DayDayUp.StageBattlefieldBoard_Bubble.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldBoardTypeEnum.Conveyor: {
                            return DayDayUp.StageBattlefieldBoard_Conveyor.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldBoardTypeEnum.Ground: {
                            return DayDayUp.StageBattlefieldBoard_Ground.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldBoardTypeEnum.Ice: {
                            return DayDayUp.StageBattlefieldBoard_Ice.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldBoardTypeEnum.Marsh: {
                            return DayDayUp.StageBattlefieldBoard_Marsh.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldBoardTypeEnum.Quicksand: {
                            return DayDayUp.StageBattlefieldBoard_Quicksand.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldBoardTypeEnum.Spring: {
                            return DayDayUp.StageBattlefieldBoard_Spring.New(Lib.ObjectPool.Instance, _this, data);
                        }
                    }
                }
                return DayDayUp.StageBattlefieldBoard_Normal.New(Lib.ObjectPool.Instance, _this, data);
            });
        };
        StageBattlefield.prototype.TrySynBoardsByData = function () {
            if (this.needSynBoardsByData) {
                this.SynBoardsByData();
                this.needSynBoardsByData = false;
            }
            this.boards.ForEach(function (key, value) {
                value.Update();
            });
        };
        StageBattlefield.prototype.SynPropsByData = function () {
            // console.info("SynPropsByData " + this.battlefield.Props.Count);
            var _this = this;
            StageBattlefield.SynItemsByData(this.props_root, this.props, this.battlefield.props, function (data) {
                if (data instanceof DayDayUp.BattlefieldProp) {
                    switch (data.Type) {
                        case DayDayUp.BattlefieldPropTypeEnum.Feather: {
                            return DayDayUp.StageBattlefieldProp_Feather.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldPropTypeEnum.Drinks: {
                            return DayDayUp.StageBattlefieldProp_Drinks.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldPropTypeEnum.Chicken: {
                            return DayDayUp.StageBattlefieldProp_Chicken.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldPropTypeEnum.SpringShoe: {
                            return DayDayUp.StageBattlefieldProp_SpringShoe.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldPropTypeEnum.TurtleShell: {
                            return DayDayUp.StageBattlefieldProp_TurtleShell.New(Lib.ObjectPool.Instance, _this, data);
                        }
                        case DayDayUp.BattlefieldPropTypeEnum.TurnBack: {
                            return DayDayUp.StageBattlefieldProp_TurnBack.New(Lib.ObjectPool.Instance, _this, data);
                        }
                    }
                }
                return null;
            });
        };
        StageBattlefield.prototype.TrySynPropsByData = function () {
            if (this.needSynPropsByData) {
                this.SynPropsByData();
                this.needSynPropsByData = false;
            }
            this.props.ForEach(function (key, value) {
                value.Update();
            });
        };
        StageBattlefield.prototype.SynPlayersByData = function () {
            // console.info("SynPlayersByData " + this.battlefield.players.Count);
            var _this = this;
            StageBattlefield.SynItemsByData(this.players_root, this.players, this.battlefield.players, function (data) {
                return DayDayUp.StageBattlefieldPlayer.New(Lib.ObjectPool.Instance, _this, data, false);
            });
        };
        StageBattlefield.prototype.TryRefreshPlayersByData = function () {
            if (this.needSynPlayersByData) {
                this.SynPlayersByData();
                this.needSynPlayersByData = false;
            }
            this.players.ForEach(function (key, value) {
                value.Update();
            });
        };
        StageBattlefield.ClassName = "StageBattlefield";
        return StageBattlefield;
    }(Lib.GameObjectComponent));
    DayDayUp.StageBattlefield = StageBattlefield;
    __reflect(StageBattlefield.prototype, "DayDayUp.StageBattlefield");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=StageBattlefield.js.map