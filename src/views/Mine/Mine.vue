<template>
  <div class="mine">
    <img class="avatar" :src="avatarUrl" alt="头像">
    <MenuInfoItem toLink="/edit" title="用户名" :info="userName" arrow></MenuInfoItem>
    <MenuInfoItem toLink="" title="绑定手机号" :info="bindingPhone"></MenuInfoItem>
    <CustomFooter>
      <button class="logout" @click="logout">退出登录</button>
    </CustomFooter>
  </div>
</template>

<script>
import MenuInfoItem from '../../components/mine/menu-info-item/menu-info-item.vue';
import { mapMutations,mapState, mapActions } from 'vuex';


export default {
  name:'Mine',
  components:{
    MenuInfoItem
  },
  mounted(){
    this.getPersonalInfo()
  },
  methods:{
    ...mapActions(['getPersonalInfo']),

    logout(){
      localStorage.removeItem('uid'); 
      localStorage.removeItem('user'); 
      this.$router.push({ name:'Home' });
    }
  },
  computed:{
    ...mapState(['avatarUrl','userName','bindingPhone'])
  }
}
</script>

<style lang="scss">
.avatar{
  padding: 60px 0;
  width: 80px;
  height: 80px;
  display: block;
  margin:0 auto;
  border-radius: 100%;
}

.logout{
  position: absolute;
  transform: translateX(-50%);
  bottom: 100px;
  text-align: center;
  outline: none;
  border: none;
  background: rgba(#58a, 0.1);
  color: #58a;
  padding:8px;
  line-height: 20px;
  font-size: 14px;
}
</style>