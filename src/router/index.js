import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import List from '@/views/List'
import Info from '@/views/Info'
import Login from '@/views/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }

    // 如果你要模拟“滚动到锚点”的行为：
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '首页',
        requiresAuth: false
      }
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      children: [
        // {
        //   path: 'info',
        //   name: 'info',
        //   component: Info,
        //   meta: {
        //     title: '详情',
        //     requiresAuth: false
        //   }
        // }
      ],
      meta: {
        title: '列表',
        requiresAuth: false
      }
    },
    {
      path: '/list/info',
      name: 'info',
      component: Info,
      meta: {
        title: '详情',
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录',
        requiresAuth: false
      }
    },
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach-to', to)
  console.log('beforeEach-from', from)
  // console.log('beforeEach-next', next)
  if (to.meta.requiresAuth && !sessionStorage.getItem("token")) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})


export default router
