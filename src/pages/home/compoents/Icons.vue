<template>

    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div>
                        <img class='icon-img' :src='item.imgUrl' />
                    </div>
                    <p class="icon-content">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

    <!--<div class="icons">-->

        <!--<div class="icon">
        <img class="icon-img" src="../../../assets/icons/download.gif" alt="">
        <p class="icon-content">热门景点景点</p>

        </div>-->
    <!--</div>-->
</template>

<script>
    export default {
        name: "Icons",
        props: {
            list: Array
        },
        data () {
            return {
                swiperOption: {
                    autoplay: false
                }
            }
        },
        computed: {
            pages () {
                const pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style scoped>

    .icons{
        overflow: hidden;
        height: 0;
        padding-bottom: 50%;
        margin: .1rem;
        /*background: pink;*/
    }
    .icon{
        position: relative;
        float: left;
        width: 25%;
        height: 0;
        overflow: hidden;
        padding-bottom: 25%;
        text-align: center;
    }
    .icon-img{
       position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .54rem;
        box-sizing: border-box;
        padding: .1rem;
        font-size:.3rem;
        margin: 0 auto;
        width: 80%;
    }
    .icon-content{
        position: absolute;
        bottom: 0rem;
        width: 100%;
        text-align: center;
    }

</style>