// JavaScript Document
$(function(){
  var height=$(window).width();
  $('#bd').css({
    'height':height,
  });
  $('#bd').click(function(e){
      var $i=$('<b></b>').text('🌺');
     var x=e.pageX,y=e.pageY;//获取鼠标点击的位置坐�?
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