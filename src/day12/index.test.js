import getMinJump from './index'

const cases = [
  {input: [5, 3, 6, 7, 9], expected: 4},
  {input: [2, 4, 6, 8, 10], expected: 7},
  {input: [1, 2, 3, 5], expected: 4},
  {input: [3, 7, 5], expected: 2},
  {input: [9, 5, 1], expected: 2},

  // Additional cases
  {input: [], expected: 1},
  {input: [1, 2, 3, 4], expected: 5},
  {input: [2], expected: 3},
  {input: [3], expected: 2},
  {input: [4], expected: 3},
]

describe('Day 12 challenge', () => {
  test.each(cases)('gets $expected jumps using $input', ({input, expected}) => {
    expect(getMinJump(input)).toBe(expected)
  })
})
