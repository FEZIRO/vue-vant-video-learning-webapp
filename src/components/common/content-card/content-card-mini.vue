<template>
  <div class="content-card-mini"  @click="navigateToDetail(content.id)">
    <div class="content-card-mini__img">
      <img :src="imgPreview" :alt="imgPreview">
    </div>
    <p class="content-card-mini__title">{{title}}</p>
    <p class="content-card-mini__sub-title">{{subTitle}}</p>
  </div>
</template>

<script>
export default {
  name:'contentCardMini',
  props:{
    content: Object
  },
  data() {
    return {
      imgPreview: this.content.imgPreview||'',
      title: this.content.name||'',
      subTitle: this.content.tag||''
    }
  },
  methods: {
    navigateToDetail(courseId) {
      this.$router.push({
        name: 'Detail',
        params: {
          id: courseId,
        },
      });
    },
  },
}
</script>

<style lang="scss">
.content-card-mini{
  width: 33.33%;
  // background: #58a;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10px 0;
  &__img{
    width: 100%;
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      height: 100%;
      margin: 0 auto;  
    }
  }

  &__title{
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    margin-top: 4px;
    line-height: 16px;
    max-height: 32px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  &__sub-title{
    font-size: 12px;
    color: rgba( #000000, 0.5);
    margin-top: 4px;
  } 
}
</style>