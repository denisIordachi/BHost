$(function(){


    $(window).scroll(function(event) {
        var s = 0-$(this).scrollTop()/2;
        $('.top__bg').css('transform', 'translate3d(0, '+s+'px, 0)');
        $('.domain__bg').css('transform', 'translate3d(0, ' + s + 'px, 0)');
    });
    $(window).scroll(function (event) {
        var h = $(window).height();
        var windscroll = $(window).scrollTop();
        if (windscroll >= h) {
            $('.top__bg').addClass('not-active');
        } else {
            $('.top__bg').removeClass('not-active');
        }
    });

    $('.top__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    });

    $('.menu__btn').on('click', function() {
        $('.menu-bg').toggleClass('active');
        $('.menu__list').toggleClass('active');
        $('.body').toggleClass('lock');
    });




    $.each($('.domain__search-checkbox'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.domain__search-checkbox', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }
        $(this).toggleClass('active');

        return false;
    });




    $('.package__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });




    $('.choose__tabs-item').on('click', function () {
        var tab = $(this).data('tab');
        $('.choose__content-item').removeClass('active');
        $('.choose__tabs-item').removeClass('active');
        if (tab == 1) {
            $('.t_1').addClass('active');
        }
        else if (tab == 2) {
            $('.t_2').addClass('active');
        }
        else if (tab == 3) {
            $('.t_3').addClass('active');
        } 
        else if (tab == 4) {
            $('.t_4').addClass('active');
        } 
        else if (tab == 5) {
            $('.t_5').addClass('active');
        } 
        else if (tab == 6) {
            $('.t_6').addClass('active');
        } 
    });




    $('.people__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
        adaptiveHeight: true
    });




    $('.questions__tabs-item').on('click', function () {
        var tab = $(this).data('tab');
        $('.questions__content-section').removeClass('active');
        $('.questions__tabs-item').removeClass('active');
        if (tab == 1) {
            $('.q_1').addClass('active');
        }
        else if (tab == 2) {
            $('.q_2').addClass('active');
        }
        else if (tab == 3) {
            $('.q_3').addClass('active');
        }
        else if (tab == 4) {
            $('.q_4').addClass('active');
        }
        else if (tab == 5) {
            $('.q_5').addClass('active');
        }
        else if (tab == 6) {
            $('.q_6').addClass('active');
        } 
    });

    $('.questions__section-title').on('click', function () {
        $('.questions__section-text').removeClass('active');
        $('.questions__section-btn').removeClass('active');
        $(this).parent().children('.questions__section-text').addClass('active');
        if ($('.questions__section-text').hasClass('active')) {
            $(this).parent().children('.questions__section-btn').addClass('active');
        }
    });




    $('.sponsors__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1085,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });


})