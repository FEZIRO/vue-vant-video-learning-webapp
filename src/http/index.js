import axios from 'axios';
import API from './api';

const TEST_URL_HOST = '';
const SERVER_HOST = 'https://xxx.com/v2';
//根据开发环境切换后端数据域名
const HOST =
  process.env.NODE_ENV === 'development' ? TEST_URL_HOST : SERVER_HOST;

//axios拦截器添加token到请求头
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('uid') || '';
  config.headers.common['Authorization'] = 'Bearer ' + token;
  return config;
});

/**
 *
 */

//根据api生成对应请求库
const Http = {};
let apiIterator = Object.entries(API);

for (let item of apiIterator) {
  let key = item[0];
  let value = item[1];
  Http[key] = (data = {}, options = {}) => {
    if (
      value.method == 'post' ||
      value.method == 'put' ||
      value.method == 'patch' ||
      value.method == 'delete'
    ) {
      return axios({
        method: value.method,
        url: value.url,
        baseUrl: HOST,
        data: {
          ...value.params,
          ...data,
        },
        ...options,
      });
    } else if (value.method === 'get' || value.method == 'delete') {
      return axios({
        method: value.method,
        url: HOST + value.url,
        baseUrl: HOST,
        params: {
          ...value.params,
          ...data,
        },
        ...options,
      });
    } else {
      return axios({
        method: value.method,
        url: value.url,
        baseUrl: HOST,
        ...options,
      });
    }
  };
}

export default Http;
