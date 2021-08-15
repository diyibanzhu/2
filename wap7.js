$(function(){
	var _mobile = 0;
	UA = navigator.userAgent.toLowerCase();
	url = window.location;
	url = url.toString();
	if((UA.indexOf('iphone') != -1 || UA.indexOf('mobile') != -1 || UA.indexOf('android') != -1 || UA.indexOf('ipad') != -1 || UA.indexOf('windows ce') != -1 || UA.indexOf('ipod') != -1) && UA.indexOf('ipod') == -1) {
		_mobile = 1 ;$(function(){$("#gundong").hide()});
	}
	if(_mobile!=1) {
		if ($('#tip').length > 0) {
			$('body').css({'background': '#fff'});
			$('div,input,form').hide();
			$('div#tip').append('<center><h1>404 Not Found</h1></center><hr><center>nginx</center>').show();
		}
	}
})