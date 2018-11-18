<template>
    <div>
        <div class="home">home</div>
        <br>
        <router-link to="/list">列表页</router-link>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

    div{
        color: red;
    }

    .home{
        font-size: 30px;
    }
</style>


