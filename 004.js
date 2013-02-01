// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(num) {
  // This will only work for positives
  if (num < 0) return false;

  // Divider will split left half of num, digit by digit, for comparison
  var divider = 1;
  while ((num / divider) >= 10)
    divider *= 10;

  // Checking for palindrome by breaking num down each time outer digits agree
  while (num != 0) {
    var left = Math.floor(num / divider);
    var right = num % 10;
    // If the outer digits don't agree, we say no palindrome
    if (left != right) return false;

    // Now we need to set up for the next iteration, so we chop left most digit
    // by taking the remainder from divider and chop right most digit by
    // dividing by 10
    num = Math.floor((num % divider) / 10);
    // Set up divider for next iteration as 2 powers less than before since we
    // lost 2 powers of num
    divider /= 100;
  }

  // If we have reached this point, we have a palindrome!
  return true;
}

function solution() {
  var largestPalindrome = 0;

  // Nested looping over all multiples of num1 and num2
  // I'm not happy with the efficiency of the logic
  for (var num1 = 999; num1 > 0; num1--)
    for (var num2 = 999; num2 > 0; num2--) {
      var product = num1 * num2;
      // Check to see if we have the largest palindrome this iteration
      if (isPalindrome(product) && product > largestPalindrome)
        largestPalindrome = product;
    }

  return largestPalindrome;
}

console.log(solution());
