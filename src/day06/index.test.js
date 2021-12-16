import sumPairs from './index'

describe('Day 6 challenge', () => {
  test('finds a pair', () => {
    expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7])
  })

  test('returns null if a pair is not found', () => {
    expect(sumPairs([-3, -2, 7, -5], 10)).toEqual(null)
  })

  test('finds a twin pair', () => {
    expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2])
  })

  test('finds the first pair', () => {
    expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2])
  })

  test('finds a pair ignoring invalid twin pairs', () => {
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5])
  })
})
