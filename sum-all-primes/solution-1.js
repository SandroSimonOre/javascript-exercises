function sumPrimes(num) {

  let sum = 0;

  for (let i = 2; i <= num; i++) {
  
    if(isPrime(i)) sum+=i;
  
  }

  return sum;
  
  //const isPrime = num => {
  function isPrime(num) {

    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false; 
    return num > 1;
  
  }
  
}

let res = sumPrimes(977);
console.log(res);

/*
The code for the isPrime function has been extracted from the following link:
https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript

*/