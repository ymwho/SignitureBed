const compactIntegralHover = document.querySelector(
  '.compact__integral__description__hover'
);
const compactFoldingHover = document.querySelector(
  '.compact__folding__description__hover'
);
const compactIntegral = document.querySelector('.compact__integral__form');
const compactFolding = document.querySelector('.compact__folding__type');

function hoverHandle(selected) {
  selected.classList.add('compactHidden');
}
function hoverOutHandle(selected) {
  selected.classList.remove('compactHidden');
}

function compactIntegralHandle() {
  hoverHandle(compactIntegralHover);
}
function compactFoldingHandle() {
  hoverHandle(compactFoldingHover);
}

function compactIntegralOutHandle() {
  hoverOutHandle(compactIntegralHover);
}
function compactFoldingOutHandle() {
  hoverOutHandle(compactFoldingHover);
}
function init() {
  compactIntegral.addEventListener('mouseover', compactIntegralHandle);
  compactFolding.addEventListener('mouseover', compactFoldingHandle);
  compactIntegral.addEventListener('mouseout', compactIntegralOutHandle);
  compactFolding.addEventListener('mouseout', compactFoldingOutHandle);
}

init();
