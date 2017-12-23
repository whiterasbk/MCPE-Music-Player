var LayoutParams =
{
	FillParent  :  android.view.ViewGroup.LayoutParams.FILL_PARENT,
	WrapContent : android.view.ViewGroup.LayoutParams.WRAP_CONTENT,
	MatchParent : android.view.ViewGroup.LayoutParams.MATCH_PARENT,
	getParams   : function(Width, Height) { 
		return new android.view.ViewGroup.LayoutParams(Width == null ? -2 : Width , Height == null ? -2 : Height);
	},
	getWeight : function(Width, Height, Weight){
		return new android.widget.LinearLayout.LayoutParams(Width == null ? -2 : Width , Height == null ? -2 : Height, Weight);
	}
};
var InputType = 
{
    DataTime          : android.text.InputType.TYPE_CLASS_DATETIME,
	Text              : android.text.InputType.TYPE_CLASS_TEXT,
	Number            : android.text.InputType.TYPE_CLASS_NUMBER,
	VariationPassWord : android.text.InputType.TYPE_TEXT_VARIATION_PASSWORD,
	EmailAddress      : android.text.InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS
};
var Interpolator = 
{
	Linear               : new android.view.animation.LinearInterpolator(),
	Accelerate           : new android.view.animation.AccelerateInterpolator(),
	AccelerateDecelerate : new android.view.animation.AccelerateDecelerateInterpolator(),
	Decelerate           : new android.view.animation.DecelerateInterpolator(),
	Cycle                : function(FloatSin) {
		return new android.view.animation.CycleInterpolator(java.lang.Float(FloatSin.toString()));
	}
};
var Gravity = 
{
	Centre : android.view.Gravity.CENTER,
	Left : android.view.Gravity.LEFT,
	Right : android.view.Gravity.RIGHT,
	Bottom : android.view.Gravity.BOTTOM,
	Top : android.view.Gravity.TOP
};

var DefaultViewProperties = 
{
	Button :
	{
		background : "images/default-Button.png",
		textcolor : "#C00E03",
		animation : TranslateAnimation(1000, Interpolator.Linear, false, null, -1500, 0, 0, 0),
	},
	LinearLayout : 
	{
		background : "images/default-LinearLayout.png"
	},
	TextView : 
	{
		textcolor : "#C00E03"
	},
	EditText : 
	{
		textcolor : "#C00E03"
	},
	PopupWindow : 
	{
		Width : 0.5,
		Height : 0.5,
		gravity : android.view.Gravity.CENTER,
		x_offset : 0,
		y_offset : 0
	},
	Toast :
	{
		Duration : 3000,
		Icon : "images/toast_icon.png",
		BackgroundColor : "#000000",
		TextPadding : 30,
		TextSize : 15
	}
};
var Colors =
[
	android.graphics.Color.YELLOW,
    android.graphics.Color.BLACK,
    android.graphics.Color.BLUE,
    android.graphics.Color.CYAN,
    android.graphics.Color.DKGRAY,
    android.graphics.Color.GRAY,
    android.graphics.Color.GREEN,
    android.graphics.Color.RED,
    android.graphics.Color.WHITE,
    android.graphics.Color.LTGRAY,
    android.graphics.Color.MAGENTA,
    "#C00E03"
];
var GeneralSongs = 
{
	name : [],
	path : [],
	now : null
};
var Videos =
{
	name : [],
	path : []
};

var PublicMedaiPlayer = new android.media.MediaPlayer();


newThread(function(){try
	{
		SearchSongs();
		
		
		Toast({msg:"搜索完成，正在填充列表"});
		
		if (GeneralMusicList_layout != null)
		{
			if (GeneralMusicList_window.isShowing())
				UiThread(function(){ GeneralMusicList_window.dismiss(); print("==");});
				
			for(var i in GeneralSongs.name)
			{
				var item = Buttonoil(GeneralSongs.name[i]);
				item.setMaxLines(1);
				//item.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
				//item.setMarqueeRepeatLimit(5);
				item.setId(i);
				item.setTag(GeneralSongs.path[i]);
				item.setGravity(Gravity.Left);
				item.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v){
					GeneralSongs.now = v.getId();
					NowPlayingList = GeneralSongs;
					MediaSeeker(v.getTag() + "");
				}}));
				item.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : function(v, t){
					onGeneralMusicItemLongClick(v);
					return false;
				}})); 
				
				GeneralMusicList_layout.addView(item);
				setProgressText("正在填充:" + GeneralSongs.name[i]);
			}
		}
		
		if (VideoList_layout != null)
		{
			if (VideoList_window.isShowing())
				UiThread(function(){ VideoList_window.dismiss(); print("==");});
				
			for(var i in Videos.name)
			{
				var item = Buttonoil(Videos.name[i]);
				item.setMaxLines(1);
				//item.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
				//item.setMarqueeRepeatLimit(5);
				item.setId(i);
				item.setTag(Videos.path[i]);
				item.setGravity(Gravity.Left);
				item.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v){
					VideoPlayer(v.getTag());
				}}));
				item.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : function(v, t){
					onVideoListItemLongClick(v);
					return false;
				}})); 
				
				VideoList_layout.addView(item);
				setProgressText("正在填充:" + Videos.name[i]);
			}
		}
		try
		{
			//Toast({msg : "搜索完成, 共" + MusicCount + "首歌曲，" + VideoCount + "个视频"});
			print("搜索完成, 共" + MusicCount + "首歌曲，" + VideoCount + "个视频");
			//if (isInGame) clientMessage("§a搜索完成, 共§b" + MusicCount + "§a首歌曲，§c" + VideoCount + "§a个视频");		
		}
		catch(e){Exception(e);}
		dismissProgress();
		isFinishedSearching = true;
	}
	catch(err){Exception(err);}
}).start();

var SettingProperties = new java.util.Properties();
try
{
	var INIFile = new java.io.File(application_dir + "/Settings.ini");
	if(!INIFile.exists())
		INIFile.createNewFile();
	SettingProperties.load(new java.io.FileInputStream(INIFile));
}
catch(e)
{
	Exception(e);
}

var Settings =
{
	get:function(key){
		return SettingProperties.getProperty(key);
	},
	set:function(key, value){
		SettingProperties.setProperty(key, value);
	},
	clear:function(){
		SettingProperties.clear();
	},
	save:function(extra){
		SettingProperties.store(new java.io.FileOutputStream(application_dir + "/Settings.ini"), extra + "");
	},
	reload:function(){
		SettingProperties.load(new java.io.FileInputStream(application_dir + "/Settings.ini"));
	}
};

function onGeneralMusicItemLongClick(view){try
	{
		//长按按钮以后执行的代码
		var title = TextView({t : "music-" + view.getText().toString(), lp : public_lps});
		var add_tolist = Button({t : "添加至播放列表", lp : LayoutParams.getParams(-2, 60), oc : function(v){
			var file = new java.io.File(music_list_dir);
			var content = LinearLayout({o : 1, lp : LayoutParams.getParams(-1, -1), b : public_canvas});
			var list = file.list();
			for (var i in list)
			{
				content.addView(Button({tag : list[i], t : "添加到" + list[i].replaceAll(".txt", ""), lp : LayoutParams.getParams(-1, 80), oc : function(inner_v){
					var p = new java.util.Properties();
					p.load(new java.io.FileReader(music_list_dir + "/" + inner_v.getTag()));
					p.setProperty(view.getText().toString(), view.getTag().toString());
					p.store(new java.io.FileWriter(music_list_dir + "/" + inner_v.getTag()), "");
					inner_pop.dismiss();
					pop.dismiss();
				}}));
			}
			var inner_pop = PopupWindow({f : true, v : ScrollView({ b : "images/image-2.jpg",  v : LinearLayout({b : public_canvas, lp : public_lps, vs : [content]})})});
			ShowPop(inner_pop);
		}});
		var information = Button({t : "详细信息", lp : LayoutParams.getParams(-2, 60), oc : function(){
			ShowPop( PopupWindow({f : true, v : LinearLayout({b : "images/image-5.jpg", o : 0, vs : [TextView({t : "路径:" + view.getTag()})]})}));
		}});
		
		var search = Button({t:"搜索", lp:LayoutParams.getParams(-2, 60), oc:function(){try{
			var s_list_buts = [], s_s = [];
			for(var j = 0; j < view.getParent().getChildCount(); j++)
			{
				s_list_buts.push(view.getParent().getChildAt(j));
				s_s.push(view.getParent().getChildAt(j).getText());
			}
			
			var s_title = TextView({t:"搜索", lp:public_lps});
			var s_edit = EditText({h:"在这里输入想搜索的...", lp:public_lps});
			var s_box = LinearLayout({b:public_canvas, o:1,lp:public_lps});
			var s_but = Buttonoil("开始");
			s_but.setLayoutParams(public_lps);
			s_but.setOnClickListener(new android.view.View.OnClickListener({onClick : function(innr_v){try{
				s_box.removeAllViews();
				
				var reg = new RegExp(s_edit.getText().toString());
				for(var i in s_s)
				{
					if (reg.test(s_s[i]))
					{
						var item = Buttonoil(s_s[i]);
						item.setTag(s_list_buts[i].getTag());
						item.setLayoutParams(public_lps);
						item.setOnClickListener(new android.view.View.OnClickListener({onClick : function(innr_inner_v){
							MediaSeeker(innr_inner_v.getTag());
						}}));
						item.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : function(v, t){
							onGeneralMusicItemLongClick_2(v);
							return false;
						}})); 
						s_box.addView(item);
					}
				}
			}catch(e){Exception(e);}}}));
			
			ShowPop(PopupWindow({g:Gravity.Top, v:LinearLayout({o:1, vs:[s_title, s_edit, s_but, ScrollView({v:s_box, lp:public_lps})]}), w:300, h:300, f:true}));
		}catch(e){Exception(e);}}});
		
		var pop = PopupWindow({f : true, v : LinearLayout({b : "images/image-4.jpg", vs : [title ,add_tolist, information, search], o : 1})});
		ShowPop(pop);
	}
	catch(e){Exception(e);}
}
function onGeneralMusicItemLongClick_2(view){try
	{
		//长按按钮以后执行的代码
		var title = TextView({t : "music-" + view.getText().toString(), lp : public_lps});
		var add_tolist = Button({t : "添加至播放列表", lp : LayoutParams.getParams(-2, 60), oc : function(v){
			var file = new java.io.File(music_list_dir);
			var content = LinearLayout({o : 1, lp : LayoutParams.getParams(-1, -1), b : public_canvas});
			var list = file.list();
			for (var i in list)
			{
				content.addView(Button({tag : list[i], t : "添加到" + list[i].replaceAll(".txt", ""), lp : LayoutParams.getParams(-1, 80), oc : function(inner_v){
					var p = new java.util.Properties();
					p.load(new java.io.FileReader(music_list_dir + "/" + inner_v.getTag()));
					p.setProperty(view.getText().toString(), view.getTag().toString());
					p.store(new java.io.FileWriter(music_list_dir + "/" + inner_v.getTag()), "");
					inner_pop.dismiss();
					pop.dismiss();
				}}));
			}
			var inner_pop = PopupWindow({f : true, v : ScrollView({ b : "images/image-2.jpg",  v : LinearLayout({b : public_canvas, lp : public_lps, vs : [content]})})});
			ShowPop(inner_pop);
		}});
		var information = Button({t : "详细信息", lp : LayoutParams.getParams(-2, 60), oc : function(){
			ShowPop( PopupWindow({f : true, v : LinearLayout({b : "images/image-5.jpg", o : 0, vs : [TextView({t : "路径:" + view.getTag()})]})}));
		}});
		
		var pop = PopupWindow({f : true, v : LinearLayout({b : "images/image-4.jpg", vs : [title ,add_tolist, information], o : 1})});
		ShowPop(pop);
	}
	catch(e){Exception(e);}
}
function onVideoListItemLongClick(view){
		//长按按钮以后执行的代码
		var title = TextView({t : "video-" + view.getText().toString(), lp : public_lps});
		
		var information = Button({t : "详细信息", lp : LayoutParams.getParams(-2, 60), oc : function(){
			ShowPop( PopupWindow({f : true, v : LinearLayout({b : "images/image-5.jpg", o : 0, vs : [TextView({t : "路径:" + view.getTag()})]})}));
		}});
		
		var search = Button({t:"搜索", lp:LayoutParams.getParams(-2, 60), oc:function(){try{
			var s_list_buts = [], s_s = [];
			for(var j = 0; j < view.getParent().getChildCount(); j++)
			{
				s_list_buts.push(view.getParent().getChildAt(j));
				s_s.push(view.getParent().getChildAt(j).getText());
			}
			
			var s_title = TextView({t:"搜索", lp:public_lps});
			var s_edit = EditText({h:"在这里输入想搜索的...", lp:public_lps});
			var s_box = LinearLayout({b:public_canvas, o:1,lp:public_lps});
			var s_but = Buttonoil("开始");
			s_but.setLayoutParams(public_lps);
			s_but.setOnClickListener(new android.view.View.OnClickListener({onClick : function(innr_v){try{
				s_box.removeAllViews();
				
				var reg = new RegExp(s_edit.getText().toString());
				for(var i in s_s)
				{
					if (reg.test(s_s[i]))
					{
						var item = Buttonoil(s_s[i]);
						item.setTag(s_list_buts[i].getTag());
						item.setLayoutParams(public_lps);
						item.setOnClickListener(new android.view.View.OnClickListener({onClick : function(innr_inner_v){
							VideoPlayer(innr_inner_v.getTag());
						}}));
						s_box.addView(item);
					}
				}
			}catch(e){Exception(e);}}}));
			
			ShowPop(PopupWindow({g:Gravity.Top, v:LinearLayout({o:1, vs:[s_title, s_edit, s_but, ScrollView({v:s_box, lp:public_lps})]}), w:300, h:300, f:true}));
		}catch(e){Exception(e);}}});
		
		var pop = PopupWindow({f : true, v : LinearLayout({b : "images/image-4.jpg", vs : [title, information, search], o : 1})});
		ShowPop(pop);
}

if ((Settings.get(values.Settings.isUseSettingColor) + "") == "on")
{
	if (Settings.get("textcolor") != null)
	{
		DefaultViewProperties.TextView.textcolor = Settings.get("textcolor") + "";
	}
}
