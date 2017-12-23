var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var sdcard = android.os.Environment.getExternalStorageDirectory();
var application_dir = sdcard + "/games/com.mojang/whiter.media.player";
var music_list_dir = application_dir + "/MusicList";
var resources_dir = application_dir + "/resources";
var screen_width = ctx.getWindowManager().getDefaultDisplay().getWidth();
var screen_height = ctx.getWindowManager().getDefaultDisplay().getHeight();
var debug_mode = false, debug_folder = sdcard + "/1-Work-Space-1-JavaScript/music player/";

try
{
	if (!new java.io.File(application_dir).exists())
		new java.io.File(application_dir).mkdirs();
	if (!new java.io.File(music_list_dir).exists())
		new java.io.File(music_list_dir).mkdirs();
	if (!new java.io.File(resources_dir).exists())
		new java.io.File(resources_dir).mkdirs();
	if (!new java.io.File(resources_dir + "/sounds").exists())
		new java.io.File(resources_dir + "/sounds").mkdirs();
	
	if (!new java.io.File(application_dir + "/Settings.ini").exists() && !debug_mode)
		new java.io.FileOutputStream(application_dir + "/Settings.ini").write(ModPE.getBytesFromTexturePack("ini/Settings.ini"));
}
catch(e)
{
	err_dialog(e);
}

var resource_file = new java.io.File(resources_dir + "/sounds");
try
{
	if (resource_file.list().length < 33 && !debug_mode)
	{
		for (var i = 60; i <= 90; i ++)
		{
			var bytes = ModPE.getBytesFromTexturePack("sounds/" + i + ".ogg");
			var fos = new java.io.FileOutputStream(resources_dir + "/sounds/" + i + ".ogg");
			fos.write(bytes);
			fos.close();
		}
		new java.io.FileOutputStream(resources_dir + "/sounds/清凉夏日.mp3").write(ModPE.getBytesFromTexturePack("sounds/清凉夏日.mp3"));
		new java.io.FileOutputStream(resources_dir + "/sounds/icon.mp3").write(ModPE.getBytesFromTexturePack("sounds/icon.mp3"));
	}
}
catch(e)
{
	ctx.runOnUiThread(new java.lang.Runnable({run : function(){new android.app.AlertDialog.Builder(ctx).setTitle("解压文件时出错").setMessage(e.toString()).create().show();}}));
}

WelcomeView();

var ScriptCodes = "";

Import("libraries.GuiFunction");
Import("libraries.ResourceManager");
Import("libraries.Values");
Import("libraries.io");
Import("libraries.Sounds");
Import("libraries.Animation");
Import("libraries.Public");
Import("libraries.Thread");
Import("main.player");

eval(ScriptCodes);

function Import (path) {try
	{
		if (debug_mode)
		{
			var input = new java.io.FileInputStream(debug_folder + path.replace(".", "/" ) + ".js");
			var bufferd = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, input.available());
			input.read(bufferd);
			input.close();
			ScriptCodes += (new java.lang.String(bufferd) + "\n");
		}
		else 
			ScriptCodes += (new java.lang.String(ModPE.getBytesFromTexturePack(path.replace(".", "/") + ".js")) + "\n");
	}
	catch(e){err_dialog(e);}
}
function WelcomeView(){
	ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
		if ((getValue("showWelcome") + "") == "on")
		{
			var interpolator = new android.view.animation.LinearInterpolator();
			//显示欢迎界面
			var background = "images/default-LinearLayout.png";
			var pop = new android.widget.PopupWindow(ctx);
			pop.setWidth(screen_width);
			pop.setHeight(screen_height);
			
			var layout = new android.widget.LinearLayout(ctx);
			layout.setBackgroundDrawable(debug_mode ? android.graphics.drawable.BitmapDrawable.createFromStream(new java.io.FileInputStream(debug_folder + background), "") : android.graphics.drawable.BitmapDrawable.createFromStream(launch_res(background), ""));
			layout.setGravity(android.view.Gravity.CENTER);
			layout.setOrientation(0);
			layout.setAnimation(aa(1000, false, interpolator, 0, 1));
			
			var img_ic = Math.round(Math.random() * 10) <= 5 ? "images/whiter.png" : "images/icon.png";
			var img = new android.widget.ImageView(ctx);
			img.setImageDrawable(debug_mode ? android.graphics.drawable.BitmapDrawable.createFromStream(new java.io.FileInputStream(debug_folder + img_ic), "") : android.graphics.drawable.BitmapDrawable.createFromStream(launch_res(img_ic), ""));
			img.setAnimation(ta(3000, interpolator, false, null, -1500, 0, 0, 0));
			layout.addView(img);
			
			pop.setContentView(layout);
			pop.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
		
			//延迟
			new android.os.Handler().postDelayed(new java.lang.Runnable({run:function(){try{
				pop.dismiss();
			}catch(e){err_dialog(e);}}}), 5000);
		}
	}catch(e){err_dialog(e);}}}));
	
	function getValue(key){
		var prop = new java.util.Properties();

		var file = new java.io.File(application_dir + "/Settings.ini");
		if(!file.exists() && !debug_mode)
			file.createNewFile();
		prop.load(new java.io.FileInputStream(file));
		
		return prop.getProperty(key);
	}
	function aa(Duration, FillAfter, Interpolator, FromAlpha, ToAlpha, IsFor) {

		var Anim = new android.view.animation.AlphaAnimation(java.lang.Float.parseFloat(FromAlpha.toString()), java.lang.Float.parseFloat(ToAlpha.toString()));
		Anim.setDuration(Duration == null ? 1000 : Duration);
		Anim.setFillAfter(FillAfter == null ? true : FillAfter);
		Anim.setInterpolator(Interpolator);
		if (IsFor != null)//[true,true]
    	{
			if (IsFor[0] != false || IsFor[0] != null)
		    	Anim.setRepeatCount(IsFor[0] == true ? android.view.animation.Animation.INFINITE : IsFor[0]);
			if (IsFor[1] != false || IsFor[1] != null)
		    	Anim.setRepeatMode(IsFor[1] == true ? android.view.animation.Animation.REVERSE : IsFor[1]);
		}
		return Anim;
	}
	function ta(Duration, Interpolator, FillAfter, IsFor, FromXDelta, ToXDelta, FromYDelta, ToYDelta) {

		var Anim = new android.view.animation.TranslateAnimation(java.lang.Float.parseFloat(FromXDelta.toString()), java.lang.Float.parseFloat(ToXDelta.toString()), java.lang.Float.parseFloat(FromYDelta.toString()), java.lang.Float.parseFloat(ToYDelta.toString()));
		Anim.setDuration(Duration == null ? 1000 : Duration);
		Anim.setFillAfter(FillAfter == null ? true : FillAfter);
		Anim.setInterpolator(Interpolator);
		if (IsFor != null)
    	{
			if (IsFor[0] != false || IsFor[0] != null)
		    	Anim.setRepeatCount(IsFor[0] == true ? android.view.animation.Animation.INFINITE : IsFor[0]);
			if (IsFor[1] != false || IsFor[1] != null)
		    	Anim.setRepeatMode(IsFor[1] == true ? android.view.animation.Animation.REVERSE : IsFor[1]);
		}
		return Anim;
	}
}
function err_dialog(msg){
	ctx.runOnUiThread(new java.lang.Runnable({run : function(){new android.app.AlertDialog.Builder(ctx).setTitle("运行错误").setMessage(msg.toString()).create().show();}})); 
}
function launch_res(path) {try
	{
		return debug_mode ? new java.io.FileInputStream(path) : ModPE.openInputStreamFromTexturePack(path);
	}
	catch(err){err_dialog(err);}
}
if (debug_mode)
	print("finished loading");

