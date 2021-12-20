import pangram from './index'

const cases = [
  {input: 'Extraño pan de col y kiwi se quemó bajo fugaz vaho', expected: true},
  {
    input: 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!',
    expected: true,
  },
  {
    input:
      'Esto es una frase larga pero no tiene todas las letras del abecedario',
    expected: false,
  },
  {input: 'De la a a la z, nos faltan letras', expected: false},
]

describe('Day 20 challenge: Checks a letter is a pangram', () => {
  test.each(cases)('gets $expected using $input', ({input, expected}) => {
    expect(pangram(input)).toEqual(expected)
  })
})
