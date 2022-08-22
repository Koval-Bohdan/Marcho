$(function () {

  $('.blog-page__slider').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height="NaN" width="9"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height="NaN" width="9"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></button>',
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $('.star').rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="18" height="14" ><g transform="matrix(0.02734375 0 0 0.02734375 1.1249999 -0)"><path d="M381.2 150.3L524.9 171.5C 536.8 173.2 546.8 181.6 550.6 193.1C 554.4 204.7 551.3 217.3 542.7 225.9L542.7 225.9L438.5 328.1L463.1 474.7C 465.1 486.7 460.2 498.9 450.2 506C 440.3 513.1 427.2 514 416.5 508.3L416.5 508.3L288.1 439.8L159.8 508.3C 149 514 135.9 513.1 126 506C 116.1 498.9 111.1 486.7 113.2 474.7L113.2 474.7L137.8 328.1L33.58 225.9C 24.97 217.3 21.91 204.7 25.69 193.1C 29.46 181.6 39.43 173.2 51.42 171.5L51.42 171.5L195 150.3L259.4 17.97C 264.7 6.954 275.9 -0.0391 288.1 -0.0391C 300.4 -0.0391 311.6 6.954 316.9 17.97L316.9 17.97L381.2 150.3z" stroke="none" fill-rule="nonzero"/></g></svg>',

  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      // Called every time handle position is changed

      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.select-style, .product-one__item-num').styler();
});


function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__clock').attr('data-time');
initializeClock('promo__clock', deadline);