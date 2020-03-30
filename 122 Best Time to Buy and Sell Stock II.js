// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/* SOLUTION 1 fing profit between any day that the next day is higher than that day. Add them up  */
// var maxProfit = function(prices) {
//   let total = 0
//     for (let i=0; i<prices.length; i++){
//     let profit = 0
//       if (prices[i+1] > prices[i]) {
//         profit = (prices[i+1]-prices[i])
//         total += profit
//       }
//     return total
//     }
// };

// x= [7,1,5,3,6,4]
// maxProfit(x)


/* SOLUTION 2 FIND EVERY PEAK & VALLEY */
var maxProfit = function(prices) {
  let peak = prices[0], valley = prices[0];
  let i = 0, profit = 0;

  while(i<prices.length-1) {
    while (prices[i]>=prices[i+1]){
      i++;
    }
    valley = prices[i]

    while (prices[i]<=prices[i+1]){
      i++;
    }
    peak = prices[i]

    profit += (peak - valley)

  }

  return profit
};

x= [7,1,5,3,6,4]
maxProfit(x)