console.log('Run');

const arr = ['home', 'project', 'course', 'content'];
const obj = {};
for (const [index, value] of arr.entries()) {
  obj[index] = value;
}
console.log(obj);

//Task
const fruits = ['Apply', 'orange', 'banana', 'mango'];
fruits.push('some254');
console.log(fruits);

const number = [5, 4, 3, 6, 8, 9, 2, 1, 7];
for (let index = 0; index < number.length; index++) {
  number[index] === 6
    ? console.log(`Number 6 is index: ${index}`)
    : console.log('Resouse not found');
  //   if (number[index] === 6) {
  //     console.log(`Number 6 is index: ${index}`);
  //   }
}

//task #2
const fruitsList = ['apple', 'orange', 'banana', 'chary'];
console.log(fruitsList.sort());

// task #3 String
// let str = 'waqas';
// str.(0, 1, 'qq');
// console.log(str);
