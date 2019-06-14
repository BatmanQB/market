$(function(){
    $('.slider-item').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    });

    $('.upload__wrapper input, .upload__wrapper  select').styler();

    var mixer = mixitup('.portfolio__content');
});

