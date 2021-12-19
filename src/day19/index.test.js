import learn from './index'

const cases = [
  {time: 10, courses: [2, 3, 8, 1, 4], expected: [0, 2]},
  {time: 15, courses: [2, 10, 4, 1], expected: [1, 2]},
  {time: 25, courses: [10, 15, 20, 5], expected: [0, 1]},
  {time: 8, courses: [8, 2, 1], expected: [1, 2]},
  {time: 8, courses: [8, 2, 1, 4, 3], expected: [3, 4]},
  {time: 4, courses: [10, 14, 20], expected: null},
  {time: 5, courses: [5, 5, 5], expected: null},
]

describe('Day 19 challenge', () => {
  test.each(cases)(
    'gets $expected with $time and $courses',
    ({time, courses, expected}) => {
      expect(learn(time, courses)).toEqual(expected)
    }
  )
})
