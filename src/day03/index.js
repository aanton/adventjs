/**
 * @param {string} letter
 * @returns boolean
 */
export function isValidUsingTraversing(letter) {
  let indexOpenMark = letter.indexOf('(')
  let indexCloseMark = letter.indexOf(')')

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (indexOpenMark === -1 && indexCloseMark === -1) return true // No parenthesis is allowed
    if (indexOpenMark === -1 || indexCloseMark === -1) return false // Invalid parenthesis pair

    // At this point, both opene & close parenthesis are found

    if (indexOpenMark > indexCloseMark) return false

    const gift = letter.substring(indexOpenMark + 1, indexCloseMark)
    if (gift === '') return false
    if (gift.match(/[(){}[\]]/)) return false

    indexOpenMark = letter.indexOf('(', indexCloseMark + 1)
    indexCloseMark = letter.indexOf(')', indexCloseMark + 1)
  }
}

/**
 * @param {string} letter
 * @returns boolean
 */
export function isValidUsingRegex(letter) {
  const gifts = letter.match(/\((.*?)(\)|$)/gm)

  if (gifts === null) return true // No parenthesis is allowed

  const invalidGift = gifts.find(gift => {
    return (
      gift.length === 2 ||
      gift.slice(-1) !== ')' ||
      gift.slice(1, -1).match(/[(){}[\]]/)
    )
  })

  return invalidGift === undefined
}
