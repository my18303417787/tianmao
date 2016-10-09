//透明度和层级的轮播
$(function(){

//顶导航
var list=$(".mytaobao");
var ltem=$(".mytaobaonext");
// 循环分别给每一添加个元素onmouseover onmouseout


for(var i=0;i<list.length;i++){
	// 先执行for后执行事件
	list[i].index=i;
	 list[i].onmouseover=function(){
  list[this.index].style.background="#fff";
   ltem[this.index].style.display="block";
},	
	 list[i].onmouseout=function(){
   ltem[this.index].style.display="none";
	  list[this.index].style.background="";	

		}
} 


var lis=$("li",$(".fenleir2")[0]);
var mao=$(".mao");


// 循环分别给每一添加个元素onmouseover onmouseout
for(var i=0;i<lis.length;i++){
	// 先执行for后执行事件
	 lis[i].index=i;
	 lis[i].onmouseover=function(){
   

   animate(mao[this.index],{top:-12},200);
}
	 lis[i].onmouseout=function(){
  animate(mao[this.index],{top:0},500);
}		
}


//banner左侧
var leixing=$(".leixing");
var leixingnext=$(".leixingnext");
// 循环分别给每一添加个元素onmouseover onmouseout


for(var i=0;i<leixing.length;i++){
	// 先执行for后执行事件
	leixing[i].index=i;
	 leixing[i].onmouseover=function(){
   leixingnext[this.index].style.display="block";
},	
	 leixing[i].onmouseout=function(){
   leixingnext[this.index].style.display="none";
		}
} 

//热门品牌
var centerz=$(".centerz");
var dis=$(".dis");
// 循环分别给每一添加个元素onmouseover onmouseout


for(var i=0;i<centerz.length;i++){
	// 先执行for后执行事件
	centerz[i].index=i;
	 centerz[i].onmouseover=function(){
   dis[this.index].style.display="block";
},	
	 centerz[i].onmouseout=function(){
   dis[this.index].style.display="none";
		}
} 
//图片左移
var con=$(".kids2atu");
		
		for(var j=0;j<con.length;j++){
			con[j].index=j;
			con[j].onmouseover=function(){
				animate(con[this.index],{right:20},100)
			    
			}
			con[j].onmouseout=function(){
				animate(con[this.index],{right:0},200)
			}
		}

var con1=$(".kids3atu");
		
		for(var j=0;j<con1.length;j++){
			con1[j].index=j;
			con1[j].onmouseover=function(){
				animate(con1[this.index],{right:20},200)
			}
			con1[j].onmouseout=function(){
				animate(con1[this.index],{right:0},300)
			}
		}

//banner轮播

var win=$(".banner_middle")[0];  //窗口
 var as=$(".tupian",win);          // img
var lis=$("li",$(".point")[0]); 
var butl=$(".butl")[0];
var butr=$(".butr")[0];
var num=0;      //实时监控当前窗口显示图片的下标
var flag=true;

as[0].style.zIndex=1;// 初始化状态，让第一张图层级调高，剩下的降低

//自动轮播
var t=setInterval(moveR,2000)


  win.onmouseover=function(){
	clearInterval(t)
}
win.onmouseout=function(){

	t=setInterval(moveR,2000);
}


//点点
for (var i= 0; i<lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function(){
    if(num==this.index){
   	return
   }
	
	for(var j=0;j<as.length;j++){
	
	animate(as[j],{opacity:0});
	//as[j].style.zIndex=5;
    lis[j].className="";

}
 	lis[this.index].className="hot";
		animate(as[this.index],{opacity:1})
		//as[this.index].style.zIndex=10;
		num=this.index;
	}
};



/*butr.onclick=function(){
	if(flag){
     flag=false
	
	moveR();
}  
}
butl.onclick=function(){
	if(flag){
     flag=false
	moveL();
}    
}*/
function moveR(){

num++;
 
  if(num==as.length){
  	num=0;
  }
  // 当前图片层级调高
// 所有图片的层级降低

for(var i=0;i<as.length;i++){
	animate(as[i],{opacity:0})
	//as[i].style.zIndex=5;
    lis[i].className="";

}

animate(as[num],{opacity:1},function(){
		flag=true;
	})
lis[num].className="hot";

as[num].style.zIndex=10
}

       /*function moveL(){

num--;
 
  if(num<0){
  	 num=as.length-1;
  }
  for(var i=0;i<as.length;i++){
	animate(as[i],{opacity:0})
	//as[i].style.zIndex=5;
    lis[i].className="";

}
lis[num].className="hot";
animate(as[num],{opacity:1},function(){
		flag=true;
	})
//as[num].style.zIndex=10

}


  */













// 方法2
/*window.onload=function(){
// 先获取元素
var list=$(".list");
var ltem=$(".ltem");
// 循环分别给每一添加个元素onmouseover onmouseout
for(let i=0;i<list.length;i++){
	// 先执行for后执行事件
	list[i].index=i;
	 list[i].onmouseover=function(){
   ltem[i].style.display="block";
},	
	 list[i].onmouseout=function(){
      ltem[i].style.display="none";
	}	
 }

}*/

// 先获取元素


// 方法3

// // 先获取元素
// var list=$(".list");
// var ltem=$(".ltem");
// // 循环分别给每一添加个元素onmouseover onmouseout
// for(var i=0;i<list.length;i++){
// 	// 先执行for后执行事件
// 	(function(n){
// 	 list[n].onmouseover=function(){
//    ltem[n].style.display="block";
// },	
// 	 list[n].onmouseout=function(){
//       ltem[n].style.display="none";
// 	}	
//  })(i);
// }

});


















