// $(function() {
//     $('li').hide();
// });
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('li').show();
        $('nav').addClass('black');
    } else {
        // $('li').hide();
        $('nav').removeClass('black');
    }
})