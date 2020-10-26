const frameBannerTitle = document.querySelector('.frame__banner__title');
const frameFamousSaying = document.querySelector(
  '.frame__famous__saying__title'
);

const frameOptionsBanner = { threshold: 1 };
const frameOptionsFamous = { threshold: 1 };

const frameCallbackBanner = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      frameBannerTitle.classList.add('frameShow');
      observer.unobserve(entry.target);
    }
  });
};
const frameCallbackFamous = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      frameFamousSaying.classList.add('frameShow');
      observer.unobserve(entry.target);
    }
  });
};

const observeFrameBanner = new IntersectionObserver(
  frameCallbackBanner,
  frameOptionsBanner
);
const observeFrameFamous = new IntersectionObserver(
  frameCallbackFamous,
  frameOptionsFamous
);

observeFrameBanner.observe(frameBannerTitle);
observeFrameFamous.observe(frameFamousSaying);
