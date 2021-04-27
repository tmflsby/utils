/**
 * merge
 * 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)
 * 如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]
 * @param {Array} arr1
 * @param {Array} arr2
 * */
const mergeArray = (arr1, arr2) => {
  let result = arr1.slice()

  if (!arr2 || arr2.length === 0) {
    return result
  }

  arr2.forEach(item => {
    if (result.indexOf(item) === -1) {
      result.push(item)
    }
  })

  return result
}
