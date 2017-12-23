function TempRandomPlayer() {try
	{
		if ((Settings.get(values.Settings.ButtonBuff) + "") == "on")
		{
			var m = new android.media.MediaPlayer();
			m.setDataSource(getSounds("sounds/" + random(60, 90) + ".ogg"));
			m.prepare();
			m.start();
			m = null;
		}
	}
	catch(e){Exception(e);}
	function random(from, to) {
		return from + Math.round(Math.random() * (to - from));
	}
}
function IconMedia() {try
	{
		if ((Settings.get(values.Settings.ButtonBuff) + "") == "on")
		{
			var m = new android.media.MediaPlayer();
			m.setDataSource(getSounds("sounds/icon.mp3"));
			m.prepare();
			m.start();
			m = null;
		}
	}catch(e){Exception(e);}
}
function PlaySounds(path){try
	{
			var m = new android.media.MediaPlayer();
			m.setDataSource(getSounds("sounds/" + path));
			m.prepare();
			m.start();
		
	}catch(e){Exception(e);}
}
function MediaPlayer(path){try
	{
		if (NowPlayingPath == path)
		{
			if (PublicMedaiPlayer.isPlaying() && (Settings.get(values.Settings.showSeekBar) + "") == "on")
			{
				UiThread(function(){
					if (!(Settings.get(values.Settings.isUseSmallWindow) + "") == "on")
						ShowPop(Seeker_window);
					if (debug_mode) Toast({msg:Settings.get(values.Settings.isUseSmallWindow) });
				});
			}
		}
		else
		{
			PublicMedaiPlayer.stop();
			PublicMedaiPlayer.reset();
			PublicMedaiPlayer.setDataSource(path);
			PublicMedaiPlayer.prepare();
			NowPlayingPath = path;
			NowPlaying = new java.lang.String(path).replaceAll("\\.mp4|\\.mp3|\\.ogg|\\.wav", "").replaceAll("/.+/", "");
			PublicMedaiPlayer.start();
		}
	}
	catch(e){Exception(e);}
}
function VideoPlayer(path) {UiThread(function(){ try
	{
		PublicVideoTitle.setText("video-" + new java.io.File(path).getName());
		PublicVideoView.resume();
		PublicVideoView.setVideoPath(path);
		PublicVideoView.start();
		PublicVideoDialog.show();
	}
	catch(e){Exception(e);}});
}
function VideoList(){
	ShowPop(VideoList_window);
	//VideoPlayer("/storage/sdcard1/Android/data/com.tencent.qqmusic/files/qqmusic/mv/动漫原声 - 某科学的超电磁炮 OP [mqms].mp4");
}

