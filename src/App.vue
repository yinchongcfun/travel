<template>
  <div id="app">
      <!--路由内容存到内存-->
      <keep-alive>
        <router-view/>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
