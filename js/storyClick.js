const Lee = document.querySelector('.lee');
const Park = document.querySelector('.park');
const Jo = document.querySelector('.jo');
const Kang = document.querySelector('.kang');
const leeContainer = document.querySelector('.lee__container');
const parkContainer = document.querySelector('.park__container');
const joContainer = document.querySelector('.jo__container');
const kangContainer = document.querySelector('.kang__container');

function containerHandle(select) {
  const containerShow = document.querySelector('.containerHidden');
  if (select === null) {
    return;
  }

  if (containerShow) {
    containerShow.classList.remove('containerHidden');
    select.classList.add('containerHidden');
  }
}
function LeeHadnle() {
  containerHandle(leeContainer);
}
function ParkHadnle() {
  containerHandle(parkContainer);
}
function JoHadnle() {
  containerHandle(joContainer);
}
function KangHadnle() {
  containerHandle(kangContainer);
}

function init() {
  Lee.addEventListener('click', LeeHadnle);
  Park.addEventListener('click', ParkHadnle);
  Jo.addEventListener('click', JoHadnle);
  Kang.addEventListener('click', KangHadnle);
}
init();
