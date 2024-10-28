function cal(num) {
  let answer = ((num * 10) / 2) % 3;
  console.log(answer);
}

function multiply1(num1, num2) {
  console.log(num1 * num2);
}

let multiply2 = (num1, num2) => {
  return num1 * num2; /* return은 함수 밖에서 사용 가능 */
};

cal(5);
multiply1(2, 3);

let result = multiply2(2, 5);
console.log(result);
