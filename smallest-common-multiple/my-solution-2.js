function smallestCommonMultiple(arr) {

    let [min, max] = arr.sort((a, b) => a - b) // Here we use destructuring assigment
    let objNumbers = {} // This object contains all the numbers for we calculate the SCM
   
    for(let i = min; i <= max; i++){ objNumbers[i] = i } 
    
    let scm = 1;
    let prime;
    let validPrime = false; // So far we do not have a prime. By setting this variable to false ...
    const primeGenerator = nextPrime(); // this uses a generator

    while (Object.values(objNumbers).some( e => e > 1)) {

        if ( !validPrime ) prime = primeGenerator.next().value;
        validPrime = false;

        for(let i = min; i <= max; i++) {
            
            if ( objNumbers[i] % prime === 0 && objNumbers[i] !== 1 ) {
                
                objNumbers[i] = objNumbers[i] / prime;
                validPrime = true;

            }

        }

        if (validPrime) scm *= prime;
    }
    
    return scm;

    
    // *********************** HELPERS *************************
    // This is a generator which generate prime numbers
    function* nextPrime() {

        let num = 1; 

        while (true) {

            do {
                num++;
            } while (!isPrime(num))

            yield num;
        }

    }

    // This is a helper whose unique mission in life is to say if a number is or not a prime number
    function isPrime(num) {

        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
        return num > 1;
      
    }
    
}

let res = smallestCommonMultiple([23, 18]);
console.log(res)