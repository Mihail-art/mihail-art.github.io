$('.sl').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{ 
      breakpoint: 1024,
      settings: {
          dots: false,
          arrows: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1
      } 
  }]
});

$('.project-sl').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

$('.feedback').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
});