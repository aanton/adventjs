/**
 * @param {number[]} obstacles
 * @returns {number}
 */
export default function getMinJump(obstacles) {
  if (obstacles.length === 0) return 1

  for (let step = 2; ; step++) {
    if (obstacles.every(obstacle => obstacle % step !== 0)) {
      return step
    }
  }
}
