const compactTopperHover = document.querySelector(
  '.compact__metress__description__hover'
);
const compactIntegralHover = document.querySelector(
  '.compact__integral__description__hover'
);
const compactFoldingHover = document.querySelector(
  '.compact__folding__description__hover'
);
const compactTopper = document.querySelector('.compact__metress__topper');
const compactIntegral = document.querySelector('.compact__integral__form');
const compactFolding = document.querySelector('.compact__folding__type');

function hoverHandle(selected) {
  selected.classList.add('compactHidden');
}
function hoverOutHandle(selected) {
  selected.classList.remove('compactHidden');
}

function compactTopperHandle() {
  hoverHandle(compactTopperHover);
}
function compactIntegralHandle() {
  hoverHandle(compactIntegralHover);
}
function compactFoldingHandle() {
  hoverHandle(compactFoldingHover);
}

function compactTopperOutHandle() {
  hoverOutHandle(compactTopperHover);
}
function compactIntegralOutHandle() {
  hoverOutHandle(compactIntegralHover);
}
function compactFoldingOutHandle() {
  hoverOutHandle(compactFoldingHover);
}
function init() {
  compactTopper.addEventListener('mouseover', compactTopperHandle);
  compactIntegral.addEventListener('mouseover', compactIntegralHandle);
  compactFolding.addEventListener('mouseover', compactFoldingHandle);
  compactTopper.addEventListener('mouseout', compactTopperOutHandle);
  compactIntegral.addEventListener('mouseout', compactIntegralOutHandle);
  compactFolding.addEventListener('mouseout', compactFoldingOutHandle);
}

init();
