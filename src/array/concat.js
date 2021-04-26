/**
 * var new_array = concat(array, value1[, value2[, ...[, valueN]]])
 * 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变
 * @param {Array} arr
 * @param {*} values
 * */
const concat = (arr, ...values) => {
  // 声明一个空数组
  const result = [...arr]
  // 遍历数组
  values.forEach(item => {
    // 判断item是否为数组
    if (Array.isArray(item)) {
      result.push(...item)
    } else {
      result.push(item)
    }
  })
  return result
}
