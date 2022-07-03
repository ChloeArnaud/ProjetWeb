import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "produit" */ '../views/AboutView.vue')
  },
  {
    path:'/accueil',
    name:'accueil',
    component: () => import(/* webpackChunkName: "accueil" */ '../views/Accueil.vue')
  },
  {
    path:'/categorie',
    name:'categorie',
    component: () => import(/* webpackChunkName: "categorie" */ '../views/Categorie.vue')
  },
  {
    path:'/produitEcriture',
    name:'produitEcriture',
    component: () => import(/* webpackChunkName: "produitEcriture" */ '../views/ProduitEcriture.vue')
  },
  {
    path:'/produitAgenda',
    name:'produitAgenda',
    component: () => import(/* webpackChunkName: "produitAgenda" */ '../views/ProduitAgenda.vue')
  },
  {
    path:'/produitCahier',
    name:'produitCahier',
    component: () => import(/* webpackChunkName: "produitCahier" */ '../views/ProduitCahier.vue')
  },
  {
    path:'/produitBureau',
    name:'produitBureau',
    component: () => import(/* webpackChunkName: "produitBureau" */ '../views/ProduitBureau.vue')
  },
  {
    path:'/produitAdhesif',
    name:'produitAdhesif',
    component: () => import(/* webpackChunkName: "produitAdhesif" */ '../views/ProduitAdhesif.vue')
  },
  {
    path:'/produitPeinture',
    name:'produitPeinture',
    component: () => import(/* webpackChunkName: "produitPeinture" */ '../views/ProduitPeinture.vue')
  },
  {
    path:'/contact',
    name:'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path:'/about',
    name:'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
