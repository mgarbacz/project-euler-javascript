// 2520 is the smallest number that can be divided by each of the numbers from 1
// to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

// Find gcd of a and b using Euclidean Algorithm
function gcd(a, b) {
  var temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Find lcm of a and b using reduction by gcd
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Solve by finding lcm progressively
function solution() {
  // Starting with LCM given in problem statement for 1..10
  result = 2520;

  // Starting with 11 since we already know LCM for 1..10
  for (var i = 11; i <= 20; i++)
    result = lcm(result, i);

  return result;
}

console.log(solution());
