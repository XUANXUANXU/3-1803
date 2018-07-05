$(function(){
	$(window).scroll(function() {
		var nowTop = $(document).scrollTop();
			if(nowTop>200){
			  	$('.erweima,.backtop').fadeIn();
			}else{
			  	$('.erweima,.backtop').fadeOut();
				}
			})
			$('.erweima,.backtop').click(function() {
				$('html,body').animate({'scrollTop':0})
			})
		})


		
