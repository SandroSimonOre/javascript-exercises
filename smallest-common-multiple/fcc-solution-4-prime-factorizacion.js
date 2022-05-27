/*
Solution 4 - Prime factorization
================================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-smallest-common-multiple/16075

EXPLANATION:
This solution uses a prime factorization of the numbers in the range to compute the smallest common multiple. In general, Solution 3 is much faster, but with a very large range or very large values, sometimes Solution 3 may trigger a recursion limit in some browsers.

*/

// Find the SCM of a range of numbers
function smallestCommons(arr) {
  let primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    let primes = getPrimeFactors(i);
    for (let j in primes) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let i in primeFactors) {
    multiple *= i ** primeFactors[i]
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let prime = 2; prime <= num; prime++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while ((num % prime) === 0) {
      factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
      num /= prime;
    }
  }
  return factors;
}

smallestCommons([1, 5]);