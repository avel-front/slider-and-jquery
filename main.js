// Кастомизация под размер экрана
$(function () {
    $('.rev_slider').slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    })
})

// Если нужно кастомизировать, то используй панель инструментов
// infinite: true - по умолчанию бесконечная прокрутка
// arrows: false - скрыть стрелки
// dots: true - показать точки
// autoplay: true - автоматический показ слайдов
// autoplaySpeed: 1300 - показ слайдов раз в n мс
// fade: true - эффект выцветания

