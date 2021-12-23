/**
 * @param {string} from
 * @param {string} to
 * @returns {boolean}
 */
export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false

  const fromMap = new Map()
  const toMap = new Map()
  for (let i = 0; i < from.length; i++) {
    if (fromMap.has(from[i]) && fromMap.get(from[i]) !== to[i]) return false
    if (toMap.has(to[i]) && toMap.get(to[i]) !== from[i]) return false

    fromMap.set(from[i], to[i])
    toMap.set(to[i], from[i])
  }

  return true
}
