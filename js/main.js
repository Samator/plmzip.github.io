$('.mini-brands').on('click', function(){
    $('.mini-brands').removeClass('mini-brands_active')
    $(this).toggleClass('mini-brands_active');
})

$('.top-catalog__item-1').mouseover(function(){
    $('.top-catalog__item-1').addClass('cat-active')
})
$('.top-catalog__item-1').mouseout(function(){
    $('.top-catalog__item-1').removeClass('cat-active')
})



$('.top-catalog__item-2').mouseover(function(){
    $('.top-catalog__item-2').addClass('cat-active')
})
$('.top-catalog__item-2').mouseout(function(){
    $('.top-catalog__item-2').removeClass('cat-active')
})

$('.top-catalog__item-3').mouseover(function(){
    $('.top-catalog__item-3').addClass('cat-active-2')
})
$('.top-catalog__item-3').mouseout(function(){
    $('.top-catalog__item-3').removeClass('cat-active-2')
})
$('.top-catalog__item-4').mouseover(function(){
    $('.top-catalog__item-4').addClass('cat-active-3')
})
$('.top-catalog__item-4').mouseout(function(){
    $('.top-catalog__item-4').removeClass('cat-active-3')
})



$('.form-search__power-input').click(function(){
    $('.form-search__power-input__block').addClass('form-search__block-active')
})
$('.form-search__block-item').on('mouseover', function(){
    $(".form-search__power-input").text($(this).text());
})