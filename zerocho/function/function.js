/**
 * 함수 선언 방법
 * 1. 함수 선언문 : function 함수명 () {}
 * 2. 함수 표현식 : const 함수명 = function() {}
 * 3. 화살표 함수 : const 함수명 = () => {}
 */

// 함수 return
const a = function () {
  return 10;
}
a();
console.log(a());
const b = a();
console.log(b);

/**
 * parameter, argument
 * function 함수명(parameter) {
 *  console.log(parameter);
 * }
 * 함수명('argument');
 */
const multiply = (x, y, z) => (x * y * z);
// const multiply = (x, y, z) => {
//   return x * y * z;
// }
console.log(multiply(2, 3, 4));

