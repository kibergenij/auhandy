$('.open-nav-btn').click(function(evt) {
    evt.preventDefault();
    $('.main-nav').toggleClass('main-nav--modal');
    $('#line-1').toggleClass('open-nav-btn__line--1');
    $('#line-2').toggleClass('open-nav-btn__line--2');
    $('#line-3').toggleClass('open-nav-btn__line--3');
});

$('.open-nav-btn').on('touchstart',function(evt) {
    evt.preventDefault();
    $('.main-nav').toggleClass('main-nav--modal');
    $('#line-1').toggleClass('open-nav-btn__line--1');
    $('#line-2').toggleClass('open-nav-btn__line--2');
    $('#line-3').toggleClass('open-nav-btn__line--3');
});