let resultNode = document.querySelector(`#results`);

let num = [];
for (let i = 0; i < 10; i++) {
  num.push(document.querySelector(`#num${i}`));
}
for (let i = 1; i < num.length; i++) {
  num[i].addEventListener(`click`, function () {
    resultNode.innerHTML += `${i}`;
  });
}
num[0].addEventListener(`click`, function () {
  resultNode.innerHTML += `0`;
});

let ac = document.querySelector(`#AC`);
let del = document.querySelector(`#DEL`);
let slash = document.querySelector(`#slash`);
let ymn = document.querySelector(`#ymn`);
let razn = document.querySelector(`#razn`);
let sm = document.querySelector(`#sm`);
let ravno = document.querySelector(`#ravno`);
let float = document.querySelector(`#float`);

ac.addEventListener(`click`, function () {
  resultNode.innerHTML = ``;
});
del.addEventListener(`click`, function () {
  resultNode.innerHTML = resultNode.innerHTML.slice(
    0,
    resultNode.innerHTML.length - 1
  );
});

slash.addEventListener(`click`, function () {
  resultNode.innerHTML += `/`;
});
ymn.addEventListener(`click`, function () {
  resultNode.innerHTML += `*`;
});
razn.addEventListener(`click`, function () {
  resultNode.innerHTML += `-`;
});
sm.addEventListener(`click`, function () {
  resultNode.innerHTML += `+`;
});
ravno.addEventListener(`click`, function () {
  //   if (`/0` in resultNode.innerHTML) {
  //     resultNode.innerHTML = `на ноль делить нельзя!!!`;
  //   } else {
  resultNode.innerHTML = new Function(`return ${resultNode.innerHTML}`)();
  //   }А
});
