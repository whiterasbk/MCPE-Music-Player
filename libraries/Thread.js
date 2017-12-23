function UiThread(obj){
	ctx.runOnUiThread(new java.lang.Runnable({run:obj}));
}
function newThread(obj){
	return new java.lang.Thread(new java.lang.Runnable({run:obj}));
}
