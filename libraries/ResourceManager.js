function getPackageResourceInputStream(path) {try
	{
		return debug_mode ? new java.io.FileInputStream(path) : ModPE.openInputStreamFromTexturePack(path);
	}
	catch(err){Exception(err);}
}
function getBitmap(path) {try
	{
		if (path instanceof android.graphics.drawable.Drawable)
			return path;
		else
			return debug_mode ? android.graphics.drawable.BitmapDrawable.createFromStream(new java.io.FileInputStream(debug_folder + path), "") : android.graphics.drawable.BitmapDrawable.createFromStream(getPackageResourceInputStream(path), "");
	}
	catch(e){Exception(e);}
}
function getSounds(path) {
	return debug_mode ? debug_folder + path : resources_dir + "/" + path;//here
}
function getTypeface(path) {try
	{
		return android.graphics.Typeface.createFromFile(path);
	}
	catch(e){Exception(e);}
}
function getAndroidDrawable(id) {
	return ctx.getResources().getDrawable(id);
}
/*
function ToStringColor(colorString) {
	if (colorString.charAt(0) == '#')
	{
		// Use a long to avoid rollovers on #ffXXXXXX
		var color = Long.parseLong(colorString.substring(1), 16);
		if (colorString.length() == 7)
		{
			// Set the alpha value
			color |= 0x00000000ff000000;
		}
		else if (colorString.length() != 9)
		{
			throw new java.lang.IllegalArgumentException("Unknown color");
		}
		return color;
	}
	else
	{
		var color = sColorNameMap.get(colorString.toLowerCase(Locale.US));
		if (color != null)
		{
			return color;
		}
	}
	throw new java.lang.IllegalArgumentException("Unknown color");
}
*/
