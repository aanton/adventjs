/**
 * @param {number} time
 * @param {number[]} courses
 * @returns {[number, number] | null}
 */
export default function learn(time, courses) {
  if (courses.length < 2) return null

  const result = {time: 0, courses: null}

  loop: for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const sum = courses[i] + courses[j]

      if (sum > time) continue
      if (sum > result.time) {
        result.time = sum
        result.courses = [i, j]

        if (sum === time) break loop
      }
    }
  }

  return result.courses
}
