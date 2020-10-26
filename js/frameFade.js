const frameBannerTitle = document.querySelector('.frame__banner__title');
const frameFamousSaying = document.querySelector(
  '.frame__famous__saying__title'
);

const frameOptions = { threshold: 1 };

const frameCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      frameBannerTitle.classList.add('frameShow');
      setInterval(() => {
        frameFamousSaying.classList.add('frameShow');
      }, 600);
      observer.unobserve(entry.target);
    }
  });
};

const observeFrame = new IntersectionObserver(frameCallback, frameOptions);
observeFrame.observe(frameBannerTitle, frameFamousSaying);

// console.log(frameBannerTitle);
// console.log(frameFamousSaying);
