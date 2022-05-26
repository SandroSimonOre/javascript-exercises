function sumFibs(num) {

    if (num === 1) return 0;

    let arrFibs =[1, 1];
    let nextFib = 2;
    let sumOdds = 2;

    while (nextFib <= num) {

        arrFibs.unshift(arrFibs[0] + arrFibs[1])
        if (arrFibs[0] % 2 > 0) sumOdds += arrFibs[0] 
        nextFib = arrFibs[0] + arrFibs[1]

    }

    return sumOdds;
  }
  
// This is for test the code
let res = sumFibs(4000000);
console.log(res)