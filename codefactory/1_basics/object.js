/**
 * Object
 * key: value
 * 박복문은 for...in 사용
 */

const colors = {
  red: '빨간색',
  ornage: '주황색',
  yellow: '노란색',
};

console.log(colors);
console.log('--------------------');
console.log(colors.red);
console.log('--------------------');
for(let key in colors) {
  // console.log(key, colors[key]);
  console.log(`${key} : ${colors[key]}`);
};
console.log('--------------------');

console.log(Object.keys(colors));
console.log('--------------------');
console.log(Object.values(colors));
console.log('--------------------');
console.log(Object.entries(colors));