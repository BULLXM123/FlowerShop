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
$(function(){
	
	});