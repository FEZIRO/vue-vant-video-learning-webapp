<template>
  <div class="home">
    <form class="search">
      <input
        class="search__input"
        type="text"
        placeholder="请输入关键词"
        v-model="keywords"
      />
      <button type="submit" class="search__btn icon-search" @click.prevent="onSearch"></button>
    </form>
    <van-skeleton class="skeleton" :row="4" :loading="loading">
      <van-swipe class="swiper" autoplay="3000" @change="onSwipeChange">
        <van-swipe-item v-for="item in swiper" :key="item.url">
          <img :src="item.url" :alt="item.url" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </van-skeleton>
    <section>
      <TitleBar>热门课程</TitleBar>
      <van-skeleton class="skeleton" title :row="3" :loading="loading">
        <ContentCard
          :content="item"
          v-for="item in hotContentList"
          :key="item.id"
        ></ContentCard>
      </van-skeleton>
    </section>
    <section>
      <TitleBar>学习手册</TitleBar>
      <van-skeleton class="skeleton" :row="6" :loading="loading">
        <div class="handbook-wrap">
          <ContentCardMini
            :content="item"
            v-for="item in handbookList"
            :key="item.id"
          ></ContentCardMini>
        </div>
      </van-skeleton>
    </section>
    <CustomFooter>Code by Feziro</CustomFooter>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import { mapState, mapMutations, mapActions } from 'vuex';
import contentCard from '../../components/common/content-card/content-card';
import contentCardMini from '../../components/common/content-card/content-card-mini';

export default {
  name: 'Home',
  data() {
    return {
      current: 0,
      keywords: '',
      loading: true,
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    ContentCard: contentCard,
    ContentCardMini: contentCardMini,
  },
  async mounted() {
    await this.getHomeData();
    this.loading = false;
  },
  computed: {
    ...mapState([
      'swiper',
      'tabCategoryList',
      'contentList',
      'contentListActive',
      'handbookList',
      'hotContentList',
    ]),
  },
  methods: {
    ...mapActions(['getHomeData']),

    onSwipeChange(index) {
      this.current = index;
    },

    onSearch(){
      if(this.keywords===''){
        this.$toast('请输入关键词！')
        return ;
      }
      this.$router.push({
        name:'SearchResult',
        params:{
          keywords: this.keywords
        }
      })
    }
  },
};
</script>

<style lang="scss">
.home {
  box-sizing: border-box;
  .search {
    display: flex;
    align-items: center;

    &__input {
      border-radius: 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      background: rgba(#808080, 0.1);
      box-sizing: border-box;
      padding: 0 10px;
      outline: none;
      border: none;
    }

    &__btn {
      padding: 0;
      width: 60px;
      height: 40px;
      outline: none;
      border: none;
      background-color: #fff;
      margin-left: 10px;
    }
  }

  

  .swiper {
    margin-top: 10px;
    img {
      width: 100%;
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 10px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .handbook-wrap {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
