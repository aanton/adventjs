/**
 * @param {{name: string, color: string}[]} sheeps
 * @returns {{name: string, color: string}[]}
 */
export default function countSheeps(sheeps) {
  return sheeps.filter(
    sheep =>
      sheep.color === 'rojo' &&
      sheep.name.toLowerCase().includes('n') &&
      sheep.name.toLowerCase().includes('a')
  )
}
