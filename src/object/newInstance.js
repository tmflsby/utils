/**
 * newInstance
 * 创建 fn 构造函数的实例对象
 * @param {Function} fn
 * @param {*} args
 * */
const newInstance = (fn, ...args) => {
  // 1. 创建一个新对象
  const obj = {}
  // 2. 修改函数内部this指向新对象 并执行
  const result = fn.call(obj, ...args)
  // 修改新对象的原型对象
  obj.__proto__ = fn.prototype
  // 3. 返回新对象  如果构造函数执行的结果是对象, 返回这个对象
  return result instanceof Object ? result : obj
}
