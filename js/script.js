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


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

$('.services__arrow--next').click(function (evt) {
    evt.preventDefault();
    let randomOrder1 = getRandomInt(2, 49);
    let randomOrder2 = getRandomInt(2, 49);
    let randomOrder3 = getRandomInt(2, 49);
    let randomOrder4 = getRandomInt(2, 49);
    $('.services__cards-link--1').css('order',randomOrder1);
    $('.services__cards-link--2').css('order',randomOrder2);
    $('.services__cards-link--3').css('order',randomOrder3);
    $('.services__cards-link--4').css('order',randomOrder4);
});

$('.services__arrow--back').click(function (evt) {
    evt.preventDefault();
    let randomOrder1 = getRandomInt(2, 49);
    let randomOrder2 = getRandomInt(2, 49);
    let randomOrder3 = getRandomInt(2, 49);
    let randomOrder4 = getRandomInt(2, 49);
    $('.services__cards-link--1').css('order',randomOrder1);
    $('.services__cards-link--2').css('order',randomOrder2);
    $('.services__cards-link--3').css('order',randomOrder3);
    $('.services__cards-link--4').css('order',randomOrder4);
});