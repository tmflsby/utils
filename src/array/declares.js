/**
 * map 方法
 * 返回一个由回调函数的返回值组成的新数组
 * @param {Array} arr
 * @param {Function} callback
 * */
const map = (arr, callback) => {
  // 声明一个空数组
  let result = []
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    result.push(callback(arr[i], i))
  }
  // 返回结果
  return result
}


/**
 * reduce 方法
 * 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
 * @param {Array} arr
 * @param {Function} callback,
 * @param {*} initValue
 * */
const reduce = (arr, callback, initValue) => {
  // 声明变量
  let result = initValue
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    result = callback(result, arr[i], i)
  }
  // 返回最终的结果
  return result
}


/**
 * filter 方法
 * 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
 * @param {Array} arr
 * @param {Function} callback
 * */
const filter = (arr, callback) => {
  // 声明空数组
  let result = []
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i)
    // 判断  如果为真 push到result中
    if (res) {
      result.push(arr[i])
    }
  }
  // 返回结果
  return result
}


/**
 * find 方法
 * 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
 * @param {Array} arr
 * @param {Function} callback
 * */
const find = (arr, callback) => {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i)
    // 判断
    if (res) {
      // 返回当前正在遍历的元素
      return arr[i]
    }
  }
  // 如果没有遇到满足条件的，返回 undefined
  return undefined
}


/**
 * findIndex 方法
 * 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。
 * @param {Array} arr
 * @param {Function} callback
 * */
const findIndex = (arr, callback) => {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i)
    // 判断
    if (res) {
      // 返回当前正在遍历的元素下标
      return i
    }
  }
  // 如果没有遇到满足条件的，返回 -1
  return -1
}


/**
 * every 方法
 * 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
 * @param {Array} arr
 * @param {Function} callback
 * */
const every = (arr, callback) => {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调  如果回调执行返回结果为 false
    if (!callback(arr[i], i)) {
      return false
    }
  }
  // 如果都满足条件则返回true
  return true
}


/**
 * some 方法
 * 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
 * @param {Array} arr
 * @param {Function} callback
 * */
const some = (arr, callback) => {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调  如果回调执行返回结果为 true
    if (callback(arr[i], i)) {
      return true
    }
  }
  // 如果都满足条件则返回false
  return false
}
