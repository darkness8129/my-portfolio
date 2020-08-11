$(document).ready(function(){
    $('.navbar-toggler').on('click', function(){
        $( 'header' ).toggleClass( 'header_active' );   
        $('.toggler-icon').toggleClass('toggler-icon_active');   
    });
});