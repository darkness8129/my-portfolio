$(document).ready(function(){
    $('.navbar-toggler').on('click', function(){
        
        //header fullscreen
        $( '.header' ).toggleClass( 'header_active' ); 

        //for burger animation 
        $('.toggler-icon').toggleClass('toggler-icon_active');   

        //for header title when header active
        if(window.innerWidth <= 575 && $('.header').hasClass('header_active')){
            $('.header-title-mobile').css('display', 'none');
        }else if(window.innerWidth <= 575){
            $('.header-title-mobile').css('display', 'block');
        }
        
    });
    
    //for header title on diff width
    $(window).on('resize', function(){
        if(window.innerWidth > 575){
            $('.header-title-mobile').css('display', 'none');
        }else if(!$('.header').hasClass('header_active')){
            $('.header-title-mobile').css('display', 'block');
        }
    });
});