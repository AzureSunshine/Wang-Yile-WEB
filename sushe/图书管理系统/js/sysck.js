var sysck_text;
change();

function change(){
sysck_text="";
var low_arr=new Array();
var upper_arr=new Array();
var num_arr=new Array();
var all_arr=new Array();
var font_Y=new Array();

var canvas=document.getElementsByTagName("canvas")[0];
var  context=canvas.getContext("2d");
context.clearRect(0,0,120,40);
//随机生成背景颜色
function color(v){
	var a=parseInt(Math.random()*254);
	var b=parseInt(Math.random()*254);
	var c=parseInt(Math.random()*254);
	
	return "rgba("+a+","+b+","+c+","+v+")";
}

//将要在验证码中显示的大小写字母和数字都放到一个数组中
low_arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","w","v","u","x","y","z"];
for(var i=0;i<low_arr.length;i++){
	upper_arr[i]=low_arr[i].toUpperCase();
	
}

for(var i=0;i<=9;i++){
	num_arr[i]=i;
}

all_arr=Array.concat(low_arr,upper_arr,num_arr);

//随机出现文本
function font(){
 	var num=parseInt(Math.random()*62);
 	return all_arr[num];
}

font_Y=[15,20,25,30,35,40];
function Y_margin(){
	var num=parseInt(Math.random()*6);
	return font_Y[num];
}


//背景
context.fillStyle=color(0.3);
context.fillRect(0,0,120,40);
//要出现的内文本

	for(var i=1;i<5;i++){
		var f=font();
		context.fillStyle=color(0.9);
		context.font="20px 微软雅黑"
		context.fillText(f,20*i,Y_margin());
		sysck_text+=f;
	}

}
