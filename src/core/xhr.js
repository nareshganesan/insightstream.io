class CustXHR {
  xhrError () {
    console.error(this.statusText)
  }
  loadFile (url, reqType = 'GET', isAsync = true, callback /*, opt_arg1, opt_arg2, ... */) {
    this.callback = callback
    var xhr = new XMLHttpRequest()
    xhr.callback = callback
    xhr.arguments = Array.prototype.slice.call(arguments, 2)
    xhr.onload = callback
    xhr.onerror = this.xhrError
    xhr.open(reqType, url, isAsync)
    var token = window.lsd.get('token') ? 'Bearer ' + window.lsd.get('token') : ''
    xhr.setRequestHeader('Authorization', token)
    xhr.send(null)
  }
}

export default CustXHR
