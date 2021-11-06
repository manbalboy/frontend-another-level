const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', (e) => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', (e) => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener('blur', (e) => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    //배지 숨기기
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    //배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

const fadEls = document.querySelectorAll('.visual .fade-in');
fadEls.forEach((item, idx) => {
  gsap.to(item, 1, {
    delay: (idx + 1) * .7,
    opacity: 1
  })
})

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이여백
  centeredSlides: true, // 1번슬라이드가 가운데
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 요소
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', ()=>{
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})