const storyCharacter = document.querySelector('#story__character');

function init() {
  storyCharacter.addEventListener('click', (e) => {
    let target = e.target;
    let linked = target.dataset.link;
    if (linked === undefined) {
      return;
    }
    console.log(linked);
  });
}

// 클릭시 밑에 description 나오게 할것.

init();
