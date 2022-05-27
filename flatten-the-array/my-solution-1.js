function steamrollArray(arr) {
    
    let newArr = [];

    for (let i = 0 ; i < arr.length; i++) {

      if (Array.isArray(arr[i]) === true) {

          newArr.push(...steamrollArray(arr[i]))

      } else {

        newArr.push(arr[i]);

      }
      
    }
  
    return newArr;
  }
  
  const res = steamrollArray([1, [2], [3, [[4]]]]);

  console.log(res)