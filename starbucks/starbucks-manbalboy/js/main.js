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
