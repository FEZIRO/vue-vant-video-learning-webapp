<template>
  <p class="title-bar" :style="{'font-size':fontSize}">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'titleBar',
  props:{
    fontSize:String
  }
};
</script>

<style lang="scss">
.title-bar{
    padding:10px 0;
    font-size: 16px;
    font-weight: bold;
  }
</style>
