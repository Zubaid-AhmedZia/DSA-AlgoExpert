let array = [1, 2, 3, 4, 5, 6];

let sortedArray = []



function sortedSquare(array){
array.map(el => sortedArray.push(el*el));
return sortedArray;
}

console.log(sortedSquare(array));