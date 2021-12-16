/**
 * @param {number[]} prices
 * @returns number
 */
export default function maxProfit(prices) {
  return prices.reduce((maxProfit, price, index, array) => {
    const profit = Math.max(...array.slice(index + 1)) - price
    return profit > 0 && profit > maxProfit ? profit : maxProfit
  }, -1)
}
