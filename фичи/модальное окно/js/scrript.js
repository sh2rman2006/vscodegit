let openButton = document.querySelector(`.btn-primary`);
openButton.addEventListener(`click`, function () {
  modalWind.classList.remove(`d-none`);
});

let modalWind = document.querySelector(`.modalWind`);
let modalBox = document.querySelector(`.modal__box`);
modalWind.addEventListener(`click`, function (evt) {
  let node = evt.target;
  if (
    node.classList.contains(`btn-close`) ||
    node.classList.contains(`modalWind`)
  ) {
    modalWind.classList.add(`d-none`);
  }
});
