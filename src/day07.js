/**
 * @param {Object} store
 * @param {string} product
 * @returns boolean
 */
export default function isProductInStore(store, product) {
  const flattenObjectValues = (/** @type {Object} */ object) => {
    let values = []

    Object.values(object).forEach(value => {
      if (typeof value === 'object') {
        values = [...values, ...flattenObjectValues(value)]
      } else {
        values.push(value)
      }
    })

    return values
  }

  return flattenObjectValues(store).includes(product)
}
