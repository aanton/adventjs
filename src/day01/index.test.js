import countSheeps from './index'

describe('Day 1 challenge', () => {
  test('filters sheeps by their color & name', () => {
    const sheeps = [
      {name: 'Noa', color: 'azul'},
      {name: 'Euge', color: 'rojo'},
      {name: 'Navidad', color: 'rojo'},
      {name: 'Ki Na Ma', color: 'rojo'},
    ]

    expect(countSheeps(sheeps)).toEqual([
      {name: 'Navidad', color: 'rojo'},
      {name: 'Ki Na Ma', color: 'rojo'},
    ])
  })
})
