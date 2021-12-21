/**
 * @param {number} capacity
 * @param {number[][]} trip
 * @returns {boolean}
 */
export default function canCarry(capacity, trip) {
  let pendingSteps = []

  for (let index = 0; index < trip.length; index++) {
    const currentStep = trip[index]
    if (currentStep[0] > capacity) return false

    pendingSteps = pendingSteps.filter(step => step[2] > currentStep[1])
    const pendingGifts = pendingSteps.reduce((acc, step) => acc + step[0], 0)
    if (currentStep[0] + pendingGifts > capacity) return false

    pendingSteps.push(currentStep)
  }

  return true
}
