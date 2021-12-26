/**
 * @param {object} treeA
 * @param {object} treeB
 * @returns {boolean}
 */
export default function checkIsSameTree(treeA, treeB) {
  const checkTrees = function (treeA, treeB) {
    if (!treeA && !treeB) return true
    if (!treeA && treeB) return false
    if (treeA && !treeB) return false
    if (treeA.value !== treeB.value) return false

    return (
      checkTrees(treeA.left, treeB.left) && checkTrees(treeA.right, treeB.right)
    )
  }

  const inverseTree = function (tree) {
    return JSON.parse(
      JSON.stringify(tree)
        .replaceAll('left', 'tmp')
        .replaceAll('right', 'left')
        .replaceAll('tmp', 'right')
    )
  }

  return checkTrees(treeA, treeB) || checkTrees(treeA, inverseTree(treeB))
}
