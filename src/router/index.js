import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'


const routes = [
  {
    path: '/home',
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
  
  },
  {
    path: '/',
    name: 'login',
    component:LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
