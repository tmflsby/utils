/**
 * myInstanceof
 * 自定义instanceof
 * 功能: 判断obj是否是Type类型的实例
 * 实现: fn的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false
 * @param {Object} obj
 * @param {Function} fn
 * */
const myInstanceof = (obj, fn) => {
  // 获取函数的显式原型
  let prototype = fn.prototype
  // 获取obj的隐式原型对象
  let proto = obj.__proto__
  // 遍历原型链
  while (proto) {
    // 检测原型对象是否相等
    if (prototype === proto) {
      return true
    }
    // 如果不等于
    proto = proto.__proto__
  }
  return false
}
