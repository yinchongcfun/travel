<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom"
                    v-for="item of list"
                    :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgurl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "Weekend",
        data() {
            return {
                list:[
                    {
                        id:'0001',
                        imgurl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201810/10/5bbda3e64c464.jpg?imageslim' ,
                        title:'大明山秋色】秋高气爽撒欢',
                        desc:'10-11月，临安大明山赏秋色'
                    },
                    {
                        id:'0002',
                        imgurl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201810/17/5bc7074dc2e37.jpg?imageslim' ,
                        title:'大明山秋色】秋高气爽撒欢',
                        desc:'10-11月，临安大明山赏秋色'
                    },
                    {
                        id:'0003',
                        imgurl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201810/20/5bca003a86c2b.jpg?imageslim' ,
                        title:'大明山秋色】秋高气爽撒欢',
                        desc:'10-11月，临安大明山赏秋色'
                    },
                ]
            }
         }
    }
</script>

<style scoped>
    .title {
        line-height: .8rem;
        background-color: #eee;
        margin-top: .2rem;
        text-indent: .3rem;
        font-weight: 700;
    }
    .item-img-wrapper{
        overflow: hidden;
        height: 0;
        padding-bottom: 37.09%;
    }
   .item-img{
       width: 100%;
   }
    .item-info{
        padding: .1rem
    }
    .item-title{
        line-height: .54rem;
        font-size: .32rem
    }
    .item-desc{
        line-height: .4rem;
        color: #ccc
    }
</style>