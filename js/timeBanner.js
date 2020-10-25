const firstTimeBanner = document.querySelector(
  '.time__banner__convert:first-child'
);

function timeBannerConvert() {
  const timeBannerShowing = 'timeBannerShow';
  const currentTimeBanner = document.querySelector(`.${timeBannerShowing}`);
  if (currentTimeBanner) {
    currentTimeBanner.classList.remove(timeBannerShowing);
    const nextTimeBanner = currentTimeBanner.nextElementSibling;
    if (nextTimeBanner) {
      nextTimeBanner.classList.add(timeBannerShowing);
    } else {
      firstTimeBanner.classList.add(timeBannerShowing);
    }
  } else {
    firstTimeBanner.classList.add(timeBannerShowing);
  }
}

function init() {
  timeBannerConvert();
  setInterval(() => {
    timeBannerConvert();
  }, 4000);
}
init();
