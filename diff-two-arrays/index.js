function diffArray(arr1, arr2) {
    let newArr = [];

    [...arr1, ...arr2].forEach(e => (!arr1.includes(e) || !arr2.includes(e)) && newArr.push(e))

     return newArr
}

let res = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(res)