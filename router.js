import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/components/Page/Home'
import About from '~/components/Page/About'
import Contact from '~/components/Page/Contact'
import Download from '~/components/Page/Download'
import Financing from '~/components/Page/Financing'
import Gallery from '~/components/Page/Gallery'
import Locality from '~/components/Page/Locality'
import Passive from '~/components/Page/Passive'
import Prices from '~/components/Page/Prices'
import Standards from '~/components/Page/Standards'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [
        { path: '/',             name: 'home',      component: Home },
        { path: '/o-projektu',   name: 'about',     component: About },
        { path: '/kontakt',      name: 'contact',   component: Contact },
        { path: '/ke-stazeni',   name: 'download',  component: Download },
        { path: '/financovani',  name: 'financing', component: Financing },
        { path: '/pasivni-domy', name: 'passive',   component: Passive },
        { path: '/standardy',    name: 'standards', component: Standards },
        { path: '/lokalita',     name: 'locality',  component: Locality },
        { path: '/cenik',        name: 'prices',    component: Prices },
        { path: '/galerie',      name: 'gallery',   component: Gallery },
    ]
  })

  router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
  })

  return router
}
