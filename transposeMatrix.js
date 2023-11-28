// // You're given a 2D array of integers matrix . Write a function that returns the transpose of the matrix.
// // The transpose of a matrix is a flipped version of the original matrix across its main diagonal
// // (which runs from top-left to bottom-right); it switches the row and column indices of the original matrix.
// // You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same.

const arrayBeforeTranspose = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const arrayBeforeTranspose = [
//   [1, -1]
// ];

function transposeMatrix(arrayBeforeTranspose) {
  let transposedArray = [];
  let rows = arrayBeforeTranspose.length;
  let cols = arrayBeforeTranspose[0].length;

  for (let i = 0; i < cols; i++) {
    let tempArray = [];
    
    for (let j = 0; j < rows; j++) {
      tempArray.push(arrayBeforeTranspose[j][i]);
     
    }
    
    transposedArray.push(tempArray);
  }
  return transposedArray;
}

console.log(transposeMatrix(arrayBeforeTranspose));









//////////workinggggg
// function transposeMatrix(matrix) {
//   let numRows = matrix.length;
//   let numCols = matrix[0].length;
//   let transposed = [];

//   for (let col = 0; col < numCols; col++) {
//     let newRow = [];
//     for (let row = 0; row < numRows; row++) {
//       newRow.push(matrix[row][col]);
//     }
//     transposed.push(newRow);
//   }

//   return transposed;
// }

// // Test the function
// const arrayBeforeTranspose = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(transposeMatrix(arrayBeforeTranspose));




  //   let tempArray = [];

  //   Array(arrayBeforeTranspose.length)
  //     .fill()
  //     .map(() => Array(arrayBeforeTranspose.length));
  // if (arrayBeforeTranspose.length === 1) {
    //   for (let j = 0; j < arrayBeforeTranspose[i].length; j++) {
    //     let values = arrayBeforeTranspose[i][j];
    //     console.log(values);

    //     tempArray[j][i] = 0;
    //   }
    // } else
    // if (arrayBeforeTranspose.length === arrayBeforeTranspose[i].length) {
    //   for (let j = 0; j < arrayBeforeTranspose[i].length; j++) {
    //     let values = arrayBeforeTranspose[j][i];
    //     console.log(values);

    //     //   tempArray.push([values]);
    //     if (arrayBeforeTranspose[j][i] === undefined) {
    //       continue;
    //     } else {
    //       tempArray.push(arrayBeforeTranspose[j][i]);
    //       //   console.log(tempArray);
    //     }
    //   }
    // } else {