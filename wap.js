function user(){
	if(getCookie('__17mb_uid') != '') {
		document.write('<a href="/user.php">��������</a>')
	}else{
		document.write('<a href="/login999.php">��¼</a>')
	}
}
function login(){
	$username = $('#username').val();
	$password = $('#password').val();
	if(!$username || !$password){
		alert('�������ʺź����룡');
		return false;
	}
	$.post('/login999.php',{'username':$username,'password':$password,'action':'login'},function(e){
		e = $.trim(e);
		if(e == '1'){
			alert('��¼�ɹ���������ת');
			window.location.href = '/';
		}else if(e == '2'){
			alert('�ʺŻ����볤��̫�������������룡');
		}else if(e == '3'){
			alert('�ʺŻ�����������������룡');
		}else if(e == '4'){
			alert('�������ʺź����룡');
		}else{
			alert('��¼ʧ�ܣ�');
		}
	})
}
function register(){
	$username = $('#username').val();
	$password = $('#password').val();
	$repassword = $('#repassword').val();
	$email = $('#email').val();
	if(!$username || !$password || !$repassword || !$email){
		alert('�������ʺš����롢�ظ���������䣡');
		return false;
	}
	if($password != $repassword){
		alert('������������벻һ�£�');
		return false;
	}
	$.post('/register999.php',{'username':$username,'password':$password,'email':$email,'action':'register'},function(e){
		e = $.trim(e);
		if(e == '1'){
			alert('ע��ɹ���������ת');
			window.location.href = '/';
		}else if(e == '2'){
			alert('�ʺš���������䳤��̫�������������룡');
		}else if(e == '3'){
			alert('�����ʽ�������������룡');
		}else if(e == '4'){
			alert('�˺��ѱ�ע�ᣬ���������룡');
		}else if(e == '5'){
			alert('�����ѱ�ע�ᣬ���������룡');
		}else if(e == '6'){
			alert('ע��ʧ��...');
		}else if(e == '7'){
			alert('�������ʺš���������䣡');
		}else{
			alert('ע��ʧ�ܣ�');
		}
	})
}
function addbookcase(aid,cid){
	if(!getCookie('__17mb_uid')){
		alert('���ȵ�¼��');
		return false;
	}
	$.get('/ajax.php',{'addmark':'1','aid':aid,'cid':cid},function(e){
		e = $.trim(e);
		if(e=='1'){
			alert('�ɹ���ӵ���ܣ�');
		}else if(e=='2'){
			alert('���ȵ�¼��');
		}else{
			alert('������ʧ�ܣ�');
		}
	})
}
function page(){
	var pageid = document.getElementById('pageinput').value;
	if(!isPositiveNum(pageid)){
		alert('��������������');
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
		alert('������������');
		return false;
	}
	$.post('/passedit.php',{'edit':'1','password':$password},function(e){
		e = $.trim(e);
		if(e=='2'){
			alert('���볤�Ȳ���С��6�Ҳ��ܴ���18λ');
		}else if(e=='1'){
			alert('�޸ĳɹ�����ʹ���������¼��');
			window.location.href = '/logout999.php';
		}else{
			alert(e);
			alert('���ִ���');
		}
	});
}
function kamijihuo(){
	$cdkey = $('#cdkey').val();
	if( $cdkey.length < 30 ){
		alert('���ܳ��Ȳ���ȷ�����������룡');
		return false;
	}
	$.post('/kamijihuo.php',{'cdkey':$cdkey},function(e){
		e = $.trim(e);
		if(e == '-1'){
			alert('δ��¼���¼��ʱ�����¼��');
			return false;
		}else if(e== '-2'){
			alert('�����뿨�ܺ��룡');
			return false;
		}else if(e == '-3'){
			alert('���ܳ��Ȳ���ȷ�����������룡');
			return false;
		}else if(e == '-4'){
			alert('���ܲ���ȷ�����Ѽ�����������룡');
			return false;
		}else if(e >= 1){
			alert('���ܼ���ɹ������γ�ֵ' + e + '��ң�');
			window.location.href = '/user.php';
			return true;
		}
	});
}
function vippay(t,n){
	$viptype = '��';
	if(t == '2')
		$viptype = '��';
	if(t == '3')
		$viptype = '��';
	if(confirm("����"+$viptype+"VIP������ "+n+" ��ң��Ƿ������")){
		$.post('/buyvip.php',{'t':t},function(e){
			e = $.trim(e);
			if(e == '1'){
				alert('����'+$viptype+'VIP�ɹ���');
				location.reload();
				return true;
			}else if(e == '-1'){
				alert('δ��¼���¼�ѳ�ʱ�������µ�¼��');
				return false;
			}else if(e == '-2'){
				alert('�˻����������������'+$viptype+'VIP�����ֵ��');
				return false;
			}else if(e == '-3'){
				alert('���Ѿ���VIP���������ظ�����VIP��');
				return false;
			}else {
				alert('����'+$viptype+'VIPʧ�ܣ�����ϵ����Ա��');
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
		alert('���ȵ�¼��');
		return false;
	}
	$.post('/txtdown.php',{'aid':aid},function(e){
		if(e == '1' || e == '2'){
			window.location.href = pcurl+'/modules/article/packdown.php?id='+aid+'&type=txt';
			return false;
		}else if(e == '-1'){
			alert('δ��¼���¼�ѳ�ʱ�������µ�¼��');
			return false;
		}else if(e == '-2'){
			alert('�˻���Ҳ��㣬���������� ' + n + ' ��ң����ֵ��');
			return false;
		}else{
			alert('����ʧ�ܣ�');
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

//ͨ��ҳ���ϲ����
function shang(){
	document.write('');
}
//ͨ��ҳ���в����
function zhong(){
	document.write('');
}
//ͨ��ҳ��ײ����
function xia(){
	document.write('');
}
//��ҳ��
function fanyeshang(){
	document.write('');
}
//��ҳ��
function fanyexia(){
	document.write('');
}

//�������
function xuanfu(){
	document.write('');
}
//ͳ�ƴ���
function tongji(){
	document.write('');
}