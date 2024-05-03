//Before Modularization - No Functions

const numArray = [5, 12, 8, 19, 3];

let sum = 0;
let product = 1;
let max = numArray[0];
let min = numArray[0];

for (let i = 0; i < numArray.length; i++) {
  sum += numArray[i];
  product *= numArray[i];

  if (numArray[i] > max) {
    max = numArray[i];
  }

  if (numArray[i] < min) {
    min = numArray[i];
  }
}

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Maximum:", max);
console.log("Minimum:", min);


/* //After Modularization With Functions

const numArray = [5, 12, 8, 19, 3];

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function calculateProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const sum = calculateSum(numArray);
const product = calculateProduct(numArray);
const max = findMax(numArray);
const min = findMin(numArray);

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Maximum:", max);
console.log("Minimum:", min);

*/