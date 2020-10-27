const storyCharacter = document.querySelector('#story__character');

function storySelectHandle(e) {
  const target = e.target;
  const link = target.dataset.link;
  const links = document.querySelector(link);
  if (links === null) {
    return;
  }
  const characterShow = document.querySelector('.characterShow');

  if (characterShow) {
    characterShow.classList.remove('characterShow');
    links.classList.add('characterShow');
  } else {
    links.classList.add('characterShow');
  }
}

function init() {
  storyCharacter.addEventListener('click', storySelectHandle);
}

init();
