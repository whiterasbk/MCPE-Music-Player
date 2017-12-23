function/**透明度动画*/ AlphaAnimator(Duration, FillAfter, Interpolator, FromAlpha, ToAlpha, IsFor) {

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
function/**缩放动画*/ ScaleAnimation(Duration, FillAfter, Interpolator, IsFor, FromX, ToX, FromY, ToY, PivotX, PivotY) {

	var Anim = new android.view.animation.ScaleAnimation(java.lang.Float.parseFloat(FromX.toString()), java.lang.Float.parseFloat(ToX.toString()), java.lang.Float.parseFloat(FromY.toString()), java.lang.Float.parseFloat(ToY.toString()), PivotX == null ? java.lang.Float.parseFloat("0.5") : java.lang.Float.parseFloat(PivotX.toString()), PivotY == null ? java.lang.Float.parseFloat("0.5") : java.lang.Float.parseFloat(PivotY.toString()));
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
function /**旋转动画*/ RotateAnimation(Duration, FillAfter, Interpolator, IsFor, FromDegrees, ToDegress, PivotX, PivotY) {

	var Anim = new android.view.animation.RotateAnimation(java.lang.Float.parseFloat(FromDegrees.toString()), java.lang.Float.parseFloat(ToDegress.toString()), java.lang.Float.parseFloat(PivotX.toString()), java.lang.Float.parseFloat(PivotY.toString()));
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
function/**下拉动画*/ BounceAnimator (Duration, FillAfter, Interpolator, IsFor, FromX, ToX, FromY, ToY, PivotX, PivotY) {
    return ScaleAnimation(Duration, FillAfter, new android.view.animation.BounceInterpolator(), IsFor, FromX == null ? 1 : FromX, ToX == null ? 1 : ToX, FromY == null ? 0 : FromY, ToY == null ? 1 : ToY, PivotX, PivotY);
}
function/**位移动画*/ TranslateAnimation(Duration, Interpolator, FillAfter, IsFor, FromXDelta, ToXDelta, FromYDelta, ToYDelta) {

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
function MenuItemAnimation(v){
	if (boolean())
		v.startAnimation(TranslateAnimation(500, Interpolator.Accelerate, false, null, -1500, 0, 0, 0));
	else 
		v.startAnimation(AlphaAnimator(1000, false, Interpolator.Linear, 0, 1));
		
	TempRandomPlayer();
	function boolean(Float){
		return Math.random() < (Float == null ? 0.5 : Float) ? true : false;
	}
}
