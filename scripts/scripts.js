// one 
// two
// three
// four
// five
// six
// seven
// eight
// nine
// zero
// plus
// minus
// ymn
// del
// ravno
// clean

let resultNode = document.querySelector(`#result`);

let one  = document.querySelector(`#one`);
let two = document.querySelector(`#two`);
let three = document.querySelector(`#three`);
let four = document.querySelector(`#four`);
let five = document.querySelector(`#five`);
let six = document.querySelector(`#six`);
let seven = document.querySelector(`#seven`);
let eight = document.querySelector(`#eight`);
let nine = document.querySelector(`#nine`);
let zero = document.querySelector(`#zero`);
let plus = document.querySelector(`#plus`);
let minus = document.querySelector(`#minus`);
let ymn = document.querySelector(`#ymn`);
let del = document.querySelector(`#del`);
let ravno = document.querySelector(`#ravno`);
let clean = document.querySelector(`#clean`);
// buttons

one.addEventListener(`click`,function(){resultNode.innerHTML += `1`;});
two.addEventListener(`click`,function(){resultNode.innerHTML += `2`;});
three.addEventListener(`click`,function(){resultNode.innerHTML += `3`;});
four.addEventListener(`click`,function(){resultNode.innerHTML += `4`;});
five.addEventListener(`click`,function(){resultNode.innerHTML += `5`;});
six.addEventListener(`click`,function(){resultNode.innerHTML += `6`;});
seven.addEventListener(`click`,function(){resultNode.innerHTML += `7`;});
eight.addEventListener(`click`,function(){resultNode.innerHTML += `8`;});
nine.addEventListener(`click`,function(){resultNode.innerHTML += `9`;});
zero.addEventListener(`click`,function(){resultNode.innerHTML += `0`;});
// operations
plus.addEventListener(`click`,function(){
    resultNode.innerHTML += `+`;
});
minus.addEventListener(`click`,function(){
    resultNode.innerHTML += `-`;
});
ymn.addEventListener(`click`,function(){
    resultNode.innerHTML += `*`;
});
del.addEventListener(`click`,function(){
    resultNode.innerHTML += `/`;
});
ravno.addEventListener(`click`,function(){
    resultNode.innerHTML = 
    Number(resultNode.innerHTML.slice(0,resultNode.innerHTML.indexOf(`+`)))
    + Number(resultNode.innerHTML.slice(resultNode.innerHTML.indexOf(`+`),resultNode.innerHTML.length));
});
clean.addEventListener(`click`,function(){
    resultNode.innerHTML = ``;
});





