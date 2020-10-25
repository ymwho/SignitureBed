const gnbScroll = document.querySelector('#gnb');
const gnbLogo = document.querySelector('.gnb__logo a');
const gnbMenu = document.querySelectorAll('.gnb__munu__list a');
const gnbIcon = document.querySelectorAll('.link__icon i');

function gnbScrollConvert() {
  if (window.scrollY > 755) {
    gnbScroll.classList.add('scrollGnb');
    gnbLogo.style.color = 'black';
    for (let value of gnbMenu) {
      value.style.color = 'gray';
    }
    for (let value of gnbIcon) {
      value.style.color = 'gray';
    }
  } else {
    gnbScroll.classList.remove('scrollGnb');
    gnbLogo.style.color = 'white';
    for (let value of gnbMenu) {
      value.style.color = 'rgb(207, 206, 206)';
    }
    for (let value of gnbIcon) {
      value.style.color = 'rgb(207, 206, 206)';
    }
  }
}

function init() {
  document.addEventListener('scroll', gnbScrollConvert);
}
init();
