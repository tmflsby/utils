/**
 * reverseString 字符串倒序
 * 生成一个倒序的字符串
 * @param {String} str
 * */
const reverseString = (str) => {
  // 将字符串转为数组
  // let arr = str.split('')
  // let arr = [...str]
  // let arr = Array.from(str)
  // 翻转数组
  // arr.reverse()
  // 将数组拼接成字符串,并返回
  // return arr.join('')
  return Array.from(str).reverse().join('')
}


/**
 * palindrome 字符串是否是回文
 * 如果给定的字符串是回文，则返回 true ；否则返回 false
 * @param {String} str
 * */
const palindrome = (str) => {
  return reverseString(str) === str
}


/**
 * truncate 截取字符串
 * 如果字符串的长度超过了size, 截取前面size长度部分, 并以...结束
 * @param {String} str
 * @param {Number} size
 * */
const truncate = (str, size) => {
  return str.length > size ? str.slice(0, size) + '...' : str
}
