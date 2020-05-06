<template>
  <div class="my-learning">
    <TitleBar>正在学习</TitleBar>
    <van-skeleton
      class="skeleton"
      avatar-size="90px"
      avatar
      avatar-shape="square"
      title
      :row="2"
      :loading="loading"
    >
      <div v-if="learningList.length !== 0">
        <ContentCard
          :content="item"
          v-for="item in learningList"
          :key="item.id"
        ></ContentCard>
      </div>
      <CustomFooter v-else>没有课程哦！</CustomFooter>
    </van-skeleton>
    <TitleBar>已学习</TitleBar>
    <van-skeleton
      class="skeleton"
      avatar-size="90px"
      avatar
      avatar-shape="square"
      title
      :row="2"
      :loading="loading"
    >
      <div v-if="learningList.length !== 0">
        <ContentCard
          :content="item"
          v-for="item in learnedList"
          :key="item.id"
        ></ContentCard>
      </div>
      <CustomFooter v-else>没有课程哦！</CustomFooter>
    </van-skeleton>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import ContentCard from '../../components/common/content-card/content-card';

export default {
  name: 'MyLearning',
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(['learningList', 'learnedList']),
  },
  async mounted() {
    await this.getMyLearningData();
    this.loading = false;
  },
  methods: {
    ...mapActions(['getMyLearningData']),
  },
  components: {
    ContentCard,
  },
};
</script>

<style lang="scss"></style>
