import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

// const _54f736fb = () => interopDefault(import('../pages/blog/blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
// const _8766b78a = () => interopDefault(import('../pages/blog/blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
// const _164b11c1 = () => interopDefault(import('../pages/blog/blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
// const _e26ae92c = () => interopDefault(import('../pages/blog/blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
// const _2f31f5bd = () => interopDefault(import('../pages/collection/full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
// const _a8851562 = () => interopDefault(import('../pages/collection/list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
// const _52a882f4 = () => interopDefault(import('../pages/collection/metro.vue' /* webpackChunkName: "pages/collection/metro" */))
// const _28ed7ff6 = () => interopDefault(import('../pages/collection/no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
// const _953dc2f4 = () => interopDefault(import('../pages/collection/right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
// const _50403cd6 = () => interopDefault(import('../pages/collection/sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
// const _1b383cc6 = () => interopDefault(import('../pages/collection/six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _1eb4844a = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
// const _596df378 = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
// const _291e6119 = () => interopDefault(import('../pages/page/about.vue' /* webpackChunkName: "pages/page/about" */))
// const _46289142 = () => interopDefault(import('../pages/page/collection.vue' /* webpackChunkName: "pages/page/collection" */))
// const _5872b653 = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
// const _7f39a922 = () => interopDefault(import('../pages/page/faq.vue' /* webpackChunkName: "pages/page/faq" */))
// const _33e20aac = () => interopDefault(import('../pages/page/lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
// const _259db290 = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
// const _370452fc = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))
// const _7db0194c = () => interopDefault(import('../pages/page/search.vue' /* webpackChunkName: "pages/page/search" */))
// const _836cb15a = () => interopDefault(import('../pages/page/typography.vue' /* webpackChunkName: "pages/page/typography" */))
// const _57509350 = () => interopDefault(import('../pages/product/bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
// const _221b2ca0 = () => interopDefault(import('../pages/product/four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
// const _a36842ea = () => interopDefault(import('../pages/shop/bags/index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
// const _4f442b1c = () => interopDefault(import('../pages/shop/beauty/index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
// const _6e1db6de = () => interopDefault(import('../pages/shop/electronics-1/index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
// const _74191e24 = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
// const _974578da = () => interopDefault(import('../pages/shop/fashion-2/index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
// const _4941f654 = () => interopDefault(import('../pages/shop/fashion-3/index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
// const _07edeb8a = () => interopDefault(import('../pages/shop/flower/index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
// const _9840e030 = () => interopDefault(import('../pages/shop/furniture/index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
// const _46e642b1 = () => interopDefault(import('../pages/shop/gym/index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
// const _0226020e = () => interopDefault(import('../pages/shop/jewellery/index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
// const _07c98de6 = () => interopDefault(import('../pages/shop/kids/index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
// const _267e6514 = () => interopDefault(import('../pages/shop/pets/index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
// const _5464e4de = () => interopDefault(import('../pages/shop/shoes/index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
// const _112c5811 = () => interopDefault(import('../pages/shop/tools/index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
// const _521e1ddc = () => interopDefault(import('../pages/shop/vegetables/index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
// const _7bcb9bf6 = () => interopDefault(import('../pages/shop/watch/index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
// const _0947bae8 = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
// const _4dedf7fc = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
// const _6e94b366 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
// const _05e17b8c = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
// const _4290ab6c = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
// const _001f0b84 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
// const _11cb35b6 = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
// const _191534da = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
// const _7bafe531 = () => interopDefault(import('../pages/page/account/login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
// const _3241b95a = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
// const _48e86669 = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
// const _c5d8e6ea = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
// const _57a75b2b = () => interopDefault(import('../pages/page/compare/compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
// const _57b572ac = () => interopDefault(import('../pages/page/compare/compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
// const _fb567c7a = () => interopDefault(import('../pages/page/element/banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
// const _705142d5 = () => interopDefault(import('../pages/page/element/category.vue' /* webpackChunkName: "pages/page/element/category" */))
// const _5d245ef4 = () => interopDefault(import('../pages/page/element/collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
// const _3f39ba08 = () => interopDefault(import('../pages/page/element/home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
// const _5c85b1bc = () => interopDefault(import('../pages/page/element/logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
// const _f6bb3268 = () => interopDefault(import('../pages/page/element/multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
// const _518224d4 = () => interopDefault(import('../pages/page/element/product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
// const _2fc7d61a = () => interopDefault(import('../pages/page/element/product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
// const _6cca5ea4 = () => interopDefault(import('../pages/page/element/service.vue' /* webpackChunkName: "pages/page/element/service" */))
// const _773cf5ff = () => interopDefault(import('../pages/page/portfolio/masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
// const _73b826a2 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
// const _739bf7a0 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
// const _737fc89e = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
// const _4c79b765 = () => interopDefault(import('../pages/page/portfolio/portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
// const _3e83b334 = () => interopDefault(import('../pages/page/portfolio/portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
// const _75029567 = () => interopDefault(import('../pages/page/portfolio/portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
// const _cac719e2 = () => interopDefault(import('../pages/product/sidebar/no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
// const _60a1973c = () => interopDefault(import('../pages/product/sidebar/right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
// const _68574ccc = () => interopDefault(import('../pages/product/three-column/thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
// const _c9288994 = () => interopDefault(import('../pages/product/three-column/thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
// const _0f50c57d = () => interopDefault(import('../pages/product/three-column/thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
// const _69117022 = () => interopDefault(import('../pages/product/thumbnail-image/image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
// const _462da894 = () => interopDefault(import('../pages/product/thumbnail-image/left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
// const _55a54999 = () => interopDefault(import('../pages/product/thumbnail-image/right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
// const _7e7a9c96 = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
// const _1eb41a04 = () => interopDefault(import('../pages/shop/bags/components/banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
// const _09a40218 = () => interopDefault(import('../pages/shop/bags/components/blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
// const _e1c9dd60 = () => interopDefault(import('../pages/shop/bags/components/category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
// const _545ec212 = () => interopDefault(import('../pages/shop/bags/components/category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
// const _9e41b416 = () => interopDefault(import('../pages/shop/bags/components/categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
// const _2c8657d0 = () => interopDefault(import('../pages/shop/bags/components/instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
// const _57b5272c = () => interopDefault(import('../pages/shop/bags/components/productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
// const _2e1ad6a4 = () => interopDefault(import('../pages/shop/bags/components/productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
// const _e79696a0 = () => interopDefault(import('../pages/shop/bags/components/services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
// const _70130a33 = () => interopDefault(import('../pages/shop/bags/components/slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
// const _e043c00c = () => interopDefault(import('../pages/shop/beauty/components/about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
// const _00c08a45 = () => interopDefault(import('../pages/shop/beauty/components/blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
// const _e3e991c2 = () => interopDefault(import('../pages/shop/beauty/components/instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
// const _abdbe43c = () => interopDefault(import('../pages/shop/beauty/components/product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
// const _5b300544 = () => interopDefault(import('../pages/shop/beauty/components/slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
// const _43ab6bda = () => interopDefault(import('../pages/shop/beauty/components/top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
// const _921fb35a = () => interopDefault(import('../pages/shop/beauty/components/video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
// const _6e4be7c5 = () => interopDefault(import('../pages/shop/electronics-1/components/collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
// const _4072b81d = () => interopDefault(import('../pages/shop/electronics-1/components/product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
// const _26117739 = () => interopDefault(import('../pages/shop/electronics-1/components/slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
// const _ea3fe7f4 = () => interopDefault(import('../pages/shop/fashion-2/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
// const _76614178 = () => interopDefault(import('../pages/shop/fashion-2/components/collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
// const _7d051cd1 = () => interopDefault(import('../pages/shop/fashion-2/components/collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
// const _89257c70 = () => interopDefault(import('../pages/shop/fashion-2/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
// const _26fdaff6 = () => interopDefault(import('../pages/shop/fashion-2/components/product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
// const _0a4d233b = () => interopDefault(import('../pages/shop/fashion-2/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
// const _55dcb572 = () => interopDefault(import('../pages/shop/fashion-3/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
// const _37461268 = () => interopDefault(import('../pages/shop/fashion-3/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
// const _3edd44ba = () => interopDefault(import('../pages/shop/fashion-3/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
// const _547ebc7c = () => interopDefault(import('../pages/shop/fashion-3/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
// const _87a3ee3e = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
// const _1f0f9cd2 = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
// const _1bf5fa70 = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
// const _5df1530d = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
// const _5b85d1e0 = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
// const _d0ddbf34 = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
// const _5fd11160 = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
// const _d3e2445a = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
// const _3b9b2016 = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
// const _702762b8 = () => interopDefault(import('../pages/shop/flower/components/blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
// const _0fb628d6 = () => interopDefault(import('../pages/shop/flower/components/category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
// const _6f2b42db = () => interopDefault(import('../pages/shop/flower/components/collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
// const _bc9353c0 = () => interopDefault(import('../pages/shop/flower/components/instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
// const _25e21133 = () => interopDefault(import('../pages/shop/flower/components/product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
// const _2ce3ac60 = () => interopDefault(import('../pages/shop/flower/components/services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
// const _067c2de3 = () => interopDefault(import('../pages/shop/flower/components/slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
// const _5ebb7010 = () => interopDefault(import('../pages/shop/flower/components/top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
// const _c8a53fde = () => interopDefault(import('../pages/shop/furniture/components/blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
// const _3ef97d43 = () => interopDefault(import('../pages/shop/furniture/components/category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
// const _62dcaa8e = () => interopDefault(import('../pages/shop/furniture/components/collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
// const _7f455796 = () => interopDefault(import('../pages/shop/furniture/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
// const _2382cfe0 = () => interopDefault(import('../pages/shop/furniture/components/slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
// const _e9e428cc = () => interopDefault(import('../pages/shop/gym/components/blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
// const _b208081a = () => interopDefault(import('../pages/shop/gym/components/collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
// const _fa033a2c = () => interopDefault(import('../pages/shop/gym/components/instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
// const _58ca8c0a = () => interopDefault(import('../pages/shop/gym/components/logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
// const _4e3dfc98 = () => interopDefault(import('../pages/shop/gym/components/product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
// const _f0ab354e = () => interopDefault(import('../pages/shop/gym/components/slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
// const _173ee7e4 = () => interopDefault(import('../pages/shop/gym/components/top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
// const _88e84d84 = () => interopDefault(import('../pages/shop/jewellery/components/category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
// const _e3a2e4bc = () => interopDefault(import('../pages/shop/jewellery/components/instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
// const _b4dc7fdc = () => interopDefault(import('../pages/shop/jewellery/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
// const _2fc15d82 = () => interopDefault(import('../pages/shop/jewellery/components/product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
// const _2baf3727 = () => interopDefault(import('../pages/shop/jewellery/components/product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
// const _8eb506c4 = () => interopDefault(import('../pages/shop/jewellery/components/services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
// const _975e14be = () => interopDefault(import('../pages/shop/jewellery/components/slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
// const _7bcc87c9 = () => interopDefault(import('../pages/shop/kids/components/collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
// const _098cc204 = () => interopDefault(import('../pages/shop/kids/components/collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
// const _7aea690e = () => interopDefault(import('../pages/shop/kids/components/instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
// const _d56e9e5e = () => interopDefault(import('../pages/shop/kids/components/logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
// const _34894430 = () => interopDefault(import('../pages/shop/kids/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
// const _3a8aa305 = () => interopDefault(import('../pages/shop/kids/components/product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
// const _a3969c96 = () => interopDefault(import('../pages/shop/kids/components/slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
// const _7e56a386 = () => interopDefault(import('../pages/shop/pets/components/blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
// const _65f7da30 = () => interopDefault(import('../pages/shop/pets/components/collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
// const _7b7549f8 = () => interopDefault(import('../pages/shop/pets/components/logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
// const _0b16c8d7 = () => interopDefault(import('../pages/shop/pets/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
// const _39b8c84c = () => interopDefault(import('../pages/shop/pets/components/product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
// const _66cb0b3c = () => interopDefault(import('../pages/shop/pets/components/slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
// const _47ba9ef1 = () => interopDefault(import('../pages/shop/pets/components/top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
// const _4bdf18f8 = () => interopDefault(import('../pages/shop/shoes/components/about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
// const _385d7987 = () => interopDefault(import('../pages/shop/shoes/components/blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
// const _6ccbb3f2 = () => interopDefault(import('../pages/shop/shoes/components/brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
// const _5c150a63 = () => interopDefault(import('../pages/shop/shoes/components/category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
// const _26a3eb5f = () => interopDefault(import('../pages/shop/shoes/components/category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
// const _26b202e0 = () => interopDefault(import('../pages/shop/shoes/components/category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
// const _d3852ca2 = () => interopDefault(import('../pages/shop/shoes/components/collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
// const _15aa80e4 = () => interopDefault(import('../pages/shop/shoes/components/collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
// const _3291b1a2 = () => interopDefault(import('../pages/shop/shoes/components/collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
// const _0268fdc6 = () => interopDefault(import('../pages/shop/shoes/components/instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
// const _64eba8ca = () => interopDefault(import('../pages/shop/shoes/components/productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
// const _5d98df60 = () => interopDefault(import('../pages/shop/shoes/components/service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
// const _1f4e2c06 = () => interopDefault(import('../pages/shop/shoes/components/slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
// const _1b349036 = () => interopDefault(import('../pages/shop/tools/components/about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
// const _280d6856 = () => interopDefault(import('../pages/shop/tools/components/category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
// const _3dfe0b66 = () => interopDefault(import('../pages/shop/tools/components/logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
// const _7ee1a352 = () => interopDefault(import('../pages/shop/tools/components/product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
// const _442046e2 = () => interopDefault(import('../pages/shop/tools/components/product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
// const _09b3a5e5 = () => interopDefault(import('../pages/shop/tools/components/select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
// const _7cf3770d = () => interopDefault(import('../pages/shop/tools/components/service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
// const _499b6ab9 = () => interopDefault(import('../pages/shop/tools/components/slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
// const _47587305 = () => interopDefault(import('../pages/shop/vegetables/components/banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
// const _1a82568a = () => interopDefault(import('../pages/shop/vegetables/components/blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
// const _ef5db2ec = () => interopDefault(import('../pages/shop/vegetables/components/product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
// const _00474ef7 = () => interopDefault(import('../pages/shop/vegetables/components/services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
// const _7274eb8c = () => interopDefault(import('../pages/shop/vegetables/components/slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
// const _7c1869c3 = () => interopDefault(import('../pages/shop/vegetables/components/special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
// const _406dc1ee = () => interopDefault(import('../pages/shop/watch/components/blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
// const _4f26716c = () => interopDefault(import('../pages/shop/watch/components/category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
// const _a8393a70 = () => interopDefault(import('../pages/shop/watch/components/categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
// const _07fc444d = () => interopDefault(import('../pages/shop/watch/components/collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
// const _0d6b6116 = () => interopDefault(import('../pages/shop/watch/components/instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
// const _e928724e = () => interopDefault(import('../pages/shop/watch/components/logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
// const _778b6ffd = () => interopDefault(import('../pages/shop/watch/components/product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
// const _54f32aac = () => interopDefault(import('../pages/shop/watch/components/services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
// const _646df6ad = () => interopDefault(import('../pages/shop/watch/components/slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
// const _692dc9b2 = () => interopDefault(import('../pages/shop/watch/components/timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
// const _5fe1f95a = () => interopDefault(import('../pages/shop/watch/components/top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
// const _d74a7e14 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
// const _32fd14bb = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
// const _5a65e80b = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/multikart/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [
  //   {
  //   path: "/blog/blog-detail",
  //   component: _54f736fb,
  //   name: "blog-blog-detail"
  // }, {
  //   path: "/blog/blog-leftsidebar",
  //   component: _8766b78a,
  //   name: "blog-blog-leftsidebar"
  // }, {
  //   path: "/blog/blog-nosidebar",
  //   component: _164b11c1,
  //   name: "blog-blog-nosidebar"
  // }, {
  //   path: "/blog/blog-rightsidebar",
  //   component: _e26ae92c,
  //   name: "blog-blog-rightsidebar"
  // }, {
  //   path: "/collection/full-width",
  //   component: _2f31f5bd,
  //   name: "collection-full-width"
  // }, {
  //   path: "/collection/list-view",
  //   component: _a8851562,
  //   name: "collection-list-view"
  // }, {
  //   path: "/collection/metro",
  //   component: _52a882f4,
  //   name: "collection-metro"
  // }, {
  //   path: "/collection/no-sidebar",
  //   component: _28ed7ff6,
  //   name: "collection-no-sidebar"
  // }, {
  //   path: "/collection/right-sidebar",
  //   component: _953dc2f4,
  //   name: "collection-right-sidebar"
  // }, {
  //   path: "/collection/sidebar-popup",
  //   component: _50403cd6,
  //   name: "collection-sidebar-popup"
  // }, {
  //   path: "/collection/six-grid",
  //   component: _1b383cc6,
  //   name: "collection-six-grid"
  // }, 
  {
    path: "/collection/three-grid",
    component: _1eb4844a,
    name: "collection-three-grid"
  }, 
  // {
  //   path: "/page/404",
  //   component: _596df378,
  //   name: "page-404"
  // }, {
  //   path: "/page/about",
  //   component: _291e6119,
  //   name: "page-about"
  // }, {
  //   path: "/page/collection",
  //   component: _46289142,
  //   name: "page-collection"
  // }, {
  //   path: "/page/coming-soon",
  //   component: _5872b653,
  //   name: "page-coming-soon"
  // }, {
  //   path: "/page/faq",
  //   component: _7f39a922,
  //   name: "page-faq"
  // }, {
  //   path: "/page/lookbook",
  //   component: _33e20aac,
  //   name: "page-lookbook"
  // }, {
  //   path: "/page/order-success",
  //   component: _259db290,
  //   name: "page-order-success"
  // }, {
  //   path: "/page/review",
  //   component: _370452fc,
  //   name: "page-review"
  // }, {
  //   path: "/page/search",
  //   component: _7db0194c,
  //   name: "page-search"
  // }, {
  //   path: "/page/typography",
  //   component: _836cb15a,
  //   name: "page-typography"
  // }, {
  //   path: "/product/bundle-product",
  //   component: _57509350,
  //   name: "product-bundle-product"
  // }, {
  //   path: "/product/four-image",
  //   component: _221b2ca0,
  //   name: "product-four-image"
  // }, {
  //   path: "/shop/bags",
  //   component: _a36842ea,
  //   name: "shop-bags"
  // }, {
  //   path: "/shop/beauty",
  //   component: _4f442b1c,
  //   name: "shop-beauty"
  // }, {
  //   path: "/shop/electronics-1",
  //   component: _6e1db6de,
  //   name: "shop-electronics-1"
  // }, {
  //   path: "/shop/fashion",
  //   component: _74191e24,
  //   name: "shop-fashion"
  // }, {
  //   path: "/shop/fashion-2",
  //   component: _974578da,
  //   name: "shop-fashion-2"
  // }, {
  //   path: "/shop/fashion-3",
  //   component: _4941f654,
  //   name: "shop-fashion-3"
  // }, {
  //   path: "/shop/flower",
  //   component: _07edeb8a,
  //   name: "shop-flower"
  // }, {
  //   path: "/shop/furniture",
  //   component: _9840e030,
  //   name: "shop-furniture"
  // }, {
  //   path: "/shop/gym",
  //   component: _46e642b1,
  //   name: "shop-gym"
  // }, {
  //   path: "/shop/jewellery",
  //   component: _0226020e,
  //   name: "shop-jewellery"
  // }, {
  //   path: "/shop/kids",
  //   component: _07c98de6,
  //   name: "shop-kids"
  // }, {
  //   path: "/shop/pets",
  //   component: _267e6514,
  //   name: "shop-pets"
  // }, {
  //   path: "/shop/shoes",
  //   component: _5464e4de,
  //   name: "shop-shoes"
  // }, {
  //   path: "/shop/tools",
  //   component: _112c5811,
  //   name: "shop-tools"
  // }, {
  //   path: "/shop/vegetables",
  //   component: _521e1ddc,
  //   name: "shop-vegetables"
  // }, {
  //   path: "/shop/watch",
  //   component: _7bcb9bf6,
  //   name: "shop-watch"
  // }, {
  //   path: "/blog/widgets/blog-list",
  //   component: _0947bae8,
  //   name: "blog-widgets-blog-list"
  // }, {
  //   path: "/blog/widgets/blog-sidebar",
  //   component: _4dedf7fc,
  //   name: "blog-widgets-blog-sidebar"
  // }, {
  //   path: "/page/account/cart",
  //   component: _6e94b366,
  //   name: "page-account-cart"
  // }, {
  //   path: "/page/account/checkout",
  //   component: _05e17b8c,
  //   name: "page-account-checkout"
  // }, {
  //   path: "/page/account/contact",
  //   component: _4290ab6c,
  //   name: "page-account-contact"
  // }, {
  //   path: "/page/account/dashboard",
  //   component: _001f0b84,
  //   name: "page-account-dashboard"
  // }, {
  //   path: "/page/account/forget-password",
  //   component: _11cb35b6,
  //   name: "page-account-forget-password"
  // }, {
  //   path: "/page/account/login",
  //   component: _191534da,
  //   name: "page-account-login"
  // }, {
  //   path: "/page/account/login-firebase",
  //   component: _7bafe531,
  //   name: "page-account-login-firebase"
  // }, {
  //   path: "/page/account/profile",
  //   component: _3241b95a,
  //   name: "page-account-profile"
  // }, {
  //   path: "/page/account/register",
  //   component: _48e86669,
  //   name: "page-account-register"
  // }, {
  //   path: "/page/account/wishlist",
  //   component: _c5d8e6ea,
  //   name: "page-account-wishlist"
  // }, {
  //   path: "/page/compare/compare-1",
  //   component: _57a75b2b,
  //   name: "page-compare-compare-1"
  // }, {
  //   path: "/page/compare/compare-2",
  //   component: _57b572ac,
  //   name: "page-compare-compare-2"
  // }, {
  //   path: "/page/element/banner",
  //   component: _fb567c7a,
  //   name: "page-element-banner"
  // }, {
  //   path: "/page/element/category",
  //   component: _705142d5,
  //   name: "page-element-category"
  // }, {
  //   path: "/page/element/collection-banner",
  //   component: _5d245ef4,
  //   name: "page-element-collection-banner"
  // }, {
  //   path: "/page/element/home-slider",
  //   component: _3f39ba08,
  //   name: "page-element-home-slider"
  // }, {
  //   path: "/page/element/logo-slider",
  //   component: _5c85b1bc,
  //   name: "page-element-logo-slider"
  // }, {
  //   path: "/page/element/multi-slider",
  //   component: _f6bb3268,
  //   name: "page-element-multi-slider"
  // }, {
  //   path: "/page/element/product-slider",
  //   component: _518224d4,
  //   name: "page-element-product-slider"
  // }, {
  //   path: "/page/element/product-tabs",
  //   component: _2fc7d61a,
  //   name: "page-element-product-tabs"
  // }, {
  //   path: "/page/element/service",
  //   component: _6cca5ea4,
  //   name: "page-element-service"
  // }, {
  //   path: "/page/portfolio/masonary-fullwidth",
  //   component: _773cf5ff,
  //   name: "page-portfolio-masonary-fullwidth"
  // }, {
  //   path: "/page/portfolio/mesonary-grid-2",
  //   component: _73b826a2,
  //   name: "page-portfolio-mesonary-grid-2"
  // }, {
  //   path: "/page/portfolio/mesonary-grid-3",
  //   component: _739bf7a0,
  //   name: "page-portfolio-mesonary-grid-3"
  // }, {
  //   path: "/page/portfolio/mesonary-grid-4",
  //   component: _737fc89e,
  //   name: "page-portfolio-mesonary-grid-4"
  // }, {
  //   path: "/page/portfolio/portfolio-2-col",
  //   component: _4c79b765,
  //   name: "page-portfolio-portfolio-2-col"
  // }, {
  //   path: "/page/portfolio/portfolio-3-col",
  //   component: _3e83b334,
  //   name: "page-portfolio-portfolio-3-col"
  // }, {
  //   path: "/page/portfolio/portfolio-4-col",
  //   component: _75029567,
  //   name: "page-portfolio-portfolio-4-col"
  // }, {
  //   path: "/product/sidebar/no-sidebar",
  //   component: _cac719e2,
  //   name: "product-sidebar-no-sidebar"
  // }, {
  //   path: "/product/sidebar/right-sidebar",
  //   component: _60a1973c,
  //   name: "product-sidebar-right-sidebar"
  // }, {
  //   path: "/product/three-column/thumbnail-bottom",
  //   component: _68574ccc,
  //   name: "product-three-column-thumbnail-bottom"
  // }, {
  //   path: "/product/three-column/thumbnail-left",
  //   component: _c9288994,
  //   name: "product-three-column-thumbnail-left"
  // }, {
  //   path: "/product/three-column/thumbnail-right",
  //   component: _0f50c57d,
  //   name: "product-three-column-thumbnail-right"
  // }, {
  //   path: "/product/thumbnail-image/image-outside",
  //   component: _69117022,
  //   name: "product-thumbnail-image-image-outside"
  // }, {
  //   path: "/product/thumbnail-image/left-image",
  //   component: _462da894,
  //   name: "product-thumbnail-image-left-image"
  // }, {
  //   path: "/product/thumbnail-image/right-image",
  //   component: _55a54999,
  //   name: "product-thumbnail-image-right-image"
  // }, {
  //   path: "/page/account/auth/auth",
  //   component: _7e7a9c96,
  //   name: "page-account-auth-auth"
  // }, {
  //   path: "/shop/bags/components/banner",
  //   component: _1eb41a04,
  //   name: "shop-bags-components-banner"
  // }, {
  //   path: "/shop/bags/components/blog",
  //   component: _09a40218,
  //   name: "shop-bags-components-blog"
  // }, {
  //   path: "/shop/bags/components/category",
  //   component: _e1c9dd60,
  //   name: "shop-bags-components-category"
  // }, {
  //   path: "/shop/bags/components/category2",
  //   component: _545ec212,
  //   name: "shop-bags-components-category2"
  // }, {
  //   path: "/shop/bags/components/categorytab",
  //   component: _9e41b416,
  //   name: "shop-bags-components-categorytab"
  // }, {
  //   path: "/shop/bags/components/instagram",
  //   component: _2c8657d0,
  //   name: "shop-bags-components-instagram"
  // }, {
  //   path: "/shop/bags/components/productcategoryslider",
  //   component: _57b5272c,
  //   name: "shop-bags-components-productcategoryslider"
  // }, {
  //   path: "/shop/bags/components/productslider",
  //   component: _2e1ad6a4,
  //   name: "shop-bags-components-productslider"
  // }, {
  //   path: "/shop/bags/components/services",
  //   component: _e79696a0,
  //   name: "shop-bags-components-services"
  // }, {
  //   path: "/shop/bags/components/slider",
  //   component: _70130a33,
  //   name: "shop-bags-components-slider"
  // }, {
  //   path: "/shop/beauty/components/about",
  //   component: _e043c00c,
  //   name: "shop-beauty-components-about"
  // }, {
  //   path: "/shop/beauty/components/blog",
  //   component: _00c08a45,
  //   name: "shop-beauty-components-blog"
  // }, {
  //   path: "/shop/beauty/components/instagram",
  //   component: _e3e991c2,
  //   name: "shop-beauty-components-instagram"
  // }, {
  //   path: "/shop/beauty/components/product-slider",
  //   component: _abdbe43c,
  //   name: "shop-beauty-components-product-slider"
  // }, {
  //   path: "/shop/beauty/components/slider",
  //   component: _5b300544,
  //   name: "shop-beauty-components-slider"
  // }, {
  //   path: "/shop/beauty/components/top-product-slider",
  //   component: _43ab6bda,
  //   name: "shop-beauty-components-top-product-slider"
  // }, {
  //   path: "/shop/beauty/components/video-tutorial",
  //   component: _921fb35a,
  //   name: "shop-beauty-components-video-tutorial"
  // }, {
  //   path: "/shop/electronics-1/components/collection_banner",
  //   component: _6e4be7c5,
  //   name: "shop-electronics-1-components-collection_banner"
  // }, {
  //   path: "/shop/electronics-1/components/product_tab",
  //   component: _4072b81d,
  //   name: "shop-electronics-1-components-product_tab"
  // }, {
  //   path: "/shop/electronics-1/components/slider",
  //   component: _26117739,
  //   name: "shop-electronics-1-components-slider"
  // }, {
  //   path: "/shop/fashion-2/components/banner",
  //   component: _ea3fe7f4,
  //   name: "shop-fashion-2-components-banner"
  // }, {
  //   path: "/shop/fashion-2/components/collection",
  //   component: _76614178,
  //   name: "shop-fashion-2-components-collection"
  // }, {
  //   path: "/shop/fashion-2/components/collection-banner",
  //   component: _7d051cd1,
  //   name: "shop-fashion-2-components-collection-banner"
  // }, {
  //   path: "/shop/fashion-2/components/instagram",
  //   component: _89257c70,
  //   name: "shop-fashion-2-components-instagram"
  // }, {
  //   path: "/shop/fashion-2/components/product",
  //   component: _26fdaff6,
  //   name: "shop-fashion-2-components-product"
  // }, {
  //   path: "/shop/fashion-2/components/slider",
  //   component: _0a4d233b,
  //   name: "shop-fashion-2-components-slider"
  // }, {
  //   path: "/shop/fashion-3/components/banner",
  //   component: _55dcb572,
  //   name: "shop-fashion-3-components-banner"
  // }, {
  //   path: "/shop/fashion-3/components/product_slider",
  //   component: _37461268,
  //   name: "shop-fashion-3-components-product_slider"
  // }, {
  //   path: "/shop/fashion-3/components/product_tab",
  //   component: _3edd44ba,
  //   name: "shop-fashion-3-components-product_tab"
  // }, {
  //   path: "/shop/fashion-3/components/slider",
  //   component: _547ebc7c,
  //   name: "shop-fashion-3-components-slider"
  // }, {
  //   path: "/shop/fashion/components/banner",
  //   component: _87a3ee3e,
  //   name: "shop-fashion-components-banner"
  // }, {
  //   path: "/shop/fashion/components/blog",
  //   component: _1f0f9cd2,
  //   name: "shop-fashion-components-blog"
  // }, {
  //   path: "/shop/fashion/components/collection_banner",
  //   component: _1bf5fa70,
  //   name: "shop-fashion-components-collection_banner"
  // }, {
  //   path: "/shop/fashion/components/instagram",
  //   component: _5df1530d,
  //   name: "shop-fashion-components-instagram"
  // }, {
  //   path: "/shop/fashion/components/logo_slider",
  //   component: _5b85d1e0,
  //   name: "shop-fashion-components-logo_slider"
  // }, {
  //   path: "/shop/fashion/components/product_slider",
  //   component: _d0ddbf34,
  //   name: "shop-fashion-components-product_slider"
  // }, {
  //   path: "/shop/fashion/components/product_tab",
  //   component: _5fd11160,
  //   name: "shop-fashion-components-product_tab"
  // }, {
  //   path: "/shop/fashion/components/services",
  //   component: _d3e2445a,
  //   name: "shop-fashion-components-services"
  // }, {
  //   path: "/shop/fashion/components/slider",
  //   component: _3b9b2016,
  //   name: "shop-fashion-components-slider"
  // }, {
  //   path: "/shop/flower/components/blog",
  //   component: _702762b8,
  //   name: "shop-flower-components-blog"
  // }, {
  //   path: "/shop/flower/components/category_tab",
  //   component: _0fb628d6,
  //   name: "shop-flower-components-category_tab"
  // }, {
  //   path: "/shop/flower/components/collection_banner",
  //   component: _6f2b42db,
  //   name: "shop-flower-components-collection_banner"
  // }, {
  //   path: "/shop/flower/components/instagram",
  //   component: _bc9353c0,
  //   name: "shop-flower-components-instagram"
  // }, {
  //   path: "/shop/flower/components/product_slider",
  //   component: _25e21133,
  //   name: "shop-flower-components-product_slider"
  // }, {
  //   path: "/shop/flower/components/services",
  //   component: _2ce3ac60,
  //   name: "shop-flower-components-services"
  // }, {
  //   path: "/shop/flower/components/slider",
  //   component: _067c2de3,
  //   name: "shop-flower-components-slider"
  // }, {
  //   path: "/shop/flower/components/top_products",
  //   component: _5ebb7010,
  //   name: "shop-flower-components-top_products"
  // }, {
  //   path: "/shop/furniture/components/blog",
  //   component: _c8a53fde,
  //   name: "shop-furniture-components-blog"
  // }, {
  //   path: "/shop/furniture/components/category_tab",
  //   component: _3ef97d43,
  //   name: "shop-furniture-components-category_tab"
  // }, {
  //   path: "/shop/furniture/components/collection_banner",
  //   component: _62dcaa8e,
  //   name: "shop-furniture-components-collection_banner"
  // }, {
  //   path: "/shop/furniture/components/parallax_banner",
  //   component: _7f455796,
  //   name: "shop-furniture-components-parallax_banner"
  // }, {
  //   path: "/shop/furniture/components/slider",
  //   component: _2382cfe0,
  //   name: "shop-furniture-components-slider"
  // }, {
  //   path: "/shop/gym/components/blog",
  //   component: _e9e428cc,
  //   name: "shop-gym-components-blog"
  // }, {
  //   path: "/shop/gym/components/collection-banner",
  //   component: _b208081a,
  //   name: "shop-gym-components-collection-banner"
  // }, {
  //   path: "/shop/gym/components/instagram",
  //   component: _fa033a2c,
  //   name: "shop-gym-components-instagram"
  // }, {
  //   path: "/shop/gym/components/logo-slider",
  //   component: _58ca8c0a,
  //   name: "shop-gym-components-logo-slider"
  // }, {
  //   path: "/shop/gym/components/product-list",
  //   component: _4e3dfc98,
  //   name: "shop-gym-components-product-list"
  // }, {
  //   path: "/shop/gym/components/slider",
  //   component: _f0ab354e,
  //   name: "shop-gym-components-slider"
  // }, {
  //   path: "/shop/gym/components/top-collection",
  //   component: _173ee7e4,
  //   name: "shop-gym-components-top-collection"
  // }, {
  //   path: "/shop/jewellery/components/category",
  //   component: _88e84d84,
  //   name: "shop-jewellery-components-category"
  // }, {
  //   path: "/shop/jewellery/components/instagram",
  //   component: _e3a2e4bc,
  //   name: "shop-jewellery-components-instagram"
  // }, {
  //   path: "/shop/jewellery/components/parallax-banner",
  //   component: _b4dc7fdc,
  //   name: "shop-jewellery-components-parallax-banner"
  // }, {
  //   path: "/shop/jewellery/components/product-slider",
  //   component: _2fc15d82,
  //   name: "shop-jewellery-components-product-slider"
  // }, {
  //   path: "/shop/jewellery/components/product-tab",
  //   component: _2baf3727,
  //   name: "shop-jewellery-components-product-tab"
  // }, {
  //   path: "/shop/jewellery/components/services",
  //   component: _8eb506c4,
  //   name: "shop-jewellery-components-services"
  // }, {
  //   path: "/shop/jewellery/components/slider",
  //   component: _975e14be,
  //   name: "shop-jewellery-components-slider"
  // }, {
  //   path: "/shop/kids/components/collection_banner",
  //   component: _7bcc87c9,
  //   name: "shop-kids-components-collection_banner"
  // }, {
  //   path: "/shop/kids/components/collection_slider",
  //   component: _098cc204,
  //   name: "shop-kids-components-collection_slider"
  // }, {
  //   path: "/shop/kids/components/instagram",
  //   component: _7aea690e,
  //   name: "shop-kids-components-instagram"
  // }, {
  //   path: "/shop/kids/components/logo_slider",
  //   component: _d56e9e5e,
  //   name: "shop-kids-components-logo_slider"
  // }, {
  //   path: "/shop/kids/components/parallax_banner",
  //   component: _34894430,
  //   name: "shop-kids-components-parallax_banner"
  // }, {
  //   path: "/shop/kids/components/product_slider",
  //   component: _3a8aa305,
  //   name: "shop-kids-components-product_slider"
  // }, {
  //   path: "/shop/kids/components/slider",
  //   component: _a3969c96,
  //   name: "shop-kids-components-slider"
  // }, {
  //   path: "/shop/pets/components/blog",
  //   component: _7e56a386,
  //   name: "shop-pets-components-blog"
  // }, {
  //   path: "/shop/pets/components/collection-banner",
  //   component: _65f7da30,
  //   name: "shop-pets-components-collection-banner"
  // }, {
  //   path: "/shop/pets/components/logo-slider",
  //   component: _7b7549f8,
  //   name: "shop-pets-components-logo-slider"
  // }, {
  //   path: "/shop/pets/components/parallax-banner",
  //   component: _0b16c8d7,
  //   name: "shop-pets-components-parallax-banner"
  // }, {
  //   path: "/shop/pets/components/product-slider",
  //   component: _39b8c84c,
  //   name: "shop-pets-components-product-slider"
  // }, {
  //   path: "/shop/pets/components/slider",
  //   component: _66cb0b3c,
  //   name: "shop-pets-components-slider"
  // }, {
  //   path: "/shop/pets/components/top-collection",
  //   component: _47ba9ef1,
  //   name: "shop-pets-components-top-collection"
  // }, {
  //   path: "/shop/shoes/components/about",
  //   component: _4bdf18f8,
  //   name: "shop-shoes-components-about"
  // }, {
  //   path: "/shop/shoes/components/blog",
  //   component: _385d7987,
  //   name: "shop-shoes-components-blog"
  // }, {
  //   path: "/shop/shoes/components/brand",
  //   component: _6ccbb3f2,
  //   name: "shop-shoes-components-brand"
  // }, {
  //   path: "/shop/shoes/components/category",
  //   component: _5c150a63,
  //   name: "shop-shoes-components-category"
  // }, {
  //   path: "/shop/shoes/components/category2",
  //   component: _26a3eb5f,
  //   name: "shop-shoes-components-category2"
  // }, {
  //   path: "/shop/shoes/components/category3",
  //   component: _26b202e0,
  //   name: "shop-shoes-components-category3"
  // }, {
  //   path: "/shop/shoes/components/collectionbanner",
  //   component: _d3852ca2,
  //   name: "shop-shoes-components-collectionbanner"
  // }, {
  //   path: "/shop/shoes/components/collectionslider",
  //   component: _15aa80e4,
  //   name: "shop-shoes-components-collectionslider"
  // }, {
  //   path: "/shop/shoes/components/collectiontab",
  //   component: _3291b1a2,
  //   name: "shop-shoes-components-collectiontab"
  // }, {
  //   path: "/shop/shoes/components/instagram",
  //   component: _0268fdc6,
  //   name: "shop-shoes-components-instagram"
  // }, {
  //   path: "/shop/shoes/components/productSlider",
  //   component: _64eba8ca,
  //   name: "shop-shoes-components-productSlider"
  // }, {
  //   path: "/shop/shoes/components/service",
  //   component: _5d98df60,
  //   name: "shop-shoes-components-service"
  // }, {
  //   path: "/shop/shoes/components/slider",
  //   component: _1f4e2c06,
  //   name: "shop-shoes-components-slider"
  // }, {
  //   path: "/shop/tools/components/about",
  //   component: _1b349036,
  //   name: "shop-tools-components-about"
  // }, {
  //   path: "/shop/tools/components/category",
  //   component: _280d6856,
  //   name: "shop-tools-components-category"
  // }, {
  //   path: "/shop/tools/components/logo_slider",
  //   component: _3dfe0b66,
  //   name: "shop-tools-components-logo_slider"
  // }, {
  //   path: "/shop/tools/components/product-slider",
  //   component: _7ee1a352,
  //   name: "shop-tools-components-product-slider"
  // }, {
  //   path: "/shop/tools/components/product-tab-slider",
  //   component: _442046e2,
  //   name: "shop-tools-components-product-tab-slider"
  // }, {
  //   path: "/shop/tools/components/select-vehical",
  //   component: _09b3a5e5,
  //   name: "shop-tools-components-select-vehical"
  // }, {
  //   path: "/shop/tools/components/service",
  //   component: _7cf3770d,
  //   name: "shop-tools-components-service"
  // }, {
  //   path: "/shop/tools/components/slider",
  //   component: _499b6ab9,
  //   name: "shop-tools-components-slider"
  // }, {
  //   path: "/shop/vegetables/components/banner",
  //   component: _47587305,
  //   name: "shop-vegetables-components-banner"
  // }, {
  //   path: "/shop/vegetables/components/blog",
  //   component: _1a82568a,
  //   name: "shop-vegetables-components-blog"
  // }, {
  //   path: "/shop/vegetables/components/product_slider",
  //   component: _ef5db2ec,
  //   name: "shop-vegetables-components-product_slider"
  // }, {
  //   path: "/shop/vegetables/components/services",
  //   component: _00474ef7,
  //   name: "shop-vegetables-components-services"
  // }, {
  //   path: "/shop/vegetables/components/slider",
  //   component: _7274eb8c,
  //   name: "shop-vegetables-components-slider"
  // }, {
  //   path: "/shop/vegetables/components/special_products",
  //   component: _7c1869c3,
  //   name: "shop-vegetables-components-special_products"
  // }, {
  //   path: "/shop/watch/components/blog",
  //   component: _406dc1ee,
  //   name: "shop-watch-components-blog"
  // }, {
  //   path: "/shop/watch/components/category",
  //   component: _4f26716c,
  //   name: "shop-watch-components-category"
  // }, {
  //   path: "/shop/watch/components/categorytabs",
  //   component: _a8393a70,
  //   name: "shop-watch-components-categorytabs"
  // }, {
  //   path: "/shop/watch/components/collectionbanners",
  //   component: _07fc444d,
  //   name: "shop-watch-components-collectionbanners"
  // }, {
  //   path: "/shop/watch/components/instagram",
  //   component: _0d6b6116,
  //   name: "shop-watch-components-instagram"
  // }, {
  //   path: "/shop/watch/components/logo_slider",
  //   component: _e928724e,
  //   name: "shop-watch-components-logo_slider"
  // }, {
  //   path: "/shop/watch/components/product_slider",
  //   component: _778b6ffd,
  //   name: "shop-watch-components-product_slider"
  // }, {
  //   path: "/shop/watch/components/services",
  //   component: _54f32aac,
  //   name: "shop-watch-components-services"
  // }, {
  //   path: "/shop/watch/components/slider",
  //   component: _646df6ad,
  //   name: "shop-watch-components-slider"
  // }, {
  //   path: "/shop/watch/components/timer_banner",
  //   component: _692dc9b2,
  //   name: "shop-watch-components-timer_banner"
  // }, {
  //   path: "/shop/watch/components/top_products",
  //   component: _5fe1f95a,
  //   name: "shop-watch-components-top_products"
  // }, {
  //   path: "/",
  //   component: _d74a7e14,
  //   name: "index"
  // }, {
  //   path: "/collection/leftsidebar/:id?",
  //   component: _32fd14bb,
  //   name: "collection-leftsidebar-id"
  // }, {
  //   path: "/product/sidebar/:id?",
  //   component: _5a65e80b,
  //   name: "product-sidebar-id"
  // }
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
