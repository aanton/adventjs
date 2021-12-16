import listGifts from './index'

describe('Day 2 challenge', () => {
  test('reads gifts from letter', () => {
    const letter = 'bici coche balón _playstation bici coche peluche'

    expect(listGifts(letter)).toEqual({
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    })
  })

  test('ignores multiple spaces in the letter', () => {
    const letter = 'bici coche   balón _playstation   bici coche peluche'

    expect(listGifts(letter)).toEqual({
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    })
  })

  test('ignores trailing spaces in the letter', () => {
    const letter = ' bici coche balón _playstation bici coche peluche '

    expect(listGifts(letter)).toEqual({
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    })
  })
})
