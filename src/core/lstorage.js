const storage = window.localStorage

// local storage driver
let lstore = {}

lstore.lsd = {
  set (key, value) {
    value = JSON.stringify(value)
    storage.setItem(key, value)
  },
  get (key, defaultVal) {
    let value = storage.getItem(key, defaultVal)
    if (value === null || value === 'undefined' || value === '') {
      value = defaultVal
    } else {
      value = JSON.parse(value)
    }
    return value
  }
}

export default lstore
