<template>

    <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
            <!--<img class="swiper-img" src="../../../assets/images/1.png" alt="">-->
            <swiper-slide><img class="swiper-img" src="../../../assets/images/1.png" alt=""></swiper-slide>
            <swiper-slide><img class="swiper-img" src="../../../assets/images/2.png" alt=""></swiper-slide>
            <swiper-slide><img class="swiper-img" src="../../../assets/images/3.png" alt=""></swiper-slide>
            <swiper-slide><img class="swiper-img" src="../../../assets/images/4.png" alt=""></swiper-slide>

            <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                }
            }
        },

    }
</script>

<style scoped>
    .swiper{
        width: 100%;
    }
    .swiper >>> .swiper-pagination-bullet-active {
        background: red !important;
    }
    .swiper-img{
        width: 100%;
    }

</style>