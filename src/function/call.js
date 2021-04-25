/**
 * call方法
 * 执行fn, 使this为obj, 并将后面的n个参数传给fn(功能等同于函数对象的call方法)
 * */
const call = (fn, obj, ...args) => {
  // 如果obj是undefined/null, this指定为全局对象
  if (obj === undefined || obj === null) {
    obj = globalThis // 全局对象
  }

  // 给obj添加一个临时方法, 方法指向的函数就是fn
  obj.tempFn = fn
  // 通过obj来调用这个方法 ==> 也就会执行fn函数 ==> 此时fn中的this肯定为obj
  const result = obj.tempFn(...args)
  // 删除obj上的临时方法
  delete obj.tempFn
  // 返回fn执行的结果
  return result
}
