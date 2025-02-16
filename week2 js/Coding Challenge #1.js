// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time



function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}
//Data1
var avgDolphins1 = calcAverage(44, 23, 71)
var avgKoalas1 = calcAverage(65, 54, 49)
    //Data2
var avgDolphins2 = calcAverage(85, 54, 41)
var avgKoalas2 = calcAverage(23, 34, 27)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log('Dolphins win (' + avgDolphins + 'vs. ' + avgKoalas + ')');
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log('Koalas win (' + avgKoalas + 'vs. ' + avgDolphins + ')');
    } else {
        console.log('No team wins');
    }

}
//addData
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);