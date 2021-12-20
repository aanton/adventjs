/**
 * @param {string} letter
 * @returns {boolean}
 */
export default function pangram(letter) {
  letter = letter
    .toLowerCase()
    .replace(/[áä]/g, 'a')
    .replace(/[éë]/g, 'e')
    .replace(/[íï]/g, 'i')
    .replace(/[óö]/g, 'o')
    .replace(/[úü]/g, 'u')

  return 'abcdefghijklmnñopqrstuvwxyz'
    .split('')
    .every(char => letter.includes(char))
}
