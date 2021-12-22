/**
 * @param {object} tree
 * @returns {number}
 */
export default function countDecorations(tree) {
  const leftDecorations = tree.left ? countDecorations(tree.left) : 0
  const rightDecorations = tree.right ? countDecorations(tree.right) : 0
  return tree.value + leftDecorations + rightDecorations
}
