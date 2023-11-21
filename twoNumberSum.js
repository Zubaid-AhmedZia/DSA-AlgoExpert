// const array = [3, 5, -4, 8, 11, 1, 6, 4];
// const targetSum = -1;
var outputArr = [];
function sum(a, b) {
  return a + b;
}
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (sum(element, array[j]) === targetSum) {
        return [element, array[j]];

        outputArr.push(element, array[j]);
        break;
      }
      if (outputArr.length > 0) break;
    }
  }
  return outputArr;
}

// twoNumberSum(array, targetSum);
exports.twoNumberSum = twoNumberSum;
