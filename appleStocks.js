/* 
https://www.interviewcake.com/question/python/stock-price
I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:

    The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
    The values are the price (in US dollars) of one share of Apple stock at that time.

So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

greedy approach
edge case: if array length < 2 raise err
initialize minPrice as first price
initialize maxProfit as first profit
initialize loop at second price/index

See what our profit would be if we bought at the min price and sold at the current price
Update max_profit if we can do better
Update min_price so it's always the lowest price we've seen so far
*/

stockPrices = [10, 7, 5, 8, 11, 9]
// Returns 6 (buying for $5 and selling for $11)

const getMaxProfit = (stockPrices) => {
  if (stockPrices.length < 2) {
    return 'Getting a profit requires at least two prices';
  }
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let potentialProfit = stockPrices[i] - minPrice;

    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }
    if (stockPrices[i] < minPrice) {
      minPrice = stockPrices[i];
    }
  }
  return maxProfit;
}

getMaxProfit(stockPrices)