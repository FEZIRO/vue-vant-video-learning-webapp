<template>
  <div class="search-result">
    <form class="search">
      <input
        class="search__input"
        type="text"
        placeholder="请输入关键词"
        v-model="keywords"
      />
      <button type="submit" class="search__btn icon-search" @click.prevent="onSearch"></button>
    </form>
    <TitleBar>搜索结果({{searchResult.length}}) ：</TitleBar>
    <van-skeleton
      class="skeleton"
      avatar-size="90px"
      avatar
      avatar-shape="square"
      title
      :row="2"
      :loading="loading"
    >
      <div v-if="searchResult.length !== 0">
        <ContentCard
          :content="item"
          v-for="item in searchResult"
          :key="item.id"
          @click.native="navigateToDetail(item.id)"
        ></ContentCard>
      </div>
      <CustomFooter v-else>没有课程哦！</CustomFooter>
    </van-skeleton>
  </div>
</template>

<script>
import ContentCard from '../../components/common/content-card/content-card';
import { mapActions, mapState, mapMutations } from 'vuex'
import MutationType from '../../store/mutationType';

export default {
  name:'searchResult',
  data(){
    return {
      keywords:this.$route.params.keywords,
      loading: true,
    }
  },
  async mounted(){
    await this.getSearchData(this.$route.params.keywords);
    this.loading = false
  },
  methods:{
    ...mapActions(['getSearchData']),
    ...mapMutations([MutationType.SET_SEARCH_RESULT_DATA]),

    async onSearch(){
      if(this.keywords===''){
        this.$toast('请输入关键词！')
        return ;
      }
      this.loading = true
      this[MutationType.SET_SEARCH_RESULT_DATA]([])
      await this.getSearchData(this.$route.params.keywords);
      this.loading = false
    },

     navigateToDetail(courseId){
      this.$router.push({
        name:'Detail',
        params:{
          id:courseId
        }
      });
    },
  },
  computed: {
    ...mapState(['searchResult'])
  },
  components: {
    ContentCard,
  },

}
</script>

<style lang="scss">
.search-result{
  .search {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
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
}
</style>