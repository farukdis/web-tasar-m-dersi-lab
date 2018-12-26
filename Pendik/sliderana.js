var swiper = new Swiper('#sliderana', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.spana',
        clickable: true,
      },
      navigation: {
        nextEl: '.spananext',
        prevEl: '.spanaprev',
      },
    });


var swiper4 = new Swiper('#slider4', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.spana',
    clickable: true,
  },
});

var myswiper = new Swiper('#slider2', {
      slidesPerView: 6,
      spaceBetween: 30,
      slidesPerGroup: 6,
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



var mySwiper3 = new Swiper('#slider3', {
  spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.sbn3',
    prevEl: '.sbp3',
  },
});


function dikmenu(evt, cityName) {
  var i, dikcontent, diklinks;
  dikcontent = document.getElementsByClassName("dikcontent");
  for (i = 0; i < dikcontent.length; i++) {
      dikcontent[i].style.display = "none";
  }
  diklinks = document.getElementsByClassName("diklinks");
  for (i = 0; i < diklinks.length; i++) {
      diklinks[i].className = diklinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultopen" and click on it
document.getElementById("defaultopen").click();
