import Vue from 'vue';
import Vuex from 'vuex';
import Http from '../http/index';
import MutationType from './mutationType';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logo: require('../assets/images/logo.svg'),
    tabbarList: [
      {
        icon: require('../assets/images/home.svg'),
        activeIcon: require('../assets/images/home-selected.svg'),
        path: '/home',
        name: 'home',
        text: '首页',
      },
      {
        icon: require('../assets/images/category.svg'),
        activeIcon: require('../assets/images/category-selected.svg'),
        path: '/category',
        name: 'category',
        text: '类别',
      },
      {
        icon: require('../assets/images/my-learning.svg'),
        activeIcon: require('../assets/images/my-learning-selected.svg'),
        path: '/my-learning',
        name: 'myLearning',
        text: '学习',
      },
      {
        icon: require('../assets/images/center.svg'),
        activeIcon: require('../assets/images/center-selected.svg'),
        path: '/mine',
        name: 'mine',
        text: '我的',
      },
    ],
    tabbarActive: {
      icon: require('../assets/images/home.svg'),
      activeIcon: require('../assets/images/home-selected.svg'),
      path: '/home',
      name: 'home',
      text: '首页',
    },
    //home
    swiper: [],
    hotContentList: [],
    handbookList: [],

    //category
    categoryList: [],
    contentList: {},
    contentListActive: [],

    //mine
    userName: '',
    bindingPhone: '',
    avatarUrl: require('../assets/images/default_avatar.svg'),

    //my-learning
    learnedList: [],
    learningList: [],

    //detail
    courseDetail: {},
    currentSection: {},
    recommendCourse: [],

    //examinaton
    examination: {},
    answerResult: {},

    //search
    searchResult: [],
  },
  mutations: {
    [MutationType.SET_TABBAR_ACTIVE](state, playload = {}) {
      let { currentTabbarActive } = playload;
      state.tabbarActive = currentTabbarActive;
    },
    [MutationType.GET_DEFAULT_CATEGORY_CONTENT](state, playload) {
      let { categoryActiveIndex } = playload;
      let categoryName = state.categoryList[categoryActiveIndex].name;
      console.log(categoryName);
      state.contentListActive = state.contentList[categoryName];
    },
    [MutationType.SET_COURSE_SECTION](state, playload) {
      let { sectionName } = playload;
      state.currentSection = state.courseDetail.section.filter(
        (item) => item.name === sectionName
      )[0];
    },
    [MutationType.SET_HOME_DATA](state, playload = {}) {
      state.swiper = playload.swiper;
      state.hotContentList = playload.hotContentList;
      state.handbookList = playload.handbookList;
    },
    [MutationType.SET_CATEGORY_DATA](state, playload = {}) {
      state.categoryList = playload.categoryList;
      state.contentList = playload.contentList;
    },
    [MutationType.SET_MY_LEARNING_DATA](state, playload = {}) {
      state.learnedList = playload.learnedList;
      state.learningList = playload.learningList;
    },
    [MutationType.SET_PERSONAL_INFO_DATA](state, playload = {}) {
      state.userName = playload.userName;
      state.bindingPhone = playload.bindingPhone;
      state.avatarUrl = playload.avatarUrl;
    },
    [MutationType.SET_COURSE_DATA](state, playload = {}) {
      state.courseDetail = playload;
      state.currentSection = playload.section[0];
      state.recommendCourse = playload.recommendCourse;
    },
    [MutationType.SET_EXAM_DATA](state, playload = {}) {
      state.examination = playload;
    },
    [MutationType.SET_EXMA_ANSWER_DATA](state, playload = {}) {
      state.answerResult = playload;
    },
    [MutationType.SET_SEARCH_RESULT_DATA](state, playload = []) {
      state.searchResult = playload;
    },
    [MutationType.SET_USERNAME](state, playload = '') {
      state.userName = playload.username;
    },
  },
  actions: {
    async getHomeData({ commit }) {
      await Http.home().then((res) => {
        console.log(res);
        let data = '';
        if (res.status === 200) {
          data = res.data;
          commit(MutationType.SET_HOME_DATA, data);
        }
      });
    },

    async getCategoryData({ commit }) {
      await Http.category().then((res) => {
        console.log(res);
        let data = '';
        if (res.status === 200) {
          data = res.data;
          commit(MutationType.SET_CATEGORY_DATA, data);
        }
      });
    },

    async getMyLearningData({ commit }) {
      await Http.myLearning().then((res) => {
        console.log(res);
        if (res.status === 200) {
          let data = res.data;
          commit(MutationType.SET_MY_LEARNING_DATA, data);
        }
      });
    },

    async getPersonalInfo({ commit }) {
      await Http.personalInfo().then((res) => {
        console.log(res);
        if (res.status === 200) {
          let data = res.data;
          commit(MutationType.SET_PERSONAL_INFO_DATA, data);
        }
      });
    },

    async getCourseDetailData({ commit }, courseId) {
      await Http.courseDetail({ courseId }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          let data = res.data;
          commit(MutationType.SET_COURSE_DATA, data);
        }
      });
    },

    async getExamData({ commit }, courseId) {
      await Http.examContent({ courseId }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          let data = res.data;
          commit(MutationType.SET_EXAM_DATA, data);
        }
      });
    },

    async postExamAnswer({ commit }, result = {}) {
      await Http.examSubmit(result).then((res) => {
        console.log(res);
        if (res.status === 200) {
          let data = res.data;
          commit(MutationType.SET_EXMA_ANSWER_DATA, data);
        }
      });
    },

    async getSearchData({ commit }, keywords) {
      await Http.search({ keywords }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          let data = res.data;
          commit(MutationType.SET_SEARCH_RESULT_DATA, data);
        }
      });
    },

    async changeUsername({ commit }, username) {
      await Http.changeUsername({ username }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          let data = res.data;
          commit(MutationType.SET_USERNAME, data);
        }
      });
    },

    async login({ commit }, { phoneNumber = '', validateCode = '' }) {
      await Http.login({ phoneNumber, validateCode }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          let data = res.data;
          localStorage.setItem('uid', data.token);
        }
      });
    },
  },
  modules: {},
});
