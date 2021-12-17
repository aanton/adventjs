import countPackages from './index'

describe('Day 17 challenge: Counting packages by carrier', () => {
  test('dapelu can transport 9 packages', () => {
    expect(
      countPackages(
        [
          ['dapelu', 5, ['midu', 'jelowing']],
          ['midu', 2, []],
          ['jelowing', 2, []],
        ],
        'dapelu'
      )
    ).toEqual(9)
  })

  test('camila can transport 15 packages', () => {
    expect(
      countPackages(
        [
          ['lolivier', 8, ['camila', 'jesuspoleo']],
          ['camila', 5, ['sergiomartinez', 'conchaasensio']],
          ['jesuspoleo', 4, []],
          ['sergiomartinez', 4, []],
          ['conchaasensio', 3, ['facundocapua', 'faviola']],
          ['facundocapua', 2, []],
          ['faviola', 1, []],
        ],
        'camila'
      )
    ).toEqual(15)
  })
})
