// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function solution() {
  // Let's start with the largest 3 digit numbers
  var num1 = 999;
  var num2 = 999;

  // Well start checking palindromes on the product of num1 and num2
  var product = num1 * num2;

  // This will be a math solution
  var palindrome = false;
  while (!palindrome) {
    // Picking out the power of the first digit in the product
    var powerStart
      = Math.pow(10, Math.floor(Math.log(product + 1) / Math.LN10));
    // Last digit is always 10
    var powerEnd = 10;

    // Assume we have a palindrome, change to false as soon as we see it is not
    palindrome = true;
    while (powerStart > powerEnd && palindrome) {
      if (Math.floor(product / powerStart) != product % powerEnd)
        palindrome = false;
      // Move powers to check the next digits
      powerStart /= 10;
      powerEnd *= 10;
    }
    if (palindrome) console.log(product);
    // The problems lies here I think!
    num1 = num2;
    num2--;
    product = num1 * num2;
  }

  return product;
}

console.log(solution());
