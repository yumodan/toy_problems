/*Arrayception
Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

Examples
Input Output
array:
[ [ 5 ], [ [ ] ] ]  2
array:
[ 10, 20, 30, 40 ]  1
array:
[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]  4
array:
[ ] 0
array:
[ [ [ ] ] ] 0 */

function arrayception (array) {
  let maxDepth = 0;
  const subroutine = (array, currentDepth) => {
    array.forEach((val) => {
      if(Array.isArray(val)){
        subroutine(val, 1 + currentDepth);
      } else {
        maxDepth = Math.max(currentDepth, maxDepth);
      }      
    });
  }
  subroutine(array, 1);
  return maxDepth;
}
