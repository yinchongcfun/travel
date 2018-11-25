<template>
   <div>
       <div class="recommend-title">热门推荐</div>
       <div>
           <ul>
               <li class="item border-bottom"  v-for="item of list" :key="item.id">
                       <img  class='item-img' :src="item.imgUrl" alt="">
                   <div class="item-info">
                       <p class="item-title">{{item.title}}</p>
                       <p class="item-desc">{{item.desc}}</p>
                       <p class="item-price"></p>
                       <button class="item-button">查看详情</button>
                   </div>
               </li>
           </ul>
           <div class="more">>>>查看更多</div>
       </div>
   </div>

</template>

<script>
    export default {
        name: "Recommend",
        props: {
            list: Array
        },
    }
</script>

<style scoped>
    .recommend-title{
        line-height: .8rem;
        background-color: #eee;
        margin-top: .2rem;
        text-indent: .3rem;
        font-weight: 700;
    }

    .item{
        overflow: hidden;
        display: flex;
        height: 1.9rem;
    }

    .item-img{
        width: 2.6rem;
        height: 1.7rem;
        padding: .1rem;
    }

    .item-info{
        flex: 1;
        padding: .1rem;
        min-width: 0;
    }

    .item-title{
        line-height: .54rem;
        font-size: .32rem;
        text-overflow: ellipsis
    }

    .item-desc{
        line-height: .4rem;
        font-size: .28rem;
        color: #ccc;
        text-overflow: ellipsis;
        overflow:hidden;
    }

    .item-button{
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
    }
    .more{
        line-height: .8rem;
        text-align: center;
        font-size: .3rem;
        font-weight: 700;

    }
</style>