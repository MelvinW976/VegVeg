import { createRouter, createWebHistory } from 'vue-router'
import ReviewHome from '../views/ReviewHome.vue'
import WriteReview from '../views/WriteReview.vue'
import ReviewDetail from '../views/ReviewDetail.vue'
import HomeView from '../views/HomeView.vue'
import { write } from '@popperjs/core'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/veg',
      name: 'Explore',
      component: HomeView
    },
    {
      path: '/review',
      name: 'explore',
      component: HomeView
    },
    {
      path: '/writereview',
      name: 'Write',
      component: HomeView
    },
    // {
    //   path: '/veg/:name',
    //   name: 'vegName',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/veg/:vegid',
      name: 'reviewhome',
      component: ReviewHome
    },
    {
      path: '/writereview/:vegid',
      name: 'writereview',
      component: WriteReview
    },
    {
      path: '/review/:id',
      name: 'review',
      component: ReviewDetail
    },
    {
      path: '/upload',
      name: 'upload',
      component: WriteReview
    }
  ]
})

export default router
