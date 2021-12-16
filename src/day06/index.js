/**
 * @param {number[]} numbers
 * @param {number} result
 * @returns {[number, number]}
 */
export default function sumPairs(numbers, result) {
  const set = new Set(numbers)

  const isRepeatedNumber = (/** @type {number} */ number) =>
    numbers.filter(value => number === value).length > 1

  for (const number1 of set) {
    const number2 = result - number1

    if (number1 === number2) {
      if (isRepeatedNumber(number1)) {
        return [number1, number1]
      }
    } else if (set.has(number2)) {
      return [number1, number2]
    }
  }

  return null
}
