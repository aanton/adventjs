import decodeNumber from './index'

const cases = [
  {input: '...', expected: 3},
  {input: '.,', expected: 4},
  {input: ',.', expected: 6},
  {input: ',...', expected: 8},
  {input: '.........!', expected: 107},
  {input: '.;', expected: 49},
  {input: '..,', expected: 5},
  {input: '..,!', expected: 95},
  {input: '.;!', expected: 49},
  {input: '!!!', expected: 300},
  {input: ';!', expected: 50},
  {input: ';.W', expected: NaN},
]

describe('Day 16 challenge: Decoding the value of a symbols string', () => {
  test.each(cases)('gets $expected using $input', ({input, expected}) => {
    expect(decodeNumber(input)).toEqual(expected)
  })
})
