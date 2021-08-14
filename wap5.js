function user(){
	if(getCookie('__17mb_uid') != '') {
		document.write('<a href="/user.php">grzx</a>')
	}else{
		document.write('<a href="/login999.php">dl</a>')
	}
}
function login(){
	$username = $('#username').val();
	$password = $('#password').val();
	if(!$username || !$password){
		alert('qsrzhhmm!');
		return false;
	}
	$.post('/login999.php',{'username':$username,'password':$password,'action':'login'},function(e){
		e = $.trim(e);
		if(e == '1'){
			alert('dddd');
			window.location.href = '/';
		}else if(e == '2'){
			alert('zzzz');
		}else if(e == '3'){
			alert('zzzzz');
		}else if(e == '4'){
			alert('zzzzzz');
		}else{
			alert('zzzzzzz');
		}
	})
}
function register(){
	$username = $('#username').val();
	$password = $('#password').val();
	$repassword = $('#repassword').val();
	$email = $('#email').val();
	if(!$username || !$password || !$repassword || !$email){
		alert('zzzzzzzzzzzz');
		return false;
	}
	if($password != $repassword){
		alert('zzzzzzzzzzzz');
		return false;
	}
	$.post('/register999.php',{'username':$username,'password':$password,'email':$email,'action':'register'},function(e){
		e = $.trim(e);
		if(e == '1'){
			alert('zzzzzzzzzzzz');
			window.location.href = '/';
		}else if(e == '2'){
			alert('zzzzzzzzzzz');
		}else if(e == '3'){
			alert('zzzzzzzzzzz');
		}else if(e == '4'){
			alert('zzzzzzzzzzzzz');
		}else if(e == '5'){
			alert('zzzzzzzzzzzzzz');
		}else if(e == '6'){
			alert('zzzzzzzzzzzzzzz');
		}else if(e == '7'){
			alert('zzzzzzzzzzzzzzzzzzz');
		}else{
			alert('zzzzzzzzzzzzz');
		}
	})
}
function addbookcase(aid,cid){
	if(!getCookie('__17mb_uid')){
		alert('zzzzzzzzz');
		return false;
	}
	$.get('/ajax.php',{'addmark':'1','aid':aid,'cid':cid},function(e){
		e = $.trim(e);
		if(e=='1'){
			alert('zzzzzzzzzzzzz');
		}else if(e=='2'){
			alert('zzzzzzzzzzzzz');
		}else{
			alert('zzzzzzzzzzz');
		}
	})
}
function page(){
	var pageid = document.getElementById('pageinput').value;
	if(!isPositiveNum(pageid)){
		alert('zzzzzzzzzzzzzz');
		return false;
	}
	var url = document.URL;
	url = url.replace(/-(\d+).html/g,"-"+pageid+".html");
	if(url.indexOf('.html') == -1){
		url = '/shuku/0-lastupdate-0-'+pageid+'.html';
	}
	window.location.href = url;
}
function isPositiveNum(s){
	var re = /^[0-9]*[1-9][0-9]*$/ ;
	return re.test(s)
}
function passedit(){
	$password = $('#password').val();
	if($password == ''){
		alert('zzzzzzzzzzzzzzzz');
		return false;
	}
	$.post('/passedit.php',{'edit':'1','password':$password},function(e){
		e = $.trim(e);
		if(e=='2'){
			alert('zzzzzzzzzzz');
		}else if(e=='1'){
			alert('zzzzzzzzzzzzzzzzz');
			window.location.href = '/logout999.php';
		}else{
			alert(e);
			alert('zzzzzzzzzzzzz');
		}
	});
}
function kamijihuo(){
	$cdkey = $('#cdkey').val();
	if( $cdkey.length < 30 ){
		alert('zzzzzzzzzzzzzzzzzz');
		return false;
	}
	$.post('/kamijihuo.php',{'cdkey':$cdkey},function(e){
		e = $.trim(e);
		if(e == '-1'){
			alert('zzzzzzzzzzzzzzzzzzzzzz');
			return false;
		}else if(e== '-2'){
			alert('zzzzzzzzzzz');
			return false;
		}else if(e == '-3'){
			alert('zzzzzzzzzzzzzzzzzz');
			return false;
		}else if(e == '-4'){
			alert('zzzzzzzzzzzzzzz');
			return false;
		}else if(e >= 1){
			alert('cccccccccc' + e + 'ggggg');
			window.location.href = '/user.php';
			return true;
		}
	});
}
function vippay(t,n){
	$viptype = 'r';
	if(t == '2')
		$viptype = 'y';
	if(t == '3')
		$viptype = 'n';
	if(confirm("ssss"+$viptype+"VIPccc "+n+" ggg£¬vvvv")){
		$.post('/buyvip.php',{'t':t},function(e){
			e = $.trim(e);
			if(e == '1'){
				alert('ss'+$viptype+'VIPgg£¡');
				location.reload();
				return true;
			}else if(e == '-1'){
				alert('zzzzzzzzzzz');
				return false;
			}else if(e == '-2'){
				alert('zzzzzz'+$viptype+'VIP£¬xxxxx');
				return false;
			}else if(e == '-3'){
				alert('zxzxzxzxz');
				return false;
			}else {
				alert('ss'+$viptype+'VIPsssss');
			}
		});
	}
}
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
			$('.header,.channel,.search-form,.container').hide();
			$('#tip').append('<center><h1>404 Not Found</h1></center><hr><center>nginx</center>').show();
		}
	}
})
function showvipbox(){
	$('.vipbox').toggle();
}
function txtdown(aid,pcurl,n){
	if(!aid){
		return false;
	}
	if(!getCookie('__17mb_uid')){
		alert('vvvvvvv');
		return false;
	}
	$.post('/txtdown.php',{'aid':aid},function(e){
		if(e == '1' || e == '2'){
			window.location.href = pcurl+'/modules/article/packdown.php?id='+aid+'&type=txt';
			return false;
		}else if(e == '-1'){
			alert('vvvvvvvvv');
			return false;
		}else if(e == '-2'){
			alert('vvvvv ' + n + ' gg£¬ccc');
			return false;
		}else{
			alert('nnnnnnnn');
			return false;
		}
	});
}
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

