<template>
  <router-link :to="toLink" class="menu-info-item " :class="{'menu-info-item__arrow':arrow}" >
    <p class="menu-info-item--left">{{title}}</p>
    <p class="menu-info-item--right">{{info}}</p>
  </router-link>
</template>

<script>
export default {
  name:'menuInfoItem',
  props:{
    title:String,
    info: String,
    toLink:{
      type:String,
      default:'/'
    },
    arrow:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang='scss'>
.menu-info-item{
  font-size: 18px;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  border-bottom:1px solid rgba(#000, 0.03);
  color: #000;
  position: relative;
  &--left{
    flex-shrink: 0;
  }

  &--right{
    flex-shrink: 0;
    color:#888;
    
  }

  &__arrow{
    padding-right: 30px;
    &::after{
      position: absolute;
      right: 0;
      content: '>';
      width: 20px;
      height: 20px;
      color: #000;
    }
  }
}
</style>