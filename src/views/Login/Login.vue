<template>
  <div class="login">
    <img class="avatar" :src="logo" alt="头像">
    <h2 class="title">在线视频学习平台</h2>
    <form class="login-form">
      <input type="number" class="telephone" v-model="telephone" placeholder="请输入手机号码"> 
      <input type="number" class="validate-code" v-model="validateCode" placeholder="请输入验证码">
      <button type="button" class="validate-btn" @click="onGetCode">{{codeTips}}</button>
      <button class="login-btn" type="submit" @click.prevent="onLogin">登录</button>
    </form>
  </div>
</template>

<script>
import { mapMutations,mapState, mapActions } from 'vuex';
export default {
  name:'login',
  data(){
    return {
      telephone: '',
      validateCode:'',
      codeTips:'获取验证码',
      isWaiting: false
    }
  },
  mounted(){
    console.log('这是登录页');
    
  },
  methods:{
    ...mapMutations([]),
    ...mapActions(['login']),

    onGetCode(){
      if(this.isWaiting){
        this.$toast('请稍后再发验证码！')
        return;
      }
      this.isWaiting = true;
      let countDownTime = 5; 
      this.codeTips = countDownTime+'秒后重发';
      let timer = setInterval(()=>{
        --countDownTime;
        this.codeTips = countDownTime+'秒后重发'
        if(countDownTime<=0){
          this.codeTips = '获取验证码'
          this.isWaiting = false;
          clearInterval(timer);
        }
      },1000)
      
    },

    async onLogin(){
      const validateTelephone = this.$Validator('telephone')(this.telephone) && this.$Validator('notEmpty')(this.telephone) ;
      const validateCode = this.$Validator('msgCode')(this.validateCode) && this.$Validator('notEmpty')(this.validateCode);
      if(!validateTelephone){
        this.$toast('请输入正确的手机号码！')
        return;
      }
      if(!validateCode){
        this.$toast('请输入正确的6位数字验证码！')
        return;
      }
      if(validateTelephone&&validateCode){
        console.log('验证通过');
        try {
          await this.login({
            phoneNumber: this.phoneNumber,
            validateCode: this.validateCode
          });
          this.$toast('登录成功');
          this.$router.push({name:'Home'})
        } catch (error) {
          this.$toast('登录失败，请稍后重试！')
        }
      }
    }
  },
  computed:{
    ...mapState(['logo'])
  }
}
</script>

<style lang='scss'>
.login{
  .avatar{
    padding: 50px 0;
    width: 80px;
    height: 80px;
    display: block;
    margin:0 auto;
  }

  .title{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color:#888;
  }

  .login-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .telephone,.validate-code{
      width: 80%;
      padding:12px; 
      outline: 0;
      border: none;
      background-color: rgba(#58a, 0.1);
      color: #000;
      font-size: 16px;
      margin-top: 30px;
    }

    .login-btn{
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
  
    .validate-btn{
        position: absolute;
        padding:15px; 
        bottom: 80px;
        right:22px;
        color:#58a;
        font-size: 12px;
        border:none;
        background-color: transparent;
      }

  }
  
  
}

</style>