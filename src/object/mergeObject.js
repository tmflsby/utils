/**
 * mergeObject
 * 合并多个对象, 返回一个合并后对象(不改变原对象)
 * 例子:
 * { a: [{ x: 2 }, { y: 4 }], b: 1}
 * { a: { z: 3}, b: [2, 3], c: 'foo'}
 * 合并后:
 * { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
 * @param {Object} objs
 * */
const mergeObject = (...objs) => {
  // 声明空对象
  const result = {}
  // 遍历所有参数对象
  objs.forEach(obj => {
    // 获取当前对象所有属性
    Object.keys(obj).forEach(key => {
      // 检测 result 中是否存在key属性
      if (result.hasOwnProperty(key)) {
        result[key] = [].concat(result[key], obj[key])
      } else {
        // 如果没有 则直接写入
        result[key] = obj[key]
      }
    })
  })
  return result


  // return objs.reduce((pre, obj) => {
  //   return Object.keys(obj).reduce((p, key) => {
  //     p[key] = !p.hasOwnProperty(key) ? obj[key] : [].concat(p[key], obj[key])
  //     return p
  //   }, pre)
  // }, {})
}
