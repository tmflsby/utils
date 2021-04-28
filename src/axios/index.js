const axios = ({method, url, params, data}) => {
  // 转换为大写
  method = method.toUpperCase();
  return new Promise((resolve, reject) => {
    // 四步骤
    // 1. 创建对象
    const xhr = new XMLHttpRequest()
    // 2. 初始化
    // 处理 params 对象 a=100&b=200
    let str = ''
    for (let k in params) {
      str += `${k}=${params[k]}&`
    }
    str = str.slice(0, -1)
    xhr.open(method, url + '?' + str)
    // 3. 发送
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
      // Content-type mime类型设置
      xhr.setRequestHeader('Content-type', 'application/json')
      // 甚至请求体
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
    // 4. 处理结果
    // 设置响应结果的类型为JSON
    xhr.responseType = 'json'
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // 判断响应状态码 2xx
        if (xhr.status >= 200 && xhr.status < 300) {
          // 成功状态
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            body: xhr.response
          })
        } else {
          reject(new Error('请求失败，失败的状态码为' + xhr.status))
        }
      }
    }
  })
}


axios.get = (url, options) => axios(Object.assign(options, {url, method: 'GET'}))

axios.post = (url, options) => axios(Object.assign(options, {url, method: 'POST'}))

axios.put = (url, options) => axios(Object.assign(options, {url, method: 'PUT'}))

axios.delete = (url, options) => axios(Object.assign(options, {url, method: 'DELETE'}))
