const coins = [5, 7, 1, 1, 2, 3, 22];

// function nonConstructibleChange(coins) {
//   // Sort the coins array in ascending order
//   coins.sort((a, b) => a - b);
//   console.log(coins);
//   // Initialize the current change that can be created
//   let currentChange = 0;

//   // Iterate through each coin
//   for (const coin of coins) {
//     // If the coin is greater than the current change + 1,
//     // we found the smallest amount of change that cannot be created
//     if (coin > currentChange + 1) {
//       return currentChange + 1;
//     }

//     // Otherwise, add the coin's value to the current change
//     currentChange += coin;
//     console.log(currentChange);
//   }

//   // If all coins were used, the next amount that cannot be created is currentChange + 1
//   return currentChange + 1;
// }

function nonConstructibleChange(coins) {
    const achievableSums = new Set([0]);

    // Update the set with new sums for each coin
    for (const coin of coins) {
        const newSums = new Set();
        for (const sum of achievableSums) {
            newSums.add(sum + coin);
        }

        for (const newSum of newSums) {
            achievableSums.add(newSum);
        }
    }

    // Find the smallest non-achievable sum
    let smallestMissingSum = 1;
    while (achievableSums.has(smallestMissingSum)) {
        smallestMissingSum++;
    }

    return smallestMissingSum;
}

console.log(nonConstructibleChange(coins));
