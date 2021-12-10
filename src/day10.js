/**
 * @param {number} change
 * @returns {number[]}
 */
export default function getCoins(change) {
  return [50, 20, 10, 5, 2, 1]
    .map(value => {
      const coins = Math.floor(change / value)
      change %= value

      return coins
    })
    .reverse()
}
