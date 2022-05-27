function smallestCommonMultiple(arr) {

    let [min, max] = arr.sort((a, b) => a - b);

    // I took this line from one of freeCodeCamp's others solutions.
    let arrNumbers = Array( max - min + 1 ).fill(0).map(( _ , idx ) => idx + min );

    let scm = 1;
    let prime;
    let validPrime = false; // So far we do not have a prime. By setting this variable to false ...
    const primeGenerator = nextPrime(); // this uses a generator

    // Array.prototype.some return true if at least an element meets the condition provided
    // So, in the next code, if arrNumbers has at least one element greater than one, some will return true.
    while (arrNumbers.some( e => e > 1)) {

        if ( !validPrime ) prime = primeGenerator.next().value;
        validPrime = false;

        for(let i = 0; i < arrNumbers.length; i++) {
            
            if ( arrNumbers[i] % prime === 0 && arrNumbers[i] !== 1 ) {
                
                arrNumbers[i] = arrNumbers[i] / prime;
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