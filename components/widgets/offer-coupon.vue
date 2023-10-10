<template>
    <div class="container mt-5">
        <div class="row coupon-section md:px-auto px-3">
        <div v-swiper:mySwiper="swiperOption" :pagination="{ clickable: true }">
              <div class="swiper-wrapper w-100">
                <div
                  class="swiper-slide"
                >
                <div class="coupon rounded mb-3 d-flex justify-content-between">
                    <div class="tengah py-3 d-flex w-100 justify-content-start">
                        <div>
                            <span class="text-white">Flat</span>
                            <div class="d-flex">
                                <i class="fa fa-rupee text-white rupee-icon"></i>
                                <h3 class="lead">100 OFF</h3>
                            </div>                            
                            <p class="text-white text-capitalize mb-0">On all products</p>
                        </div>
                    </div>
                    <div class="kanan d-flex flex-wrap align-items-center justify-content-center">
                        <div class="info m-3 d-flex align-items-center">
                            <div class="w-100">
                                <div class="block">
                                    <span class="time font-weight-light text-white text-uppercase">
                                        <span>Code</span>
                                    </span>
                                </div>
                                <span class="btn btn-sm btn-outline-white text-white btn-block mt-2">
                                    WIN50
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div
                  class="swiper-slide"
                >
                 <div class="coupon rounded mb-3 d-flex justify-content-between">
                    <div class="tengah py-3 d-flex w-100 justify-content-start">
                        <div>
                            <span class="text-white">Flat</span>
                            <div class="d-flex">
                                <i class="fa fa-rupee text-white rupee-icon"></i>
                                <h3 class="lead">100 OFF</h3>
                            </div>                            
                            <p class="text-white text-capitalize mb-0">On all products</p>
                        </div>
                    </div>
                    <div class="kanan d-flex flex-wrap align-items-center justify-content-center">
                        <div class="info m-3 d-flex align-items-center">
                            <div class="w-100">
                                <div class="block">
                                    <span class="time font-weight-light text-white text-uppercase">
                                        <span>Code</span>
                                    </span>
                                </div>
                                <span class="btn btn-sm btn-outline-white text-white btn-block mt-2">
                                    WIN50
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div
                  class="swiper-slide"
                >
                 <div class="coupon rounded mb-3 d-flex justify-content-between">
                    <div class="tengah py-3 d-flex w-100 justify-content-start">
                        <div>
                            <span class="text-white">Flat</span>
                            <div class="d-flex">
                                <i class="fa fa-rupee text-white rupee-icon"></i>
                                <h3 class="lead">100 OFF</h3>
                            </div>                            
                            <p class="text-white text-capitalize mb-0">On all products</p>
                        </div>
                    </div>
                    <div class="kanan d-flex flex-wrap align-items-center justify-content-center">
                        <div class="info m-3 d-flex align-items-center">
                            <div class="w-100">
                                <div class="block">
                                    <span class="time font-weight-light text-white text-uppercase">
                                        <span>Code</span>
                                    </span>
                                </div>
                                <span class="btn btn-sm btn-outline-white text-white btn-block mt-2">
                                    WIN50
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div
                  class="swiper-slide"
                >
                 <div class="coupon rounded mb-3 d-flex justify-content-between">
                    <div class="tengah py-3 d-flex w-100 justify-content-start">
                        <div>
                            <span class="text-white">Flat</span>
                            <div class="d-flex">
                                <i class="fa fa-rupee text-white rupee-icon"></i>
                                <h3 class="lead">100 OFF</h3>
                            </div>                            
                            <p class="text-white text-capitalize mb-0">On all products</p>
                        </div>
                    </div>
                    <div class="kanan d-flex flex-wrap align-items-center justify-content-center">
                        <div class="info m-3 d-flex align-items-center">
                            <div class="w-100">
                                <div class="block">
                                    <span class="time font-weight-light text-white text-uppercase">
                                        <span>Code</span>
                                    </span>
                                </div>
                                <span class="btn btn-sm btn-outline-white text-white btn-block mt-2">
                                    WIN50
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
    		
    		
    	</div>
    
    </div>
</template>

<script>
export default {
    data(){
        return{
             swiperOption: {
                loop: true,
                autoPlay:true,
        slidesPerView: 2,
        spaceBetween: 40,
        freeMode: false,
        breakpoints: {
          1199: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          420: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }
      }
        }
    }
}
</script>