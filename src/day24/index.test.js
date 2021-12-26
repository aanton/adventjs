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

  const treeBInverse = {
    value: 1,
    right: {value: 3, right: {value: 2, right: null, left: null}, left: null},
    left: {value: 5, right: null, left: {value: 4, right: null, left: null}},
  }

  const treeBPartialInverse = {
    value: 1,
    left: {value: 3, left: {value: 2, left: null, right: null}, right: null},
    right: {value: 5, left: {value: 4, left: null, right: null}, right: null},
  }

  const treeC = {
    value: 1,
    left: {
      value: 2,
      left: {value: 3, left: null, right: null},
      right: {value: 4, left: null, right: null},
    },
    right: {
      value: 5,
      left: {value: 6, left: null, right: null},
      right: {value: 7, left: null, right: null},
    },
  }

  const treeCInverse = {
    value: 1,
    left: {
      value: 5,
      left: {value: 7, left: null, right: null},
      right: {value: 6, left: null, right: null},
    },
    right: {
      value: 2,
      left: {value: 4, left: null, right: null},
      right: {value: 3, left: null, right: null},
    },
  }

  const treeCPartialInverseTopBranches = {
    value: 1,
    left: {
      value: 5,
      left: {value: 3, left: null, right: null},
      right: {value: 4, left: null, right: null},
    },
    right: {
      value: 2,
      left: {value: 6, left: null, right: null},
      right: {value: 7, left: null, right: null},
    },
  }

  const treeCPartialInverseBottomBranches = {
    value: 1,
    left: {
      value: 2,
      left: {value: 3, left: null, right: null},
      right: {value: 4, left: null, right: null},
    },
    right: {
      value: 5,
      left: {value: 7, left: null, right: null},
      right: {value: 6, left: null, right: null},
    },
  }

  test('returns true when comparing the same tree', () => {
    expect(checkIsSameTree(treeA, treeA)).toBeTruthy()
  })

  test('returns false when comparing two different trees', () => {
    expect(checkIsSameTree(treeA, treeB)).toBeFalsy()
  })

  test('returns true when comparing a small tree & its inverse version', () => {
    expect(checkIsSameTree(treeA, treeAInverse)).toBeTruthy()
  })

  test('returns true when comparing a big tree & its inverse version', () => {
    expect(checkIsSameTree(treeB, treeBInverse)).toBeTruthy()
  })

  test('returns false when comparing a tree & its partial inverse version (only an inner branch)', () => {
    expect(checkIsSameTree(treeB, treeBPartialInverse)).toBeFalsy()
  })

  test('returns true when comparing a balanced tree & its inverse version', () => {
    expect(checkIsSameTree(treeC, treeCInverse)).toBeTruthy()
  })

  test('returns false when comparing a balanced tree & its partial inverse version (top branches)', () => {
    expect(checkIsSameTree(treeC, treeCPartialInverseTopBranches)).toBeFalsy()
  })

  test('returns false when comparing a balanced tree & its partial inverse version (bottom branches)', () => {
    expect(
      checkIsSameTree(treeC, treeCPartialInverseBottomBranches)
    ).toBeFalsy()
  })
})
