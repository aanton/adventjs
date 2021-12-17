/**
 * @param {Array} carriers
 * @param {string} carrierId
 * @returns {number}
 */
export default function countPackages(carriers, carrierId) {
  const found = carriers.find(carrier => carrier[0] === carrierId)
  if (!found) return 0

  const [, packages, subordinatesIds] = found
  return subordinatesIds.reduce(
    (acc, subordinateId) => acc + countPackages(carriers, subordinateId),
    packages
  )
}
