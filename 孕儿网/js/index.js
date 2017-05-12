$(function(){
	//控制手机端弹性的
    var home1=new IScroll('#home1',{
		scrollbars:true,
		click:true
	})
     var box=new IScroll('#box',{
		scrollbars:true,
		click:true
	}) 
       var three=new IScroll('#three',{
		scrollbars:true,
		click:true
	})
	$('#content').on("click","a[href]",function(e){
	e.preventDefault();    
		var temId=$(this).attr('href');
		var til=$(this).attr('title');
		$('#label').html(til);
		$(temId).css({
			'left':'0',
//		'-webkit-transition':"all 300ms"
		}).siblings().css({
			'left':'100%'
//       '-webkit-transition':"all 300ms"
		})
		//通过目标找到footer
		if(e.target.parentNode.nodeName=="FOOTER"){
			var index=$(this).index()
//			通过索引点击出动画
			$('#mark').animate({
				left:index*25+'%'
			})
		}
		
	})
}) 

