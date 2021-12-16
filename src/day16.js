/**
 * @param {string} symbols
 * @returns {number}
 */
export default function decodeNumber(symbols) {
  const CODES = {'.': 1, ',': 5, ':': 10, ';': 50, '!': 100}

  return symbols.split('').reduce((acc, symbol, index, array) => {
    const value = CODES[symbol] || NaN
    const nextValue = CODES[array[index + 1]] || 0
    return value >= nextValue ? acc + value : acc - value
  }, 0)
}
