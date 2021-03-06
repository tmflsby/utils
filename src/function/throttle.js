/**
 * throttle 节流
 * 创建一个节流函数，在 wait 毫秒内最多执行 callback 一次
 * @param {Function} callback
 * @param {Number} wait
 * */
const throttle = (callback, wait) => {
  // 定义开始时间
  let start = 0
  // 返回结果是一个函数
  return (e) => {
    // 获取当前的时间戳
    let now = Date.now()
    // 判断
    if (now - start >= wait) {
      // 若满足条件，则执行回调函数
      callback.call(this, e)
      // 修改开始时间
      start = now
    }
  }
}
