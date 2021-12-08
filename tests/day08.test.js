import maxProfit from '../src/day08'

const cases = [
  {input: [39, 18, 29, 25, 34, 32, 5], expected: 16},
  {input: [10, 20, 30, 40, 50, 60, 70], expected: 60},
  {input: [18, 15, 12, 11, 9, 7], expected: -1},
  {input: [3, 3, 3, 3, 3], expected: -1},
]

describe('Day 8 challenge', () => {
  test.each(cases)(
    'Given $input prices, returns $expected',
    ({input, expected}) => {
      expect(maxProfit(input)).toBe(expected)
    }
  )
})
