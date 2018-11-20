<template>
   <div>
       <div class="recommend-title">热门推荐</div>
       <div>
           <ul>
               <li class="item border-bottom"  v-for="item of recommendList" :key="item.id">
                       <img  class='item-img' :src="item.imgurl" alt="">
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
        data() {
            return {
                recommendList:[
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
                    {
                        id:'0004',
                        imgurl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201711/07/5a011c3fa24bb.jpg?imageslim' ,
                        title:'大明山秋色】秋高气爽撒欢',
                        desc:'10-11月，临安大明山赏秋色'
                    },
                    {
                        id:'0005',
                        imgurl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201711/07/5a0120ba3a37c.jpg?imageslim' ,
                        title:'大明山秋色】秋高气爽撒欢',
                        desc:'10-11月，临安大明山赏秋色'
                    }
                ]
            }
         }
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