const Mock = require('mockjs');
import API from './http/api';

Mock.setup({
  timeout: 500, // 设置延迟响应，模拟向后端请求数据
});

const homeData = {
  swiper: [
    { url: 'https://img.mukewang.com/5ea63b0b0001fc1318720764.jpg' },
    { url: 'https://img.mukewang.com/5e93cfe00001d27c18720764.jpg' },
    { url: 'https://img.mukewang.com/5e9ed8540001d04818720764.jpg' },
  ],
  hotContentList: [
    {
      category: 'java',
      id: 'wy29y9',
      imgPreview:
        'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
      title: 'JAVA高级教程',
      watchCount: 234,
      date: new Date().toLocaleDateString(),
    },
    {
      category: 'java',
      id: 'wyww29y9',
      imgPreview:
        'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
      title: 'SpringBoot教程',
      watchCount: 104,
      date: new Date().toLocaleDateString(),
    },
  ],
  handbookList: [
    {
      id: '123',
      name: 'SpringBoot 趣味私房课趣味私房课趣味私房课趣味私房课',
      imgPreview: 'https://img4.mukewang.com/5e9cfd150001349b02940333.jpg',
      tag: '文字手册',
    },
    {
      id: '12e3',
      name: '数据结构与算法（前端版）',
      imgPreview: 'https://img3.mukewang.com/5e906f130001f14802940333.jpg',
      tag: '视频手册',
    },
    {
      id: '12ew3',
      name: '架构思维成长之微服务',
      imgPreview: 'https://img4.mukewang.com/5e86b02f0001217802940333.jpg',
      tag: '视频手册',
    },
    {
      id: '12eewr3',
      name: 'Web前端开发修炼指南',
      imgPreview: 'https://img2.mukewang.com/5e6af145000157c402940333.jpg',
      tag: '视频手册',
    },
    {
      id: '12ewsdw3',
      name: '架构思维成长之微服务',
      imgPreview: 'https://img4.mukewang.com/5e86b02f0001217802940333.jpg',
      tag: '视频手册',
    },
  ],
};

const categoryData = {
  categoryList: [
    {
      id: 'dshfgewdi',
      name: 'Java',
    },
    {
      id: 'dshfwqeqegewdi',
      name: 'JavaScript',
    },
    {
      id: 'dshferwwgewdi',
      name: 'HTML',
    },
    {
      id: 'dshfgeerweregfwdi',
      name: '网络安全',
    },
    {
      id: 'dshfersiowwwwgewdi',
      name: 'PHP',
    },
    {
      id: 'dshfgeerrtwrtweregfwdi',
      name: 'Node.js',
    },
    {
      id: 'dshferwswgewdi',
      name: 'HTML',
    },
    {
      id: 'dshftwrtweregfwdi',
      name: 'Node.js',
    },
    {
      id: 'dshferwewdi',
      name: 'HTML',
    },
    {
      id: 'dshfgederweregfwdi',
      name: '网络安全',
    },
    {
      id: 'dshferstywwwwgewdi',
      name: 'PHP',
    },
    {
      id: 'dshfgeerryuttweregfwdi',
      name: 'Node.js',
    },
  ],
  contentList: {
    Java: [
      {
        category: 'java',
        id: 'wy29y9',
        imgPreview:
          'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
        title:
          'JAVA高级教程JAVA高级教程JAVA高级教程JAVA高级教程JAVA高级教程JAVA高级教程',
        watchCount: 234,
        date: new Date().toLocaleDateString(),
      },
      {
        category: 'java',
        id: 'wyww29y9',
        imgPreview:
          'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
        title: 'SpringBoot教程',
        watchCount: 104,
        date: new Date().toLocaleDateString(),
      },
    ],
    JavaScript: [
      {
        category: 'JavaScript',
        id: 'wy29ysd9',
        imgPreview:
          'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
        title: 'JavaScript高级教程',
        watchCount: 234,
        date: new Date().toLocaleDateString(),
      },
      {
        category: 'JavaScript',
        id: 'wyww29ydf9',
        imgPreview:
          'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
        title: 'Vue.js进阶教程',
        watchCount: 104,
        date: new Date().toLocaleDateString(),
      },
      {
        category: 'JavaScript',
        id: 'wy2ssd9y9',
        imgPreview:
          'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
        title: 'React高级教程',
        watchCount: 234,
        date: new Date().toLocaleDateString(),
      },
      {
        category: 'JavaScript',
        id: 'wy29ddy9',
        imgPreview:
          'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
        title: '浏览器适配教程',
        watchCount: 234,
        date: new Date().toLocaleDateString(),
      },
      {
        category: 'JavaScript',
        id: 'wy29yrtessd9',
        imgPreview:
          'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
        title: 'JavaScript高级教程',
        watchCount: 234,
        date: new Date().toLocaleDateString(),
      },
      {
        category: 'JavaScript',
        id: 'wyww29ffdydf9',
        imgPreview:
          'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
        title: 'Vue.js进阶教程',
        watchCount: 104,
        date: new Date().toLocaleDateString(),
      },
      {
        category: 'JavaScript',
        id: 'wy2ssdssd9y9',
        imgPreview:
          'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
        title: 'React高级教程',
        watchCount: 234,
        date: new Date().toLocaleDateString(),
      },
      {
        category: 'JavaScript',
        id: 'wy29ddrty9',
        imgPreview:
          'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
        title: '浏览器适配教程',
        watchCount: 234,
        date: new Date().toLocaleDateString(),
      },
    ],
  },
};

const myLearningData = {
  learnedList: [
    {
      category: 'java',
      id: 'wy29y9',
      imgPreview:
        'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
      title:
        'JAVA高级教程JAVA高级教程JAVA高级教程JAVA高级教程JAVA高级教程JAVA高级教程',
      watchCount: 234,
      progress: 100,
      date: new Date().toLocaleDateString(),
    },
    {
      category: 'java',
      id: 'wyww29y9',
      imgPreview:
        'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
      title: 'SpringBoot教程',
      watchCount: 104,
      progress: 100,
      date: new Date().toLocaleDateString(),
    },
  ],
  learningList: [
    {
      category: 'java',
      id: 'wy2ddsw9y9',
      imgPreview:
        'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
      title: 'JAVA高级教程',
      watchCount: 234,
      progress: 20,
      date: new Date().toLocaleDateString(),
    },
    {
      category: 'java',
      id: 'wy2ddf9y9',
      imgPreview:
        'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
      title: 'Node.js教程',
      watchCount: 234,
      progress: 40,
      date: new Date().toLocaleDateString(),
    },
    {
      category: 'java',
      id: 'wyww2rt9y9',
      imgPreview:
        'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
      title: 'SpringBoot教程',
      watchCount: 104,
      progress: 10,
      date: new Date().toLocaleDateString(),
    },
  ],
};

const personalInfoData = {
  token: '29dhg=we98hsdop39puioeqdhikhxw89s-',
  userName: 'feziro',
  bindingPhone: '1234567890',
  avatarUrl: 'https://s1.ax1x.com/2020/05/03/Jz2krV.jpg',
};

const courseData = {
  id: 'e397y',
  title: 'Java高级教程',
  desc: '由xxx主讲，内容分为五大章节，16个小节，总计时常150个小时',
  section: [
    {
      id: 'weqwd',
      name: '第一章第1节',
      videoUrl:
        'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4',
      imgPreview:
        'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
    },
    {
      id: 'ddfkjwed',
      name: '第一章第2节',
      videoUrl: 'https://v-cdn.zjol.com.cn/276989.mp4',
      imgPreview:
        'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
    },
    {
      id: 'wewewewqwd',
      name: '第一章第3节',
      videoUrl: 'https://v-cdn.zjol.com.cn/276989.mp4',
      imgPreview:
        'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
    },
    {
      id: 'ddfkttyrjwed',
      name: '第一章第4节',
      videoUrl: 'https://v-cdn.zjol.com.cn/276989.mp4',
      imgPreview:
        'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
    },
    {
      id: 'wequkiwd',
      name: '第一章第5节',
      videoUrl: 'https://v-cdn.zjol.com.cn/276989.mp4',
      imgPreview:
        'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
    },
    {
      id: 'ddfretyjyuwed',
      name: '第一章第6节',
      videoUrl: 'https://v-cdn.zjol.com.cn/276989.mp4',
      imgPreview:
        'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
    },
    {
      id: 'wequkiffyytwd',
      name: '第一章第7节',
      videoUrl: 'https://v-cdn.zjol.com.cn/276989.mp4',
      imgPreview:
        'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
    },
    {
      id: 'ddfreteyjwed',
      name: '第一章第8节',
      videoUrl: 'https://v-cdn.zjol.com.cn/276989.mp4',
      imgPreview:
        'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
    },
  ],
  recommendCourse: [
    {
      category: 'java',
      id: 'wy29y9',
      imgPreview:
        'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
      title: 'JAVA高级教程',
      watchCount: 234,
      date: new Date().toLocaleDateString(),
    },
    {
      category: 'java',
      id: 'wyww29y9',
      imgPreview:
        'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
      title: 'SpringBoot教程',
      watchCount: 104,
      date: new Date().toLocaleDateString(),
    },
  ],
};

const examinationData = {
  id: 'qeqiu',
  courseName: 'Java高级教程',
  question: [
    {
      id: '23332q',
      name: 'Java是动态语言还是静态语言?',
      option: ['动态语言', '静态语言', '既是动态又是静态', '两者都不是'],
      correct: '静态语言',
    },
    {
      id: '23dd332q',
      name: 'JavaScript是动态语言还是静态语言?',
      option: ['动态语言', '静态语言', '既是动态又是静态', '两者都不是'],
      correct: '动态语言',
    },
  ],
};

const searchResultData = [
  {
    category: 'java',
    id: 'wy29y9',
    imgPreview:
      'https://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png',
    title: 'JAVA高级教程',
    watchCount: 234,
    date: new Date().toLocaleDateString(),
  },
  {
    category: 'java',
    id: 'wyww29y9',
    imgPreview:
      'https://img4.mukewang.com/szimg/5e5621d0092c054612000676-360-202.png',
    title: 'SpringBoot教程',
    watchCount: 104,
    date: new Date().toLocaleDateString(),
  },
];

const questionAnswerData = {
  questionCount: 2,
  correctCount: 2,
  wrongCount: 0,
  score: 100,
  isPass: true,
};

const newUsernameData = {
  msg: 'change success',
  username:'Elvis Fung'
}

const LoginData = {
  token: '29dhg=we98hsdop39puioeqdhikhxw89s-',
  userName: 'feziro',
  bindingPhone: '1234567890',
  avatarUrl: 'https://s1.ax1x.com/2020/05/03/Jz2krV.jpg',
};

Mock.mock(API.home.url, API.home.method, homeData);
Mock.mock(API.category.url, API.category.method, categoryData);
Mock.mock(API.myLearning.url, API.myLearning.method, myLearningData);
Mock.mock(API.personalInfo.url, API.personalInfo.method, personalInfoData);
//GET请求带参数的路径要换成正则表达式才能正确识别
Mock.mock(
  new RegExp(API.courseDetail.url + '.*'),
  API.courseDetail.method,
  courseData
);
Mock.mock(
  new RegExp(API.examContent.url + '.*'),
  API.examContent.method,
  examinationData
);
Mock.mock(API.examSubmit.url, API.examSubmit.method, questionAnswerData);
Mock.mock(
  new RegExp(API.search.url + '.*'),
  API.search.method,
  searchResultData
);

Mock.mock(API.changeUsername.url, API.changeUsername.method, newUsernameData);

Mock.mock(API.login.url, API.login.method, LoginData);
