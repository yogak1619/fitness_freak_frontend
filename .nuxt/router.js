import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'


const _1eb4844a = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))

const _5872b653 = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))

const _259db290 = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _370452fc = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))

const _6e94b366 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _05e17b8c = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _4290ab6c = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _001f0b84 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _11cb35b6 = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _191534da = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))

const _3241b95a = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
// const _48e86669 = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _c5d8e6ea = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))

const _e043c00c = () => interopDefault(import('../pages/shop/beauty/components/about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))

const _32fd14bb = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _5a65e80b = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/multikart/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [
  
  {
    path: "/collection/three-grid",
    component: _1eb4844a,
    name: "collection-three-grid"
  }, 
  {
    path: "/page/404",
    component: _596df378,
    name: "page-404"
  },
  
  {
    path: "/page/coming-soon",
    component: _5872b653,
    name: "page-coming-soon"
  },
  
  {
    path: "/page/order-success",
    component: _259db290,
    name: "page-order-success"
  },
   {
    path: "/page/review",
    component: _370452fc,
    name: "page-review"
  },
  
   {
    path: "/shop/fashion",
    component: _74191e24,
    name: "shop-fashion"
  }, 
  
  {
    path: "/page/account/cart",
    component: _6e94b366,
    name: "page-account-cart"
  }, 
  {
    path: "/page/account/checkout",
    component: _05e17b8c,
    name: "page-account-checkout"
  }, 
  {
    path: "/page/account/contact",
    component: _4290ab6c,
    name: "page-account-contact"
  }, 
  {
    path: "/page/account/dashboard",
    component: _001f0b84,
    name: "page-account-dashboard"
  }, 
  {
    path: "/page/account/forget-password",
    component: _11cb35b6,
    name: "page-account-forget-password"
  }, 
  {
    path: "/page/account/login",
    component: _191534da,
    name: "page-account-login"
  }, 
  {
    path: "/page/account/profile",
    component: _3241b95a,
    name: "page-account-profile"
  }, 
  // {
  //   path: "/page/account/register",
  //   component: _48e86669,
  //   name: "page-account-register"
  // }, 
  {
    path: "/page/account/wishlist",
    component: _c5d8e6ea,
    name: "page-account-wishlist"
  }, 
  
   {
    path: "/shop/beauty/components/about",
    component: _e043c00c,
    name: "shop-beauty-components-about"
  },
  
  {
    path: "/collection/leftsidebar/:id?",
    component: _32fd14bb,
    name: "collection-leftsidebar-id"
  },
   {
    path: "/product/sidebar/:id?",
    component: _5a65e80b,
    name: "product-sidebar-id"
  }
],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
