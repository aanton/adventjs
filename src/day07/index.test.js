import isProductInStore from './index'

describe('Day 7 challenge', () => {
  test('finds a product in a store', () => {
    const store = {
      estanteria1: {
        cajon1: {
          producto1: 'coca-cola',
          producto2: 'fanta',
          producto3: 'sprite',
        },
      },
      estanteria2: {
        cajon1: 'vacio',
        cajon2: {
          producto1: 'pantalones',
          producto2: 'camiseta',
        },
      },
    }

    expect(isProductInStore(store, 'camiseta')).toBeTruthy()
  })

  test('returns false if a product is not found in a store', () => {
    const store = {
      baul: {
        fondo: {
          objeto: 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando',
        },
      },
    }

    expect(isProductInStore(store, 'gameboy')).toBeFalsy()
  })
})
