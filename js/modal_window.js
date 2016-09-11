'use strict';
// MODAL WINDOW APPEARANCE
function Window(el){ 
	$('#bg').fadeIn(200,
	 	function(){ 
			$('#window_modal') 
				.css('display', 'block')
				.animate({opacity: 1}, 200);
			$( 'span' ).append(el);	
	});
// MODAL WINDOW OUT 	
	$('#again, #bg').click( function(){
		$('#window_modal')
			.animate({opacity: 0.5}, 200,  
				function(){ 
					$(this).css('display', 'none');
					$('#bg').fadeOut(200);
					$( 'span' ).empty();
				}
			);
	});
};