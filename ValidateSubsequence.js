// Q2 Given two non-empty arrays of integers, write a function that determines whether the second array is a sequenceuence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4]  form a subsequence of the array [1, 2, 3, 4] , and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
// Sample Input ==> array = [5, 1, 22, 25, 6, -1, 8, 10]
//[1,22,10]
// Sample Output ==> true

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1,2,3,4,5];

function validatesequence(array, sequence) {
  let arrIndex = 0;
  let sequenceIndex = 0;

  while (arrIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrIndex] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }
    arrIndex++;
  }
  return sequenceIndex === sequence.length;
}

console.log(validatesequence(array, sequence));
