import canMouseEat from './index'

describe('Day 25 challenge', () => {
  test('checks the mouse movements in the first room', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*'],
    ]

    expect(canMouseEat('up', room)).toBeFalsy()
    expect(canMouseEat('down', room)).toBeTruthy()
    expect(canMouseEat('right', room)).toBeFalsy()
    expect(canMouseEat('left', room)).toBeFalsy()
  })

  test('checks the mouse movements in the second room', () => {
    const room = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*'],
    ]

    expect(canMouseEat('up', room)).toBeFalsy()
    expect(canMouseEat('down', room)).toBeFalsy()
    expect(canMouseEat('right', room)).toBeTruthy()
    expect(canMouseEat('left', room)).toBeFalsy()
  })

  // Additional tests
  test('checks the mouse movements from a corner', () => {
    const room = [
      [' ', ' ', ' '],
      [' ', ' ', '*'],
      [' ', ' ', 'm'],
    ]

    expect(canMouseEat('up', room)).toBeTruthy()
    expect(canMouseEat('down', room)).toBeFalsy()
    expect(canMouseEat('right', room)).toBeFalsy()
    expect(canMouseEat('left', room)).toBeFalsy()
  })
})
