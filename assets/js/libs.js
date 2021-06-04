$(document).ready(function(){

    // toggle menu
    $('.nav-toggle').click(function(){
        $('.nav-toggle').toggleClass('active')
        $('.menu-nav').toggleClass('active')
    });

    // change nav background color when scroll
    $(window).scroll(function() {
        $('.head-navigation').toggleClass('scrolled', $(this).scrollTop() > 320 );
    });

 
 	// var widNew = $(window).width();
 	// if (widNew <= 475) 
 	// {
 	// 	$('.textBtn').addClass('dis-none');
 	// }
 	// else
 	// {
 	// 	var checkClass = $('.textBtn').hasClass('dis-none');
 	// 	if (checkClass == true) {
 	// 		$('.textBtn').removeClass('dis-none');
 	// 	}
 		
 	// }
    
    

});
