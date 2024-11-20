/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

function plannedIntersect(firstArr) {
  // Returns a second function that compares each element of the first and second Array
  // Using closure it is able to access the outer function parameter and returns a new
  // array with matching elements of the two arrays
  return (secondArr) => {
    // Filters first array elements to check whether they are included withint he second Array
    let intersectArr = firstArr.filter(el => secondArr.includes(el));// Create new array to store the intersecting elements of First and Second Array

    // Return the array
    return intersectArr;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
try {
  module.exports = plannedIntersect;
} catch (e) {
  return null;
}
