import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      component: resolve => require(['@/components/common/home.vue'], resolve),
      redirect: '/index',
      meta: { title: '全局文件' },
      children: [
        {
          path: '/login',
          component: resolve => require(['@/components/login-register/login.vue'], resolve),
          meta: {
            title: '登陆'
          }
        },
        {
          path: '/register',
          component: resolve => require(['@/components/login-register/register.vue'], resolve),
          meta: {
            title: '注册'
          }
        },
        {
          path: '/index',
          component: resolve => require(['@/views/index.vue'], resolve),
          meta: {
            title: '系统首页'
          }
        },
        // 之后只要有页面就放在下面

      ]
    },
    {
      path: '*',
      component: resolve => require(['@/views/404.vue'], resolve),
      meta: {
        title: '404'
      }
    }
  ]
})


/*  导航守卫, 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆  */

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' || to.path === '/register') {
//     next();
//   } else {
//     let token = localStorage.getItem('token');

//     if (token === null || token === '' || token === undefined) {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });

export default router;