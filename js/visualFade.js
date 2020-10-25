const visualFormH = document.querySelector('.visual__characteristic__form h1');
const visualLayerH = document.querySelector(
  '.visual__characteristic__layer h1'
);
const visualSleepH = document.querySelector(
  '.visual__characteristic__sleep h1'
);
const visualFormP = document.querySelector('.visual__characteristic__form p');
const visualLayerP = document.querySelector('.visual__characteristic__layer p');
const visualSleepP = document.querySelector('.visual__characteristic__sleep p');

let options = { threshold: 0.5 };
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        visualFormH.classList.add('visualShow');
      }, 100);
      setTimeout(() => {
        visualFormP.classList.add('visualShow');
      }, 200);
      setTimeout(() => {
        visualLayerH.classList.add('visualShow');
      }, 400);
      setTimeout(() => {
        visualLayerP.classList.add('visualShow');
      }, 500);
      setTimeout(() => {
        visualSleepH.classList.add('visualShow');
      }, 700);
      setTimeout(() => {
        visualSleepP.classList.add('visualShow');
      }, 800);

      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(callback, options);
observer.observe(
  visualFormH,
  visualLayerH,
  visualSleepH,
  visualFormP,
  visualLayerP,
  visualSleepP
);
