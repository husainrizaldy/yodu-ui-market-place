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
});
