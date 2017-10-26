$(function(){//等待DOM加载完毕
	var $category=$('ul li:gt(5):not(:last)');//获得索引值大于5的品牌集合对象（出最后一条）
	$category.hide();//隐藏上面获取到的jQuery对象
	var $toggleBtn=$('div.showmore>a');//获取“显示全部品牌”按钮
	$toggleBtn.click(function(){//给按钮添加onclick时间
		if($category.is(":isvisible")){//如果元素显示
			$category.hide();//隐藏category
			$(this).find('span')
			.text("显示全部品牌");
		}
	})
})
