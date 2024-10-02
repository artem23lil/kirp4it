$(document).ready(function(){
    $('.slider-track').slick({
        slidesToShow: 3,
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
        infinite: true, 
        dots: true, 
        pauseOnHover: true, 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, 
                }
            }
        ]
    });
});
