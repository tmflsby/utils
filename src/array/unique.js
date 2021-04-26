/**
 * 利用 forEach()和 indexOf()
 * 本质是双重遍历, 效率差些
 * @param {Array} arr
 * */
const unique1 = (arr) => {
  // 声明一个空数组
  const result = []
  // 遍历原始数组
  arr.forEach(item => {
    // 检测result数组中是否包含这个元素
    if (result.indexOf(item) === -1) {
      // 若没有该元素，则插入到result中
      result.push(item)
    }
  })
  // 返回result
  return result
}


/**
 * 利用forEach() + 对象容器
 * 只需一重遍历, 效率高些
 * @param {Array} arr
 * */
const unique2 = (arr) => {
  // 声明一个空数组
  const result = []
  // 声明一个空对象
  const obj = {}
  // 遍历数组
  arr.forEach(item => {
    if (obj[item] === undefined) {
      // 将item作为下标存储在obj中
      obj[item] = true
      result.push(item)
    }
  })
  // 返回结果
  return result
}


/**
 * 利用ES6语法: from + Set 或者 ... + Set
 * 编码简洁
 * @param {Array} arr
 * */
const unique3 = (arr) => {
  // 将数组转化为集合 Set
  // 将set展开创建一个数组
  // return Array.from(new Set(arr))
  return [...new Set(arr)]
}
