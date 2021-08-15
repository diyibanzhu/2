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


function searchpage(v,t,page,pageAll){
	if(v.length>0 && t.length>0){
		page = parseInt(page);
		var data;
		if(t == 'shouye'){
			data = {'type':'articlename','s':v,'page':'1'};
		}else if(t == 'shangye'){
			page = page-1;
			if(page<1)
				page = 1
			data = {'type':'articlename','s':v,'page':page};
		}else if(t == 'xiaye'){
			page = page+1;
			if(page>pageAll)
				page = pageAll
			data = {'type':'articlename','s':v,'page':page};
		}else if(t == 'weiye'){
			data = {'type':'articlename','s':v,'page':pageAll};
		}else if(t == 'input'){
			page = $('#pageinput').val();
			data = {'type':'articlename','s':v,'page':page};
		}else{
			return false;
		}
		formPost('/s.php',data);
	}
}
function formPost(url, params) {
	var temp = document.createElement("form");
	temp.action = url;
	temp.method = "post";
	temp.style.display = "none";
	for (var x in params) {
		var opt = document.createElement("textarea");
		opt.name = x;
		opt.value = params[x];
		temp.appendChild(opt);
	}
	document.body.appendChild(temp);
	temp.submit();
	return temp;
}
function setCookie(c_name,value,expiredays) {
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
		((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
}

function getCookie(c_name) {
	if (document.cookie.length>0) {
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1) {
			c_start=c_start + c_name.length+1
			c_end=document.cookie.indexOf(";",c_start)
			if (c_end==-1) c_end=document.cookie.length
			return unescape(document.cookie.substring(c_start,c_end))
		}
	}
	return ""
}