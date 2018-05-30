$(function(){
	var mask=$('.pop-mask'),
		layer=$('.pop-layer'),
		close=$('.pop-close'),
		login=$('#login'),
		register=$('#register'),
		loginWindow=$('.login-window').html(),
		registerWindow=$('.register-window').html(),
		loginSuccess=$('.login-success'),
		registerSuccess=$('.register-success'),
		content=$('.pop-content');


	// 登录事件函数
	login.click(function(){
		// var loginWindow=$('.login-window').html();
		// 当loginWindow在函数外定义时，用的是一直存在html中写的登录窗口，即已经获取完成，再次点击，填充的还是原有结构
		// 当其在函数内定义时，erro则随着loginWindow被填充进来，再次点击，就会重新获取，用的还是上次填充进来的结构，是更改过得
		showLayer(loginWindow,450,320);
		var loginBtn=$('.login-btn'),
			erro=$('.erro');
		
		// 登录表单校验
		loginBtn.click(function(){
			if($('input[name="account"]').val()==='admin'&&$('input[name="password"]').val()==='admin'){
				showLayer(loginSuccess,250,40);
			}else{
				erro.text('Account or password input error');
			}
		})
	})

	// 注册事件函数
	register.click(function(){
		showLayer(registerWindow,450,370);
		var registerBtn=$('.register-btn'),
			erro=$('.erro');
		// 注册表单校验
		registerBtn.click(function(){
			var password=$('input[name="password"'),
				repassword=$('input[name="repassword"]'),
				verification=$('input[name="verification"]');
			if(password.val()===repassword.val()&&verification.val()==='123456'){
				showLayer(registerSuccess,270,40);
			}
			// if(password.val()===repassword.val()&&verification.val()!=='123456'){
			// 	$(erro[2]).text('Verification Code error');
			// 	console.log('444')
			// }
			// if(password.val()!==repassword.val()&&verification.val()!=='123456')
			else{
				erro.text('Entered passwords differ!');
			}
		})
		
	})

	// 关闭回调函数
	// function closeCallback(){
	// 	erro.text("");
	// }

	// 弹出层显示函数
	function showLayer(html,width,height){
		mask.show();
		layer.show();
		content.html(html);
		layer.css({
			width:width,
			height:height,
		});

		close.click(function(){
			hideLayer();
			// closeCallback();
		})
	}


	// 弹出层隐藏函数
	function hideLayer(){
		mask.hide();
		layer.hide();
	}
	
})