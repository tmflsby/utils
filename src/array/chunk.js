/**
 * chunk 数组分组
 * 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 * 如: [1, 3, 5, 6, 7, 8] 调用chunk(arr, 4) ==> [[1, 3, 5, 6], [7,8]]
 * @param {Array} arr
 * @param {Number} size
 * */
const chunk = (arr, size = 1) => {
  if (arr.length === 0) {
    return []
  }

  // 声明两个变量
  let result = []
  let tmp = []
  // 遍历
  debugger
  arr.forEach(item => {
    // 判断tmp元素长度是否为0
    if (tmp.length === 0) {
      // 将tmp压入到result中
      result.push(tmp)
    }
    // 将元素push到临时数组tmp中
    tmp.push(item)
    // 判断
    if (tmp.length === size) {
      tmp = []
    }
  })
  return result
}
