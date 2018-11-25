<template>
    <div class="header">
        <div class="header-back">
            <router-link to="/">
                <div class="iconfont back-icon">&#xe667;</div>
            </router-link>
        </div>
      城市选择
    </div>
</template>

<script>
    export default {
        name: "CityHeader",
        props:{
            city:'string'
        }
    }
</script>

<style  scoped>

     /*1rem=50px;*/
    .header{
        overflow: hidden;
        line-height: .86rem;
        background:#00bcd4;
        color: #fff;
        text-align: center;
        position: relative;
        font-size: .32rem;
    }
    .header-back{
        top: 0;
        left: 0;
        width: .64rem;
        text-align: center;
        position: absolute;
    }
    .back-icon{
        color: #fff;
        font-size: .4rem;
    }


</style>