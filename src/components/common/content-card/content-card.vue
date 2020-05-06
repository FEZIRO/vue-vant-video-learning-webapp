<template>
  <div class="content-card" @click="navigateToDetail(content.id)">
    <div class="preview">
      <img class="preview__img" :src="imgPreview" :alt="imgPreview" />
    </div>

    <article class="content">
      <p class="content__title">{{ title }}</p>
      <div class="sub-title">
        <p class="sub-title--left">{{ subTitleLeft }}</p>
        <p class="sub-title--right" v-if="content.progress">
          进度{{ content.progress }}%
        </p>
        <p class="sub-title--right" v-else>{{ content.watchCount }} 已看</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'contentCard',
  props: {
    content: {
      type: Object,
    },
  },
  data() {
    return {
      imgPreview: this.content.imgPreview || '',
      title: this.content.title || '',
      subTitleLeft: this.content.date || '',
      subTitleRight: '',
    };
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
};
</script>

<style lang="scss">
.content-card {
  display: flex;
  // background: #ccc;
  padding: 5px 0;
  box-sizing: border-box;
  margin-bottom: 10px;

  .preview {
    width: 140px;
    height: 60px;
    margin-right: 10px;
    overflow: hidden;
    &__img {
      height: 100%;
      background-position: center;
    }
  }

  .content {
    width: 100%;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      font-weight: bold;
      max-height: 36px;
      line-height: 18px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: rgba(0, 0, 0, 0.8);
    }

    .sub-title {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      &--left {
        padding: 4px;
      }

      &--right {
        background: rgba(#58a, 0.1);
        color: #58a;
        padding: 4px;
      }
    }
  }
}
</style>
