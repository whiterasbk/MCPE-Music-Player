function Button(Arguments) {try
	{
		var view = new android.widget.Button(ctx);
		if (Arguments != null)
		{
			view.setText(Arguments.Text == null ? "" : Arguments.Text);
			view.setTextColor(parseColor(Arguments.TextColor == null ? DefaultViewProperties.Button.textcolor : Arguments.TextColor));
			view.setBackgroundDrawable(getBitmap(Arguments.Background == null ? DefaultViewProperties.Button.background : Arguments.Background));
			view.setAnimation(Arguments.Animation == null ? DefaultViewProperties.Button.animation : Arguments.Animation);

			if (Arguments.LayoutParams != null) view.setLayoutParams(Arguments.LayoutParams);
			if (Arguments.Gravity != null) view.setGravity(Arguments.Gravity);
			if (Arguments.Typeface != null) view.setTypeface(getTypeface(Arguments.Typeface));
			if (Arguments.onClick != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.onClick}));
			if (Arguments.OnLongClickListener != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : Arguments.OnLongClickListener})); 
			if (Arguments.OnTouchListener != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : Arguments.OnTouchListener}));
			if (Arguments.TextSize != null) view.setTextSize(Arguments.TextSize);
			if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
        	if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
       		if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
			if (Arguments.AutoLinkMask != null) view.setAutoLinkMask(Arguments.AutoLinkMask);
        	if (Arguments.Ellipsize != null) view.setEllipsize(Arguments.Ellipsize);
       		if (Arguments.MarqueeRepeatLimit != null) view.setMarqueeRepeatLimit(Arguments.MarqueeRepeatLimit);
			if (Arguments.Tag != null) view.setTag(Arguments.Tag);
			if (Arguments.MaxLines != null) view.setMaxLines(Arguments.MaxLines);
			
			if (Arguments.t != null) view.setText(Arguments.t);
			if (Arguments.color != null) view.setTextColor(parseColor(Arguments.color));
			if (Arguments.a != null) view.setAnimation(Arguments.a);
			if (Arguments.g != null) view.setGravity(Arguments.g);
			if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
			if (Arguments.oc != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.oc}));
			if (Arguments.ts != null) view.setTextSize(Arguments.ts);
			if (Arguments.b != null) view.setBackgroundDrawable(getBitmap(Arguments.b));
			if (Arguments.olc != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : Arguments.olc})); 
			if (Arguments.ot != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : Arguments.ot}));
		    if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
			if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
			if (Arguments.v != null) view.setVisibility(Arguments.v);
			if (Arguments.tag != null) view.setTag(Arguments.tag);
			if (Arguments.ml != null) view.setMaxLines(Arguments.ml);
			
		}
		return view;
	}
	catch(err){Exception(err);}
}
function Buttonoil(Text){
	var but = new android.widget.Button(ctx);
	but.setText(Text == null ? "" : Text);
	return but;
}
function TextView(Arguments) {try
	{
		var view = new android.widget.TextView(ctx);
		if (Arguments != null)
		{
			view.setText(Arguments.Text == null ? "" : Arguments.Text);
			view.setTextColor(parseColor(Arguments.TextColor == null ? DefaultViewProperties.TextView.textcolor : Arguments.TextColor));
			if (Arguments.LayoutParams != null) view.setLayoutParams(Arguments.LayoutParams);
			if (Arguments.Gravity != null) view.setGravity(Arguments.Gravity);
			if (Arguments.Typeface != null) view.setTypeface(getTypeface(Arguments.Typeface));
			if (Arguments.Background != null) view.setBackgroundDrawable(getBitmap(Arguments.Background));
			if (Arguments.Animation != null) view.setAnimation(Arguments.Animation);
			if (Arguments.TextSize != null) view.setTextSize(Arguments.TextSize);
			if (Arguments.onClick != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.onClick}));
			if (Arguments.OnLongClickListener != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : Arguments.OnLongClickListener})); 
			if (Arguments.OnTouchListener != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : Arguments.OnTouchListener}));
			if (Arguments.MaxLines != null) view.setMaxLines(Arguments.MaxLines);
			if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
        	if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
       		if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
			if (Arguments.AutoLinkMask != null) view.setAutoLinkMask(Arguments.AutoLinkMask);
        	if (Arguments.Ellipsize != null) view.setEllipsize(Arguments.Ellipsize);
       		if (Arguments.MarqueeRepeatLimit != null) view.setMarqueeRepeatLimit(Arguments.MarqueeRepeatLimit);
			
			if (Arguments.t != null) view.setText(Arguments.t);
			if (Arguments.color != null) view.setTextColor(parseColor(Arguments.color));
			if (Arguments.a != null) view.setAnimation(Arguments.a);
			if (Arguments.g != null) view.setGravity(Arguments.g);
			if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
			if (Arguments.ts != null) view.setTextSize(Arguments.ts);
			if (Arguments.olc != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : Arguments.olc})); 
			if (Arguments.ot != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : Arguments.ot}));
			if (Arguments.oc != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.oc}));
			if (Arguments.ml != null) view.setMaxLines(Arguments.ml);
			if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
			if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
			if (Arguments.v != null) view.setVisibility(Arguments.v);
		
		}
		return view;
	}catch(err){Exception(err);}
}
function EditText(Arguments) {try
	{
		var view = new android.widget.EditText(ctx);
		if (Arguments != null)
		{
			view.setText(Arguments.Text == null ? "" : Arguments.Text);
			view.setTextColor(parseColor(Arguments.TextColor == null ? DefaultViewProperties.EditText.textcolor : Arguments.TextColor));

			if (Arguments.Background != null) view.setBackgroundDrawable(getBitmap(Arguments.Background));
			if (Arguments.Hint != null) view.setHint(Arguments.Hint);
			if (Arguments.HintColor != null) view.setHintColor(Arguments.HintColor);
			if (Arguments.Input != null) view.setInputType(Arguments.Input);
			if (Arguments.Animation != null) view.setAnimation(Arguments.Animation);
			if (Arguments.LayoutParams != null) view.setLayoutParams(Arguments.LayoutParams);
			if (Arguments.Gravity != null) view.setGravity(Arguments.Gravity);
			if (Arguments.Typeface != null) view.setTypeface(getTypeface(Arguments.Typeface));
			if (Arguments.onClick != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.onClick}));
			if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
        	if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
       		if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
			
			if (Arguments.h != null) view.setHint(Arguments.h);
			if (Arguments.i != null) view.setInputType(Arguments.i);
			if (Arguments.t != null) view.setText(Arguments.t);
			if (Arguments.color != null) view.setTextColor(parseColor(Arguments.color));
			if (Arguments.a != null) view.setAnimation(Arguments.a);
			if (Arguments.g != null) view.setGravity(Arguments.g);
			if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
			if (Arguments.oc != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.oc}));
			if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
			if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
			if (Arguments.v != null) view.setVisibility(Arguments.v);
		
		}
		return view;
	}
	catch(e){Exception(e);}
}
function LinearLayout(Arguments) {try
	{
		var view = new android.widget.LinearLayout(ctx);
		if (Arguments != null)
		{
			view.setBackgroundDrawable(getBitmap(Arguments.Background == null ? DefaultViewProperties.LinearLayout.background : Arguments.Background));
			if (Arguments.Orientation != null) view.setOrientation(Arguments.Orientation);
			if (Arguments.Animation != null) view.setAnimation(Arguments.Animation);
			if (Arguments.LayoutParams != null) view.setLayoutParams(Arguments.LayoutParams);
			if (Arguments.Gravity != null) view.setGravity(Arguments.Gravity);
			if (Arguments.Views != null)
			{
				for (var i = 0; i < Arguments.Views.length; i++)
					view.addView(Arguments.Views[i]);
			}
			if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
        	if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
       		if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
			
			if (Arguments.b) view.setBackgroundDrawable(getBitmap(Arguments.b));
			if (Arguments.o != null) view.setOrientation(Arguments.o);
			if (Arguments.a != null) view.setAnimation(Arguments.a);
			if (Arguments.g != null) view.setGravity(Arguments.g);
			if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
			if (Arguments.vs != null) 
			{
				for (var i = 0; i < Arguments.vs.length; i++)
					view.addView(Arguments.vs[i]);
			}
			if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
			if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
			if (Arguments.v != null) view.setVisibility(Arguments.v);
		
		}
		return view;
	}
	catch(e){Exception(e);}
}
function LinearLayoutoil(View, Orientation) {
	var view = new android.widget.LinearLayout(ctx);
	if (View != null) view.addView(View);
	view.setOrientation(Orientation == null ? 1 : Orientation);
	return view;
}
function ScrollView(Arguments) {try
	{
		var view = new android.widget.ScrollView(ctx);
		if (Arguments != null)
		{
			if (Arguments.Background != null) view.setBackgroundDrawable(getBitmap(Arguments.Background));
			if (Arguments.Animation != null) view.setAnimation(Arguments.Animation);
			if (Arguments.LayoutParams != null) view.setLayoutParams(Arguments.LayoutParams);
			if (Arguments.Gravity != null) view.setGravity(Arguments.Gravity);
			if (Arguments.View != null) view.addView(Arguments.View);
			if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
        	if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
       		if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
			
			if (Arguments.b) view.setBackgroundDrawable(getBitmap(Arguments.b));
			if (Arguments.v != null) view.addView(Arguments.v);
			if (Arguments.a != null) view.setAnimation(Arguments.a);
			if (Arguments.g != null) view.setGravity(Arguments.g);
			if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
			if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
			if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
			if (Arguments.vy != null) view.setVisibility(Arguments.vy);
		
		}
		return view;
	}
	catch(e){Exception(e);}
}
function ScrollViewoil(view){
	var scroll = new android.widget.ScrollView(ctx);
	scroll.addView(view);
	return scroll;
}
function ImageView(Arguments) {try
	{
		var view = new android.widget.ImageView(ctx);
		if (Arguments != null)
		{
			if (Arguments.Background != null) view.setBackgroundDrawable(getBitmap(Arguments.Background));
		    if (Arguments.Animation != null) view.setAnimation(Arguments.Animation);
			if (Arguments.ImageDrawable != null) view.setImageDrawable(Arguments.ImageDrawable);
			if (Arguments.LayoutParams != null) view.setLayoutParams(Arguments.LayoutParams);
			if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
        	if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
       		if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
			if (Arguments.onClick != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.onClick}));
			if (Arguments.OnLongClickListener != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : Arguments.OnLongClickListener})); 
			if (Arguments.OnTouchListener != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : Arguments.OnTouchListener}));
			
			if (Arguments.b != null) view.setBackgroundDrawable(getBitmap(Arguments.b));
			if (Arguments.i != null) view.setImageDrawable(getBitmap(Arguments.i));
			if (Arguments.a != null) view.setAnimation(Arguments.a);
			if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
			if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
			if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
			if (Arguments.v != null) view.setVisibility(Arguments.v);
			if (Arguments.olc != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : Arguments.olc})); 
			if (Arguments.ot != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : Arguments.ot}));
			if (Arguments.oc != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.oc}));
		}
		return view;
	}
	catch(e){Exception(e);}
}
function ProgressBar(Arguments) {try
	{
		var view = new android.widget.ProgressBar(ctx);
		if (Arguments != null)
		{
			if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
        	if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
       		if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
			
			if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
			if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
			if (Arguments.v != null) view.setVisibility(Arguments.v);
		
		}
		return view;
	}
	catch(e){Exception(e);}
}
function SeekBar(Arguments) {try
	{
		var view = new android.widget.SeekBar(ctx);
		if (Arguments != null)
		{
			if (Arguments.Background != null) view.setBackgroundDrawable(getBitmap(Arguments.Background));
			if (Arguments.Animation != null)view.setAnimation(Arguments.Animation);
			if (Arguments.LayoutParams != null) view.setLayoutParams(Arguments.LayoutParams);
			if (Arguments.onClick != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.onClick}));
			if (Arguments.Thumb != null) view.setThumb(getBitmap(Arguments.Thumb));
			if (Arguments.Max != null) view.setMax(Arguments.Max);
			if (Arguments.Progress != null) view.setProgress(Arguments.Progress);
			if (Arguments.OnSeekBarChangeListener != null) view.setOnSeekBarChangeListener({onProgressChanged:Arguments.OnSeekBarChangeListener});
			if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
        	if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
       		if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
			if (Arguments.ProgressDrawable != null) view.setProgressDrawable(getBitmap(Arguments.ProgressDrawable));
			if (Arguments.ProgressDrawableTiled) view.setProgressDrawableTiled(getBitmap(Arguments.ProgressDrawableTiled));
			
			if (Arguments.a != null) view.setAnimation(Arguments.a);
			if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
			if (Arguments.oc != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.oc}));
			if (Arguments.max != null) view.setMax(Arguments.max);
			if (Arguments.thumb != null) view.setThumb(getBitmap(Arguments.thumb));
			if (Arguments.p != null) view.setProgress(Arguments.p);
			if (Arguments.osc != null) view.setOnSeekBarChangeListener({onProgressChanged:Arguments.osc});
			if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
			if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
			if (Arguments.v != null) view.setVisibility(Arguments.v);
			if (Arguments.pd != null) view.setProgressDrawable(getBitmap(Arguments.pd));
			if (Arguments.pdt != null) view.setProgressDrawableTiled(getBitmap(Arguments.pdt));
			
		}
		return view;
	}
	catch(e){Exception(e);}
}
function CheckBox(Arguments){try
	{
		var view = new android.widget.CheckBox(ctx);
		if (Arguments != null)
		{
			view.setTextColor(parseColor(Arguments.TextColor == null ? DefaultViewProperties.TextView.textcolor : Arguments.TextColor));
			if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
        	if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
       		if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
			if (Arguments.Checked) view.setChecked(Arguments.Checked);
			if (Arguments.onClick != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.onClick}));
			if (Arguments.OnLongClickListener != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : Arguments.OnLongClickListener})); 
			if (Arguments.OnTouchListener != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : Arguments.OnTouchListener}));
			
			if (Arguments.t != null) view.setText(Arguments.t);
			if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
			if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
			if (Arguments.v != null) view.setVisibility(Arguments.v);
			if (Arguments.ced != null) view.setChecked(Arguments.ced);
			if (Arguments.ts != null) view.setTextSize(Arguments.ts);
			if (Arguments.olc != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : Arguments.olc})); 
			if (Arguments.ot != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : Arguments.ot}));
			if (Arguments.oc != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : Arguments.oc}));
			if (Arguments.ml != null) view.setMaxLines(Arguments.ml);
			if (Arguments.color != null) view.setTextColor(parseColor(Arguments.color));
			if (Arguments.a != null) view.setAnimation(Arguments.a);
			if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function PopupWindow(Arguments) {try
	{
		var pop = new android.widget.PopupWindow(ctx);
		if (Arguments != null)
		{
			pop.setWidth(pxWindth(Arguments.Width == null ? DefaultViewProperties.PopupWindow.Width : Arguments.Width));
			pop.setHeight(pxHeight(Arguments.Height == null ? DefaultViewProperties.PopupWindow.Height : Arguments.Height));

			if (Arguments.View != null) pop.setContentView(Arguments.View);
			if (Arguments.Background != null) pop.setBackgroundDrawable(getBitmap(Arguments.Background));
			if (Arguments.Fucusable != null) pop.setFocusable(Arguments.Fucusable);
			if (Arguments.onDismissListener != null) pop.setOnDismissListener(new android.widget.PopupWindow.OnDismissListener({onDismiss:Arguments.onDismissListener}));
			
			if (Arguments.f != null) pop.setFocusable(Arguments.f);
			if (Arguments.b != null) pop.setBackgroundDrawable(getBitmap(Arguments.b));
			if (Arguments.w != null) pop.setWidth(pxWindth(Arguments.w));
			if (Arguments.h != null) pop.setHeight(pxHeight(Arguments.h));
			if (Arguments.v != null) pop.setContentView(Arguments.v);
			if (Arguments.odl != null) pop.setOnDismissListener(new android.widget.PopupWindow.OnDismissListener({onDismiss:Arguments.odl}));
		}
		return pop;
	}
	catch(e){Exception(e);}
}
function Exception(e) {try
	{
		if (debug_mode)
			print(e + e.lineNumber);
		else
		{
			if ((Settings.get(values.Settings.isShowExceptionByAlert) + "") == "on")
			{
				UiThread(function(){
					var title = TextView({t : "运行异常", lp : public_lps});
					var content = TextView({lp : public_lps, t : "异常信息:" + e.toString() + "\n异常行号:" + e.lineNumber});
					ShowPop(PopupWindow({f : true, v : LinearLayout({o : 1, lp : public_lps, vs :[title, ScrollView({lp : public_lps, v : content})]})  }));
				});
			}
			else
			{
				Toast({msg : e.toString(), d : 5000});
			}
		}
	}
	catch(e){print(e);}
}
function Toast(Arguments){UiThread(function(){try
	{
		var toast = new android.widget.Toast(ctx);
		if (Arguments != null)
		{
			toast.setDuration(Arguments.Duration == null ? DefaultViewProperties.Toast.Duration : Arguments.Duration);
			if (Arguments.Gravity != null) toast.setGravity(Arguments.Gravity, 0, 0);
			if (Arguments.View != null) toast.setView(Arguments.View);
			if (Arguments.Message != null)
			{
				var icon = ImageView({i : DefaultViewProperties.Toast.Icon});
				var content = TextView({ts : Arguments.ts == null ? DefaultViewProperties.Toast.TextSize : Arguments.ts, t : Arguments.Message, lp : LayoutParams.getParams(-2, -1)});
				content.setPadding(DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding);
				var layout = LinearLayout({vs : [icon, content], o : 0, lp : LayoutParams.getParams(-1, -1)});
				layout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(DefaultViewProperties.Toast.BackgroundColor)));
				toast.setView(layout);
			}
			
			if (Arguments.d != null) toast.setDuration(Arguments.d);
			if (Arguments.g != null) toast.setGravity(Arguments.g, 0, 0);
			if (Arguments.v != null) toast.setView(Arguments.v);
			if (Arguments.msg != null) 
			{
				var icon = ImageView({i : DefaultViewProperties.Toast.Icon});
				var content = TextView({ts : Arguments.ts == null ? DefaultViewProperties.Toast.TextSize : Arguments.ts, t : Arguments.msg, lp : LayoutParams.getParams(-2, -1)});
				content.setPadding(DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding);
				var layout = LinearLayout({vs : [icon, content], o : 0, lp : LayoutParams.getParams(-1, -1)});
				layout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(DefaultViewProperties.Toast.BackgroundColor)));
				toast.setView(layout);
			}
			
			if (Arguments.is != null && Arguments.is == false) 
				return toast;
			toast.show();
		}
		return toast;
	}
	catch(e){Exception(e);}});
}
function ShowPop(pop, gravity, x_offset, y_offset) {try
	{
		pop.showAtLocation(ctx.getWindow().getDecorView(), gravity == null ? DefaultViewProperties.PopupWindow.gravity : gravity, x_offset == null ? DefaultViewProperties.PopupWindow.x_offset : x_offset, y_offset == null ? DefaultViewProperties.PopupWindow.y_offset : y_offset);
		return pop;
	}
	catch(e){Exception(e);}
}
function parseColor(string) {
	if (typeof string == typeof 1)
		return string;
	return android.graphics.Color.parseColor(string);
}
function pxHeight(height) {
	if (height > 1)
		return dip2px(height);
	else
		return Math.round(screen_height * height);
}
function pxWindth(width) {
	if (width > 1)
		return dip2px(width);
	else
		return Math.round(screen_width * width);
}
function pxViewParams(view, num_w, num_h) {try
	{
		view.setLayoutParams(LayoutParams.getParams( Math.round(view.getRootView().getWidth() * num_w), Math.round(view.getRootView().getHeight() * num_h) ));
		return view;
	}catch(e){Exception(e);}
}
function dip2px(dips) { 
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density); 
}

