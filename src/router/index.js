import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

import Table from '@/test/table/table'
import FormDataTable from '@/test/table/formDataTable'
import ModalTable from '@/test/table/modalTable'
import SubTable from '@/test/table/subTable'

import EventBusTest from '@/test/eventBusTest'

import TinyTest from '@/test/tinymce/tinyTest'
import TinyShowImage from '@/test/tinymce/showImage'

import KeepAlive from '@/test/keepAlive'
import KeepAlive1 from '@/test/keepAlive/keepAlive1'
import KeepAlive2 from '@/test/keepAlive/keepAlive2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'table',
          name: 'table',
          component: Table,
          children: [
            {
              path: 'formDataTable',
              name: 'tableTest',
              component: FormDataTable
            },
            {
              path: 'modalTable',
              name: 'modalTable',
              component: ModalTable
            },
            {
              path: 'subTable',
              name: 'subTable',
              component: SubTable
            }
          ]
        },
        {
          path: 'eventBusTest',
          name: 'eventBusTest',
          component: EventBusTest
        },
        {
          path: 'tinyTest',
          name: 'tinyTest',
          component: TinyTest
        },
        {
          path: 'tinyShowImage',
          name: 'tinyShowImage',
          component: TinyShowImage
        }, {
          path: 'keepAlive',
          name: 'keepAlive',
          component: KeepAlive,
          children: [
            {
              path: 'keepAlive1',
              name: 'keepAlive1',
              component: KeepAlive1,
              meta: {
                keepAlive: true // 需要被缓存
              }
            },
            {
              path: 'keepAlive2',
              name: 'keepAlive2',
              component: KeepAlive2,
              meta: {
                keepAlive: true // 需要被缓存
              }
            }
          ]
        }
      ]
    }
  ]
})
