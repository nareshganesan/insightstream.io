import Errors from './errors'

class Form {
  constructor (data) {
    this.originalData = data
    for (let field in data) {
      this[field] = data[field]
    }
    this.errors = new Errors()
  }
  reset () {
    for (let field in this.originalData) {
      this[field] = ''
    }
    this.errors.clear()
  }
  clearErrors () {
    this.errors.clear()
  }
  data () {
    let data = {}
    for (let property in this.originalData) {
      data[property] = this[property]
    }
    return data
  }
  post (url) {
    return this.submit('post', url)
  }
  get (url) {
    return this.submit('get', url)
  }
  put (url) {
    return this.submit('put', url)
  }
  patch (url) {
    return this.submit('patch', url)
  }
  delete (url) {
    return this.submit('delete', url)
  }
  submit (requestType, url) {
    return new Promise((resolve, reject) => {
      window.axios.defaults.headers.common['Authorization'] = window.lsd.get('token') ? 'Bearer ' + window.lsd.get('token') : ''
      window.axios[requestType](url, this.data())
        .then(response => {
          this.onSuccess(response)
          resolve(response)
        })
        .catch(error => {
          this.onFail(error)
          reject(error)
        })
    })
  }

  onSuccess (response) {
    // handle success event
    this.reset()
  }
  onFail (error) {
    // handle error event
    if (error.response) {
      this.errors.record(error.response.data)
    } else {
      console.log(error)
    }
  }
}

export default Form
