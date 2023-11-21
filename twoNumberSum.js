// Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. If any two numbers in the input array sum
//   up to the target sum, the function should return them in an array, in any
//   order. If no two numbers sum up to the target sum, the function should return
//   an empty array.
//
// Note that the target sum has to be obtained by summing two different integers
//   in the array; you can't add a single integer to itself in order to obtain the
//   target sum.
// example:
// input = [3, 5, -4, 8, 11, 1, -1, 6]
//
// output = [11,-1]

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;
// var outputArr = [];
// function sum(a, b) {
//   return a + b;
// }
// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];

//     for (let j = i + 1; j < array.length; j++) {
//       if (sum(element, array[j]) === targetSum) {
//         return [element, array[j]];

//         outputArr.push(element, array[j]);
//         break;
//       }
//       if (outputArr.length > 0) break;
//     }
//   }
//   return outputArr;
// }
//GPT-4 answer
function twoNumberSum(array, targetSum) {
  const nums = {}; // Using an object as a hash table

  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num]; // Found a pair
    }
    nums[num] = true; // Store the number for future reference
    console.log("nums ", nums);
  }
  

  return []; // Return an empty array if no pair is found
}

console.log(twoNumberSum(array, targetSum));
// exports.twoNumberSum = twoNumberSum;
