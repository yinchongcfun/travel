<template>
    <div class="icons">

        <div class="icon"><img class="icon-img" src="../../../assets/icons/download.gif" alt=""><p class="icon-content">热门景点景点</p></div>
        <div class="icon"><img class="icon-img" src="../../../assets/icons/download.png" alt=""><p class="icon-content">当地玩乐</p></div>
        <div class="icon"><img class="icon-img" src="../../../assets/icons/download-1.png" alt=""><p class="icon-content">亲子游</p></div>
        <div class="icon"><img class="icon-img" src="../../../assets/icons/download-2.png" alt=""><p class="icon-content">景点</p></div>
        <div class="icon"><img class="icon-img" src="../../../assets/icons/download-3.png" alt=""><p class="icon-content">景点</p></div>
        <div class="icon"><img class="icon-img" src="../../../assets/icons/download-4.png" alt=""><p class="icon-content">景点</p></div>
        <div class="icon"><img class="icon-img" src="../../../assets/icons/download-5.png" alt=""><p class="icon-content">景点</p></div>
        <div class="icon"><img class="icon-img" src="../../../assets/icons/download-6.png" alt=""><p class="icon-content">景点</p></div>

    </div>
</template>

<script>
    export default {
        name: "Icons"
    }
</script>

<style scoped>

    .icons{
        overflow: hidden;
        height: 0;
        padding-bottom: 50%;
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
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
        font-size:.3rem;
        margin: 0 auto;
    }
    .icon-content{
        position: absolute;
        bottom: 0rem;
        width: 100%;
        text-align: center;
    }

</style>