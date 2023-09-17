import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1eb4844a = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _596df378 = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _291e6119 = () => interopDefault(import('../pages/page/about.vue' /* webpackChunkName: "pages/page/about" */))
const _5872b653 = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _7f39a922 = () => interopDefault(import('../pages/page/faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _259db290 = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _370452fc = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))
const _7db0194c = () => interopDefault(import('../pages/page/search.vue' /* webpackChunkName: "pages/page/search" */))
const _74191e24 = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _6e94b366 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _05e17b8c = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _4290ab6c = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _001f0b84 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _11cb35b6 = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _191534da = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _3241b95a = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _48e86669 = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _c5d8e6ea = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _cac719e2 = () => interopDefault(import('../pages/product/sidebar/no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _60a1973c = () => interopDefault(import('../pages/product/sidebar/right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _68574ccc = () => interopDefault(import('../pages/product/three-column/thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _c9288994 = () => interopDefault(import('../pages/product/three-column/thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _0f50c57d = () => interopDefault(import('../pages/product/three-column/thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _69117022 = () => interopDefault(import('../pages/product/thumbnail-image/image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _462da894 = () => interopDefault(import('../pages/product/thumbnail-image/left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _55a54999 = () => interopDefault(import('../pages/product/thumbnail-image/right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))

const _87a3ee3e = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _1f0f9cd2 = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _1bf5fa70 = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))

const _d0ddbf34 = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _5fd11160 = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _3b9b2016 = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _d74a7e14 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
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

  routes: [{
    path: "/collection/three-grid",
    component: _1eb4844a,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _596df378,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _291e6119,
    name: "page-about"
  }, {
    path: "/page/coming-soon",
    component: _5872b653,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _7f39a922,
    name: "page-faq"
  }, {
    path: "/page/order-success",
    component: _259db290,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _370452fc,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _7db0194c,
    name: "page-search"
  }, {
    path: "/shop/fashion",
    component: _74191e24,
    name: "shop-fashion"
  }, {
    path: "/page/account/cart",
    component: _6e94b366,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _05e17b8c,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _4290ab6c,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _001f0b84,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _11cb35b6,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _191534da,
    name: "page-account-login"
  }, {
    path: "/page/account/profile",
    component: _3241b95a,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _48e86669,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _c5d8e6ea,
    name: "page-account-wishlist"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _cac719e2,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _60a1973c,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _68574ccc,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _c9288994,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _0f50c57d,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _69117022,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _462da894,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _55a54999,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/shop/fashion/components/banner",
    component: _87a3ee3e,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _1f0f9cd2,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _1bf5fa70,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _d0ddbf34,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _5fd11160,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/slider",
    component: _3b9b2016,
    name: "shop-fashion-components-slider"
  }, {
    path: "/",
    component: _d74a7e14,
    name: "index"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _32fd14bb,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _5a65e80b,
    name: "product-sidebar-id"
  }],

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
