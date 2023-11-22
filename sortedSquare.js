let array = [-3,-2,-1];

//let sortedArray = [];

// function sortedSquare(array) {
//   array.map((el) => sortedArray.push(el * el));
//   return sortedArray.sort((a, b) => a - b);
// }

// console.log(sortedSquare(array));
//O(nlogn)

function sortedSquaredArray(array) {
  let sortedArray = new Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      sortedArray[i] = array[left] * array[left];
      left++;
    } else {
      sortedArray[i] = array[right] * array[right];
      right--;
    }
  }
  return sortedArray;
}
console.log(sortedSquaredArray(array));
//O(n)
