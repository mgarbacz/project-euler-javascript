// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6, and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

function solution() {
  var sum = 0;
  var itr = 1000;

  // Fancy loop from 999 to 0, since we want to check below 1000
  while (itr--) {
    if (itr % 3 == 0 || itr % 5 == 0)
      sum += itr;
  }
  
  return sum;
}

console.log(solution());
