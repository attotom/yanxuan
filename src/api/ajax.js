import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') { // 默认为GET请求
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => { // 将对象转化为数组
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&')) // 去除多余&符号
        url = url + '?' + dataStr
      }

      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
