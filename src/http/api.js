//管理和存放Api

const GET = 'get';
const POST = 'post'

const API = {
  login: {
    url: '/login',
    method: POST,
    params: {
      phoneNumber: '',
      validateCode: '',
    },
  },
  home: {
    url: '/home',
    method: GET,
    params: {},
  },
  search: {
    url: '/search',
    method: GET,
    params: {
      keywords: '',
    },
  },
  courseDetail: {
    url: '/courseDetail',
    method: GET,
    params: {
      courseId: '',
    },
  },
  myLearning: {
    url: '/myLearning',
    method: GET,
    params: {},
  },
  category: {
    url: '/category',
    method: GET,
    params: {},
  },
  addCourse: {
    url: '/addCourse',
    method: POST,
    params: {},
  },
  examContent: {
    url: '/examContent',
    method: GET,
    params: {
      courseId: '',
    },
  },
  examSubmit: {
    url: '/examSubmit',
    method: POST,
    params: {
      courseId: '',
    },
  },
  personalInfo: {
    url: '/personalInfo',
    method: GET,
    params: {},
  },
  changeUsername: {
    url: '/username',
    method: POST,
    params: {
      username:''
    },
  },
};

export default API