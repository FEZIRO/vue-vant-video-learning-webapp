<template>
  <div id="app">
    <keep-alive exclude="detail,examination">
      <router-view/>
    </keep-alive>
    <NavTabberBotom />
  </div>
</template>

<script>
import NavTabberBotom from './components/common/nav-tab-bottom/nav-tabbar-bottom.vue';

export default {
  name:'App',
  components:{
    NavTabberBotom
  }
}
</script>

<style lang="scss">
#app {
  font-family:Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px;
}

</style>
