import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {return originalPush.call(this, location).catch(err => err)}

Vue.use(VueRouter)
let router = new VueRouter({
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/master',
    children: [
      // {
      //   path: 'home',
      //   name: 'home',
      //   component: () => import('../views/home.vue'),
      // },
    ],
  },
    {
      path: '*',
      redirect: '/',
    },
  ]
});

router.afterEach((to, form, next) => {

  window.scrollTo(0, 0);
})

export default router
