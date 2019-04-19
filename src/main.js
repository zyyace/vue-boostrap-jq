// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
// modal一闪而过的问题 暂时把这个先注释
// import 'bootstrap/dist/js/bootstrap.min.js'

import 'bootstrap-table/dist/bootstrap-table.min.js'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN'

import EventBus from './utils/eventBus'

Vue.use(EventBus)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
