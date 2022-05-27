/*

The code below can be found in the following link:

https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079

*/

function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}