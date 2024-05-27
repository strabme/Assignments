for (let i = 12; i <= 24; i++) {
  console.log("The Number : " + i);
}
console.log(
  "========================Printing Odd Number============================================================================================"
);

// Print the ODD number 7 to 31

for (let i = 7; i <= 31; i++) {
  if (i % 2 != 0) {
    console.log("The odd numbers are : " + i);
  }
}

console.log(
  "========================Printing Multiples of 3============================================================================================"
);

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 == 0) {
    console.log(i + " Fizz");
  } else if (i % 5 == 0) {
    console.log(i + " Buzz");
  }
}
