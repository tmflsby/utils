/**
 * pull
 * 删除原数组中与value相同的元素, 返回所有删除元素的数组
 * 原数组发生了改变
 * 如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]
 * @param {Array} arr
 * @param {Number} args
 * */
const pull = (arr, ...args) => {
  // 声明空数组  保存删掉的元素
  const result = []
  // 遍历
  for (let i = 0; i < arr.length; i++) {
    // 判断当前元素是否在args数组中
    if (args.includes(arr[i])) {
      // 将当前元素的值存到result中
      result.push(arr[i])
      // 删除当前元素
      arr.splice(i, 1)
      // 下标自减
      i--
    }
  }
  return result
}


/**
 * pullAll
 * 功能与pull一致, 只是参数变为数组
 * @param {Array} arr
 * @param {Array} values
 * */
const pullAll = (arr, values) => {
  if (!values || !Array.isArray(values)) {
    return []
  }
  return pull(arr, ...values)
}
