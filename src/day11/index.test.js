import shouldBuyFidelity from './index'

describe('Day 11 challenge', () => {
  test.each([1, 10, 20])(
    'should NOT buy the fidelity card when going $input times',
    input => {
      expect(shouldBuyFidelity(input)).toBeFalsy()
    }
  )

  test.each([30, 50, 100])(
    'should buy the fidelity card when going $input times',
    input => {
      expect(shouldBuyFidelity(input)).toBeTruthy()
    }
  )
})
