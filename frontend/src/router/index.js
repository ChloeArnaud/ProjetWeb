import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '@/components/HomeView.vue'
import Shop from '@/views/Shop'
import Accueil from '@/components/BlocAccueil'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Login from '@/components/Login'

import ProduitAdhesifPage from '@/views/ProduitAdhesifPage'
import ProduitAgendaPage from '@/views/ProduitAgendaPage'
import ProduitBureauPage from '@/views/ProduitBureauPage'
import ProduitCahierPage from '@/views/ProduitCahierPage'
import ProduitPeinturePage from '@/views/ProduitPeinturePage'
import ProduitEcriturePage from '@/views/ProduitEcriturePage'


import ProduitAdhesif from '@/components/Dropdown_folder/ProduitAdhesif'
import ProduitAgenda from '@/components/Dropdown_folder/ProduitAgenda'
import ProduitBureau from '@/components/Dropdown_folder/ProduitBureau'
import ProduitCahier from '@/components/Dropdown_folder/ProduitCahier'
import ProduitPeinture from '@/components/Dropdown_folder/ProduitPeinture'
import ProduitEcriture from '@/components/Dropdown_folder/ProduitEcriture'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "produit" */ '../views/AboutView.vue')
  },
  {
    path:'/categorie',
    name:'categorie',
    component: Shop
    //component: () => import(/* webpackChunkName: "categorie" */ '../views/Shop.vue')
  },
  {
    path:'/categorie/produitEcriture',
    name:'ProduitEcriture',
    //component: ProduitEcriturePage
    component: () => import(/* webpackChunkName: "produitEcriture" */ '../views/ProduitEcriturePage.vue')
  },
  {
    path:'/categorie/produitAgenda',
    name:'ProduitAgenda',
    component: ProduitAgendaPage
    //component: () => import(/* webpackChunkName: "produitAgenda" */ '../views/ProduitAgendaPage.vue')
  },
  {
    path:'/categorie/produitCahier',
    name:'ProduitCahier',
    component: ProduitCahierPage
    //component: () => import(/* webpackChunkName: "produitCahier" */ '../views/ProduitCahierPage.vue')
  },
  {
    path:'/categorie/produitBureau',
    name:'ProduitBureau',
    component: ProduitBureauPage
    //component: () => import(/* webpackChunkName: "produitBureau" */ '../views/ProduitBureauPage.vue')
  },
  {
    path:'/categorie/produitAdhesif',
    name:'ProduitAdhesif',
    component: ProduitAdhesifPage
    //component: () => import(/* webpackChunkName: "produitAdhesif" */ '../views/ProduitAdhesifPage.vue')
  },
  {
    path:'/categorie/produitPeinture',
    name:'ProduitPeinture',
    component: ProduitPeinturePage
    //component: () => import(/* webpackChunkName: "produitPeinture" */ '../views/ProduitPeinturePage.vue')
  },
  {
    path:'/contact',
    name:'Contact',
    component: Contact
    //component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path:'/login',
    name:'login',
    component: Login
    //component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
