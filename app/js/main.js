$(function(){
    $('.slider-item').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    });

    $('.upload__wrapper input, .upload__wrapper  select').styler();

    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        type:"double",
        min:0,
        max: 1000,
        from:0,
        to:600,
        grid: false,
        prefix: "$"
    });

    var mixer = mixitup('.portfolio__content');
});

