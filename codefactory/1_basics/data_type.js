/**
 * Data Type
 * 
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. undefined
 * 5. null
 * 6. Symbol
 * 7. Object
 */

// Number
const age = 30;
console.log(typeof age);

// String
const String1 = "'테스트' 입니다.";
const String2 = '"테스트" 입니다.';
const String3 = '\'테스트\' 입니다.';
const String4 = `"테스트" 입니다.`;
console.log(String1);
console.log(String2);
console.log(String3);
console.log(String4);


// Symbo - 유일무이한 값을 생성할때 사용

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);
