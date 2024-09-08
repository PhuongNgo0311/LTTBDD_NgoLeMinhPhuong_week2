// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �


// calcTip function from the previous challenge
function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
  }
  
  // Step 1: Array of bill values
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  
  // Step 2: Empty arrays for tips and totals
  const tips = [];
  const totals = [];
  
  // Step 3: Use a for loop to calculate tips and totals
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);          // Add the tip to the tips array
    totals.push(bills[i] + tip); // Add the total (bill + tip) to the totals array
  }
  
  console.log("Bills: ", bills);     // Output: [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
  console.log("Tips: ", tips);       // Output: Calculated tips for each bill
  console.log("Totals: ", totals);   // Output: Total values for each bill
  
  // Bonus Step 4: Write a function to calculate the average
  function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];  // Add each value in the array to sum
    }
    return sum / arr.length; // Divide sum by the length of the array to get the average
  }
  
  // Call the calcAverage function with the totals array
  console.log("Average Total: ", calcAverage(totals)); // Output: Average of the total values