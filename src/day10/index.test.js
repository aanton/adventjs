import getCoins from './index'

const cases = [
  {input: 51, expected: [1, 0, 0, 0, 0, 1]},
  {input: 3, expected: [1, 1, 0, 0, 0, 0]},
  {input: 5, expected: [0, 0, 1, 0, 0, 0]},
  {input: 16, expected: [1, 0, 1, 1, 0, 0]},
  {input: 100, expected: [0, 0, 0, 0, 0, 2]},
]

describe('Day 10 challenge', () => {
  test.each(cases)('gets $expected coins using $input', ({input, expected}) => {
    expect(getCoins(input)).toEqual(expected)
  })
})
