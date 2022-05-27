/*

The code below and its explanation can be found in the following link:

https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079

Code Explanation:
* Create a new variable to keep flattened arrays.
* Loop over the elements of the array
* If the element is an array then call the function again with to flatten the subarray and push the contents of the flattened subarray into the flattened array.
* If the element is not an array, then push that non-array element to the flattened array.
* Return the flattened array.

*/


function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  
  // test here
  steamrollArray([1, [2], [3, [[4]]]]);