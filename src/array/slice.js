/**
 * var new_array = slice(array, [begin[, end]])
 * 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变
 * @param {Array} arr
 * @param {Number} begin
 * @param {Number} end
 * */
const slice = (arr, begin, end) => {
  // 如果当前数组是[], 直接返回[]
  if (arr.length === 0) {
    return []
  }

  // 判断begin
  begin = begin || 0

  // 如果begin超过最大下标, 直接返回[]
  if (begin >= arr.length) {
    return []
  }

  // 判断end
  end = end || arr.length

  // 如果end超过最大下标,则end为arr.length
  if (end > arr.length) {
    end = arr.length
  }

  // 如果end不大于begin, 直接返回[]
  if (end <= begin) {
    return []
  }

  // 声明一个空数组
  const result = []
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      // 将下标对应的元素压入到数组
      result.push(arr[i])
    }
  }
  return result
}
