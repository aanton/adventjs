import fixFiles from './index'

const cases = [
  {
    input: ['photo', 'postcard', 'photo', 'photo', 'video'],
    expected: ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'],
  },
  {
    input: ['file', 'file', 'file', 'game', 'game'],
    expected: ['file', 'file(1)', 'file(2)', 'game', 'game(1)'],
  },
  {
    input: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'],
    expected: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'],
  },
]

describe('Day 18 challenge', () => {
  test.each(cases)('gets $expected using $input', ({input, expected}) => {
    expect(fixFiles(input)).toEqual(expected)
  })
})
