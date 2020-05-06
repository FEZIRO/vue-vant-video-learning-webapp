<template>
  <div class="category">
    <TitleBar>分类</TitleBar>
    <div class="category-area">
      <aside class="category-bar">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            v-for="item in categoryList"
            :key="item.id"
            :title="item.name"
          />
        </van-sidebar>
      </aside>
      <main class="category-content">
        <div v-if="contentListActive">
          <ContentCard
            :content="item"
            v-for="item in contentListActive"
            :key="item.id"
          ></ContentCard>
        </div>
        <CustomFooter v-else>没有课程哦！</CustomFooter>
      </main>
    </div>
  </div>
</template>

<script>
import { Sidebar, SidebarItem } from 'vant';
import { mapState, mapMutations, mapActions } from 'vuex';
import ContentCard from '../../components/common/content-card/content-card';
import MutationType from '../../store/mutationType'

export default {
  name: 'category',
  data() {
    return {
      activeKey: 0,
    };
  },
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    ContentCard,
  },
  computed: {
    ...mapState([
      'categoryList',
      'contentList',
      'hotContentList',
      'contentListActive',
    ]),
  },
  async mounted() {
    await this.getCategoryData();
    this[MutationType.GET_DEFAULT_CATEGORY_CONTENT]({ categoryActiveIndex: 0 });
  },
  methods: {
    ...mapActions(['getCategoryData']),

    ...mapMutations([MutationType.GET_DEFAULT_CATEGORY_CONTENT]),

    onChange(index) {
      this[MutationType.GET_DEFAULT_CATEGORY_CONTENT]({ categoryActiveIndex: index });
    },
  },
};
</script>

<style lang="scss">
.category {
  .van-sidebar-item--select::before {
    background-color: #58a;
  }

  .category-area {
    position: absolute;
    top: 50px;
    bottom: 48px;
    left: 0;
    right: 0;
    display: flex;
    box-sizing: border-box;

    .category-bar {
      width: auto;
      overflow: auto;
      background-color: #f7f8fa;
      overflow-x: hidden;
    }

    .category-content {
      flex-grow: 1;
      padding: 10px;
      overflow: auto;
      box-sizing: border-box;
      width: calc(100% - 100px);
    }
  }

  
}
</style>
