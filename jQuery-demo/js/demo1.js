// $(document).ready(function() {
//          /**
//           * 通过jQuery语法获取id为imooc2的元素获得一个jQuery对象
//           * 调用该对象的html()方法进行更改内容
//           * 调用该对象的css()方法进行更改颜色样式
//           */   
//          var $p = $('#imooc2');
//          $p.html('P2：您好！通过慕课网学习jQuery才是最佳的途径').css('color','red');
//      });
//$(document).ready(function(){
//	var $li=$("ul li:eq(1)");
//	var li_txt=$li.text();
//	alert(li_txt);
//	var $para=$("p");
//	var p_txt=$para.attr("title");
//	alert(p_txt);
//	
//})
$(function(){
	$("#panel").css("opacity","0.5");
	$("#panel").click(function(){
		$(this).animate({left:"400px",height:"200px",opacity:"1"},3000)
		       .animate({top:"200px",width:"200px"},3000, function(){
		       	$(this).css("border","5px solid blue");
		       })
		       
	});
});
