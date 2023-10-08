<template>
  <div>
    <Header />
    <Slider />
    <CollectionBanner />
    <ProductSlider :products="products" @openQuickview="showQuickview" @openCart="showCart" />
    <NewArrival :products="products" @openQuickview="showQuickview" @openCart="showCart" />
    <Banner />
    <Blog />
    
    
    <Footer />
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    
    <cartModel :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal" :products="products" />
    <newsletterModel />
  </div>
</template>

    {/*<ProductTab :products="products" :category="category" @openQuickview="showQuickview" @openCart="showCart" />*/}
    {/*<Services />*/}
    {/*<LogoSlider />*/}
{/*<Instagram />*/}
<script>
import { mapState } from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import quickviewModel from '../../../components/widgets/quickview'
import cartModel from '../../../components/cart-model/cart-modal-popup'
import newsletterModel from '../../../components/widgets/newsletter-popup'
import Slider from './components/slider'
import CollectionBanner from './components/collection_banner'
import ProductSlider from './components/product_slider'
import NewArrival from './components/new_arrival'
import Banner from './components/banner'
// import ProductTab from './components/product_tab'
// import Services from './components/services'
import Blog from './components/blog'
{/*import Instagram from './components/instagram'*/}
{/*import LogoSlider from './components/logo_slider'*/}

export default {
  components: {
    Header,
    Slider,
    CollectionBanner,
    ProductSlider,
    Banner,
    // ProductTab,
    // Services,
    Blog,
    // Instagram,
    // LogoSlider,
    Footer,
    quickviewModel,
    cartModel,
    newsletterModel,
    NewArrival
  },
  data() {
    return {
      products: [],
      category: [],
      showquickviewmodel: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {}
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    })
  },
  mounted() {
    this.productsArray()
  },
  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'fashion') {
          this.products.push(item)
          item.collection.map((i) => {
            const index = this.category.indexOf(i)
            if (index === -1) this.category.push(i)
          })
        }
      })
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
    },
    showCart(item, productData) {
      this.showcartmodal = item
      this.cartproduct = productData
    },
    closeCartModal(item) {
      this.showcartmodal = item
    }
  }
}
</script>
