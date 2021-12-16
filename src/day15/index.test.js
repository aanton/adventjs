import checkSledJump from './index'

const cases = [
  {input: [1, 2, 3, 2, 1], expected: true},
  {input: [0, 1, 0], expected: true},
  {input: [0, 3, 2, 1], expected: true},
  {input: [0, 1000, 1], expected: true},
  {input: [2, 4, 4, 6, 2], expected: false},
  {input: [1, 2, 3], expected: false},
  {input: [1, 2, 3, 2, 1, 2, 3], expected: false},
]

describe('Day 15 challenge', () => {
  test.each(cases)('gets $expected using $input', ({input, expected}) => {
    expect(checkSledJump(input)).toBe(expected)
  })
})
