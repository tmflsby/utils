/**
 * 浅拷贝
 * 只是复制了对象属性或数组元素本身(只是引用地址值)
 * es6
 * @param {*} target
 * */
const shallowClone1 = (target) => {
  // 类型判断
  if (typeof target === 'object' && target !== null) {
    // 判断数据是否为数组
    if (Array.isArray(target)) {
      return [...target]
    } else {
      return {...target}
    }
  } else {
    return target
  }
}


/**
 * es5
 * @param {*} target
 * */
const shallowClone2 = (target) => {
  // 类型判断
  if (typeof target === 'object' && target !== null) {
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {}
    // 遍历 target 数据
    for (let key in target) {
      // 判断当前对象身上是否包含该属性
      if (target.hasOwnProperty(key)) {
        // 将属性设置到result结果数据中
        result[key] = target[key]
      }
    }
    return  result
  } else {
    return target
  }
}
