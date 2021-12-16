import missingReindeer from './index'

const cases = [
  {input: [0, 2, 3], expected: 1},
  {input: [5, 6, 1, 2, 3, 7, 0], expected: 4},
  {input: [0, 1], expected: 2},
  {input: [3, 0, 1], expected: 2},
  {input: [9, 2, 3, 5, 6, 4, 7, 0, 1], expected: 8},
  {input: [0], expected: 1},

  // Additional cases
  {input: [1], expected: 0},
]

describe('Day 14 challenge', () => {
  test.each(cases)('gets $expected using $input', ({input, expected}) => {
    expect(missingReindeer(input)).toEqual(expected)
  })
})
