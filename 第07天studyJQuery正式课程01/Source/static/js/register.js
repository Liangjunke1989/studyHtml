$(function(){			//$(function()){}等价于$(document).ready(function(){})
						//这是为了防止文档在完全加载（就绪）之前运行 jQuery 代码。
	var error_name = true; //默认不合法
	var error_password = true;
	var error_check_password = true;
	var error_email = true;
	var error_check = false;

	var $name = $('#user_name');
	var $pwd = $('#pwd');
	var $cpwd = $('#cpwd');
	var $email = $('#email');
	var $zhuce = $('#zhuce');
	$name.blur(function() {
		check_user_name();
	}).click(function () {
		$(this).next().hide();  //点击输入框的时候让提示信息隐藏
	});

	$pwd.blur(function() {
		check_pwd();
	}).click(function () {
		$(this).next().hide();
	});

	$cpwd.blur(function() {
		check_cpwd();
	}).click(function () {
		$(this).next().hide();
	});

	$email.blur(function() {
		check_email();
	}).click(function () {
		$(this).next().hide();
	});

	$('#allow').click(function() {      //绑定点击事件
		// if($(this).is(':checked'))      //:checked返回封装了所有选中的表单域元素的jQuery对象。
		if($(this).prop('checked'))
		{                               //如果找不到任何相应的匹配，则返回一个空的jQuery对象。
			error_check = false;
			$(this).siblings('span').hide();    //查找每个allow元素的所有标签为 "span" 的所有同胞元素：
		}
		else
		{
			error_check = true;
			$(this).siblings('span').html('请勾选同意').show();
		}
	});

	//检查用户输入的值---原始写法
	// function check_user_name(){
	// 	//数字字母活下划线
	// 	var len = $('#user_name').val().length;
	// 	if(len<5||len>20)
	// 	{
	// 		$('#user_name').next().html('请输入5-20个字符的用户名');
	// 		$('#user_name').next().show();
	// 		error_name = true;
	// 	}
	// 	else
	// 	{
	// 		$.get('/user/register_exist/?uname='+$('#user_name').val(), function (data) {
	// 			if (data.count == 1){
	// 				$('#user_name').next().html('用户名已存在').show();
	// 				error_name = true;
	// 			} else {
	// 				$('#user_name').next().hide();
	// 				error_name = false;
	// 			}
    //         });
	// 	}
	// }
	//检查用户输入的值---正则表达式写法
	function check_user_name(){
		//数字字母活下划线
		var reg=/^\w{6,15}$/;
		var val =$name.val();

		if (val==''){
			alert('用户名不能为空');
			$name.next().html('用户名不能为空').show();
			error_name=true;
			return;
		}
		if (reg.test(val)){
			$name.next().hide();
			error_name=false;
		}else{
			$name.next().html('用户名是6-15个英文或数字，还可以包含"_').show();
			error_name=true;
		}
	}
	function check_pwd(){
		//数字字母活下划线
		var reg=/^[\w!@#$%^&*]{6,20}$/;
		var val =$pwd.val();

		if (val==''){
			$pwd.next().html('密码不能为空').show();
			error_name=true;
			return;
		}
		if (reg.test(val)){
			$pwd.next().hide();
			error_name=false;
		}else{
			$pwd.next().html('密码为6-20为数字或字母').show();
			error_name=true;
		}		
	}

	function check_cpwd(){
		var pass = $pwd.val();
		var cpass = $cpwd.val();

		if(pass!=cpass)
		{
			$cpwd.next().html('两次输入的密码不一致');
			$cpwd.next().show();
			error_check_password = true;
		}
		else
		{
			$cpwd.next().hide();
			error_check_password = false;
		}
	}

	function check_email(){
		var reg = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/i;
		var val =$email.val();
		if (val==''){
			error_name=true;
			$pwd.next().html('邮箱不能为空').show();
			return;
		}
		if(reg.test(val))      //test() 方法用于检测一个字符串是否匹配某个模式.
		{
			error_email = false;
			$email.next().hide();
		}
		else
		{
			$email.next().html('你输入的邮箱格式不正确').show();
			error_email = true;
		}
	}

	$zhuce.submit(function() {      //提交按钮,所有验证通过方可提交
		// check_user_name();
		// check_pwd();
		// check_cpwd();
		// check_email();

		if(error_name == false && error_password == false && error_check_password == false && error_email == false && error_check == false)
		{
		    //$('#zhuceform').submit();   //提交表单
			return true;
		}
		else
		{
			alert('输入有误');
		   // console.log('输入有误');     //在控制台输出
			return false;
		}
	})
})
