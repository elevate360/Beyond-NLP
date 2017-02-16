jQuery(document).ready(function($){
	
	//menu toggling
	$('.menu-toggle').on('click', function(){
		
		$('#mobile-menu-wrap').toggleClass('active');

		//close any sub-menus that might be open
		setTimeout(function(){
			$('.menu.mobile-menu').find('.sub-menu').hide();	
		}, 500);
		
	});

	//clicking mobile menu background
	$('#mobile-menu-wrap .mobile-background').on('click', function(){
		$('#mobile-menu-wrap').toggleClass('active');
	});
	
	//When scrolling past top, adjust menu
	$(window).on('scroll', function(){
		
		var header = $('#masthead');
		var header_height = header.outerHeight();
		var header_offset = header.offset().top;
		
		if(header_offset >= header_height){
			header.addClass('active');
		}else{
			header.removeClass('active')
		}
		
		//console.log(header_offset);
	});

	//Clicking on the sub-menu to toggle menus
	$('.submenu-toggle').on('click', function(e){
		
		e.preventDefault();	
		$(this).toggleClass('active');
		var submenu = $(this).closest('li').find('.sub-menu');
		
		submenu.slideToggle('fast');
	});
	
	

}); 