<template>
  <nav class="nav-bar-bottom" v-if="isShow">
    <div class="nav-bar-item" v-for="item in tabbarList" :key='item.name' @click="handleTabItemClick(item.name)">
      <img class="nav-bar-item__icon" :src="tabbarActive.name===item.name?item.activeIcon:item.icon" :alt="item.text">
      <p class="nav-bar-item__text" :class="{'nav-bar-item__text--active':tabbarActive.name===item.name}">{{item.text}}</p>
    </div>
  </nav>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import MutationType from '../../../store/mutationType';
export default {
  name:'navTabbarBottom',
  data(){
    return {
      isShow:true
    }
  },
  methods:{
    ...mapMutations([MutationType.SET_TABBAR_ACTIVE]),

    handleTabItemClick(currentTabName){ 
      let currentTabbarActive = this.tabbarList.filter(item=>item.name===currentTabName)[0];
      this.$router.push(currentTabbarActive.path);
      this[MutationType.SET_TABBAR_ACTIVE]({currentTabbarActive})
    },
  },
  computed: {
    ...mapState([ 'tabbarList', 'tabbarActive' ])
  },
  watch:{
    '$route.path'(newVal){
      let currentTabbarActive = this.tabbarList.filter(item=>item.path===newVal)[0];
      if(currentTabbarActive){
        this.isShow =true;
         this[MutationType.SET_TABBAR_ACTIVE]({currentTabbarActive})
      }else{
        this.isShow = false
      }
    }
  }
}
</script>

<style lang='scss'>
.nav-bar-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 40px;
  background: #fff;
  box-shadow: 0 -5px 10px 0 rgba(#ccc, 0.2);
  padding: 8px 0;
  font-size: 12px;

  .nav-bar-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    &__icon{
      width: 25px;
      height: 25px;
    }

    &__text{
      margin-top: 5px;
      color:#ccc;
      &--active{
        color: $primaryColor;
      }
    }
  }
  
}
</style>