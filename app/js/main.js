$(function(){
    var mixer = mixitup('.portfolio__content');

    $('.slider-item').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    });
});