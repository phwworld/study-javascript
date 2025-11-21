/**
 * Loops
 * 
 * 1. for
 * 2. while
 */

// for loops
for(let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('-----');

for (let i = 10; i > 0; i--) {
  console.log(i);
  
}

console.log('-----');

for (let i = 0; i < 3; i++) {
  for(let j = 3; j > 0; j--) {
    console.log(i, j);
  }  
}


console.log('-----');

/**
 * for...in
 * Object에 사용 - key값 리턴
 * Arrat에 사용가능 - index값 리턴
 */

const user = {
  name: 'legend',
  age: 40
}

const users = ['mem1', 'mem2', 'mem3', 'mem4'];

for (const key in user) {
  console.log(key, user[key]);
}

for (const key in users) {
  console.log(key, users[key]);
}

console.log('-----');


/**
 * for...of
 * Array에서 사용
 */

for (const element of users) {
  console.log(element);  
}