let bodyWeight = 65;
let height = 170;
//converting height in meters
let heightInMeters = height / 100;
let heightData = heightInMeters * heightInMeters;

// BMI = bodyweight divided by square by height
let bmi = bodyWeight / heightData;

if (bmi <= 18.5) {
  console.log("Your BMI is " + bmi);
  console.log("You are underWeight");
} else if (bmi <= 24.9) {
  console.log("Your BMI is " + bmi);

  console.log("You are Normal weight");
} else if (bmi <= 29.9) {
  console.log("Your BMI is " + bmi);

  console.log("you are overweight");
} else {
  console.log("You are Obese");
}
