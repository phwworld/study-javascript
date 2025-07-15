/**
 * 변수(Variable) 선언하기
 * 1. vat : 사용을 지양함
 * 2. let : 선언 후 변경이 가능
 * 3. const : 선언 후 변경이 불가능
 */

let name = 'phwworld';
let age = 40;
const name2 = 'expertpub';
console.log(name, age, name2);
name = 'legend';
age = 30;
// name2 = 'expertpub2';

console.log(name, age, name2);

/**
 * 선언, 할당
 * 선언과 할당을 동시에 하는게 좋은 방법
 */

let test; // 선언
console.log(test);
test = 'test'; // 할당
console.log(test);
