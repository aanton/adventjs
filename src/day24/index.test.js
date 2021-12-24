import checkIsSameTree from './index'

describe('Day 24 challenge', () => {
  const treeA = {
    value: 1,
    left: {value: 2, left: null, right: null},
    right: {value: 3, left: null, right: null},
  }

  const treeB = {
    value: 1,
    left: {value: 3, left: {value: 2, left: null, right: null}, right: null},
    right: {value: 5, left: null, right: {value: 4, left: null, right: null}},
  }

  const treeAInverse = {
    value: 1,
    left: {value: 3, left: null, right: null},
    right: {value: 2, left: null, right: null},
  }

  const treeBInnerInverse = {
    value: 1,
    left: {value: 3, left: {value: 2, left: null, right: null}, right: null},
    right: {value: 5, left: {value: 4, left: null, right: null}, right: null},
  }

  test('returns true when comparing the same tree', () => {
    expect(checkIsSameTree(treeA, treeA)).toBeTruthy()
  })

  test('returns false when comparing two different trees', () => {
    expect(checkIsSameTree(treeA, treeB)).toBeFalsy()
  })

  test('returns true when comparing a tree & its inverse version', () => {
    expect(checkIsSameTree(treeA, treeAInverse)).toBeTruthy()
  })

  test('returns true when comparing a tree & an inverse version in a inner branch', () => {
    expect(checkIsSameTree(treeB, treeBInnerInverse)).toBeTruthy()
  })
})
