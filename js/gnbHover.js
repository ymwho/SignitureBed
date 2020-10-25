const gnbCollection = document.querySelector('.action__collection');
const gnbProduct = document.querySelector('.action__product');
const gnbColletionHover = document.querySelector('.gnb__collection__hover');
const gnbProductHover = document.querySelector('.gnb__product__hover');

function gnbHoverAction(select) {
  select.classList.add('showGnb');
}
function gnbHoverOutAction(select) {
  setTimeout(() => {
    select.classList.remove('showGnb');
  }, 2000);
}

function collectionHandle() {
  gnbHoverAction(gnbColletionHover);
}

function collectionOutHandle() {
  gnbHoverOutAction(gnbColletionHover);
}
function productHandle() {
  gnbHoverAction(gnbProductHover);
}

function productOutHandle() {
  gnbHoverOutAction(gnbProductHover);
}

function init() {
  gnbCollection.addEventListener('mouseover', collectionHandle);
  gnbCollection.addEventListener('mouseout', collectionOutHandle);
  gnbProduct.addEventListener('mouseover', productHandle);
  gnbProduct.addEventListener('mouseout', productOutHandle);
}
init();
