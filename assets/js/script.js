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

        console.log($allSlidesArray.findLast(item=> $(item).hasClass('slick-active')));

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
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
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