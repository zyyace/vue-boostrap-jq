import Vue from 'vue'

const errorHandler = (error, vm) => {
  console.log('errorHandler')
  console.error(vm)
  console.error(error)
}

Vue.config.errorHandler = errorHandler

export default {
  install (Vue) {
    Vue.prototype.$throw = (error) => errorHandler(error, this)
  }
}
