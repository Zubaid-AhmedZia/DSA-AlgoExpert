const competitions = [
  ["HTML", "c#"],
  ["c#", "python"],
  ["python", "HTML"],
];

const results = [0, 0, 1];

function tournamentWinner(competitions, results) {
  let winners = {};
  let highestPoint = 0;
  let winningLang;

  let j = 0;

  for (let i = 0; i < competitions.length; i++) {
    let result = results[i];

    let winner;

    if (result === 0) {
      winner = competitions[i][j + 1];
    } else if (result === 1) {
      winner = competitions[i][j];
    }

    winners[winner] = (winners[winner] || 0) + 3;

    if (winners[winner] > highestPoint) {
      highestPoint = winners[winner];
      winningLang = winner;
    }
  }
  // const keyOfHighestValue = Object.entries(winners).reduce((a, b) => {
  //   return a[1] > b[1] ? a : b;
  // })[0];

  return winningLang;
}

console.log(tournamentWinner(competitions, results));
