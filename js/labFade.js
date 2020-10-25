const labSleepStudio = document.querySelector('.lab__sleep__studio');

let optionsLabFade = { threshold: 0.5 };

let callbackLabFade = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      labSleepStudio.classList.add('labShow');
      observer.unobserve(entry.target);
    }
  });
};

let observerLabFade = new IntersectionObserver(callbackLabFade, optionsLabFade);
observerLabFade.observe(labSleepStudio);
