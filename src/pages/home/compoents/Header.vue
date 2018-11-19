<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe667;</div>
        </div>
        <div class="header-input"> <span class="iconfont">&#xe632;</span>输入城市游玩主题</div>
        <div class="header-right arrow-icon"> 城市
        <span class="iconfont" >&#xe64a;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style  lang="stylus" scoped>
    @import '~styles/varibles.styl';
     /*1rem=50px;*/
    .header{
        display: flex;
        line-height: .86rem;
        background:$bgColor;
        color: #fff;
    }

    .header-left{
        width: .64rem;
        float: left;
    }

    .back-icon{
        font-size: .4rem;
        text-align: center;
    }
    .header-input{
        flex: 1;
        height: .64rem;
        line-height: .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        border-radius: .1rem;
        padding-left: .2rem;
        background-color: #fff;
        color: #ccc;

    }
     .header-right{
         width: 1.24rem;
         float: right;
         text-align: center;
     }
    .arrow-icon{
        font-size: .24rem;
       margin-left: -.04rem;
    }
</style>