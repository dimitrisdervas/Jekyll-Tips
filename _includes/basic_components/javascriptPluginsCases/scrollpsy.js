$('.scrollspy').scrollSpy();
var length = $('.sidebar').height() - $('.scrollpsy-latest').height() + $('.sidebar').offset().top;

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        var height = $('.scrollpsy-latest').height() + 'px';

        if (scroll < $('.sidebar').offset().top) {

            $('.scrollpsy-latest').css({
                'position': 'relative'
            });

        } else if (scroll > length) {

            $('.scrollpsy-latest').css({
                'position': 'fixed',
                'top': '0'
            });

        } else {

            $('.scrollpsy-latest').css({
                'position': 'relative'
            });

        }
    });
