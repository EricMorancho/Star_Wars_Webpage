import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/InicioView.vue')
  },
  {
    path: '/starships/:id',
    name: 'starships',
    // route level code-splitting
    // this generates a separate chunk (starships.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "starships" */ '../views/StarshipsView.vue')
  },
  {
    path: '/starshipList',
    name: 'starshipList',
    // route level code-splitting
    // this generates a separate chunk (starships.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "StarshipList" */ '../views/StarshipListView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (starships.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/LoginView.vue')
  },
  {
    path: '/CharactersList',
    name: 'CharactersList',
    // route level code-splitting
    // this generates a separate chunk (starships.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CharactersList" */ '../views/CharactersListView.vue')
  },
  {
    path: '/Characters/:id',
    name: 'characters',
    // route level code-splitting
    // this generates a separate chunk (starships.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Characters" */ '../views/CharactersView.vue')
  },
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
