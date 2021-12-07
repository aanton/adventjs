/**
 * @param {number} height
 * @returns string
 */
export default function createXmasTree(height) {
  const data = []

  for (let index = 1; index <= height; index++) {
    const row =
      '_'.repeat(height - index) +
      '*'.repeat(index * 2 - 1) +
      '_'.repeat(height - index)
    data.push(row)
  }

  const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)
  data.push(trunk)
  data.push(trunk)

  return data.join('\n')
}
