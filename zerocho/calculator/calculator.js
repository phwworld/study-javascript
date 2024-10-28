let numOne = '';
let operator = '';
let numTwo = '';
const operatorView = document.querySelector('#operator');
const resultView = document.querySelector('#result');

const clickNumber = (event) => {
  let number = event.target.textContent;
  if (operator) {
    numTwo += number;
  } else {
    numOne += number;
  }
  resultView.value += number;
}

const clickOperator = (event) => {
  let operator = event.target.textContent;
  console.log(operator);

}

document.querySelector('#num-0').addEventListener('click', clickNumber);
document.querySelector('#num-1').addEventListener('click', clickNumber);
document.querySelector('#num-2').addEventListener('click', clickNumber);
document.querySelector('#num-3').addEventListener('click', clickNumber);
document.querySelector('#num-4').addEventListener('click', clickNumber);
document.querySelector('#num-5').addEventListener('click', clickNumber);
document.querySelector('#num-6').addEventListener('click', clickNumber);
document.querySelector('#num-7').addEventListener('click', clickNumber);
document.querySelector('#num-8').addEventListener('click', clickNumber);
document.querySelector('#num-9').addEventListener('click', clickNumber);
document.querySelector('#plus').addEventListener('click', clickOperator);
document.querySelector('#minus').addEventListener('click', clickOperator);
document.querySelector('#divide').addEventListener('click', clickOperator);
document.querySelector('#multiply').addEventListener('click', clickOperator);
document.querySelector('#calculate').addEventListener('click', clickOperator);
document.querySelector('#clear').addEventListener('click', clickOperator);


