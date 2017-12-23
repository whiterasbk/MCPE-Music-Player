function ReadTXTFile(path) {try
	{
		var input = new java.io.FileInputStream(sdcard + "/" + path);
		var bufferd = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, input.available());
		input.read(bufferd);
		input.close();
		return new java.lang.String(bufferd);
	}
	catch(err){Exception(err);}
}
function WriteTXTFile(path, content, isOverride) {try
	{
		var output = new java.io.FileOutputStream(sdcard + "/" + path);
		output.write(new java.lang.String(content).getBytes()/*,new java.lang.Boolean(isOverride == true)*/);
		output.close();
	}
	catch(err){Exception(err);}
}
function ReadDataFile(path) {try
	{
		var input = new java.io.FileInputStream(sdcard + "/" + path);
		var bufferd = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, input.available());
		input.read(bufferd);
		input.close();
		return bufferd;
	}
	catch(err){Exception(err);}
}
function WriteDataFile(path, Data, isOverride) {try
	{
		var output = new java.io.FileOutputStream(sdcard + "/" + path);
		output.write(Data/*,new java.lang.Boolean(isOverride == true)*/);
		output.close();
	}
	catch(err){Exception(err);}
}
function musicfiles(){try
	{
		var music = [];
		newThread(function(){
			
		});
	}
	catch(e){Exception(e);}
	
	function listfile(path){
		var file = new java.io.File(path);
		var lsf = file.listFiles();
			for(var i in lsf)
			{
				if(lsf[i].isDirectory())
				{
					listfile(lsf[i].getAbsolutePath());
				}
				else
				{
					if(lsf[i].getName().endsWith("mp3"))
					{
						music.push(lsf[i].getAbsolutePath());
					}
				}
			}
	}
}
function SearchSongs()
{
	var rootFile = debug_mode == true ? (new java.io.File("storage/sdcard1")) : (new java.io.File(sdcard).getParentFile());
	/****???******/
	//rootFile = new java.io.File("storage/sdcard1");
	/****???******/
	search(rootFile);
	function search(file)
	{
		
		if (file.isDirectory())
		{
			var sub = file.listFiles();
			for (var i in sub)
			{
				search(sub[i]);
			}
		}
		else
		{
			var name = file.getName();
			
			setProgressText("正在搜索:" + name);
			
			if (name.endsWith(".mp3") || name.endsWith(".m4a") || name.endsWith(".ogg") || name.endsWith(".wav"))
			{
				GeneralSongs.name.push(file.getName());
				GeneralSongs.path.push(file.getAbsolutePath());
				
				MusicCount ++;
			}
			else if (name.endsWith(".mp4") || name.endsWith(".mov"))
			{
				Videos.name.push(file.getName());
				Videos.path.push(file.getAbsolutePath());
				
				VideoCount ++;
			}
		}
	}
}
