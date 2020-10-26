const signitureActive = document.querySelector('.signiture__active__right');
const signitureGtwo = document.querySelector('.signiture__gtwo__left');
const signitureBasic = document.querySelector('.signiture__basic__right');

const aboutOpstionsActive = { threshold: 1 };
const aboutOpstionsGtwo = { threshold: 1 };
const aboutOpstionsBasic = { threshold: 1 };
aboutOpstionsBasic;
const aboutCallbackActive = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      signitureActive.classList.add('signitureShow');
      observer.unobserve(entry.target);
    }
  });
};
const aboutCallbackGtwo = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      signitureGtwo.classList.add('signitureShow');
      observer.unobserve(entry.target);
    }
  });
};
const aboutCallbackBasic = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      signitureBasic.classList.add('signitureShow');
      observer.unobserve(entry.target);
    }
  });
};

const aboutObserverActive = new IntersectionObserver(
  aboutCallbackActive,
  aboutOpstionsActive
);
const aboutObserverGtwo = new IntersectionObserver(
  aboutCallbackGtwo,
  aboutOpstionsGtwo
);
const aboutObserverBasic = new IntersectionObserver(
  aboutCallbackBasic,
  aboutOpstionsBasic
);
aboutObserverActive.observe(signitureActive);
aboutObserverGtwo.observe(signitureGtwo);
aboutObserverBasic.observe(signitureBasic);
