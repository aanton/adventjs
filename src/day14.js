/**
 * @param {number[]} ids
 * @returns {number}
 */
export default function missingReindeer(ids) {
  const unpaired = ids.sort((a, b) => a - b).find((id, index) => id !== index)
  return unpaired ? unpaired - 1 : ids.length
}
