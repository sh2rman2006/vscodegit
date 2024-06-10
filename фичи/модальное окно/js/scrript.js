let openNode = document.querySelector(`#open`);
let closeNode = document.querySelector(`#close`);
let modal = document.querySelector(`.modal`);

openNode.addEventListener(`click`, function () {
  modal.classList.remove(`d-none`);
});

closeNode.addEventListener(`click`, function () {
  modal.classList.add(`d-none`);
});
