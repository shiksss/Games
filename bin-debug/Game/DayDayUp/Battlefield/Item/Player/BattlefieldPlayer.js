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
    var BattlefieldPlayerStateEnum;
    (function (BattlefieldPlayerStateEnum) {
        BattlefieldPlayerStateEnum[BattlefieldPlayerStateEnum["None"] = 0] = "None";
        BattlefieldPlayerStateEnum[BattlefieldPlayerStateEnum["Init"] = 1] = "Init";
        BattlefieldPlayerStateEnum[BattlefieldPlayerStateEnum["Idle"] = 2] = "Idle";
        BattlefieldPlayerStateEnum[BattlefieldPlayerStateEnum["Run"] = 3] = "Run";
        BattlefieldPlayerStateEnum[BattlefieldPlayerStateEnum["JumpUp"] = 4] = "JumpUp";
        BattlefieldPlayerStateEnum[BattlefieldPlayerStateEnum["SuperJumpUp"] = 5] = "SuperJumpUp";
        BattlefieldPlayerStateEnum[BattlefieldPlayerStateEnum["Fall"] = 6] = "Fall";
        BattlefieldPlayerStateEnum[BattlefieldPlayerStateEnum["Hurt"] = 7] = "Hurt";
        BattlefieldPlayerStateEnum[BattlefieldPlayerStateEnum["Dead"] = 8] = "Dead";
    })(BattlefieldPlayerStateEnum = DayDayUp.BattlefieldPlayerStateEnum || (DayDayUp.BattlefieldPlayerStateEnum = {}));
    ;
    var BattlefieldPlayerRates = (function () {
        function BattlefieldPlayerRates() {
            this.hp = 1; // 基础生命 = 0;
            this.jumpPowerPerFrame = 1; // 蓄力速度 = 16;
            this.jumpPowerAtMaxFrameCount = 1; // 蓄满维持时间 = 17;
            this.superForcePerMaxJump = 1; // 内力增加速度 = 17;
            this.g = 1; // 重力 = 7;
            this.airSpeed = 1; // 横向速度 = 8;
            this.shotSpeed_cannon = 1; // 大炮发射速度 = 1;
            this.runSpeed = 1; // 
            this.runSpeeds = new Lib.Dictionary();
            this.jumpSpeed = 1; // 
            this.jumpSpeeds = new Lib.Dictionary();
            this.superJumpSpeed = 1; // 
            this.superJumpSpeeds = new Lib.Dictionary();
            this.elapseLifePerFrame_Quicksand = 1; // 流沙消耗 = 14;
            this.groundOffsetPerFrame = 1; // 沼泽陷入速度 = 15;
        }
        return BattlefieldPlayerRates;
    }());
    DayDayUp.BattlefieldPlayerRates = BattlefieldPlayerRates;
    __reflect(BattlefieldPlayerRates.prototype, "DayDayUp.BattlefieldPlayerRates");
    var BattlefieldPlayer = (function (_super) {
        __extends(BattlefieldPlayer, _super);
        function BattlefieldPlayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = BattlefieldPlayer.ClassName;
            _this.stateNames = [
                "None",
                "Init",
                "Idle",
                "Run",
                "JumpUp",
                "SuperJumpUp",
                "Fall",
                "Hurt",
                "Dead"
            ];
            _this.record_yMax = 0;
            _this.record_yOfJump = 0; //起跳时Y
            _this.record_yOfFall = 0; //下落时Y
            _this.record_speedOfJump = 0;
            _this.record_speedOfJumpMax = 0;
            _this.record_levelAtOnceJump = 0;
            _this.record_levelAtOnceJumpMax = 0;
            _this.curPropFrameCounts = new Lib.Dictionary();
            _this.curSuperForce = 0; //当前超级能量
            _this.curJumpPower = 0; //当前跳跃力量
            _this.curJumpPowerAtMaxFrameCount = 0;
            _this.curSpeedY = 0;
            _this.score = 0;
            _this.onHolding = false;
            _this.state = BattlefieldPlayerStateEnum.None;
            _this.stateCount = 0;
            _this.atBoardId = -1;
            _this.boardGroundOffset = 0;
            return _this;
        }
        Object.defineProperty(BattlefieldPlayer.prototype, "LevelMax", {
            get: function () { return Math.floor(-this.record_yMax / this.ownerBattlefield.setting.showHeight); },
            enumerable: true,
            configurable: true
        });
        BattlefieldPlayer.prototype.RecordJumpInfo = function (jumpSpeed) {
            // 记录起跳y坐标
            this.record_yOfJump = this.y;
            this.record_yOfFall = this.y;
            //记录本次起跳速度
            this.record_speedOfJump = jumpSpeed;
            if (this.record_speedOfJump < this.record_speedOfJumpMax) {
                this.record_speedOfJumpMax = this.record_speedOfJump;
            }
            this.record_levelAtOnceJump = 0;
        };
        BattlefieldPlayer.prototype.RecordRefresh = function () {
            if (this.record_yMax > this.y) {
                this.record_yMax = this.y;
            }
            if (this.record_yOfFall > this.y) {
                this.record_yOfFall = this.y;
            }
            var tempLevelAtOnceJump = Math.floor((this.record_yOfJump - this.record_yOfFall) / this.ownerBattlefield.setting.showHeight);
            if (this.record_levelAtOnceJump < tempLevelAtOnceJump) {
                this.record_levelAtOnceJump = tempLevelAtOnceJump;
                if (this.record_levelAtOnceJumpMax < this.record_levelAtOnceJump) {
                    this.record_levelAtOnceJumpMax = this.record_levelAtOnceJump;
                }
            }
        };
        BattlefieldPlayer.prototype.OnProp_Added = function (propType) { if (this.onProp_Added != null)
            this.onProp_Added(propType); };
        BattlefieldPlayer.prototype.OnProp_Removed = function (propType) { if (this.onProp_Removed != null)
            this.onProp_Removed(propType); };
        BattlefieldPlayer.prototype.AddProp = function (propType) {
            if (!this.ownerBattlefield.setting.propFrameCounts.ContainsKey(propType)) {
                return;
            }
            var propFrameCount = this.ownerBattlefield.setting.propFrameCounts.Get(propType);
            if (propFrameCount > 0) {
                this.curPropFrameCounts.Set(propType, propFrameCount);
                this.OnProp_Added(propType);
            }
        };
        BattlefieldPlayer.prototype.GetPropLeftFrameCount = function (propType) {
            if (this.curPropFrameCounts.ContainsKey(propType)) {
                return this.curPropFrameCounts.Get(propType);
            }
            return 0;
        };
        Object.defineProperty(BattlefieldPlayer.prototype, "PropRate_G", {
            get: function () {
                if (!this.curPropFrameCounts.ContainsKey(DayDayUp.BattlefieldPropTypeEnum.Feather)
                    || this.curPropFrameCounts.Get(DayDayUp.BattlefieldPropTypeEnum.Feather) <= 0) {
                    return 1;
                }
                return this.ownerBattlefield.setting.propRate_G_Feather;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "PropRate_SpeedX", {
            get: function () {
                if (!this.curPropFrameCounts.ContainsKey(DayDayUp.BattlefieldPropTypeEnum.TurtleShell)
                    || this.curPropFrameCounts.Get(DayDayUp.BattlefieldPropTypeEnum.TurtleShell) <= 0) {
                    return 1;
                }
                return this.ownerBattlefield.setting.propRate_SpeedX_TurtleShell;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "PropRate_JumpPowerPerFrame", {
            get: function () {
                if (!this.curPropFrameCounts.ContainsKey(DayDayUp.BattlefieldPropTypeEnum.Drinks)
                    || this.curPropFrameCounts.Get(DayDayUp.BattlefieldPropTypeEnum.Drinks) <= 0) {
                    return 1;
                }
                return this.ownerBattlefield.setting.propRate_JumpPowerPerFrame_Drinks;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "PropRate_JumpSpeed", {
            get: function () {
                if (!this.curPropFrameCounts.ContainsKey(DayDayUp.BattlefieldPropTypeEnum.SpringShoe)
                    || this.curPropFrameCounts.Get(DayDayUp.BattlefieldPropTypeEnum.SpringShoe) <= 0) {
                    return 1;
                }
                return this.ownerBattlefield.setting.propRate_JumpSpeed_SpringShoe;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "PropRate_SuperJumpSpeed", {
            get: function () {
                if (!this.curPropFrameCounts.ContainsKey(DayDayUp.BattlefieldPropTypeEnum.SpringShoe)
                    || this.curPropFrameCounts.Get(DayDayUp.BattlefieldPropTypeEnum.SpringShoe) <= 0) {
                    return 1;
                }
                return this.ownerBattlefield.setting.propRate_SuperJumpSpeed_SpringShoe;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "ElapseLifePerFrame_Quicksand", {
            get: function () {
                return this.ownerBattlefield.setting.elapseLifePerFrame_Quicksand * this.rates.elapseLifePerFrame_Quicksand * this.PropRate_G;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "GroundOffsetPerFrame", {
            get: function () {
                var atBoard = this.GetAtBoard();
                if (atBoard != null) {
                    return atBoard.GetGroundOffsetPerFrame() * this.rates.groundOffsetPerFrame * this.PropRate_G;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "AtBoardId", {
            get: function () { return this.atBoardId; },
            enumerable: true,
            configurable: true
        });
        BattlefieldPlayer.prototype.GetAtBoard = function () {
            return this.ownerBattlefield.boards.Get(this.atBoardId);
        };
        BattlefieldPlayer.prototype.AdjustYAtBoard = function () {
            var atBoard = this.GetAtBoard();
            if (atBoard != null) {
                this.curSpeedY = 0;
                this.y = atBoard.y + atBoard.body.top + this.boardGroundOffset - this.body.bottom;
            }
        };
        BattlefieldPlayer.prototype.IsAtBoard = function () {
            var atBoard = this.GetAtBoard();
            if (atBoard == null) {
                return false;
            }
            return this.x + this.body.left < atBoard.x + atBoard.body.right && this.x + this.body.right > atBoard.x + atBoard.body.left;
        };
        BattlefieldPlayer.prototype.IsTouched_Board = function (board) {
            return !board.needRemoved && DayDayUp.BattlefieldItem.Touched(this.x + this.body.x, this.y + this.body.y, this.body.width, this.body.height, board.x + board.body.x, board.y + board.body.y, board.body.width, board.body.height);
        };
        BattlefieldPlayer.prototype.IsTouched_Prop = function (prop) {
            return !prop.needRemoved && DayDayUp.BattlefieldItem.Touched(this.x + this.body.x, this.y + this.body.y, this.body.width, this.body.height, prop.x + prop.body.x, prop.y + prop.body.y, prop.body.width, prop.body.height);
        };
        Object.defineProperty(BattlefieldPlayer.prototype, "Hp", {
            get: function () { return this.ownerBattlefield.setting.hp * this.rates.hp; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "SuperForcePerMaxJump", {
            get: function () { return this.ownerBattlefield.setting.superForcePerMaxJump * this.rates.superForcePerMaxJump; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "SuperForceMax", {
            get: function () { return this.ownerBattlefield.setting.superForceMax; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "JumpPowerPerFrame", {
            get: function () { return this.ownerBattlefield.setting.jumpPowerPerFrame * this.rates.jumpPowerPerFrame * this.PropRate_JumpPowerPerFrame; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "JumpPowerMax", {
            get: function () { return this.ownerBattlefield.setting.jumpPowerMax; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "JumpPowerAtMaxFrameCount", {
            get: function () { return this.ownerBattlefield.setting.jumpPowerAtMaxFrameCount * this.rates.jumpPowerAtMaxFrameCount; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "G", {
            get: function () { return this.ownerBattlefield.setting.g * this.rates.g * this.PropRate_G; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "AirSpeed", {
            get: function () { return this.ownerBattlefield.setting.airSpeed * this.rates.airSpeed * this.PropRate_SpeedX; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BattlefieldPlayer.prototype, "RunSpeed", {
            get: function () {
                var atBoard = this.GetAtBoard();
                if (atBoard != null) {
                    if (this.rates.runSpeeds.ContainsKey(atBoard.id)) {
                        return this.ownerBattlefield.setting.runSpeed * atBoard.GetPlayerRunSpeedRate() * this.rates.runSpeeds.Get(atBoard.id) * this.PropRate_SpeedX;
                    }
                    return this.ownerBattlefield.setting.runSpeed * atBoard.GetPlayerRunSpeedRate() * this.rates.runSpeed * this.PropRate_SpeedX;
                }
                return this.ownerBattlefield.setting.runSpeed * this.rates.runSpeed * this.PropRate_SpeedX;
            },
            enumerable: true,
            configurable: true
        });
        BattlefieldPlayer.prototype.GetJumpSpeed = function (rate) {
            var jumpSeppd = this.ownerBattlefield.setting.jumpSpeedMin + (this.ownerBattlefield.setting.jumpSpeedMax - this.ownerBattlefield.setting.jumpSpeedMin) * rate;
            var atBoard = this.GetAtBoard();
            if (atBoard != null) {
                if (this.rates.jumpSpeeds.ContainsKey(atBoard.id)) {
                    return jumpSeppd * atBoard.GetPlayerJumpSpeedRate() * this.rates.jumpSpeeds.Get(atBoard.id) * this.PropRate_JumpSpeed + atBoard.GetLastDeltaY();
                }
                return jumpSeppd * atBoard.GetPlayerJumpSpeedRate() * this.rates.jumpSpeed * this.PropRate_JumpSpeed + atBoard.GetLastDeltaY();
            }
            return jumpSeppd * this.rates.jumpSpeed * this.PropRate_JumpSpeed;
        };
        Object.defineProperty(BattlefieldPlayer.prototype, "SuperJumpSpeed", {
            get: function () {
                var atBoard = this.GetAtBoard();
                if (atBoard != null) {
                    if (this.rates.superJumpSpeeds.ContainsKey(atBoard.id)) {
                        return this.ownerBattlefield.setting.superJumpSpeed * atBoard.GetPlayerSuperJumpSpeedRate() * this.rates.superJumpSpeeds.Get(atBoard.id) * this.PropRate_SuperJumpSpeed + atBoard.GetLastDeltaY();
                    }
                    return this.ownerBattlefield.setting.superJumpSpeed * atBoard.GetPlayerSuperJumpSpeedRate() * this.rates.superJumpSpeed * this.PropRate_SuperJumpSpeed + atBoard.GetLastDeltaY();
                }
                return this.ownerBattlefield.setting.superJumpSpeed * this.rates.superJumpSpeed * this.PropRate_SuperJumpSpeed;
            },
            enumerable: true,
            configurable: true
        });
        BattlefieldPlayer.prototype.MoveX = function (speedXToRight, groundSpeed) {
            if (groundSpeed === void 0) { groundSpeed = 0; }
            if (this.faceToRight) {
                this.x += groundSpeed + speedXToRight;
            }
            else {
                this.x += groundSpeed - speedXToRight;
            }
        };
        BattlefieldPlayer.prototype.CheckTouchWall = function () {
            if (this.x + this.body.right >= this.ownerBattlefield.setting.showWidth) {
                this.x = this.ownerBattlefield.setting.showWidth - this.body.right;
                this.faceToRight = false;
            }
            if (this.x + this.body.left <= 0) {
                this.x = -this.body.left;
                this.faceToRight = true;
            }
        };
        BattlefieldPlayer.prototype.MoveY = function (onAtBoard) {
            var _this = this;
            this.y += this.curSpeedY;
            var isTouched = false;
            //检查是否落到板上
            this.ownerBattlefield.boards.ForEach(function (key, value) {
                if (_this.IsTouched_Board(value)) {
                    if (_this.lastY + _this.body.bottom < value.lastY + value.body.bottom) {
                        _this.atBoardId = value.id;
                        _this.boardGroundOffset = 0;
                        _this.AdjustYAtBoard();
                        if (onAtBoard != null) {
                            onAtBoard();
                        }
                        isTouched = true;
                    }
                }
            }, function () { return isTouched; });
            if (!isTouched) {
                this.curSpeedY += this.G;
            }
        };
        BattlefieldPlayer.prototype.AtEdge = function (edgeOffset) {
            var atBoard = this.GetAtBoard();
            if (atBoard == null) {
                return false;
            }
            if (this.faceToRight) {
                if (this.x + this.body.left + (this.RunSpeed + edgeOffset) >= atBoard.x + atBoard.body.right) {
                    return true;
                }
            }
            else {
                if (this.x + this.body.right - (this.RunSpeed + edgeOffset) <= atBoard.x + atBoard.body.left) {
                    return true;
                }
            }
            return false;
        };
        BattlefieldPlayer.New = function (pool, ownerBattlefield, id, faceToRight, atBoardId, rates) {
            var newOne = pool == null ? new BattlefieldPlayer() : pool.Get(BattlefieldPlayer.ClassName, function () { return new BattlefieldPlayer(); });
            newOne.Init_Player(ownerBattlefield, id, faceToRight, atBoardId, rates);
            return newOne;
        };
        BattlefieldPlayer.prototype.Init_Player = function (ownerBattlefield, id, faceToRight, atBoardId, rates) {
            _super.prototype.Init.call(this, ownerBattlefield, id, faceToRight);
            this.faceToRight = faceToRight;
            this.atBoardId = atBoardId;
            var width = 0.5;
            var height = 1.5;
            this.body.setTo(-width * 0.5, -height, width, height);
            this.rates = rates;
            this.nextState = BattlefieldPlayerStateEnum.Init;
        };
        BattlefieldPlayer.prototype.Update = function () {
            var _this = this;
            _super.prototype.Update.call(this);
            if (this.nextState != BattlefieldPlayerStateEnum.None) {
                switch (this.nextState) {
                    case BattlefieldPlayerStateEnum.Init: {
                        break;
                    }
                    case BattlefieldPlayerStateEnum.Idle: {
                        break;
                    }
                    case BattlefieldPlayerStateEnum.Run: {
                        this.curSpeedY = 0;
                        this.curJumpPower = 0; //用光力量
                        this.curJumpPowerAtMaxFrameCount = 0;
                        break;
                    }
                    case BattlefieldPlayerStateEnum.JumpUp: {
                        if (this.curJumpPower >= this.JumpPowerMax) {
                            this.curSuperForce++;
                        }
                        this.curSpeedY = this.GetJumpSpeed(this.curJumpPower / this.JumpPowerMax);
                        this.curJumpPower = 0; //用光力量
                        this.atBoardId = -1; //脱离板子
                        this.RecordJumpInfo(this.curSpeedY);
                        break;
                    }
                    case BattlefieldPlayerStateEnum.SuperJumpUp: {
                        this.curSpeedY = this.SuperJumpSpeed;
                        this.curSuperForce = 0;
                        this.curJumpPower = 0; //用光力量
                        this.atBoardId = -1; //脱离板子
                        this.RecordJumpInfo(this.curSpeedY);
                        break;
                    }
                    case BattlefieldPlayerStateEnum.Fall: {
                        this.curJumpPower = 0; //用光力量
                        this.atBoardId = -1; //脱离板子
                        break;
                    }
                    case BattlefieldPlayerStateEnum.Dead: {
                        break;
                    }
                }
                if (this.state == this.nextState) {
                    this.stateCount++;
                }
                else {
                    this.stateCount = 0;
                    this.state = this.nextState;
                }
                this.nextState = BattlefieldPlayerStateEnum.None;
                // console.info(this.ownerBattlefield.finishedFrameCount + " " + this.stateNames[this.state]);
            }
            if (this.state == BattlefieldPlayerStateEnum.None) {
                return;
            }
            switch (this.state) {
                case BattlefieldPlayerStateEnum.Init: {
                    this.nextState = BattlefieldPlayerStateEnum.Idle;
                    break;
                }
                case BattlefieldPlayerStateEnum.Idle: {
                    // if (this.onHolding) 
                    {
                        this.nextState = BattlefieldPlayerStateEnum.Run;
                    }
                    break;
                }
                case BattlefieldPlayerStateEnum.Run: {
                    var atBoard = this.GetAtBoard();
                    if (atBoard != null) {
                        if (this.onHolding) {
                            if (this.curJumpPower >= this.JumpPowerMax) {
                                this.curJumpPowerAtMaxFrameCount++;
                                if (this.curJumpPowerAtMaxFrameCount >= this.JumpPowerAtMaxFrameCount) {
                                    this.curJumpPower = 0;
                                    this.curJumpPowerAtMaxFrameCount = 0;
                                }
                            }
                            else {
                                this.curJumpPower += this.JumpPowerPerFrame;
                                if (this.curJumpPower > this.JumpPowerMax) {
                                    this.curJumpPower = this.JumpPowerMax;
                                }
                            }
                        }
                        else {
                            if (this.curJumpPower >= this.JumpPowerMax && this.curSuperForce >= this.SuperForceMax) {
                                this.nextState = BattlefieldPlayerStateEnum.SuperJumpUp;
                            }
                            else if (this.curJumpPower > 0) {
                                this.nextState = BattlefieldPlayerStateEnum.JumpUp;
                            }
                        }
                        if (this.nextState == BattlefieldPlayerStateEnum.None) {
                            //处理移动
                            this.MoveX(this.RunSpeed, atBoard.GetLastDeltaX() + atBoard.GetGroundSpeed());
                            if (this.IsAtBoard()) {
                                this.boardGroundOffset += this.GroundOffsetPerFrame;
                                this.AdjustYAtBoard();
                                if (this.boardGroundOffset > atBoard.GetGroundOffsetMax()) {
                                    this.nextState = BattlefieldPlayerStateEnum.Fall;
                                }
                            }
                            else {
                                this.nextState = BattlefieldPlayerStateEnum.Fall;
                            }
                            this.CheckTouchWall();
                        }
                    }
                    else {
                        this.nextState = BattlefieldPlayerStateEnum.Fall;
                    }
                    break;
                }
                case BattlefieldPlayerStateEnum.JumpUp:
                case BattlefieldPlayerStateEnum.SuperJumpUp: {
                    this.MoveX(this.AirSpeed);
                    this.CheckTouchWall();
                    this.MoveY(function () {
                        _this.nextState = BattlefieldPlayerStateEnum.Run;
                    });
                    if (this.nextState == BattlefieldPlayerStateEnum.None && this.curSpeedY >= 0) {
                        this.nextState = BattlefieldPlayerStateEnum.Fall;
                    }
                    this.RecordRefresh();
                    break;
                }
                case BattlefieldPlayerStateEnum.Fall: {
                    this.MoveX(this.AirSpeed);
                    this.CheckTouchWall();
                    this.MoveY(function () {
                        _this.nextState = BattlefieldPlayerStateEnum.Run;
                    });
                    if (this.nextState == BattlefieldPlayerStateEnum.None) {
                        if (this.y + this.body.top > this.ownerBattlefield.curBottomPos) {
                            this.nextState = BattlefieldPlayerStateEnum.Dead;
                        }
                    }
                    break;
                }
                case BattlefieldPlayerStateEnum.Dead: {
                    break;
                }
            }
            if (this.state != BattlefieldPlayerStateEnum.Dead && this.nextState != BattlefieldPlayerStateEnum.Dead) {
                {
                    var keys_removed_1 = new Lib.List();
                    this.curPropFrameCounts.ForEachKey(function (key) {
                        var tempFrameCount = _this.curPropFrameCounts.Get(key);
                        if (tempFrameCount <= 1) {
                            keys_removed_1.Add(key);
                        }
                        else {
                            _this.curPropFrameCounts.Set(key, tempFrameCount - 1);
                        }
                    });
                    keys_removed_1.ForEach(function (index, value) {
                        _this.curPropFrameCounts.Remove(value);
                        _this.OnProp_Removed(value);
                    });
                }
                //接道具
                this.ownerBattlefield.props.ForEach(function (key, value) {
                    if (_this.IsTouched_Prop(value)) {
                        value.TouchPlayer(_this);
                    }
                });
            }
        };
        BattlefieldPlayer.ClassName = "BattlefieldPlayer";
        return BattlefieldPlayer;
    }(DayDayUp.BattlefieldItem));
    DayDayUp.BattlefieldPlayer = BattlefieldPlayer;
    __reflect(BattlefieldPlayer.prototype, "DayDayUp.BattlefieldPlayer");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=BattlefieldPlayer.js.map