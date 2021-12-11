/**
 * @param {number} times
 * @returns {boolean}
 */
export default function shouldBuyFidelity(times) {
  const fidelityPrice = [...Array(times).keys()].reduce((acc, value) => {
    return acc + 12 * Math.pow(0.75, value + 1)
  }, 250)

  return fidelityPrice < times * 12
}
