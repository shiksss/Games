window.skins={};
window.DayDayUp={};
window.Match3={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {"eui.Button":"resource/Skin/ButtonSkin.exml","eui.CheckBox":"resource/Skin/CheckBoxSkin.exml","eui.HScrollBar":"resource/Skin/HScrollBarSkin.exml","eui.HSlider":"resource/Skin/HSliderSkin.exml","eui.Panel":"resource/Skin/PanelSkin.exml","eui.TextInput":"resource/Skin/TextInputSkin.exml","eui.ProgressBar":"resource/Skin/ProgressBarSkin.exml","eui.RadioButton":"resource/Skin/RadioButtonSkin.exml","eui.Scroller":"resource/Skin/ScrollerSkin.exml","eui.ToggleSwitch":"resource/Skin/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/Skin/VScrollBarSkin.exml","eui.VSlider":"resource/Skin/VSliderSkin.exml","eui.ItemRenderer":"resource/Skin/ItemRendererSkin.exml"}
generateEUI.paths['resource/Skin/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/ProgressBarSkin_JumpPower.exml'] = window.skins.ProgressBarSkin_JumpPower = (function (_super) {
	__extends(ProgressBarSkin_JumpPower, _super);
	function ProgressBarSkin_JumpPower() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = ProgressBarSkin_JumpPower.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "60_png";
		t.percentWidth = 100;
		return t;
	};
	return ProgressBarSkin_JumpPower;
})(eui.Skin);generateEUI.paths['resource/Skin/ProgressBarSkin_SuperForce.exml'] = window.skins.ProgressBarSkin_SuperForce = (function (_super) {
	__extends(ProgressBarSkin_SuperForce, _super);
	function ProgressBarSkin_SuperForce() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 7;
		this.minHeight = 18;
		this.minWidth = 30;
		this.width = 40;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = ProgressBarSkin_SuperForce.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "43_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 2;
		t.left = 2;
		t.right = 0;
		t.top = 2;
		t.elementsContent = [this.thumb_i()];
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "42_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ProgressBarSkin_SuperForce;
})(eui.Skin);generateEUI.paths['resource/Skin/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/Skin/UI/LoadingViewUISkin.exml'] = window.LoadingViewUISkin = (function (_super) {
	__extends(LoadingViewUISkin, _super);
	function LoadingViewUISkin() {
		_super.call(this);
		this.skinParts = ["label_Progress"];
		
		this.height = 1080;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.label_Progress_i()];
	}
	var _proto = LoadingViewUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 1;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0;
		t.strokeWeight = 0;
		t.top = 0;
		return t;
	};
	_proto.label_Progress_i = function () {
		var t = new eui.Label();
		this.label_Progress = t;
		t.fontFamily = "Arial";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return LoadingViewUISkin;
})(eui.Skin);generateEUI.paths['resource/Skin/UI/MessageBoxUISkin.exml'] = window.MessageBoxUISkin = (function (_super) {
	__extends(MessageBoxUISkin, _super);
	function MessageBoxUISkin() {
		_super.call(this);
		this.skinParts = ["label_Title","label_Message","button_Yes","button_No","button_Ok"];
		
		this.height = 1080;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = MessageBoxUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Rect2_i(),this.label_Title_i(),this.label_Message_i(),this.button_Yes_i(),this.button_No_i(),this.button_Ok_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.strokeWeight = 4;
		t.top = 0;
		return t;
	};
	_proto.label_Title_i = function () {
		var t = new eui.Label();
		this.label_Title = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "Title";
		t.top = 30;
		t.x = 254;
		t.y = 30;
		return t;
	};
	_proto.label_Message_i = function () {
		var t = new eui.Label();
		this.label_Message = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 142;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Message";
		t.width = 370;
		t.x = 132;
		t.y = 116;
		return t;
	};
	_proto.button_Yes_i = function () {
		var t = new Lib.Button();
		this.button_Yes = t;
		t.bottom = 50;
		t.horizontalCenter = 100;
		t.label = "是";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 150;
		t.y = 300;
		return t;
	};
	_proto.button_No_i = function () {
		var t = new Lib.Button();
		this.button_No = t;
		t.bottom = 50;
		t.horizontalCenter = -100;
		t.label = "否";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 350;
		t.y = 300;
		return t;
	};
	_proto.button_Ok_i = function () {
		var t = new Lib.Button();
		this.button_Ok = t;
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 250;
		t.y = 300;
		return t;
	};
	return MessageBoxUISkin;
})(eui.Skin);generateEUI.paths['resource/Skin/UI/DayDayUp/RoomController_SoloUISkin.exml'] = window.DayDayUp.RoomController_SoloUISkin = (function (_super) {
	__extends(RoomController_SoloUISkin, _super);
	function RoomController_SoloUISkin() {
		_super.call(this);
		this.skinParts = ["bitmapLabel_JumpLevel","bitmapLabel_JumpSpeed","bitmapLabel_Level","bitmapLabel_Feather","group_Feather","bitmapLabel_Drinks","group_Drinks","bitmapLabel_SpringShoe","group_SpringShoe","bitmapLabel_TurtleShell","group_TurtleShell","image_JumpPower_Blue","image_JumpPower_Red","progressBar_JumpPower","progressBar_SuperForce","image_SuperForceMax_False","image_SuperForceMax_True","image_BottomBar"];
		
		this.height = 320;
		this.width = 240;
		this.elementsContent = [this._Image1_i(),this.bitmapLabel_JumpLevel_i(),this.bitmapLabel_JumpSpeed_i(),this.bitmapLabel_Level_i(),this._Image2_i(),this.group_Feather_i(),this.group_Drinks_i(),this.group_SpringShoe_i(),this.group_TurtleShell_i(),this._Group1_i(),this.progressBar_SuperForce_i(),this.image_SuperForceMax_False_i(),this.image_SuperForceMax_True_i(),this.image_BottomBar_i()];
	}
	var _proto = RoomController_SoloUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.source = "31_png";
		t.top = 0;
		t.width = 18;
		return t;
	};
	_proto.bitmapLabel_JumpLevel_i = function () {
		var t = new eui.BitmapLabel();
		this.bitmapLabel_JumpLevel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "GoldNum_fnt";
		t.height = 32;
		t.left = 0;
		t.letterSpacing = 2;
		t.right = 0;
		t.text = "";
		t.textAlign = "right";
		t.top = 32;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.bitmapLabel_JumpSpeed_i = function () {
		var t = new eui.BitmapLabel();
		this.bitmapLabel_JumpSpeed = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "GoldNum_fnt";
		t.height = 32;
		t.left = 0;
		t.letterSpacing = 2;
		t.right = 0;
		t.text = "";
		t.textAlign = "right";
		t.top = 64;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.bitmapLabel_Level_i = function () {
		var t = new eui.BitmapLabel();
		this.bitmapLabel_Level = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "Num_fnt";
		t.height = 16;
		t.left = 0;
		t.letterSpacing = 0;
		t.right = 14;
		t.text = "100";
		t.textAlign = "right";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 13;
		t.right = 0;
		t.source = "76_png";
		t.top = 0;
		t.width = 14;
		return t;
	};
	_proto.group_Feather_i = function () {
		var t = new eui.Group();
		this.group_Feather = t;
		t.height = 22;
		t.left = 1;
		t.top = 30;
		t.width = 22;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.bitmapLabel_Feather_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 22;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "38_png";
		t.verticalCenter = 0;
		t.width = 22;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 13;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "3_png";
		t.verticalCenter = 0;
		t.width = 17;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.bitmapLabel_Feather_i = function () {
		var t = new eui.BitmapLabel();
		this.bitmapLabel_Feather = t;
		t.bottom = 0;
		t.font = "Num_fnt";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.group_Drinks_i = function () {
		var t = new eui.Group();
		this.group_Drinks = t;
		t.height = 22;
		t.left = 1;
		t.top = 54;
		t.width = 22;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.bitmapLabel_Drinks_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 22;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "38_png";
		t.verticalCenter = 0;
		t.width = 22;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 19;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "4_png";
		t.verticalCenter = 0;
		t.width = 9;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.bitmapLabel_Drinks_i = function () {
		var t = new eui.BitmapLabel();
		this.bitmapLabel_Drinks = t;
		t.bottom = 0;
		t.font = "Num_fnt";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.group_SpringShoe_i = function () {
		var t = new eui.Group();
		this.group_SpringShoe = t;
		t.height = 22;
		t.left = 1;
		t.top = 78;
		t.width = 22;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.bitmapLabel_SpringShoe_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 22;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "38_png";
		t.verticalCenter = 0;
		t.width = 22;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 21;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "11_png";
		t.verticalCenter = 0;
		t.width = 15;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.bitmapLabel_SpringShoe_i = function () {
		var t = new eui.BitmapLabel();
		this.bitmapLabel_SpringShoe = t;
		t.bottom = 0;
		t.font = "Num_fnt";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.group_TurtleShell_i = function () {
		var t = new eui.Group();
		this.group_TurtleShell = t;
		t.height = 22;
		t.left = 1;
		t.top = 102;
		t.width = 22;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.bitmapLabel_TurtleShell_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 22;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "38_png";
		t.verticalCenter = 0;
		t.width = 22;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 13;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "12_png";
		t.verticalCenter = 0;
		t.width = 22;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.bitmapLabel_TurtleShell_i = function () {
		var t = new eui.BitmapLabel();
		this.bitmapLabel_TurtleShell = t;
		t.bottom = 0;
		t.font = "Num_fnt";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 60;
		t.height = 16;
		t.left = 0;
		t.rotation = -90;
		t.width = 115;
		t.elementsContent = [this.image_JumpPower_Blue_i(),this.image_JumpPower_Red_i(),this.progressBar_JumpPower_i()];
		return t;
	};
	_proto.image_JumpPower_Blue_i = function () {
		var t = new eui.Image();
		this.image_JumpPower_Blue = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 0;
		t.source = "57_png";
		t.top = 0;
		return t;
	};
	_proto.image_JumpPower_Red_i = function () {
		var t = new eui.Image();
		this.image_JumpPower_Red = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 0;
		t.source = "58_png";
		t.top = 0;
		return t;
	};
	_proto.progressBar_JumpPower_i = function () {
		var t = new eui.ProgressBar();
		this.progressBar_JumpPower = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 3;
		t.left = 2;
		t.right = 1;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ProgressBarSkin_JumpPower";
		t.top = 3;
		t.value = 100;
		return t;
	};
	_proto.progressBar_SuperForce_i = function () {
		var t = new eui.ProgressBar();
		this.progressBar_SuperForce = t;
		t.height = 7;
		t.left = 20;
		t.skinName = "skins.ProgressBarSkin_SuperForce";
		t.top = 12;
		t.value = 100;
		t.width = 40;
		return t;
	};
	_proto.image_SuperForceMax_False_i = function () {
		var t = new eui.Image();
		this.image_SuperForceMax_False = t;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.left = 57;
		t.source = "39_png";
		t.top = 2;
		t.width = 12;
		return t;
	};
	_proto.image_SuperForceMax_True_i = function () {
		var t = new eui.Image();
		this.image_SuperForceMax_True = t;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.left = 57;
		t.source = "41_png";
		t.top = 2;
		t.width = 12;
		return t;
	};
	_proto.image_BottomBar_i = function () {
		var t = new eui.Image();
		this.image_BottomBar = t;
		t.bottom = 0;
		t.height = 60;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,29,7);
		t.source = "47_png";
		return t;
	};
	return RoomController_SoloUISkin;
})(eui.Skin);generateEUI.paths['resource/Skin/UI/DayDayUp/SubScreenMainUISkin.exml'] = window.DayDayUp.SubScreenMainUISkin = (function (_super) {
	__extends(SubScreenMainUISkin, _super);
	function SubScreenMainUISkin() {
		_super.call(this);
		this.skinParts = ["button_FirstStart","group_First","button_Start","group_Main"];
		
		this.height = 1080;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.group_First_i(),this.group_Main_i()];
	}
	var _proto = SubScreenMainUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0;
		t.top = 0;
		return t;
	};
	_proto.group_First_i = function () {
		var t = new eui.Group();
		this.group_First = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.button_FirstStart_i()];
		return t;
	};
	_proto.button_FirstStart_i = function () {
		var t = new Lib.Button();
		this.button_FirstStart = t;
		t.bottom = 100;
		t.height = 100;
		t.horizontalCenter = 0;
		t.label = "试玩游戏";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		return t;
	};
	_proto.group_Main_i = function () {
		var t = new eui.Group();
		this.group_Main = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.button_Start_i()];
		return t;
	};
	_proto.button_Start_i = function () {
		var t = new Lib.Button();
		this.button_Start = t;
		t.bottom = 100;
		t.horizontalCenter = 0;
		t.label = "开始游戏";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 150;
		t.y = 150;
		return t;
	};
	return SubScreenMainUISkin;
})(eui.Skin);generateEUI.paths['resource/Skin/UI/Match3/MainMenuUISkin.exml'] = window.Match3.MainMenuUISkin = (function (_super) {
	__extends(MainMenuUISkin, _super);
	function MainMenuUISkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1080;
		this.width = 720;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = MainMenuUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 1;
		t.fillColor = 0x354a56;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0;
		t.top = 0;
		return t;
	};
	return MainMenuUISkin;
})(eui.Skin);