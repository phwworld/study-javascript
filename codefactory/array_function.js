let array = ["a", "b", "c"];
console.log(array);

// push() 배열 바지막 추가
array.push("d");
console.log(array);

// pop() 배열 마지막 삭제
array.pop();
console.log(array);

// shift() 배열 처음 삭제
array.shift();
console.log(array);

// unshift() 배열 처음 추가
array.unshift("a");
console.log(array);

// splice(a, b)
array.splice(0, 2);
console.log(array);

console.log("--------------------");

let array2 = ["a", "b", "c"];

// concat()
console.log(array2.concat("d"));
console.log(array2);

// slice()
console.log(array2.slice(0, 2));
console.log(array2);

let array2_2 = [...array2];
console.log(array2_2);

// join() string으로 변환
console.log(array2.join());
