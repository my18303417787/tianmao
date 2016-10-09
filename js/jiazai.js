window.onload=function(){

var floor=$(".floor");


//楼层到页面顶部距离
var arr=[]
for (var i = 0; i < floor.length; i++) {
	arr.push(floor[i].offsetTop);
};


var heights=document.documentElement.clientHeight;
//滚轮滚动的距离+窗口可视区域高度>=当前楼层到页面顶部距离
//滚动事件
//楼层跳转  点击相应的按钮
 var flag=true;

var lis=$(".gd15");

for (var i = 0; i < lis.length; i++) {
	
	lis[i].index=i;
	lis[i].onclick=function(){
		flag=false;
		
		for (var j = 0; j < lis.length; j++) {
		lis[j].style.background="#666666";
		};
		
		lis[this.index].style.background="red";

		//var obj =document.body.scrollTop?document.body:document.documentElement;
  animate(document.body,{scrollTop:arr[this.index]},function(){flag=true});
	
animate(document.documentElement,{scrollTop:arr[this.index]},function(){flag=true});
	
	}
};




var sflag=true;
window.onscroll=function(){
  //实时获取当前的状态滚轮滚动的距离
  //火狐
  //var scrollTop=document.documentElement.scrollTop;
  //谷歌
  var obj =document.body.scrollTop?document.body:document.documentElement;
  var scrollTop=obj.scrollTop;
  var jump=$(".jump")[0];
  var search1=$(".search1")[0];

  //判断滚轮滚动的距离+窗口可视区域高度>=当前楼层到页面顶部距离
  /*for (var i = 0; i < floor.length; i++) {
  	if(scrollTop+heights>=arr[i]+100){
          //当前层下图片加载
         var imgs=$("img",floor[i])
           for (var j = 0; j < imgs.length; j++) {
           	  imgs[j].src=imgs[j].getAttribute("imgpath")
           };

         

  	}
  };*/



if(!flag){
	return;
};
//按钮
for (var i = 0; i < floor.length; i++) {
  	if(scrollTop+heights>=arr[i]+100){
          //当前层下图片加载
         for (var j = 0; j < lis.length; j++) {
         	lis[j].style.background="#666666";
         };
           lis[i].style.background="red";

         }
  };

if(scrollTop>=1500){
      if(sflag){
         sflag=false;
animate(jump,{opacity:1},500);
 animate(search1,{top:0},500)       
      }
      
    }else{
    if(!sflag){
        sflag=true;
        animate(search1,{top:-62},500)
       animate(jump,{opacity:0},500);
      }
      
}
}
}