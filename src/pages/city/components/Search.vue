<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市或者拼音">
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
    .search{
        height: .72rem;
        padding: 0 0.1rem;
        background: #25a4bb;
    }
    .search-input{
        box-sizing: border-box;
        width: 100%;
        height: .62rem;
        color: #666;
        padding: 0 0.1rem;
        text-align: center;
        border-radius: 0.1rem;
        line-height: .62rem;
    }


</style>