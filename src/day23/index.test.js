import canReconfigure from './index'

const cases = [
  {from: 'BAL', to: 'LIB', expected: true},
  {from: 'CON', to: 'JUU', expected: false},
  {from: 'MMM', to: 'MID', expected: false},
  {from: 'AA', to: 'MID', expected: false},

  // Additional cases
  {from: 'AAA', to: 'BBB', expected: true},
  {from: 'AAABBBAAA', to: 'BBBAAABBB', expected: true},
  {from: 'ABCDEF', to: 'BCDEFG', expected: true},
  {from: 'ABCDEFH', to: 'BCDEFGG', expected: false},
]

describe('Day 23 challenge', () => {
  test.each(cases)(
    'gets $expected when converting from $from to $to',
    ({from, to, expected}) => {
      expect(canReconfigure(from, to)).toEqual(expected)
    }
  )
})
