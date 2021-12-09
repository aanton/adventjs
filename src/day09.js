/**
 * @param {Array} collection
 * @param {Function | string} it
 * @returns Object
 */
export default function grouBy(collection, it) {
  return collection.reduce((acc, item) => {
    const value = typeof it === 'function' ? it(item) : item[it]
    acc[value] = acc[value] ? [...acc[value], item] : [item]

    return acc
  }, {})
}
