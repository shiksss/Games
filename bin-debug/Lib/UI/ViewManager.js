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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Lib;
(function (Lib) {
    var ViewManager = (function (_super) {
        __extends(ViewManager, _super);
        function ViewManager() {
            var _this = _super.call(this) || this;
            _this.curSubScreen = null;
            ViewManager.instance = _this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.OnAddToStage, _this);
            return _this;
        }
        Object.defineProperty(ViewManager, "Instance", {
            get: function () { return ViewManager.instance; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(ViewManager.prototype, "BackColor", {
            get: function () { return this.rect_BackColor.fillColor; },
            set: function (backColor) { this.rect_BackColor.fillColor = backColor; },
            enumerable: true,
            configurable: true
        });
        ViewManager.prototype.OnAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.OnAddToStage, this);
            this.logicScreenWidth = 0;
            if (this.stage.stageWidth * 3 <= this.stage.stageHeight * 2) {
                this.logicScreenWidth = 720;
                this.logicScreenHeight = Math.ceil(this.stage.stageHeight * this.logicScreenWidth / this.stage.stageWidth);
            }
            else {
                var tempHeight = 1680 - 400 * (this.stage.stageHeight / this.stage.stageWidth);
                this.logicScreenWidth = Math.ceil(this.stage.stageWidth * tempHeight / this.stage.stageHeight);
                this.logicScreenHeight = Math.ceil(tempHeight);
            }
            egret.lifecycle.addLifecycleListener(function (context) {
                // context.onUpdate = () => {
                // }
            });
            egret.lifecycle.onPause = function () {
                // egret.ticker.pause();
            };
            egret.lifecycle.onResume = function () {
                // egret.ticker.resume();
            };
            //注入自定义的素材解析器
            egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
            egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
            this.Init().catch(function (e) {
                console.log(e);
            });
        };
        ViewManager.prototype.LoadTheme = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                // load skin theme configuration file, you can manually modify the file. And replace the default skin.
                //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
                var theme = new eui.Theme("resource/default.thm.json", _this.stage);
                theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                    resolve();
                }, _this);
            });
        };
        ViewManager.prototype.Init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.displayRoot_SubScreen = new egret.DisplayObjectContainer();
                            this.addChild(this.displayRoot_SubScreen);
                            this.displayRoot_Box = new egret.DisplayObjectContainer();
                            this.addChild(this.displayRoot_Box);
                            this.displayRoot_Loading = new egret.DisplayObjectContainer();
                            this.addChild(this.displayRoot_Loading);
                            return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.LoadTheme()];
                        case 2:
                            _a.sent();
                            this.rect_BackColor = new eui.Rect(this.stage.stageWidth, this.stage.stageHeight);
                            this.rect_BackColor.fillColor = 0;
                            this.stage.addChildAt(this.rect_BackColor, 0);
                            this.OnInited();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ViewManager.prototype.OnInited = function () {
            console.info(wx.getBatteryInfoSync());
        };
        ViewManager.prototype.ChangeTo = function (subScreen) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.curSubScreen != null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.curSubScreen.End()];
                        case 1:
                            _a.sent();
                            this.curSubScreen = null;
                            this.displayRoot_SubScreen.removeChildren();
                            _a.label = 2;
                        case 2:
                            this.curSubScreen = subScreen;
                            return [4 /*yield*/, this.curSubScreen.Init(this)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ViewManager.prototype.LoadResGroups = function (resGroupNames, newLoadingView) {
            return __awaiter(this, void 0, void 0, function () {
                var needLoad, loadingView;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (resGroupNames == null || resGroupNames.Count <= 0) {
                                return [2 /*return*/];
                            }
                            needLoad = false;
                            resGroupNames.ForEach(function (index, value) {
                                if (!RES.isGroupLoaded(value)) {
                                    needLoad = true;
                                }
                            }, function () { return needLoad; });
                            if (!needLoad) {
                                return [2 /*return*/];
                            }
                            loadingView = newLoadingView();
                            this.displayRoot_Loading.addChild(loadingView);
                            return [4 /*yield*/, loadingView.LoadResGroups(resGroupNames)];
                        case 1:
                            _a.sent();
                            this.displayRoot_Loading.removeChild(loadingView);
                            return [2 /*return*/];
                    }
                });
            });
        };
        ViewManager.prototype.UnLoadResGroups = function (resGroupNames) {
            return __awaiter(this, void 0, void 0, function () {
                var i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (resGroupNames == null || resGroupNames.Count <= 0) {
                                return [2 /*return*/];
                            }
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < resGroupNames.Count)) return [3 /*break*/, 4];
                            return [4 /*yield*/, RES.destroyRes(resGroupNames.Get(i), false)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ViewManager.ShowBox = function (ui) {
            ViewManager.instance.displayRoot_Box.addChild(ui);
        };
        ViewManager.Close = function (ui) {
            ui.parent.removeChild(ui);
            // UIManager.instance.displayRoot_Box.removeChild(ui);
        };
        return ViewManager;
    }(egret.DisplayObjectContainer));
    Lib.ViewManager = ViewManager;
    __reflect(ViewManager.prototype, "Lib.ViewManager");
})(Lib || (Lib = {}));
//# sourceMappingURL=ViewManager.js.map