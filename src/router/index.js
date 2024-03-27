import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tripulacao',
    name: 'tripulacao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Tripulacao" */ '../views/TripulacaoView.vue'),

    // rotas filhas
    // children:  [
    //   {
    //     path: 'luffy', // remova a barra inicial para indicar que é uma sub-rota
    //     name: 'luffy',
    //     component: () => import(/* webpackChunkName: "Luffy" */ '../views/LuffyView.vue')
    //   },
    //   {
    //     path: 'zoro',
    //     name: 'zoro',
    //     component: () => import(/* webpackChunkName: "Zoro" */ '../views/ZoroView.vue')
    //   },
    //   {
    //     path: 'nami',
    //     name: 'nami',
    //     component: () => import(/* webpackChunkName: "Nami" */ '../views/NamiView.vue')
    //   }
    // ]

  },

//rota luffy
  {
      path: '/luffy', // remova a barra inicial para indicar que é uma sub-rota
      name: 'luffy',
      component: () => import(/* webpackChunkName: "Luffy" */ '../views/LuffyView.vue')
  },

//rota zoro
  {
    path: '/zoro', // remova a barra inicial para indicar que é uma sub-rota
    name: 'zoro',
    component: () => import(/* webpackChunkName: "Luffy" */ '../views/ZoroView.vue')
  },

// rota nami
  {
    path: '/nami', // remova a barra inicial para indicar que é uma sub-rota
    name: 'nami',
    component: () => import(/* webpackChunkName: "Luffy" */ '../views/NamiView.vue')
  },

//rota usopp
  {
    path: '/usopp', // remova a barra inicial para indicar que é uma sub-rota
    name: 'usopp',
    component: () => import(/* webpackChunkName: "Luffy" */ '../views/UsoppView.vue')
  },

//rota sanji
  {
    path: '/sanji', // remova a barra inicial para indicar que é uma sub-rota
    name: 'sanji',
    component: () => import(/* webpackChunkName: "Luffy" */ '../views/SanjiView.vue')
  },

//rota chopper
  {
    path: '/chopper', // remova a barra inicial para indicar que é uma sub-rota
    name: 'chopper',
    component: () => import(/* webpackChunkName: "Luffy" */ '../views/ChopperView.vue')
  },

//rota robin
  {
    path: '/robin', // remova a barra inicial para indicar que é uma sub-rota
    name: 'robin',
    component: () => import(/* webpackChunkName: "Luffy" */ '../views/RobinView.vue')
  },

//rota frankyn
  {
    path: '/franky', // remova a barra inicial para indicar que é uma sub-rota
    name: 'franky',
    component: () => import(/* webpackChunkName: "Luffy" */ '../views/FrankyView.vue')
  },

//rota brook
  {
    path: '/brook', // remova a barra inicial para indicar que é uma sub-rota
    name: 'brook',
    component: () => import(/* webpackChunkName: "Luffy" */ '../views/BrookView.vue')
  },

//rota jinbei
  {
    path: '/jinbei', // remova a barra inicial para indicar que é uma sub-rota
    name: 'jinbei',
    component: () => import(/* webpackChunkName: "Luffy" */ '../views/JinbeiView.vue')
  },

  {
    path: '/contato',
    name: 'contato',
    component: () => import(/* webpackChunkName: "Contato" */ '../views/ContatoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
