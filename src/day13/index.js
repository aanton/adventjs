/**
 * @param {string[]} gifts
 * @returns {string[]}
 */
export default function wrapGifts(gifts) {
  if (!gifts.length) return []

  const base = '*'.repeat(gifts[0].length + 2)
  const wrappedGifts = gifts.map(gift => `*${gift}*`)

  return [base, ...wrappedGifts, base]
}
