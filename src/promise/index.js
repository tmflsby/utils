const PENDING = 'pending' // 初始未确定的状态
const RESOLVED = 'resolved' // 成功的状态
const REJECTED = 'rejected' // 失败的状态

function Promise (excutor) {
  this.status = 'pending' // 给promise对象指定status属性，初始值为pending
  this.data = undefined // 给promise对象指定一个用于存储结果数据的属性
  this.callbacks = [] // 每个元素的结构： {onResolved(){},onRejected(){}}

  // 将promise的状态改为成功，指定成功的value
  const resolve = (value) => {
    // 如果当前不是pending，直接结束
    if (this.status !== PENDING) return
    // 将状态改成成功
    this.status = RESOLVED
    // 保存成功的value
    this.data = value

    // 异步调用所有缓存的待执行成功的回调函数
    if (this.callbacks.length > 0) {
      // 启动一个延迟时间为0的定时器，在定时器的回调中执行所有成功的回调
      setTimeout(() => {
        this.callbacks.forEach(callback => {
          callback.onResolved(value)
        })
      })
    }
  }

  // 将promise的状态改为失败，指定失败的reason
  const reject = (reason) => {
    // 如果当前不是pending，直接结束
    if (this.status !== PENDING) return
    // 将状态改为失败
    this.status = REJECTED
    // 保存reason数据
    this.data = reason

    // 异步调用所有缓存的待执行失败的回调函数
    if (this.callbacks.length > 0) {
      // 启动一个延迟时间为 0 的定时器，在定时器的回调中执行所有失败的回调
      setTimeout(() => {
        this.callbacks.forEach(callback => {
          callback.onRejected(reason)
        })
      })
    }
  }

  // 调用excutor 来启动异步任务
  try {
    excutor(resolve, reject)
  } catch (error) {
    console.log(error)
    reject(error)
  }
}


/**
 * 用来指定成功/失败回调函数的方法
 * 1). 如果当前promise是resolved, 异步执行成功的回调函数onResolved
 * 2). 如果当前promise是rejected, 异步执行成功的回调函数onRejected
 * 3). 如果当前promise是pending, 保存回调函数
 * 返回一个新的promise对象
 * 它的结果状态由onResolved或者onRejected执行的结果决定
 * 2.1). 抛出error ==> 变为rejected, 结果值为error
 * 2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值
 * 2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)
 * */
Promise.prototype.then = function (onResolved, onRejected) {
  // 将value向下传递
  onResolved = typeof onResolved === 'function' ? onResolved: value => value

  // 将reason向下传递
  onRejected = typeof onRejected === 'function' ? onRejected: reason => {
    throw reason
  }

  return new Promise((resolve, reject) => {
    // 1. 调用指定的回调函数
    // 2. 根据回调执行结果来更新返回promise的状态
    const handle = (callback) => {
      try {
        const result  = callback(this.data)
        //  2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值
        // 2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)
        if (!(result instanceof  Promise)) {
          resolve(result)
        } else {
          result.then(
            value => resolve(value),
            reason => reject(reason)
          )
        }
      } catch (error) {
        // 2.1). 抛出error ==> 变为rejected, 结果值为error
        reject(error)
      }
    }

    if (this.status === RESOLVED) {
      setTimeout(() => {
        handle(onResolved)
      })
    } else if (this.status === REJECTED) {
      setTimeout(() => {
        handle(onRejected)
      })
    } else {  // PENDING
      this.callbacks.push({
        onResolved(value) {
          handle(onResolved)
        },
        onRejected(reason) {
          handle(onRejected)
        }
      })
    }
  })
}


/**
 * 用来指定失败回调函数的方法
 * catch是then的语法糖
 * */
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}


/**
 * 用来返回一个指定value的成功的promise
 * value可能是一个一般的值, 也可能是promise对象
 * */
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    // 如果value是一个promise，最终返回的promise的结果有value决定
    // value不是promise, 返回的是成功的promise, 成功的值就是value
    if (value instanceof  Promise) {
      value.then(resolve, reject)
    } else {
      resolve(value)
    }
  })
}


/**
 * 用来返回一个指定reason的失败的promise
 * */
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}


/**
 * 返回一个promise, 只有当数组中所有promise都成功才成功, 否则失败
 * */
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    // 已经成功的数量
    let resolvedCount = 0
    // 用来保存成功promise的value值
    const values = new Array(Promise.length)
    // 遍历所有promise, 取其对应的结果
    promises.forEach((promise, index) => {
      promise.then(
        value => {
          resolvedCount++
          values[index] = value
          // 都成功了
          if (resolvedCount === promises.length) {
            resolve(values)
          }
        },
        reason => reject(reason)
      )
    })
  })
}


/**
 * 返回一个promise, 由第一个完成promise决定
 * */
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    // 遍历所有promises，取其对应的结果
    promises.forEach(promise => {
      // 返回的promise有第一个完成的promise来决定其结果
      promise.then(resolve, reject)
    })
  })
}


/**
 * 返回一个延迟指定时间才成功(也可能失败)的promise
 * */
Promise.resolveDelay = function (value, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 如果value是一个promise，最终返回的promise的结果由value决定
      // value不是promise, 返回的是成功的promise, 成功的值就是value
      if (value instanceof Promise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    }, time)
  })
}


/**
 * 返回一个延迟指定时间才失败的promise
 * */
Promise.rejectDelay = function (reason, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason)
    }, time)
  })
}
