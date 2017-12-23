var public_icon = null;
var NowPlaying = null;
var NowPlayingPath = null;
var NowPlayingList = null;
var isFinishedSearching = false;
var isInGame = false;


var PublicVideoView = null;
var PublicVideoSeek = null;
var PublicVideoDialog = null;
var PublicVideoControlButton = null;
var PublicVideoControlLayout = null;
var PublicVideoTitle = null;

var p_onLongClicked = false, p_tpopx = 0, p_tpopy = 0, p_mX, p_mY;
var ProgressWindow = null;
var ProgressText = null;
ProgressWindowSet();

var MusicCount = 0, VideoCount = 0;

VideoSet();
//initTextViewColor();


var public_canvas = "images/canvas.png";
var public_lps = LayoutParams.getParams(-1, -2);
var public_slp = LayoutParams.getParams(50, 50);
var content_buts = LinearLayout({ o : 1, lp : public_lps, b : public_canvas});
var content_views = LinearLayout({o : 1, lp : public_lps, b : public_canvas});
var list_buts = listMusicList();

var content_ocs = function(v){try{
	//点击播放列表
	startAnimation(v, "run");
	var list_dir = music_list_dir + "/" + v.getText().toString();
	var list = parseSongs(list_dir + ".txt");
	var now = getPlayingList(list);
	content_views.removeAllViews();
	for (var i in list)
	{
		var item = Button({t : (list[i].path + "").replace(new RegExp("/.*/"), "").replace(".mp3", "").replace(".mp4", "").replace(".ogg", "").replace(".wav", ""), b : values.Path.list_background , olc : function(inner_v){try{
			startAnimation(inner_v, "α");
			var title = TextView({t : "Song-" + inner_v.getText().toString(), lp : public_lps});
			var but = Button({t : "移出播放列表", lp : LayoutParams.getParams(-2, 80), oc : function(){try{
				var p = new java.util.Properties();
				p.load(new java.io.FileReader(list_dir + ".txt"));
				p.remove(inner_v.getText().toString());
				p.store(new java.io.FileWriter(list_dir + ".txt"), "");
				content_views.removeView(inner_v);
				pop.dismiss();
			}catch(e){Exception(e);}}});
			var pop = PopupWindow({w : 0.4, h : 0.35, f : true, v : LinearLayout({b : "images/image-5.jpg", o : 1, vs : [title, but]})});
			ShowPop(pop);
			return true;
		}catch(e){Exception(e);}}, oc : function(v){try{
			startAnimation(v, "run");
			MediaSeeker(v.getTag() + "");
			now.now = v.getId();
			NowPlayingList = now;
			if (debug_mode) print("music-path-->" + v.getTag());
		}catch(e){Exception(e);}}});
		
		item.setTag(list[i].path);
		item.setMaxLines(2);
		item.setId(i);
		content_views.addView(item);
	}
}catch(e){Exception(e);}};

var content_olcs = function(v, t){try{
	//长按播放列表
	startAnimation(v, "α");
	var title = TextView({t : "播放列表-" + v.getText().toString(), lp : public_lps});
	var str = TextView({t : "你要对这个播放列表做什么?", lp : public_lps});
	var rename_it = Button({t : "重命名", lp : LayoutParams.getParams(-2, 80), oc : function(inner_v){try{
		var title = TextView({t : "重命名播放列表", lp : public_lps});
		var edit = EditText({Hint : "请输入播放列表的名字", lp : public_lps});
		var certain = Button({t : "确定", lp : LayoutParams.getParams(-1, 80), oc : function(){try{
			var listname = edit.getText().toString() + "";
			listname = listname.replace("[=/]*", "");
			var file = new java.io.File(music_list_dir + "/" + v.getText().toString() + ".txt");
			file.renameTo(new java.io.File(music_list_dir + "/" + listname + ".txt"));
			updata_list();
			inner_pop.dismiss();
			pop.dismiss();
		}catch(e){Exception(e);}}});
		var inner_pop = PopupWindow({w : 0.4, h : 0.35, f : true, v : LinearLayout({b : "images/image-6.jpg", o : 1, vs : [title, edit, certain]})});
		ShowPop(inner_pop);
	}catch(e){Exception(e);}}});
	
	var delete_it = Button({t : "删除", lp : LayoutParams.getParams(-2, 80), oc : function(inner_v){try{
		eval('new java.io.File(music_list_dir + "/" + v.getText().toString() + ".txt").delete();');
		updata_list();
		pop.dismiss();
	}catch(e){Exception(e);}}});
	
	var pop = PopupWindow({w : 0.37, h : 0.42, f : true, v : LinearLayout({b : "images/image-4.jpg", g : Gravity.Center ,o : 1, vs : [title, str, rename_it, delete_it]})});
	ShowPop(pop);
	
	return true;
}catch(e){Exception(e);}};

updata_list();
function updata_list(){
	list_buts = listMusicList();
	content_buts.removeAllViews();
	for(var i in list_buts)
	{
		content_buts.addView(Button({oc : content_ocs, olc : content_olcs, t : list_buts[i], lp : LayoutParams.getParams(-1, 80), ml : 1}));
	}
	content_buts.addView(Button({t : "添加新列表", lp : LayoutParams.getParams(-1, 80), oc : function(v){try{
		//添加新播放列表
		var title = TextView({t : "添加新的播放列表", lp : public_lps});
		var edit = EditText({Hint : "请输入播放列表的名字", lp : public_lps});
		var certain = Button({t : "确定", lp : LayoutParams.getParams(-1, 80), oc : function(v){try{
			var listname = edit.getText().toString() + "";
			listname = listname.replace("[=/]*", "");
			var file = new java.io.File(music_list_dir + "/" + listname + ".txt");
			file.createNewFile();
			updata_list();
			pop.dismiss();
		}catch(e){Exception(e);}}});
		var pop = PopupWindow({w : 0.4, h : 0.32, f : true, v : LinearLayout({b : "images/image-5.jpg", o : 1, vs : [title, edit, certain]})});
		ShowPop(pop);
	}
	catch(e){Exception(e);}}}));
}
var content_title = TextView({t : "list"});
var content_sl = ScrollView({lp : LayoutParams.getWeight(150, -2, 0.7), v : content_buts});
var content_sr = ScrollView({lp : LayoutParams.getWeight(400, -2, 0.3), v : content_views});
var List_content = LinearLayout({o : 0, vs : [content_sl, content_sr], lp : public_lps, b : public_canvas});
var MediaListPop = PopupWindow({w : 0.7, h : 0.7, v : LinearLayout({vs : [content_title, List_content], o : 1}), f : true});
/*********************************/
var GeneralMusicList_title = TextView({t : "全部歌曲"});
var GeneralMusicList_layout = LinearLayout({o : 1, lp : public_lps, b : public_canvas});
var GeneralMusicList_scroll = ScrollView({lp : LayoutParams.getWeight(400, -2, 0.3), v : GeneralMusicList_layout});
var GeneralMusicList_main = LinearLayout({o : 0, vs : [GeneralMusicList_scroll], lp : public_lps, b : public_canvas});
var GeneralMusicList_window = PopupWindow({w : 0.8, h : 0.7, v : LinearLayout({vs : [GeneralMusicList_title, GeneralMusicList_main], o : 1}), f : true});
/**********************************/
var VideoList_title = TextView({t : "全部video"});
var VideoList_layout = LinearLayout({o : 1, lp : public_lps, b : public_canvas});
var VideoList_scroll = ScrollView({lp : LayoutParams.getWeight(400, -2, 0.3), v : VideoList_layout});
var VideoList_main = LinearLayout({o : 0, vs : [VideoList_scroll], lp : public_lps, b : public_canvas});
var VideoList_window = PopupWindow({w : 0.8, h : 0.7, v : LinearLayout({vs : [VideoList_title, VideoList_main], o : 1}), f : true});
/*********************************/
var Seeker_onLongClicked = false, Seeker_tpopx = 0, Seeker_tpopy = 0, Seeker_mX, Seeker_mY;

var Seeker_title = TextView({t : "music", lp : public_lps, ml : 1});
var Seeker_icon = ImageView({i : "images/icon.png", lp : LayoutParams.getParams(-2, -2),
	oc : function(v){try{
			v.startAnimation(ScaleAnimation(1000, false, Interpolator.Accelerate, null, 0, 1, 0, 1, 50, 50));
	}catch(e){Exception(e);}}, 
	olc : function(v, t) {try{
			Seeker_onLongClicked = true;
			var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
			vibrator.vibrate(100);

			var set = new android.view.animation.AnimationSet(true);
			set.setDuration(2500);
			set.addAnimation(ScaleAnimation(2500, false, Interpolator.Accelerate, null, 0, 1, 0, 1, 50, 50));
			set.addAnimation(AlphaAnimator(2000, false, Interpolator.Linear, 0, 1));
			set.setFillAfter(false);
			v.startAnimation(set);
		
		return true;
	}catch(e){Exception(e);}},
	ot : function(v, e) {try{
			
			if (!Seeker_onLongClicked)
			{
				Seeker_mX = e.getX();
				Seeker_mY = e.getY();
			}
			if (Seeker_onLongClicked)
			{
				var a = e.getAction();
				if (a == 2)
				{
					var delX = parseInt(e.getX() - Seeker_mX) * -1 / 10;
					var delY = parseInt(e.getY() - Seeker_mY) * -1 / 10;
					Seeker_tpopx = Seeker_tpopx - delX;
					Seeker_tpopy = Seeker_tpopy - delY;
					Seeker_window.update(parseInt(Seeker_tpopx), parseInt(Seeker_tpopy), -1, -1);
				}
				if (a == 1) Seeker_onLongClicked = false;
			} 
		return false;
	}
	catch(e){Exception(e);}}
});

var Seeker_bar = SeekBar({thumb : values.TypeSeekBar.Thumb, pd : values.TypeSeekBar.ProgressDrawable});
Seeker_bar.setPadding(values.TypeSeekBar.Padding, 0, values.TypeSeekBar.Padding, 0);
var Seeker_control = LinearLayout({lp : public_lps, b : public_canvas, g : Gravity.Centre, o : 0});
var Seeker_layout = LinearLayout({o : 1, vs : [Seeker_title, Seeker_bar, Seeker_control], b : public_canvas, lp : public_lps});

var Seeker_window = PopupWindow({
	v : LinearLayout({o : 0, lp : public_lps, vs : [Seeker_layout], b : "images/canvas-white.png"}),
	w : 0.65, h : 0.3, f : false
});

var Seeker_bar_pause_start = ImageView({i : "images/media-start.png", lp : LayoutParams.getParams(-2, -2), oc : function(v){try{
	if (PublicMedaiPlayer.isPlaying())
	{
		PublicMedaiPlayer.pause();
		v.setImageDrawable(getBitmap("images/media-pause.png"));
		startAnimation(v);
		UiThread(function(){
			samll_ctrl_p__s.setBackgroundDrawable(getAndroidDrawable(android.R.drawable.ic_media_play));
		});
	}
	else
	{
		PublicMedaiPlayer.start();
		v.setImageDrawable(getBitmap("images/media-start.png"));
		startAnimation(v);
		UiThread(function(){
			samll_ctrl_p__s.setBackgroundDrawable(getAndroidDrawable(android.R.drawable.ic_media_pause));
		});
	}
}catch(e){Exception(e);}}});


Seeker_control.addView(ImageView({i : "images/media-last.png", lp : LayoutParams.getParams(-2, -2), oc : function(v){try{
	if (NowPlayingList != null)
	{
		if (NowPlayingList.now > 0) 
			NowPlayingList.now -= 1;
		MediaSeeker(NowPlayingList.path[NowPlayingList.now]);
		startAnimation(v);
	}
}catch(e){Exception(e);}}}));

Seeker_control.addView(Seeker_bar_pause_start);

Seeker_control.addView(ImageView({i : "images/media-stop.png", lp : LayoutParams.getParams(-2, -2), olc : function(v){try{UiThread(function(){Seeker_window.dismiss();});return false;}catch(e){Exception(e);}}, oc : function(lv){try{
	if (PublicMedaiPlayer.isPlaying())
	{
		PublicMedaiPlayer.stop();
		UiThread(function(){
			Seeker_bar_pause_start.setImageDrawable(getBitmap("images/media-pause.png"));
			Seeker_bar.setProgress(0);
			NowPlaying = null;
			NowPlayingPath = null;
		});
	}
	startAnimation(lv);
}catch(e){Exception(e);}}}));
Seeker_control.addView(ImageView({i : "images/media-next.png", lp : LayoutParams.getParams(-2, -2), oc : function(v){try{
	if (NowPlayingList != null)
	{
		if (NowPlayingList.now < NowPlayingList.path.length) 
			NowPlayingList.now += 1;
		MediaSeeker(NowPlayingList.path[NowPlayingList.now]);
	}
	startAnimation(v);
}catch(e){Exception(e);}}}));
Seeker_control.addView(Seeker_icon);

PublicMedaiPlayer.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener({onCompletion:function(MediaPlayer){try
	{
		UiThread(function(){
			Seeker_bar_pause_start.setImageDrawable(getBitmap("images/media-pause.png"));
			samll_ctrl_p__s.setBackgroundDrawable(getAndroidDrawable(android.R.drawable.ic_media_play));
		});
		if (Settings.get(values.Settings.NextMedia) + "" == "on" && NowPlayingList != null)
		{
			if (NowPlayingList.path.length > NowPlayingList.now) 
				NowPlayingList.now += 1;
			MediaSeeker(NowPlayingList.path[NowPlayingList.now]);
			if (debug_mode) print("NowPlayingList.now-->" + NowPlayingList.now);
		}
	}
	catch(e){Exception(e);}}
}));
PublicMedaiPlayer.setOnPreparedListener(new android.media.MediaPlayer.OnPreparedListener({onPrepared:function(MediaPlayer){try
	{
		Seeker_bar.setMax(PublicMedaiPlayer.getDuration());
		UiThread(function(){
			Seeker_bar_pause_start.setImageDrawable(getBitmap("images/media-start.png"));
			Seeker_title.setText("music-" + NowPlaying);
			samll_ctrl_p__s.setBackgroundDrawable(getAndroidDrawable(android.R.drawable.ic_media_pause));
		});
		if (Settings.get(values.Settings.showSongName) + "" == "on")
			Toast({msg : "正在播放:" + NowPlaying, ts : 13});
	}
	catch(e){Exception(e);}}
}));
PublicMedaiPlayer.setOnErrorListener(new android.media.MediaPlayer.OnErrorListener({onError : function(MediaPlayer, int1, int2){
	if ((Settings.get(values.Settings.mediaError) + "") == "on")
	{
		var title = TextView({t : "播放异常", lp : public_lps});
		var msg = TextView({lp : public_lps, t : "详细信息:" + MediaPlayer + "\n" + int1 + "\n" + int2});
		var content = LinearLayout({b : public_canvas, vs : [title, msg], o : 1});
		UiThread(function(){
			ShowPop(PopupWindow({f : true, w : 0.4, h : 0.4, v : content, b : "images/image-1.jpg"}));
		});
    	return false;
	}
}}));
Seeker_bar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
	onProgressChanged:function(SeekBar, int, boolean)
    {
    },
    onStartTrackingTouch:function(SeekBar)
    {
    },
    onStopTrackingTouch:function(SeekBar)
    {
		if (PublicMedaiPlayer.isPlaying())
		{
			PublicMedaiPlayer.seekTo(SeekBar.getProgress());
		}
    }
}));
/*******************************/
var samll_onLongClicked = false, samll_tpopx = 0, samll_tpopy = 0, samll_mX, samll_mY;

var samll_ctrl_move = Button({b:getAndroidDrawable(android.R.drawable.ic_menu_compass), lp:public_slp, oc : function(v){try{v.startAnimation(ScaleAnimation(1000, false, Interpolator.Accelerate, null, 0, 1, 0, 1, 50, 50));}catch(e){Exception(e);}}, 
	olc : function(v, t) {try{
			samll_onLongClicked = true;
			var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
			vibrator.vibrate(100);

			var set = new android.view.animation.AnimationSet(true);
			set.setDuration(2500);
			set.addAnimation(ScaleAnimation(2500, false, Interpolator.Accelerate, null, 0, 1, 0, 1, 50, 50));
			set.addAnimation(AlphaAnimator(2000, false, Interpolator.Linear, 0, 1));
			set.setFillAfter(false);
			v.startAnimation(set);
		
		return true;
	}catch(e){Exception(e);}},
	ot : function(v, e) {try{
			
			if (!samll_onLongClicked)
			{
				samll_mX = e.getX();
				samll_mY = e.getY();
			}
			if (samll_onLongClicked)
			{
				var a = e.getAction();
				if (a == 2)
				{
					var delX = parseInt(e.getX() - samll_mX) * -1 / 10;
					var delY = parseInt(e.getY() - samll_mY) * -1 / 10;
					samll_tpopx = samll_tpopx - delX;
					samll_tpopy = samll_tpopy - delY;
					samll_ctrl_window.update(parseInt(samll_tpopx), parseInt(samll_tpopy), -1, -1);
				}
				if (a == 1) samll_onLongClicked = false;
			} 
		return false;
	}catch(e){Exception(e);}}});
	
var samll_ctrl_next = Button({b:getAndroidDrawable(android.R.drawable.ic_media_next), lp:public_slp, oc : function(v){UiThread(function(){try{
	if (NowPlayingList != null)
	{
		if (NowPlayingList.now < NowPlayingList.path.length) 
			NowPlayingList.now += 1;
		MediaSeeker(NowPlayingList.path[NowPlayingList.now]);
	}
	startAnimation(v);
}catch(e){Exception(e);}});}});
var samll_ctrl_last = Button({b:getAndroidDrawable(android.R.drawable.ic_media_previous), lp:public_slp, oc : function(v){UiThread(function(){try{
	if (NowPlayingList != null)
	{
		if (NowPlayingList.now > 0) 
			NowPlayingList.now -= 1;
		MediaSeeker(NowPlayingList.path[NowPlayingList.now]);
		startAnimation(v);
	}
}catch(e){Exception(e);}});}});
var samll_ctrl_p__s = Button({b:getAndroidDrawable(android.R.drawable.ic_media_play), lp:public_slp, oc:function(v){UiThread(function(){try{
	if (PublicMedaiPlayer.isPlaying())
	{
		PublicMedaiPlayer.pause();
		Seeker_bar_pause_start.setImageDrawable(getBitmap("images/media-pause.png"));
		startAnimation(v);
		v.setBackgroundDrawable(getAndroidDrawable(android.R.drawable.ic_media_play));
	}
	else
	{
		PublicMedaiPlayer.start();
		Seeker_bar_pause_start.setImageDrawable(getBitmap("images/media-start.png"));
		startAnimation(v);
		v.setBackgroundDrawable(getAndroidDrawable(android.R.drawable.ic_media_pause));
	}
}catch(e){Exception(e);}});}});
var samll_ctrl_window = PopupWindow({w:140, h:40, v:LinearLayout({o:0, vs:[samll_ctrl_last, samll_ctrl_p__s, samll_ctrl_next, samll_ctrl_move]})});
/*******************************/
UiThread(function() {try
	{
		public_icon = Icon();
	}
	catch(e){Exception(e);}}
);

function Icon()
{
	var onLongClicked = false, tpopx = 0, tpopy = 0, mX, mY;
	var but = Button({b : "images/icon.png", lp : LayoutParams.getParams(100, 100), 
	oc : function(v){try{
			MainMenu();
			v.startAnimation(ScaleAnimation(1000, false, Interpolator.Accelerate, null, 0, 1, 0, 1, 50, 50));
			IconMedia();
	}catch(e){Exception(e);}}, 
	olc : function(v, t) {try{
			onLongClicked = true;
			var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
			vibrator.vibrate(100);

			var set = new android.view.animation.AnimationSet(true);
			set.setDuration(2500);
			set.addAnimation(ScaleAnimation(2500, false, Interpolator.Accelerate, null, 0, 1, 0, 1, 50, 50));
			set.addAnimation(AlphaAnimator(2000, false, Interpolator.Linear, 0, 1));
			set.setFillAfter(false);
			v.startAnimation(set);
		
		return true;
	}catch(e){Exception(e);}},
	ot : function(v, e) {try{
			
			if (!onLongClicked)
			{
				mX = e.getX();
				mY = e.getY();
			}
			if (onLongClicked)
			{
				var a = e.getAction();
				if (a == 2)
				{
					var delX = parseInt(e.getX() - mX) * -1 / 10;
					var delY = parseInt(e.getY() - mY) * -1 / 10;
					tpopx = tpopx + delX;
					tpopy = tpopy + delY;
					public_icon.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
				}
				if (a == 1) onLongClicked = false;
			} 
		return false;
	}catch(e){Exception(e);}}});
	
	var pop = ShowPop(PopupWindow({v : but, h : 90 / screen_height, w : 90 / screen_width, b : "images/canvas.png"}), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 80);
	but.startAnimation(ScaleAnimation(1000, false, Interpolator.Accelerate, null, 0, 1, 0, 1, 50, 50));
	return pop;
}
function MainMenu()
{
	var Texts = ["介绍", "全部歌曲", "列表", "视频列表", "设置", "帮助", "版本", "末影官网", "图文帮助"];
	var onClick = 
	[
		function(v){try{
			Introduction();
			MenuItemAnimation(v);
		}catch(e){Exception(e);}},
		function(v){try{
			if (isFinishedSearching)
				GeneralMusicListInterface();
			else
			{
				Toast({msg : "正在搜索全部歌曲请等待"});
			}
			MenuItemAnimation(v);
		}catch(e){Exception(e);}},
		function(v){try{
			MediaList();
			MenuItemAnimation(v);
		}catch(e){Exception(e);}},
		function(v){try{
			if (isFinishedSearching)
				VideoList();
			else
			{
				Toast({msg : "正在搜索全部视频请等待"});
			}
			MenuItemAnimation(v);
		}catch(e){Exception(e);}},
		function(v){try{
			SettingsView();
			MenuItemAnimation(v);
		}catch(e){Exception(e);}},
		function(v){try{
			Help();
			MenuItemAnimation(v);
		}catch(e){Exception(e);}},
		function(v){try{
			CopyRight();
			MenuItemAnimation(v);
		}catch(e){Exception(e);}},
		function(v){try{
			var webview = new android.webkit.WebView(ctx);
			ShowPop(PopupWindow({w:0.9, h:0.9, v:webview, f : true}));
			webview.loadUrl(values.Url.SDO);
			MenuItemAnimation(v);
		}catch(e){Exception(e);}},
		function(v){try{
			var vs = [];
			vs.push(TextView({t:"图文帮助"}));
			for(var h = 1; h < 6; h++)
			{
				var img = ImageView({i:"images/help/help-" + h + ".jpeg"});
				img.setPadding(5, 5, 5, 5);
				vs.push(img);
			}
			var l = LinearLayout({o:1, vs:vs, b:"images/canvas-white.png"});
			var s = ScrollView({v:l});
			var w = PopupWindow({w :400, h:300, v:s, f:true});
			
			ShowPop(w);
			MenuItemAnimation(v);
		}catch(e){Exception(e);}},
		function(v){try{
			var t = TextView({t:"选择颜色"});
			var vts = [];
			vts.push(t);
			for(var u = 0; u < Colors.length; u ++)
			{
				var but = new android.widget.Button(ctx);
				but.setTextColor(parseColor(Colors[u]));
				but.setText("TextColor");
				but.setLayoutParams(public_lps);
				but.setTag(Colors[u]);
				but.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v){
					Settings.set("TextViewColor", "" + parseInt(v.getTag()));
					Settings.save("");
					setTextViewColor(v.getTag());
					Toast({msg:"设置完成"});
				}}));
				
				vts.push(but);
			}
			
			var l = LinearLayout({vs:vts, o:1, b:"images/canvas-white.png", lp:LayoutParams.getParams(-1, -1)});
			var s = ScrollView({v:l});
			var w = PopupWindow({w:300, h:300, f:true, v:s});
			ShowPop(w);
			//字体颜色
			MenuItemAnimation(v);
		}catch(e){Exception(e);}}
	];
	
	var layout = LinearLayout({o : 1, a : BounceAnimator(), b : "images/whiter.png"});
	layout.addView(TextView({t : "菜单-music player", lp : LayoutParams.getParams(-1, -2), g : android.view.Gravity.LEFT}));
	
	var items_layout = new android.widget.LinearLayout(ctx);
	items_layout.setOrientation(1);
	for (var i in Texts)
	{
		items_layout.addView(Button({t : Texts[i], oc : onClick[i], lp : LayoutParams.getParams(-1, 80)}));
	}
	items_layout.addView(TextView({t : values.String.Kannong, color : "#9AF40028", lp : LayoutParams.getParams(-1, 0.5 * screen_height), olc : function(v, t){PlaySounds("清凉夏日.mp3"); return true;}}));
	
	var scroll = new android.widget.ScrollView(ctx);
	scroll.addView(items_layout);
	layout.addView(scroll);
	ShowPop(PopupWindow({h : 0.5, w : 0.3, v : layout, f : true}), android.view.Gravity.CENTER | android.view.Gravity.RIGHT);
}
function Introduction(){
	var title = TextView({color : "#203AF7", t : "介绍-music player", lp : LayoutParams.getParams(-1, -2), g : Gravity.Left});
	var content = new TextView({ts : 20, t : values.String.Introduction, lp : LayoutParams.getParams(-1, -2)});
	var up = LinearLayoutoil();
	up.addView(title);
	var scroll = new android.widget.ScrollView(ctx);
	scroll.setLayoutParams(LayoutParams.getParams(-1, -2));
	scroll.addView(content);
	up.addView(scroll);
	up.setLayoutParams(LayoutParams.getParams(-1, -2));
	var layout = LinearLayout({vs : [up], o : 1, b : "images/image-3.jpg"});
	ShowPop(PopupWindow({w : 0.6, h : 0.55, v : layout, f : true, b : "images/canvas.png"}));
}
function Help(){
	var layoutparams = LayoutParams.getParams(-1, -2);
	var w = ShowPop(PopupWindow({w : 0.6, h : 0.6, v : LinearLayout({vs : [TextView({t : "帮助-music player", lp : layoutparams}), ScrollView({v : LinearLayout({vs : [TextView({ts : 20, t : values.String.Help, lp : layoutparams}), Button({t : "关闭", lp : LayoutParams.getParams(-1, 80), b : "images/default-ButtonLong.png", oc : function(v){w.dismiss();}})], lp : layoutparams, b : "images/canvas.png", o : 1}), lp : layoutparams})], b : "images/canvas.png", lp : layoutparams, o : 1}), b : "images/image-2.jpg", f : true}));
}
function TextColor(){
	var drawable = new android.graphics.drawable.ColorDrawable();
    var color = new android.graphics.Color();
	
	var title = TextView({t:"字体颜色", lp:public_lps});
	var Text = TextView({t:"白客", g:Gravity.Center, ts:17, lp:LayoutParams.getParams(-1, 100)});
	
	var tags = [], seeks = [];
	for(var i in tags)
	{
		seeks.push(SeekBar({max:255, lp:public_lps, tag:tags[i]}));
		seeks[i].setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onStartTrackingTouch:function(SeekBar){ }, onStopTrackingTouch:function(SeekBar) {},onProgressChanged:function(SeekBar, int, boolean){ 
			osc(SeekBar, int);
		}}));
		set_p(seeks[i]);
		
	}
	
	function set_p(v){
		var p = Settings.get(v.getTag());
		v.setProgress(parseInt(p));
	}
	function osc(v, int){
		
	}
}
function initTextViewColor(){
	if (Settings.get("TextViewColor") == null)
		return;
	var t = parseInt(Settings.get("TextViewColor") + "");
	DefaultViewProperties.Button.textcolor = t;
	DefaultViewProperties.TextView.textcolor = t;
}
function setTextViewColor(t){
	DefaultViewProperties.Button.textcolor = t;
	DefaultViewProperties.TextView.textcolor = t;
}
function MediaList(){
	ShowPop(MediaListPop);
}

function GeneralMusicListInterface(){
	ShowPop(GeneralMusicList_window);
}

function SettingsView(){
	var checks = 
	[
		CheckBox({t:"是否使用按钮音效", oc : function(v){
			check_click(values.Settings.ButtonBuff, v);
		}}),
		CheckBox({t:"退出存档是否关闭音乐", oc : function(v){
			check_click(values.Settings.onExitClose, v);
		}}),
		CheckBox({t:"播放完成是否自动播放下一首", oc : function(v){
			check_click(values.Settings.NextMedia, v);
		}}),
		CheckBox({t:"是否启用命令行控制", oc : function(v){
			check_click(values.Settings.cmd, v);
		}}),
		CheckBox({t:"是否显示进度条", oc : function(v){
			check_click(values.Settings.showSeekBar, v);
			if (Seeker_window.isShowing() && !v.isChecked())
			{
				UiThread(function(){
					Seeker_window.dismiss();
				});
			}
		}}),
		CheckBox({t:"准备播放时是否提示歌名", oc : function(v){
			check_click(values.Settings.showSongName, v);
		}}),
		CheckBox({t:"是否启用对话框显示异常", oc : function(v){
			check_click(values.Settings.isShowExceptionByAlert, v);
		}}),
		CheckBox({t:"是否显示播放错误", oc : function(v){
			check_click(values.Settings.mediaError, v);
		}}),
		CheckBox({t:"是否显示欢迎界面", oc : function(v){
			check_click(values.Settings.showWelcome, v);
		}}),
		CheckBox({t:"是否启用设置字体颜色", oc : function(v){
			check_click(values.Settings.isUseSettingColor, v);
		}}),
		CheckBox({t:"是否启用小窗口", oc : function(v){
			check_click(values.Settings.isUseSmallWindow, v);
			if (samll_ctrl_window.isShowing() && !v.isChecked())
			{
				UiThread(function(){
					samll_ctrl_window.dismiss();
				});
			}
			if (v.isChecked())
			{
				showsamll();
			}
		}}),
		CheckBox({t:"是否启用搜索进度显示", oc : function(v){
			check_click(values.Settings.isUseSettingColor, v);
			if (ProgressWindow.isShowing())
			{
				if (!v.isChecked())
					dismissProgress();
			}
			else
			{
				if (v.isChecked())
					UiThread(function(){
						ShowPop(ProgressWindow, Gravity.Bottom | Gravity.Center);
					});
			}
		}}),
	];
	var settings_list =
	[
		{key : values.Settings.ButtonBuff, def_value : "on"},
		{key : values.Settings.onExitClose, def_value : "on"},
		{key : values.Settings.NextMedia, def_value : "on"},
		{key : values.Settings.cmd, def_value : "on"},
		{key : values.Settings.showSeekBar, def_value : "on"},
		{key : values.Settings.showSongName, def_value : "on"},
		{key : values.Settings.isShowExceptionByAlert, def_value : "on"},
		{key : values.Settings.mediaError, def_value : "on"},
		{key : values.Settings.showWelcome, def_value : "on"},
		{key : values.Settings.isUseSettingColor, def_value : "on"},
		{key : values.Settings.isUseSmallWindow, def_value : "on"},
		{key : values.Settings.isUseProgressWindow, def_value : "on"}
	];
	
	var check_groups = new android.widget.RadioGroup(ctx);
	
	var title = TextView({t : "设置"});
	var content = LinearLayout({o : 1, vs : [TextView({lp: public_lps, t : values.String.Settings}), ScrollView({v : check_groups, lp : public_lps})], b : public_canvas, lp : public_lps});
	
	for (var i in checks)
	{
		checks[i].setChecked((Settings.get(settings_list[i].key) + "") == settings_list[i].def_value);
		check_groups.addView(checks[i]);
	}
	
	var win = PopupWindow({v : 
		LinearLayout({o : 1, vs : [title, content], lp : public_lps}),
	w : 0.5, h : 0.6, f : true, odl : function(){try{Settings.save("please don't touch this ini-file (expect the value 'textcolor') by yourself, or it maybe will be an exception in the application (script)");}catch(e){Exception(e);}}});
	ShowPop(win);
	function check_click(s, v){
		Settings.set(s, v.isChecked() == true ? "on" : "off");
		startAnimation(v);
	}
}

function MediaSeeker(media){try
	{
		if (Settings.get(values.Settings.showSeekBar) + "" == "on")
		{
			if ((Settings.get(values.Settings.isUseSmallWindow) + "") == "off")
				ShowPop(Seeker_window);
		}
		
		MediaPlayer(media);
	}
	catch(e){Exception(e);}
}

function listMusicList(){try
	{
		var file = new java.io.File(music_list_dir);
		var array = [];
		for (var i in file.list())
		{
			array[i] = file.list()[i].replaceAll(".txt", "");
		}
		return array;
	}
	catch(e){Exception(e);}
}
function parseSongs(path){
	var p = java.util.Properties();
	p.load(new java.io.FileReader(path));
	
	var e = p.elements();
	var n = p.propertyNames();
	
	var paths = [];
	var names = [];
	
    while(n.hasMoreElements())
    {
        names.push(new java.lang.String(n.nextElement().getBytes(), "utf-8"));
    }
    while (e.hasMoreElements())
    {
        paths.push(new java.lang.String(e.nextElement().getBytes(), "utf-8"));
    }
	
	var array = [];
	for (var i in names)
		array.push({name : names[i], path : paths[i]});
	
	return array;
}
function getPlayingList(arg){
	var list = 
	{
		name : [],
		path : [],
		now : null
	};
	for (var i in arg)
	{
		list.name.push(arg[i].name);
		list.path.push(arg[i].path);
	}
	return list;
}
function procCmd(string) {
	if ((Settings.get(values.Settings.cmd) + "") == "on")
	{
		var cmd = string.split(" ");
		if (cmd[0] == "last" || cmd[0] == "l")
		{
			if (NowPlayingList != null)
			{
				if (NowPlayingList.now > 0) 
					NowPlayingList.now -= 1;
				MediaSeeker(NowPlayingList.path[NowPlayingList.now]);
			}
			clientMessage("§e done");
		}
		else if (cmd[0] == "next" || cmd[0] == "n")
		{
			if (NowPlayingList != null)
			{
				if (NowPlayingList.path.length > NowPlayingList.now) 
					NowPlayingList.now += 1;
				MediaSeeker(NowPlayingList.path[NowPlayingList.now]);
				clientMessage("§e done");
			}
		}
		else if (cmd[0] == "pause" || cmd[0] == "p")
		{
			if (PublicMedaiPlayer.isPlaying())
			{
				PublicMedaiPlayer.pause();
				UiThread(function(){
					Seeker_bar_pause_start.setImageDrawable(getBitmap("images/media-pause.png"));
				});
				clientMessage("§e done");
			}
		}
		else if (cmd[0] == "start" || cmd[0] == "b")
		{
			if (PublicMedaiPlayer.isPlaying())
			{
				PublicMedaiPlayer.start();
				UiThread(function(){
					Seeker_bar_pause_start.setImageDrawable(getBitmap("images/media-start.png"));
				});
				clientMessage("§e done");
			}
			
		}
		else if (cmd[0] == "stop" || cmd[0] == "e")
		{
			if (PublicMedaiPlayer.isPlaying())
			{
				PublicMedaiPlayer.stop();
				UiThread(function(){
					Seeker_bar_pause_start.setImageDrawable(getBitmap("images/media-pause.png"));
					Seeker_bar.setProgress(0);
					NowPlaying = null;
					NowPlayingPath = null;
				});
				clientMessage("§e done");
			}
		}
		else if (cmd[0] == "show" || cmd[0] == "s")
		{
			Settings.set(values.Settings.showSeekBar, "on");
			clientHaveBeenSet();
		}
		else if (cmd[0] == "hide" || cmd[0] == "h")
		{
			if (Seeker_window.isShowing())
			{
				UiThread(function(){
					Seeker_window.dismiss();
				});
				Settings.set(values.Settings.showSeekBar, "off");
				clientHaveBeenSet();
			}
		}
	}
}
function leaveGame(){
	isInGame = false;
	
	if ((Settings.get(values.Settings.onExitClose) + "") == "on")
	{
		if (PublicMedaiPlayer.isPlaying())
		{
			PublicMedaiPlayer.stop();
			UiThread(function(){
				Seeker_bar_pause_start.setImageDrawable(getBitmap("images/media-pause.png"));
				Seeker_bar.setProgress(0);
				NowPlaying = null;
				NowPlayingPath = null;
			});
		}
	}
}
function newLevel(){
	isInGame = true;
}
function CopyRight(){
	var title = TextView({t : "版本版权", lp : public_lps});
	var content = ScrollView({v : TextView({lp : public_lps, t : values.String.CopyRight}), lp : public_lps});
	var pop = PopupWindow({f : true, v : LinearLayout({o : 1, vs : [title, content]})});
	ShowPop(pop);
}
function clientHaveBeenSet(){
	clientMessage("§e the properties was set");
}
function startAnimation(View, Type){
	if (Type == "run")
	{
		View.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -1500, 0, 0, 0));
	}
	else if (Type == "α" || Type == "alpha")
	{
		View.startAnimation(AlphaAnimator(1000, false, Interpolator.Linear, 0, 1));
	}
	else if (Type == "random" || Type == null)
	{
		if (Math.random() < (0.5) ? true : false)
		{
			View.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -1500, 0, 0, 0));
		}
		else
		{
			View.startAnimation(AlphaAnimator(1000, false, Interpolator.Linear, 0, 1));
		}
	}
}
var tick_thread = newThread(function(){try
	{
		while (true)
		{
			if (PublicMedaiPlayer.isPlaying())
			{
				UiThread(function(){try{
					Seeker_bar.setProgress(PublicMedaiPlayer.getCurrentPosition());
					
				}catch(e){Exception(e);}});
			}
			if (PublicVideoView.isPlaying())
			{
				UiThread(function(){try{
					PublicVideoSeek.setProgress(PublicVideoView.getCurrentPosition());
				}catch(e){Exception(e);}});
			}
			tick_thread.sleep(1000);
		}
	}
	catch(e){Exception(e);}
});
tick_thread.start();

function VideoSet(){
	UiThread(function(){try{
		PublicVideoView = new android.widget.VideoView(ctx);
		PublicVideoSeek = SeekBar({lp:public_lps, thumb : values.TypeSeekBar.Thumb, pd : values.TypeSeekBar.ProgressDrawable});
		PublicVideoControlButton = Button({lp:LayoutParams.getParams(50, 50), oc:function(){UiThread(function(){try{
			if(PublicVideoView.isPlaying())
			{
				set_button_start();
				PublicVideoView.pause();
			}
			else 
			{
				set_button_pause();
				PublicVideoView.start();
			}
		}catch(e){Exception(e);}});}});
		PublicVideoControlLayout = LinearLayout();
		PublicVideoTitle = TextView({t:"video-", lp:public_lps, ml:1});
		PublicVideoDialog = new android.app.AlertDialog.Builder(ctx).create();
		
		var vv = PublicVideoView;
		var vs = PublicVideoSeek;
		var vt = PublicVideoTitle;
		var vcb = PublicVideoControlButton;
		var vcl = PublicVideoControlLayout;
		var pvd = PublicVideoDialog;
		
		var control_temp = LinearLayout();
		control_temp.setOrientation(0);
		control_temp.addView(vcb);
		control_temp.addView(vs, -1, -1);
	
		PublicVideoView.setOnPreparedListener(new android.media.MediaPlayer.OnPreparedListener({onPrepared:function(MediaPlayer){try
		{
			vs.setMax(vv.getDuration());
			set_button_pause();
		}catch(e){Exception(e);}}}));
		PublicVideoView.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener({onCompletion:function(MediaPlayer){try
		{
			set_button_start();
		}catch(e){Exception(e);}}}));
		vs.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged:function(SeekBar, int, boolean){ },onStartTrackingTouch:function(SeekBar) { },onStopTrackingTouch:function(SeekBar){UiThread(function(){
			if (PublicVideoView.isPlaying())
			{
				PublicVideoView.seekTo(SeekBar.getProgress());
			}
		});}}));
		
		vcl.setOrientation(1);
		
		vcl.addView(vt);
		vcl.addView(control_temp, -1, -2);
		set_button_pause();
		
		pvd.setView(vv);
		pvd.setCustomTitle(vcl);//new java.io.File(path).getName());
		
		
	}catch(e){Exception(e);}});
	function bi(res){
		UiThread(function(){try{
			PublicVideoControlButton.setBackgroundDrawable(ctx.getResources().getDrawable(res));
		}catch(e){Exception(e);}});
	}
	function set_button_pause(){
		bi(android.R.drawable.ic_media_pause);
	}
	function set_button_start(){
		bi(android.R.drawable.ic_media_play);
	}
}
function ProgressWindowSet(){UiThread(function(){try{
	ProgressText = new TextView({t:"正在搜索:", oc : function(v){try{v.startAnimation(ScaleAnimation(1000, false, Interpolator.Accelerate, null, 0, 1, 0, 1, 50, 50));}catch(e){Exception(e);}}, 
	olc : function(v, t) {try{
			p_onLongClicked = true;
			var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
			vibrator.vibrate(100);

			var set = new android.view.animation.AnimationSet(true);
			set.setDuration(2500);
			set.addAnimation(ScaleAnimation(2500, false, Interpolator.Accelerate, null, 0, 1, 0, 1, 50, 50));
			set.addAnimation(AlphaAnimator(2000, false, Interpolator.Linear, 0, 1));
			set.setFillAfter(false);
			v.startAnimation(set);
		
		return true;
	}catch(e){Exception(e);}},
	ot : function(v, e) {try{
			
			if (!p_onLongClicked)
			{
				p_mX = e.getX();
				p_mY = e.getY();
			}
			if (p_onLongClicked)
			{
				var a = e.getAction();
				if (a == 2)
				{
					var delX = parseInt(e.getX() - p_mX) * -1 / 10;
					var delY = parseInt(e.getY() - p_mY) * -1 / 10;
					p_tpopx = p_tpopx - delX;
					p_tpopy = p_tpopy - delY;
					ProgressWindow.update(parseInt(p_tpopx), parseInt(p_tpopy), -1, -1);
				}
				if (a == 1) samll_onLongClicked = false;
			} 
		return false;
	}catch(e){Exception(e);}}});
	ProgressWindow = new PopupWindow({v:ProgressText, w:200, h : 110, b:public_canvas}, Gravity.Bottom | Gravity.Center);
	if ((Settings.get(values.Settings.isUseProgressWindow) + "") == "on") ShowPop(ProgressWindow);
}catch(e){Exception(e);}});};
function dismissProgress(){
	UiThread(function(){
		if(ProgressWindow != null && ProgressWindow.isShowing())
			ProgressWindow.dismiss();
	});
}
function setProgressText(s){
	UiThread(function(){
		ProgressText.setText(s.toString());
	});
}
function showsamll(){
	ShowPop(samll_ctrl_window, Gravity.Center | Gravity.Left);
}
if((Settings.get(values.Settings.isUseSmallWindow) + "") == "on")
	UiThread(function(){showsamll();});
	
