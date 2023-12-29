## Day5 Task

## Introduction

Hello! I'm Yahini, a passionate learner currently studying the MERN (MongoDB, Express.js, React.js, Node.js) stack. 
- This repository serves as a documentation of my personal information and skills in JSON format.
  - I used to iterate through my data using for loop,for...in,for...of,forEach loop.
   - Lets learn from the examples.

## 1. for Loop

- The for loop is a traditional loop that executes a block of code a specified number of times.

Example:
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## 2. for...in Loop
- The for...in loop iterates over the enumerable properties of an object, in an arbitrary order.

Example:

const obj = { a: 1, b: 2, c: 3 };
```
for (let key in obj) {
  console.log(key, obj[key]); 
}

```
## 3. for...of Loop
- The for...of loop iterates over values that an iterable object defines.

Example:

```
const arr = [1, 2, 3, 4, 5];

for (let value of arr) {
  console.log(value);
}
```
## 4. forEach Loop
- The forEach loop is a method for arrays that executes a provided function once for each array element.

Example:
```
const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});
```