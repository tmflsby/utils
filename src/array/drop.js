/**
 * drop 得到数组的部分元素
 * 得到当前数组过滤掉左边count个后剩余元素组成的数组
 * 说明: 不改变当前数组, count默认是1
 * 如: drop([1,3,5,7], 2) ===> [5, 7]
 * @param {Array} arr
 * @param {Number} count
 * */
const drop = (arr, count = 1) => {
  if (arr.length === 0 || count >= arr.length) {
    return []
  }

  // 过滤原数组 产生新数组
  return arr.filter((value, index) => index >= count)
}


/**
 * dropRight
 * 得到当前数组过滤掉右边count个后剩余元素组成的数组
 * 说明: 不改变当前数组, count默认是1
 * 如: dropRight([1,3,5,7], 2) ===> [1, 3]
 * @param {Array} arr
 * @param {Number} count
 * */
const dropRight = (arr, count = 1) => {
  if (arr.length === 0 || count >= arr.length) {
    return []
  }

  return arr.filter((value, index) => index < arr.length - count)
}
