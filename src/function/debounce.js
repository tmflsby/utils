/**
 * debounce 防抖
 * 创建一个防抖动函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 callback
 * */
const debounce = (callback, wait) => {
  // 定时器变量
  let timeId = null
  // 返回一个函数
  return (e) => {
    // 判断
    if (timeId !== null) {
      // 清空定时器
      clearTimeout(timeId)
    }
    // 启动定时器
    timeId = setTimeout(() => {
      //执行回调
      callback.call(this, e)
      // 重置定时器变量
      timeId = null
    }, wait)
  }
}
