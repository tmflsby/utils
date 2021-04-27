/**
 * 深拷贝
 * 不仅复制了对象属性或数组元素本身, 还复制了指向的对象(使用递归)
 * JSON转换
 * 问题1: 函数属性会丢失
 * 问题2: 循环引用会出错
 * @param {*} target
 * */
const deepClone1 = (target) => {
  // 通过JSON.stringify() 将target转化为字符串 并赋值给str
  let str = JSON.stringify(target)

  // 将JSON字符串创建为JS数据 并返回
  return  JSON.parse(str)
}


/**
 * 递归
 * 解决问题1: 函数属性还没丢失
 * @param {*} target
 * */
const deepClone2 = (target) => {
  // 检测数据类型
  if (typeof target === 'object' && target !== null) {
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {}
    // 遍历对象
    for (let key in target) {
      // 检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
      if (target.hasOwnProperty(key)) {
        // copy
        result[key] = deepClone2(target[key])
      }
    }
    return result
  } else {
    return target
  }
}


/**
 * 解决问题2: 循环引用正常
 * @param {*} target
 * @param map
 * */
const deepClone3 = (target, map = new Map()) => {
  // 检测数据类型
  if (typeof target === 'object' && target !== null) {
    // 克隆数据之前，进行判断，数据之前是否克隆过
    let cache = map.get(target)
    if (cache) {
      return cache
    }
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {}
    // 将新的结果存入到容器中
    map.set(target, result)
    // 遍历对象
    for (let key in target) {
      // 检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
      if (target.hasOwnProperty(key)) {
        // copy
        result[key] = deepClone3(target[key], map)
      }
    }
    return result
  } else {
    return target
  }
}

/**
 * 优化遍历性能
 * 数组: while | for | forEach() 优于 for-in | keys()&forEach()
 * 对象: for-in 与 keys()&forEach() 差不多
 * */
const deepClone4 = (target, map = new Map()) => {
  // 检测数据类型
  if (typeof target === 'object' && target !== null) {
    // 克隆数据之前，进行判断，数据之前是否克隆过
    let cache = map.get(target)
    if (cache) {
      return cache
    }
    // 判断目标数据的类型
    let isArray = Array.isArray(target)
    // 创建一个容器
    const result = isArray ? [] : {}
    // 将新的结果存入到容器中
    map.set(target, result)
    // 遍历对象
    // 如果目标数据为数组
    if (isArray) {
      // forEach 遍历
      target.forEach((item, index) => {
        result[index] = deepClone4(item, map)
      })
    } else {
      // 如果是对象, 获取所有的键名，然后forEach 遍历
      Object.keys(target).forEach(key => {
        result[key] = deepClone4(target[key], map)
      })
    }
    return result
  } else {
    return target
  }
}
