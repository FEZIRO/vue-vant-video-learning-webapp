<template>
  <div class="edit">
    <TitleBar style="margin-top:20px">修改用户名</TitleBar>
    <form class="edit-form">
      <input type="string" class="username-input" v-model="username" placeholder="请输入新用户名"> 
      <button class="confirm-btn" type="submit" @click.prevent="onConfirm">确认</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name:'edit',
  data(){
    return {
      username:''
    }
  },
  methods:{
    ...mapActions(['changeUsername']),

    async onConfirm(){
      if(this.username===''){
        this.$toast('请输入新的用户名！')
        return;
      }
      await this.changeUsername(this.username);
      this.$toast('修改成功！')
      setTimeout(() => {
        this.$router.back();
      }, 1000);
    }
  }
}
</script>

<style lang="scss">
.edit-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  .username-input{
    width: 95%;
      padding:12px; 
      outline: 0;
      border: none;
      background-color: rgba(#58a, 0.1);
      color: #000;
      font-size: 16px;
      margin-top: 10px;
  }

  .confirm-btn{
    width: 100px;
    height: 40px;
    font-size: 16px;
    padding: 0;
    color:#58a;
    background-color: rgba(#58a, 0.1);
    border: none;
    outline: none;
    margin-top: 40px;
  }
}
</style>