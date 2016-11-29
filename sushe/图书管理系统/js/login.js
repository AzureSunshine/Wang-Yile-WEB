
var button=document.getElementsByTagName("button")[0];



button.onclick=function(){

var text=document.getElementById("text");
var email=document.getElementById("email");
var user_sysck=text.value.toUpperCase();
var sysck_text_upper=sysck_text.toUpperCase(); 
var form=document.getElementsByTagName("form")[0];
// console.log(user_sysck);
 console.log(sysck_text_upper);

//text.setCustomValidity("aaa");/*?*/
email.setCustomValidity("");
if(!email.checkValidity()){//用来验证邮箱框
	email.setCustomValidity("");
	return false;
};

text.setCustomValidity("");
if(!text.checkValidity()){//用来验证验证码框
	text.setCustomValidity("");
	return false;
};

	if(user_sysck==sysck_text_upper){
		alert("验证码输入成功！");
	}else{
		alert("输入不正确");
		return;
	}
	form.submit();
}


