import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path : '/',
      name : 'login',
      meta : {
        title : '登录页'
      },
      component: () => import('@/views/login')
    },
    {
      path: '/layout',
      name: 'layout',
      meta : {
        requireAuth: true
      },
      component: () => import('@/views/layout/layout'),
      redirect : '/index',
      children : [
        {
          path : '/index',
          meta : {
            title : '首页',
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
        {
          path : '/swiperList',
          meta : {
            title : '轮播图列表'
          },
          component: () => import('@/views/swiper/index')
        },
        {
          path : '/addSwiper',
          name : 'addSwiper',
          meta : {
            title : '添加轮播图'
          },
          component: () => import('@/views/swiper/addSwiper')
        },
        {
          path : '/editSwiper',
          name : 'editSwiper',
          meta : {
            title : '编辑轮播图'
          },
          component: () => import('@/views/swiper/addSwiper')
        },
      ]
    }
  ]
})

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //判断要去的路由有没有requiresAuth
  if (to.matched.some(r => r.meta.requireAuth)) {
    //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，
    // 意思为：该路由添加该字段，表示进入该路由需要登陆的
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/',
        // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
        // query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
})

export default router
