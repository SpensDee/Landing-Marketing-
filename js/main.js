$(function(){

    $('.menu a, .go-top').on('click', function (e) {
      e.preventDefault();
      const id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prevArrow.svg" alt="arrow_left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/nextArrow.svg" alt="arrow_right"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false
              }
            }
          ]
    });

    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

    const mixer = mixitup('.portfolio__content', {
        animation: {
            duration: 938,
            nudge: true,
            reverseOut: false,
            effects: "fade translateZ(-15px) rotateX(-90deg) rotateY(-90deg)"
        }
    });

});
