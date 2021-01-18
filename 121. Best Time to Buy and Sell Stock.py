You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 
Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104


# Approach Brute force: find max(prices[i]-prices[j]), j>i. Time O(N2), Space O(1)
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxprofit = 0
        
        for i in range(len(prices)-1):
          for j in range(i+1, len(prices)):
            profit = prices[j] - prices[i]
            if (profit > maxprofit):
              maxprofit = profit
            
        return maxprofit


# Approach One Pass: keep minprice and maxprofit, one loop to compare. Time O(N), Space O(1)
class Solution
    def maxProfit(self, prices: List[int]) -> int:
        minprice = float('inf')
        maxprofit = 0
        
        for price in prices:
            minprice = min(price, minprice)
            maxprofit = max(maxprofit, (price - minprice))
            
        return maxprofit