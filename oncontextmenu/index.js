// 获取dom元素
var body=document.getElementById("body");
var ul=document.getElementById("ul");

// oncontextmenu事件：用户右击时执行。可利用事件监听器调用，调用事件名没有“on”,
// 注意这里函数调用不加括号，会出错。
body.addEventListener("contextmenu",menuOut); 

function menuOut(event){
	event.preventDefault(); //取消事件的默认动作

	//窗口可用宽度-事件发生位置
	var rw=document.body.clientWidth-event.clientX;    
	var rh=document.body.clientHeight-event.clientY;
	ul.style.display="block";

	// 出现在点击处的右下方
	ul.style.left=event.clientX+'px';
	ul.style.top=event.clientY+'px';

	//如果右下方的位置不够，则出现在上方或左方
	if(rw<252) {ul.style.left=(event.clientX-252)+'px';}   
	if(rh<228) {ul.style.top=(event.clientY-228)+'px';}
}

body.onclick=function(){
	ul.style.display="none";
}

ul.onclick=function(){
	alert("我是菜单项目");
	event.stopPropagation();  //终止该事件向上冒泡
}
