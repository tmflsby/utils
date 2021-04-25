/**
 * bind方法
 *  给fn绑定this为obj, 并指定参数为后面的n个参数 (功能等同于函数对象的bind方法)
 * */
const bind = (fn, obj, ...args) => {
  // 返回一个新函数
  return (...args2) => {
    // 通过call调用原函数, 并指定this为obj, 实参为args与args2
    return call(fn, obj, ...args, ...args2)
  }
}
