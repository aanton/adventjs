import canCarry from './index'

// prettier-ignore
const positiveCases = [
  {capacity: 3, trip: [[2, 1, 5], [3, 5, 7]]},
  {capacity: 3, trip: [[1, 1, 5], [2, 2, 10]]},
  {capacity: 4, trip: [[2, 3, 8], [2, 5, 7]]},
]

// prettier-ignore
const negativeCases = [
  {capacity: 4, trip: [[2, 5, 8], [3, 6, 10]]},
  {capacity: 1, trip: [[2, 3, 8]]},
  {capacity: 2, trip: [[1, 2, 4], [2, 3, 8]]},
]

describe('Day 21 challenge: Checks the feasibility of a trip to transport gifts', () => {
  test.each(positiveCases)(
    'can carry $capacity gifts in a custom trip',
    ({capacity, trip}) => {
      expect(canCarry(capacity, trip)).toBeTruthy()
    }
  )

  test.each(negativeCases)(
    'can NOT carry $capacity gifts in a custom trip',
    ({capacity, trip}) => {
      expect(canCarry(capacity, trip)).toBeFalsy()
    }
  )
})
