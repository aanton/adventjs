/**
 * @param {Date} datetime
 * @returns number
 */
export default function daysToXmas(datetime) {
  const xmasDay = new Date('Dec 25, 2021')
  const date = new Date(datetime.toDateString())

  return Math.round((xmasDay.getTime() - date.getTime()) / (24 * 3600 * 1000))
}
