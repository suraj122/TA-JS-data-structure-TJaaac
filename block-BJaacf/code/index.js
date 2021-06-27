// 1. Create an array named numbers and store 5 number values in it
let numbers = [1, 2, 3, 4, 5];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let average = sum / numbers.length;
console.log(average);
// 4. Find the highest number in the array and print it to the console using console.log()
let highestNum = numbers[0];
for (let num of numbers) {
  if (num > highestNum) {
    highestNum = num;
  }
}
console.log(highestNum);
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNum = numbers[0];
for (let num of numbers) {
  if (num < lowestNum) {
    highestNum = num;
  }
}
console.log(lowestNum);
// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    even.push(num);
  }
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
for (let num of numbers) {
  if (num % 2 !== 0) {
    odd.push(num);
  }
}
console.log(odd);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let divisibleBy5 = [];
for (let num of numbers) {
  if (num % 5 === 0) {
    divisibleBy5.push(num);
  }
}

console.log(divisibleBy5);

// 9. Log all the element of the array one by one
for (let num of numbers) {
  console.log(num);
}

// 10. Find all the number in the array that is divisible by 3
let divisibleBy3 = [];
for (let num of numbers) {
  if (num % 3 === 0) {
    divisibleBy3.push(num);
  }
}
console.log(divisibleBy3);
