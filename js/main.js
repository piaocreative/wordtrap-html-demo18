$( document ).ready( function() {
    
    if ( $( '.logos' ).length ) {
        $( '.logos' ).slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1599,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1499,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    } 

    if ( $( '.products' ).length ) {
        $( '.products' ).slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    } 

    if ( $( '.latest').length ) {
        $( '.latest').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows:true,
            prevArrow: $('.latest-prev'),
            nextArrow: $('.latest-next'),
        });
    }

    if ( $( '.testimonials').length ) {
        $( '.testimonials').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows:true,
            prevArrow: $('.testimonial-prev'),
            nextArrow: $('.testimonial-next'),
        });
    }

    if ( $( '.teams').length ) {
        $( '.teams').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows:true
        });
    }

    if ( $( '.portfolios' ).length ) {
        $( '.portfolios' ).slick({
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: false,
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                }
            ]
        });
    }

} );