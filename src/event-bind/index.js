/**
 * addEventListener 事件委托/代理
 * 将多个子元素的同类事件监听委托给(绑定在)共同的一个父组件上
 * 好处：
 * 减少内存占用(事件监听回调从n变为
 * 动态添加的内部元素也能响应
 * @param {String} el
 * @param {String} type
 * @param {Function} fn
 * @param {String} selector
 * */
const addEventListener = (el, type, fn, selector) => {
  // 判断 el 的类型
  if (typeof el === 'string') {
    el = document.querySelector(el)
  }
  // 事件绑定
  if (!selector) {
    el.addEventListener(type, fn)
  } else {
    el.addEventListener(type, function (e) {
      // 获取点击的目标事件源
      const target = e.target
      // 判断选择器与目标元素是否相符合
      if (target.matches(selector)) {
        // 若符合  则调用回调
        fn.call(target, e)
      }
    })
  }
}
