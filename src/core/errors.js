class Errors {
  constructor () {
    this.errors = {}
  }
  has (field) {
    if ('error' in this.errors) {
      return this.errors['error'].hasOwnProperty(field)
    }
  }
  any () {
    if ('error' in this.errors) {
      return Object.keys(this.errors['error']).length > 0
    } else {
      return false
    }
  }
  get (field) {
    if ('error' in this.errors) {
      if (field in this.errors['error']) {
        return this.errors['error'][field][0]
      } else {
        return ''
      }
    } else {
      return ''
    }
  }
  getAll () {
    if ('error' in this.errors) {
      return this.errors['error']
    } else {
      return null
    }
  }
  record (error) {
    this.errors = error
  }
  clear (field) {
    if (field) {
      if ('error' in this.errors) {
        delete this.errors['error'][field]
      }
    } else {
      this.errors = {}
    }
  }
}
export default Errors
