const compactTopperHover = document.querySelector(
  '.compact__metress__description__hover'
);

const compactTopper = document.querySelector('.compact__metress__topper');

function hoverHandle(selected) {
  selected.classList.add('compactHidden');
}
function hoverOutHandle(selected) {
  selected.classList.remove('compactHidden');
}

function compactTopperHandle() {
  hoverHandle(compactTopperHover);
}

function compactTopperOutHandle() {
  hoverOutHandle(compactTopperHover);
}

function init() {
  compactTopper.addEventListener('mouseover', compactTopperHandle);
  compactTopper.addEventListener('mouseout', compactTopperOutHandle);
}

init();
