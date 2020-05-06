<template>
  <div class="examination" v-if="isLoaded">
    <TitleBar>《{{ examination.courseName }}》 题目</TitleBar>
    <TitleBar>单选题</TitleBar>
    <TitleBar class="question-name">{{ examination.question[answeredCount-1].name }}</TitleBar>
    <p class="exam-count">
      {{ answeredCount }} / {{ examination.question.length }}
    </p>
    <div
      class="option"
      :class="{ 'option--active': item === optionActive }"
      v-for="item in examination.question[answeredCount-1].option"
      :key="item"
      @click="onSelectOption(item)"
    >
      {{ item }}
    </div>

    <button class="next-btn" type="submit" @click="onSubmit" v-if="isShowSubmitBtn">
      提交
    </button>
    <button class="next-btn"  @click="onNextBtn" v-else>下一题</button>
    <button class="next-btn exit-btn"  @click="onExitBtn">退出答题</button>
    <van-overlay :show="isShowResultPanel">
      <div class="panel-wrap" @click.stop>
        <div class="panel-content">
          <h2>提交成功！</h2>
          <p>分数： {{answerResult.score}}</p>
          <p>答对： {{answerResult.correctCount}}</p>
          <p>答错： {{answerResult.wrongCount}}</p>
          <button class="next-btn"  @click="onExitBtn">确定</button>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: 'examination',
  data() {
    return {
      isShowResultPanel:false,
      isLoaded:false,
      answeredCount: 1,
      optionActive: '',
      isShowSubmitBtn: false,
    };
  },
  async mounted(){
    console.log(this.$route.params.courseId);
    
    await this.getExamData(this.$route.params.courseId)
    this.isLoaded = true
  },
  computed: {
    ...mapState(['examination','answerResult']),
  },
  methods: {
    ...mapActions(['getExamData','postExamAnswer']),

    onSelectOption(option) {
      this.optionActive = option;
    },

    onNextBtn() {
      if (this.optionActive !== '') {
         ++this.answeredCount;
        this.isShowSubmitBtn = this.answeredCount === this.examination.question.length
        this.optionActive = '';
      } else {
        this.$toast('请选择选项！');
      }
    },

    async onSubmit(){
      console.log('submit');
      let submitData = {}
      await this.postExamAnswer(submitData);
      this.isShowResultPanel = true;
    },

    onExitBtn(){
      this.$router.back();
    }
  },
};
</script>

<style lang="scss">
.examination {
  .exam-count {
    position: absolute;
    right: 10px;
    font-size: 16px;
    top: 55px;
  }

  .option {
    margin: 0 auto;
    padding: 20px;
    font-size: 14px;
    background-color: rgba(#000, 0.05);
    margin-top: 20px;
    border-radius: 6px;
    transition: all 0.3s;

    &--active {
      background-color: rgba(#58a, 1);
      color: #fff;
    }
  }

  .next-btn {
    display: block;
    margin: 0 auto;
    font-size: 16px;
    border: 0;
    outline: none;
    width: 120px;
    padding: 14px;
    color: #fff;
    border-radius: 6px;
    background-color: rgba(#58a, 1);
    margin-top: 40px;
  }

  .exit-btn{
    background-color: rgba(#58a,0.5);
  }

  .question-name{
    margin-top: 30px;
    font-weight: normal;
  }

  .panel-wrap{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .panel-content{
      width: 300px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: #fff;
      >h2{
        font-size: 24px;
        padding:20px 0;
      }
      >p{
        font-size: 20px;
        margin-top: 20px;
      }
    }
  }
}
</style>
