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
    var RoomController_Solo = (function (_super) {
        __extends(RoomController_Solo, _super);
        function RoomController_Solo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className = RoomController_Solo.ClassName;
            _this.lastLevelMax = -1;
            return _this;
        }
        RoomController_Solo.New = function (pool, stageBattlefieldController, ui) {
            var newOne = pool == null ? new RoomController_Solo() : pool.Get(RoomController_Solo.ClassName, function () { return new RoomController_Solo(); });
            newOne.Init(stageBattlefieldController);
            newOne.ui = ui;
            return newOne;
        };
        RoomController_Solo.NewWithGameObject = function (width, height, battlefield, ui) {
            var gameObject = Lib.GameObject.New(Lib.ObjectPool.Instance);
            var stageBattlefield = DayDayUp.StageBattlefield.New(gameObject.pool, width, height - width / 4, battlefield);
            gameObject.components.Add(stageBattlefield);
            var stageBattlefieldController = DayDayUp.StageBattlefieldController_Manual.New(gameObject.pool, stageBattlefield);
            gameObject.components.Add(stageBattlefieldController);
            var roomController = RoomController_Solo.New(gameObject.pool, stageBattlefieldController, ui);
            gameObject.components.Add(roomController);
            return roomController;
        };
        RoomController_Solo.prototype.Update = function () {
            _super.prototype.Update.call(this);
            this.RefreshUI();
            var mainPlayer = this.stageBattlefieldController.stageBattlefield.battlefield.MainPlayer;
            if (mainPlayer != null) {
                switch (mainPlayer.state) {
                    case DayDayUp.BattlefieldPlayerStateEnum.Dead: {
                        console.info("最高层数 " + this.lastLevelMax);
                        this.OnEnd();
                        break;
                    }
                }
            }
        };
        RoomController_Solo.prototype.Release = function () {
            this.ui = null;
            this.lastLevelMax = -1;
            _super.prototype.Release.call(this);
        };
        RoomController_Solo.prototype.RefreshUI = function () {
            if (this.ui != null) {
                var mainPlayer = this.stageBattlefieldController.stageBattlefield.battlefield.MainPlayer;
                if (mainPlayer != null) {
                    if (this.lastLevelMax != mainPlayer.LevelMax) {
                        this.lastLevelMax = mainPlayer.LevelMax;
                        this.ui.bitmapLabel_Level.text = this.lastLevelMax.toString();
                    }
                    this.ui.progressBar_JumpPower.value = 100 * mainPlayer.curJumpPower / mainPlayer.ownerBattlefield.setting.jumpPowerMax;
                    if (mainPlayer.curJumpPower >= mainPlayer.ownerBattlefield.setting.jumpPowerMax) {
                        this.ui.image_JumpPower_Blue.visible = false;
                        this.ui.image_JumpPower_Red.visible = true;
                    }
                    else {
                        this.ui.image_JumpPower_Blue.visible = true;
                        this.ui.image_JumpPower_Red.visible = false;
                    }
                    this.ui.progressBar_SuperForce.value = 100 * mainPlayer.curSuperForce / mainPlayer.ownerBattlefield.setting.superForceMax;
                    if (mainPlayer.curSuperForce >= mainPlayer.ownerBattlefield.setting.superForceMax) {
                        this.ui.image_SuperForceMax_False.visible = false;
                        this.ui.image_SuperForceMax_True.visible = true;
                    }
                    else {
                        this.ui.image_SuperForceMax_False.visible = true;
                        this.ui.image_SuperForceMax_True.visible = false;
                    }
                    var propLeftFrameCount = mainPlayer.GetPropLeftFrameCount(DayDayUp.BattlefieldPropTypeEnum.Feather);
                    if (propLeftFrameCount > 0) {
                        this.ui.bitmapLabel_Feather.text = Math.ceil(propLeftFrameCount / mainPlayer.ownerBattlefield.setting.fps).toString();
                        this.ui.group_Feather.visible = true;
                    }
                    else {
                        this.ui.group_Feather.visible = false;
                    }
                    propLeftFrameCount = mainPlayer.GetPropLeftFrameCount(DayDayUp.BattlefieldPropTypeEnum.Drinks);
                    if (propLeftFrameCount > 0) {
                        this.ui.bitmapLabel_Drinks.text = Math.ceil(propLeftFrameCount / mainPlayer.ownerBattlefield.setting.fps).toString();
                        this.ui.group_Drinks.visible = true;
                    }
                    else {
                        this.ui.group_Drinks.visible = false;
                    }
                    propLeftFrameCount = mainPlayer.GetPropLeftFrameCount(DayDayUp.BattlefieldPropTypeEnum.SpringShoe);
                    if (propLeftFrameCount > 0) {
                        this.ui.bitmapLabel_SpringShoe.text = Math.ceil(propLeftFrameCount / mainPlayer.ownerBattlefield.setting.fps).toString();
                        this.ui.group_SpringShoe.visible = true;
                    }
                    else {
                        this.ui.group_SpringShoe.visible = false;
                    }
                    propLeftFrameCount = mainPlayer.GetPropLeftFrameCount(DayDayUp.BattlefieldPropTypeEnum.TurtleShell);
                    if (propLeftFrameCount > 0) {
                        this.ui.bitmapLabel_TurtleShell.text = Math.ceil(propLeftFrameCount / mainPlayer.ownerBattlefield.setting.fps).toString();
                        this.ui.group_TurtleShell.visible = true;
                    }
                    else {
                        this.ui.group_TurtleShell.visible = false;
                    }
                    switch (mainPlayer.state) {
                        case DayDayUp.BattlefieldPlayerStateEnum.JumpUp:
                        case DayDayUp.BattlefieldPlayerStateEnum.SuperJumpUp: {
                            if (mainPlayer.record_levelAtOnceJump >= 2) {
                                this.ui.bitmapLabel_JumpLevel.text = mainPlayer.record_levelAtOnceJump.toString() + "层";
                            }
                            var tempKMPH = Math.ceil(-mainPlayer.record_speedOfJump * mainPlayer.ownerBattlefield.setting.fps * 3.6);
                            this.ui.bitmapLabel_JumpSpeed.text = tempKMPH.toString() + "速";
                            break;
                        }
                        case DayDayUp.BattlefieldPlayerStateEnum.Idle:
                        case DayDayUp.BattlefieldPlayerStateEnum.Run: {
                            this.ui.bitmapLabel_JumpLevel.text = "";
                            this.ui.bitmapLabel_JumpSpeed.text = "";
                            break;
                        }
                        case DayDayUp.BattlefieldPlayerStateEnum.Dead: {
                            if (DayDayUp.SubScreenBattlefield_Solo_PlayRecord.lastRecord == null) {
                                DayDayUp.SubScreenBattlefield_Solo_PlayRecord.lastRecord = mainPlayer.ownerBattlefield.record.Clone();
                            }
                            break;
                        }
                    }
                }
            }
        };
        RoomController_Solo.ClassName = "RoomController_Solo";
        return RoomController_Solo;
    }(DayDayUp.RoomController));
    DayDayUp.RoomController_Solo = RoomController_Solo;
    __reflect(RoomController_Solo.prototype, "DayDayUp.RoomController_Solo");
})(DayDayUp || (DayDayUp = {}));
//# sourceMappingURL=RoomController_Solo.js.map