$(document).ready(function () {
    $slider = $('.slider')


    $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        $currentSlider = slick.$slider
        $totalVisibleSlides = slick.options.slidesToShow
        $currentSlideIndex = slick.currentSlide
        $currentSlideElement = $(slick.$slides[$currentSlideIndex])

        $allSlidesArray = [...$(slick.$slideTrack).get(0).children]
        $currentActiveSlideIndex = $allSlidesArray.indexOf($currentSlideElement.get(0))
        $negativeDirectionSlidesArray = $allSlidesArray.slice(0, $currentActiveSlideIndex)
        $positivetiveDirectionSlidesArray = $allSlidesArray.slice($currentActiveSlideIndex + 1)

        $currentSlider.css('--_total', $allSlidesArray.length)
        $currentSlideElement.css({
            '--_index': 0,
            '--_direction': 1
        })

        $positivetiveDirectionSlidesArray.map((item, index)=>{
            $(item).css({
                '--_index': index + 1,
                '--_direction': 1
            })
        })

        $negativeDirectionSlidesArray.reverse().map((item, index)=>{
            $(item).css({
                '--_index': index + 1,
                '--_direction': -1
            })
        })

        let beforeFirstActiveSlideIndex = $allSlidesArray.indexOf($allSlidesArray.find(item=> $(item).hasClass('slick-active'))) - 1
        let afterLastActiveSlideIndex = $allSlidesArray.indexOf($allSlidesArray.findLast(item=> $(item).hasClass('slick-active'))) + 1

        $allSlidesArray.map((item, index)=>{
            if(!$(item).hasClass('slick-active') && index !== beforeFirstActiveSlideIndex && index !== afterLastActiveSlideIndex){
                $(item).fadeOut()
                // $(item).css('z-index', '-1')
            }else{
                $(item).fadeIn()
                // $(item).css('z-index', '1')
            }
        })

    })

    $slider.slick({
        infinite: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></button>',
        appendArrows: $('.slider__navigation'),
        appendDots: $('.slider__navigation'),
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        centerPadding: '0px',
        speed: 100,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 668,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
    })
})