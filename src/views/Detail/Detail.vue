<template>
  <div>
    <div class="detail" v-if="isloaded">
      <VideoPlayer
        :options="playerOptions"
        class="video-player-box"
        ref="videoPlayer"
        :playsinline="true"
        @ended="onPlayerEnded"
        customEventName="customstatechangedeventname"
      ></VideoPlayer>
      <div class="section-wrap" @click="onSectionSelect">
        <section
          class="course-section"
          :class="{
            'course-section--active': currentSection.name == item.name,
          }"
          v-for="item in section"
          :key="item.id"
        >
          <a href="#" :data-name="item.name">{{ item.name }}</a>
        </section>
      </div>

      <TitleBar>{{ title }}</TitleBar>
      <p class="course-info">{{ courseInfo }}</p>
      <div class="btn-group">
        <button @click="onAddSchedule">加入学习表</button>
        <button :class="{ 'answer-btn': !canAnswer }" @click="onAnswer">
          去答题
        </button>
      </div>
      <TitleBar>推荐</TitleBar>
      <ContentCard
        :content="item"
        v-for="item in recommendCourse"
        :key="item.id"
      ></ContentCard>
    </div>
    <div v-else class="loading">
      <van-loading size="24px" color="#58a" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
import contentCard from '../../components/common/content-card/content-card';
import MutationType from '../../store/mutationType';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'detail',
  data() {
    return {
      isloaded: false,
      canAnswer: false,
      courseId: '',
      title: '',
      courseInfo: '',
      section: [],
      playerOptions: {
        muted: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src: '',
          },
        ],
        notSupportedMessage: '',
        poster: require('../../assets/images/logo.svg'),
      },
    };
  },
  mounted(){
    this.getData()  
  },
  components: {
    VideoPlayer: videoPlayer,
    ContentCard: contentCard,
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },

    ...mapState(['courseDetail', 'recommendCourse', 'currentSection']),
  },
  watch:{
    '$route.params.id'(to, from){
      this.getData()
    }
  },
  methods: {
    ...mapActions(['getCourseDetailData']),
    ...mapMutations([MutationType.SET_COURSE_SECTION]),

    onAnswer() {
      if (!this.canAnswer) {
        this.$toast('请观看完视频再答题！');
        return;
      }
      this.$router.push({
        name: 'Examination',
        params: {
          courseId: this.courseId,
        },
      });
    },

    onSectionSelect(e) {
      let sectionName = e.target.dataset.name;
      this[MutationType.SET_COURSE_SECTION]({ sectionName });
      this.handleData();
    },

    onAddSchedule() {
      this.$toast.success({
        message: '已成功加入！',
        icon: 'like-o',
      });
    },

    async getData(){
      await this.getCourseDetailData(this.courseId);
      this.handleData();
    },

    handleData() {
      this.title = this.courseDetail.title;
      this.courseInfo = this.courseDetail.desc;
      this.playerOptions.sources[0].src = this.currentSection.videoUrl;
      this.playerOptions.poster = this.currentSection.imgPreview;
      this.section = this.courseDetail.section;
      this.isloaded = true; 
      this.courseId = this.courseDetail.id;
    },

    onPlayerPlay(player) {
    
    },
    onPlayerPause(player) {
     
    },

    playerStateChanged(playerCurrentState) {
    },

    onPlayerEnded() {
      this.canAnswer = true;
    },
  },
};
</script>

<style lang="scss">
.detail {
  .video-js {
    width: 100%;
    height: 200px;
    display: block;
    border: none;

    .vjs-big-play-button {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(#000, 0.5);
      border: none;
    }
  }

  .course-info {
    font-size: 14px;
    line-height: 16px;
    color: #888;
  }

  .btn-group {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0;
    > button {
      font-size: 16px;
      border: 0;
      outline: none;
      width: 120px;
      padding: 10px;
      color: #fff;
      border-radius: 6px;
      background-color: rgba(#58a, 1);
    }

    .answer-btn {
      background-color: rgba(#58a, 0.5);
    }
  }

  .section-wrap {
    width: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 10px 0;
    .course-section {
      flex-shrink: 0;
      width: 50px;
      padding: 10px;
      font-size: 12px;
      text-align: center;
      background-color: rgba(#000, 0.05);
      margin-right: 6px;
      color: #888;
      line-height: 16px;
      transition: all 0.5s;
      border-radius: 4px;
      > a {
        color: #888;
      }

      &--active {
        background-color: rgba(#58a, 1);
        color: #fff;
        > a {
          color: #fff;
        }
      }
    }
  }

  
}

.loading{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
