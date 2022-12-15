import Vue from 'vue'
import Router from 'vue-router'

import About from '~/pages/about'
import Contact from '~/pages/contact'
import Download from '~/pages/download'
import Financing from '~/pages/financing'
import Gallery from '~/pages/gallery'
import Index from '~/pages/index'
import Locality from '~/pages/locality'
import Passive from '~/pages/passive'
import Prices from '~/pages/prices'
import Standards from '~/pages/standards'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
        { path: '/',             name: 'home',      component: Index },
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
}
