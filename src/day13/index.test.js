import wrapGifts from './index'

const cases = [
  {input: ['📷', '⚽️'], expected: ['****', '*📷*', '*⚽️*', '****']},
  {input: ['🏈🎸', '🎮🧸'], expected: ['******', '*🏈🎸*', '*🎮🧸*', '******']},
  {input: ['📷'], expected: ['****', '*📷*', '****']},

  // Additional cases
  {input: [], expected: []},
]

describe('Day 13 challenge', () => {
  test.each(cases)('gets $expected using $input', ({input, expected}) => {
    expect(wrapGifts(input)).toEqual(expected)
  })
})
