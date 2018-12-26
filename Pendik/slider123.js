var myswiper123 = new Swiper('#slider123', {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.sp',
        clickable: true,
      },
      navigation: {
        nextEl: '.sbn',
        prevEl: '.sbp',
      },
    });