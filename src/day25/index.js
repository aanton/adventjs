/**
 * @param {string} direction
 * @param {string[][]} game
 * @returns {boolean}
 */
export default function canMouseEat(direction, game) {
  const getMousePosition = game => {
    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[0].length; j++) {
        if (game[i][j] === 'm') return [i, j]
      }
    }
  }

  const [i, j] = getMousePosition(game)
  switch (direction) {
    case 'up':
      return game[i - 1]?.[j] === '*'
    case 'down':
      return game[i + 1]?.[j] === '*'
    case 'left':
      return game[i]?.[j - 1] === '*'
    case 'right':
      return game[i]?.[j + 1] === '*'
  }
}
