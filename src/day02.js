/**
 * @param {string} letter
 * @return {Object.<string, number>}
 */
export default function listGifts(letter) {
  return letter
    .trim()
    .split(/\s+/)
    .reduce((acc, gift) => {
      if (!gift.startsWith('_')) {
        acc[gift] = acc[gift] ? acc[gift] + 1 : 1
      }

      return acc
    }, {})
}
