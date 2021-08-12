function user(){
	if(getCookie('__17mb_uid') != '') {
		document.write('<a href="/user.php">个人中心</a>')
	}else{
		document.write('<a href="/login999.php">登录</a>')
	}
}
function login(){
	$username = $('#username').val();
	$password = $('#password').val();
	if(!$username || !$password){
		alert('请输入帐号和密码！');
		return false;
	}
	$.post('/login999.php',{'username':$username,'password':$password,'action':'login'},function(e){
		e = $.trim(e);
		if(e == '1'){
			alert('登录成功，正在跳转');
			window.location.href = '/';
		}else if(e == '2'){
			alert('帐号或密码长度太长！请重新输入！');
		}else if(e == '3'){
			alert('帐号或密码错误，请重新输入！');
		}else if(e == '4'){
			alert('请输入帐号和密码！');
		}else{
			alert('登录失败！');
		}
	})
}
function register(){
	$username = $('#username').val();
	$password = $('#password').val();
	$repassword = $('#repassword').val();
	$email = $('#email').val();
	if(!$username || !$password || !$repassword || !$email){
		alert('请输入帐号、密码、重复密码和邮箱！');
		return false;
	}
	if($password != $repassword){
		alert('两次输入的密码不一致！');
		return false;
	}
	$.post('/register999.php',{'username':$username,'password':$password,'email':$email,'action':'register'},function(e){
		e = $.trim(e);
		if(e == '1'){
			alert('注册成功，正在跳转');
			window.location.href = '/';
		}else if(e == '2'){
			alert('帐号、密码或邮箱长度太长！请重新输入！');
		}else if(e == '3'){
			alert('邮箱格式错误，请重新输入！');
		}else if(e == '4'){
			alert('账号已被注册，请重新输入！');
		}else if(e == '5'){
			alert('邮箱已被注册，请重新输入！');
		}else if(e == '6'){
			alert('注册失败...');
		}else if(e == '7'){
			alert('请输入帐号、密码和邮箱！');
		}else{
			alert('注册失败！');
		}
	})
}
function addbookcase(aid,cid){
	if(!getCookie('__17mb_uid')){
		alert('请先登录！');
		return false;
	}
	$.get('/ajax.php',{'addmark':'1','aid':aid,'cid':cid},function(e){
		e = $.trim(e);
		if(e=='1'){
			alert('成功添加到书架！');
		}else if(e=='2'){
			alert('请先登录！');
		}else{
			alert('添加书架失败！');
		}
	})
}
function page(){
	var pageid = document.getElementById('pageinput').value;
	if(!isPositiveNum(pageid)){
		alert('请输入正整数！');
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
		alert('请输入新密码');
		return false;
	}
	$.post('/passedit.php',{'edit':'1','password':$password},function(e){
		e = $.trim(e);
		if(e=='2'){
			alert('密码长度不得小于6且不能大于18位');
		}else if(e=='1'){
			alert('修改成功，请使用新密码登录！');
			window.location.href = '/logout999.php';
		}else{
			alert(e);
			alert('出现错误！');
		}
	});
}
function kamijihuo(){
	$cdkey = $('#cdkey').val();
	if( $cdkey.length < 30 ){
		alert('卡密长度不正确，请重新输入！');
		return false;
	}
	$.post('/kamijihuo.php',{'cdkey':$cdkey},function(e){
		e = $.trim(e);
		if(e == '-1'){
			alert('未登录或登录超时，请登录！');
			return false;
		}else if(e== '-2'){
			alert('请输入卡密号码！');
			return false;
		}else if(e == '-3'){
			alert('卡密长度不正确，请重新输入！');
			return false;
		}else if(e == '-4'){
			alert('卡密不正确或卡密已激活，请重新输入！');
			return false;
		}else if(e >= 1){
			alert('卡密激活成功，本次充值' + e + '金币！');
			window.location.href = '/user.php';
			return true;
		}
	});
}
function vippay(t,n){
	$viptype = '日';
	if(t == '2')
		$viptype = '月';
	if(t == '3')
		$viptype = '年';
	if(confirm("升级"+$viptype+"VIP需消耗 "+n+" 金币，是否继续？")){
		$.post('/buyvip.php',{'t':t},function(e){
			e = $.trim(e);
			if(e == '1'){
				alert('升级'+$viptype+'VIP成功！');
				location.reload();
				return true;
			}else if(e == '-1'){
				alert('未登录或登录已超时，请重新登录！');
				return false;
			}else if(e == '-2'){
				alert('账户金币数量不够升级'+$viptype+'VIP，请充值！');
				return false;
			}else if(e == '-3'){
				alert('您已经是VIP级别，请勿重复升级VIP！');
				return false;
			}else {
				alert('升级'+$viptype+'VIP失败，请联系管理员！');
			}
		});
	}
}
function showvipbox(){
	$('.vipbox').toggle();
}
function txtdown(aid,pcurl,n){
	if(!aid){
		return false;
	}
	if(!getCookie('__17mb_uid')){
		alert('请先登录！');
		return false;
	}
	$.post('/txtdown.php',{'aid':aid},function(e){
		if(e == '1' || e == '2'){
			window.location.href = pcurl+'/modules/article/packdown.php?id='+aid+'&type=txt';
			return false;
		}else if(e == '-1'){
			alert('未登录或登录已超时，请重新登录！');
			return false;
		}else if(e == '-2'){
			alert('账户金币不足，下载需消耗 ' + n + ' 金币，请充值！');
			return false;
		}else{
			alert('下载失败！');
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

//通用页面上部广告
function shang(){
	document.write('');
}
//通用页面中部广告
function zhong(){
	document.write('');
}
//通用页面底部广告
function xia(){
	document.write('');
}
//翻页上
function fanyeshang(){
	document.write('');
}
//翻页下
function fanyexia(){
	document.write('');
}

//悬浮广告
function xuanfu(){
	document.write('');
}
//统计代码
function tongji(){
	document.write('');
}