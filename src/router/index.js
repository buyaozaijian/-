import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'homepage',
    component: () => import('../views/Homepage.vue')
  },
  {
    path: '/user_center',
    name: 'user_center',
    component: () => import('../views/User_center.vue')
  },
  {
    path: '/saving_box',
    name: 'saving_box',
    component: () => import('../views/Saving_box.vue')
  },
  {
    path: '/up_video',
    name: 'up_video',
    component: () => import('../views/Up_video')
  },
  {
    path:'/friend_list',
    name:'friend_list',
    component:() => import('../views/Friend_list')
  },
  {
    path:'/up_video1',
    name:'up_video1',
    component:() => import('../views/Up_video1')
  },
  {
    path:'/videoPage',
    name:'videaPage',
    component:() => import('../views/videoPage')
  },
  {
    path:'/register_page',
    name:'register_page',
    component:() => import('../views/Register_page')
  },
  {
    path:'/try_login',
    name:'try_login',
    component:() => import('../views/Try_login'),
  },
  {
    path: '/user_center',
    name: 'user_center',
    component: () => import('../views/User_center')
  },
  {
    path:'/CreationCenter',
    name:'CreationCenter',
    component:() => import('../views/CreationCenter'),
  },
  {
    path:'/searching_box',
    name:'searching_box',
    component:() => import('../views/Searching_box')
  },
  {
    path:'/contribution',
    name:'contribution',
    component:() => import('../views/Contribution')
  },
  {
    path:'/part_show',
    name:'part_show',
    component:() => import('../views/part_show')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
