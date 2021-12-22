import countDecorations from './index'

describe('Day 22 challenge', () => {
  test('gets the number of decorations in a small tree', () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    }

    expect(countDecorations(tree)).toEqual(6)
  })

  test('gets the number of decorations in a big tree', () => {
    const tree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    }

    expect(countDecorations(tree)).toEqual(28)
  })
})
