/**
 * difference 数组取差异
 * 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
 * difference([1,3,5,7], [5, 8]) ==> [1, 3, 7]
 * @param {Array} arr1
 * @param {Array} arr2
 * */
const difference = (arr1, arr2 = []) => {
  if (arr1.length === 0) {
    return []
  }

  if (arr2.length === 0) {
    return arr1.slice()
  }

  return arr1.filter(item => !arr2.includes(item))
}
