// JavaScript Document
$(function(){
  var height=$(window).width();
  $('#bd').css({
    'height':height,
  });
  $('#bd').click(function(e){
      var $i=$('<b></b>').text('🌺');
     var x=e.pageX,y=e.pageY;//获取鼠标点击的位置坐标
    $i.css({
        "z-index": 9999,
        "top": y - 20,
        "left": x,
        "position": "absolute",
        "color": 'red',
        "font-size": 14,
      });
      $("body").append($i);
      $i.animate({
        "top": y - 200,
        "opacity": 0
      }, 1500, function() {
        $i.remove();
      });//设置动画
  });
});

// 获取元素
function my$(id){
	return document.getElementById(id);
	}

function setInnerText(element,text){
	if(typeof(element.textContent)=="underfined"){
		return element.innerHTML = text;
		}
		else{
			element.textContext = text;
			}
	}

//随机设置字体样式
$(function(){
  $("div.productsAsideCategorys div.row a").each(function(){
      var v = Math.round(Math.random() *6);
      if(v == 1)
          $(this).css("color","#BC75E9");
  });
});

//菜单显示/隐藏
function showProductsAsideCategorys(cid){
  $("div.eachCategory[cid="+cid+"]").css("background-color","white");
  $("div.eachCategory[cid="+cid+"] a").css("color","#BC75E9");
  $("div.productsAsideCategorys[cid="+cid+"]").show();
}

function hideProductsAsideCategorys(cid){
  $("div.eachCategory[cid="+cid+"]").css("background-color","#BC75E9");
  $("div.eachCategory[cid="+cid+"] a").css("color","#fff");
  $("div.productsAsideCategorys[cid="+cid+"]").hide();
}

$(function(){
  $("div.eachCategory").mouseenter(function(){
      var cid = $(this).attr("cid");
      showProductsAsideCategorys(cid);
  });
  $("div.eachCategory").mouseleave(function(){
      var cid = $(this).attr("cid");
      hideProductsAsideCategorys(cid);
  });
  $("div.productsAsideCategorys").mouseenter(function(){
      var cid = $(this).attr("cid");
      showProductsAsideCategorys(cid);
  });
  $("div.productsAsideCategorys").mouseleave(function(){
      var cid = $(this).attr("cid");
      hideProductsAsideCategorys(cid);
  });
});


//搜索栏
function deleted(){
	my$("box").removeChild(my$("dv"));
}

var keywords = ["百合花","百年好合","曼珠沙华","浪漫","求婚"];

my$("keyword").onkeyup=function(){
	//每一次键盘抬起都判断一次是否有div
	
	if(my$("dv")){
		my$("box").removeChild(my$("dv"));
		}
	
	
	
	var text = this.value;
	var tempArr=[];
	for(var i=0;i<keywords.length;i++){
		if(keywords[i].indexOf(text)==0){
			tempArr.push(keywords[i]);
			}
		
		}
		console.log(tempArr);
		
	//如果文本框是空的，临时数组是空的，则不创建div
	if(tempArr.length==0||this.value.length==0){
		if(my$("dv")){
		my$("box").removeChild(my$("dv"));
		}
		return;
		}
	
	
	//创建div,加入id="box'
	var dvobj = document.createElement("div");
	my$("box").appendChild(dvobj);
	dvobj.id="dv";
	dvobj.style.width="300px";
	dvobj.style.border="1px solid #BC75E9";
	
	dvobj.style.background="white";
	dvobj.style.position="absolute";
	
		
		for(var i=0;i<tempArr.length;i++){
		var pobj = document.createElement("p");
			dvobj.appendChild(pobj);
			pobj.innerHTML=tempArr[i];
			pobj.style.cursor="pointer";
			pobj.style.margin=0;
			pobj.style.padding=0;
			pobj.style.paddingLeft="5px";
			pobj.style.paddingTop ="5px";
            pobj.style.paddingBottom="5px";
			pobj.onmouseover=function(){
				this.style.background="yellow";
				this.style.font="bold";
				};
			pobj.onmouseout=function(){
				this.style.background="";
				};
			}
	
	};
