function checkCashRegister(price, cash, cid) {

    let changeDue = cash - price

    let availableBefore = cid.reduce((acc, curr) =>  acc + curr[1] , 0).toFixed(2)
    
    if (changeDue > availableBefore) return {status: "INSUFFICIENT_FUNDS", change: []}
    
    const equiv = {'PENNY': 0.01, 'NICKEL':0.05, 'DIME': 0.1, 'QUARTER': 0.25,
                   'ONE': 1, 'FIVE': 5, 'TEN': 10, 'TWENTY':20, 'ONE HUNDRED':100 }

    let arr = []
    let cidAfter = [...cid].reverse().map((e) => {
             
        if (changeDue >= equiv[e[0]]) {
            
            let importe = Math.min(Math.floor(changeDue / equiv[e[0]]) * equiv[e[0]], e[1]) 
            changeDue = (changeDue - importe).toFixed(2)

            e = [e[0], e[1] - importe]
            
            arr.push([e[0], importe])
        }

        return e;
    
    })

    if (changeDue > 0) return {status: "INSUFFICIENT_FUNDS", change: []}

    let availableAfter = cidAfter.reduce((acc, curr) =>  acc + curr[1], 0).toFixed(2)

    if (changeDue == 0 && availableAfter == 0) return {status: "CLOSED", change: cid}
    
    return {status: "OPEN", change: arr}
    
}
  
// let res = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// let res = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// let res = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// let res = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
let res = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])  
console.log(res)