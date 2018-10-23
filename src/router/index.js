import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/login',
      meta : {
        title : '登录页'
      },
      component: () => import('@/views/login')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout/layout'),
      redirect : '/index',
      children : [
        {
          path : '/index',
          meta : {
            title : '首页'
          },
          component: () => import('@/views/index/index')
        },

        {
          path : '/adminList',
          meta : {
            title : '管理员列表'
          },
          component: () => import('@/views/admin/index')
        },
        {
          path : '/addAdmin',
          meta : {
            title : '添加管理员'
          },
          component: () => import('@/views/admin/addAdmin')
        },
        {
          path : '/newsList',
          meta : {
            title : '新闻列表'
          },
          component: () => import('@/views/news/index')
        },
        {
          path : '/addNews',
          meta : {
            title : '添加新闻'
          },
          component: () => import('@/views/news/addNews')
        },
      ]
    }
  ]
})
