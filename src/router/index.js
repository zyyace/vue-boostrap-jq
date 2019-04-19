import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

import FormDataTable from '@/test/formDataTable'
import EventBusTest from '@/test/eventBusTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'formDataTable',
          name: 'tableTest',
          component: FormDataTable
        },
        {
          path: 'eventBusTest',
          name: 'eventBusTest',
          component: EventBusTest
        }
      ]
    }
  ]
})
