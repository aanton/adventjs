import daysToXmas from './index'

describe('Day 5 challenge', () => {
  test('is a previous date', () => {
    expect(daysToXmas(new Date('Dec 1, 2021'))).toBe(24)
    expect(daysToXmas(new Date('Dec 24, 2021'))).toBe(1)
  })

  test('is a previous date with time', () => {
    expect(daysToXmas(new Date('Dec 1, 2021 00:00:01'))).toBe(24)
    expect(daysToXmas(new Date('Dec 1, 2021 23:59:59'))).toBe(24)
    expect(daysToXmas(new Date('Dec 24, 2021 00:00:01'))).toBe(1)
    expect(daysToXmas(new Date('Dec 24, 2021 23:59:59'))).toBe(1)
  })

  test('is xmas day', () => {
    expect(daysToXmas(new Date('Dec 25, 2021'))).toBe(0)
  })

  test('is xmas day with time', () => {
    expect(daysToXmas(new Date('Dec 25, 2021 00:00:01'))).toBe(0)
    expect(daysToXmas(new Date('Dec 25, 2021 23:59:59'))).toBe(0)
  })

  test('is a future date', () => {
    expect(daysToXmas(new Date('Dec 26, 2021'))).toBe(-1)
    expect(daysToXmas(new Date('Jan 1, 2022'))).toBe(-7)
  })

  test('is a future date with time', () => {
    expect(daysToXmas(new Date('Dec 26, 2021 00:00:01'))).toBe(-1)
    expect(daysToXmas(new Date('Dec 26, 2021 23:59:59'))).toBe(-1)
    expect(daysToXmas(new Date('Jan 1, 2022 00:00:01'))).toBe(-7)
    expect(daysToXmas(new Date('Jan 1, 2022 23:59:59'))).toBe(-7)
  })
})
