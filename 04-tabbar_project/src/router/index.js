import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Tabbar/Home')
const About = () => import('../views/Tabbar/About')
const Cart = () => import('../views/Tabbar/Cart/Cart')
const Profile = () => import('../views/Tabbar/Profile')


Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]
const router = new Router({
  routes,
  mode: 'history',
})
export default router
