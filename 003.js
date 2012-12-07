// The prime factors of 13195 are 5, 7, 13, and 29.
//
// What is the largest prime factor of the number 600851475143?

function solution() {
  var input = 600851475143;
  // Starting from 2, the smallest prime number
  var index = 2;
  
  // We will use the unique factorization theorem as the basis for the algorithm
  while (input > index) {
    // Check if the index is a factor of the input
    if (input % index == 0)
      // Reduce input by a factor of index
      input /= index;
    index++;
  }

  // The resulting index value is the largest prime factor
  return index;
}

console.log(solution());
