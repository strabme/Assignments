let purchaseAmount = 150;
let discount = 0;
let totalAmount = 0;
if (purchaseAmount >= 100) {
  discount = 20 / 100;
  totalAmount = purchaseAmount - discount * purchaseAmount;
  console.log(
    "The total cost after " + discount + " % Discount is " + totalAmount
  );
} else if (purchaseAmount >= 50) {
  discount = 10 / 100;
  totalAmount = purchaseAmount - discount * purchaseAmount;
  console.log(
    "The total cost after " + discount + " % Discount is " + totalAmount
  );
} else {
  console.log("Your total amount is " + purchaseAmount);
}
