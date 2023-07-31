import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
