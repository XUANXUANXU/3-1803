$(function(){
	$(window).scroll(function() {
		var nowTop = $(document).scrollTop();
			if(nowTop>400){
			  	$('#toTop').fadeIn();
			}else{
			  	$('#toTop').fadeOut();
				}
			})
			$('#toTop').click(function() {
				$('html,body').animate({'scrollTop':0})
			})
		})


		
