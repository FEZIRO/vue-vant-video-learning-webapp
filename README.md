# 基于Vue+Vant的移动端WebApp在线视频学习平台

##### **本项目的构思编写均由自己完成，仅供前端学习交流专用，禁止用于其他用途！！**<br>

项目实现了包含项目构建，页面结构样式编写，交互逻辑编写，路由鉴权验证，模拟数据请求，移动端调试等开发工作（除没有配置单元测试和ESlint），难度和复杂性不高，适合前端入门者学习如何使用vue框架编写小项目。

<u>（特别说明：每个人编写代码的思维不一样，只作参考）</u>

<br>

### 使用的技术

- vue（主角！！！[官方文档](https://cn.vuejs.org/)）
- vuex（官方全局状态管理器，[官方文档](https://vuex.vuejs.org/zh/)）
- vue-router（官方前端路由管理器，[官方文档](https://router.vuejs.org/zh/)）
- vue-cli3.0（官方项目脚手架，[官方文档](https://cli.vuejs.org/zh/)）
- axios（http请求库，[官方文档](https://www.kancloud.cn/yunye/axios/234845)）
- sass（css预处理器，[官方文档](https://www.sass.hk/docs/)）
- vant移动端组件库（vue官方推荐，[官方文档](https://youzan.github.io/vant/#/zh-CN/)）
- rem移动端适配（配合postcss-pxtorem插件）
- mockjs（模拟后端数据，[官方文档](https://github.com/nuysoft/Mock/wiki/Getting-Started)）
- vue-video-player（第三方播放器插件，[官方文档](https://github.com/surmon-china/vue-video-player)）
- eruda（非常好用强大的移动端调试器，[官方文档](https://github.com/liriliri/eruda/blob/HEAD/doc/README_CN.md)）
- 其他插件（ sass-resources-loader，reset-css，babel-plugin-import，uglifyjs-webpack-plugin ）

<br>



### 实现效果展示

假数据素材来源网络测试链接，模拟真实数据。

<img alt="首页" src="https://pic.downk.cc/item/5eafcec1c2a9a83be5906660.jpg" style="zoom:25%;" /><img alt="分类" src="https://pic.downk.cc/item/5eafce7ec2a9a83be5901d04.jpg" style="zoom:25%;" /><img alt="我的学习" src="https://pic.downk.cc/item/5eafcecac2a9a83be59070df.jpg" style="zoom:25%;" /><img alt="个人中心" src="https://pic.downk.cc/item/5eafcec1c2a9a83be5906665.jpg" style="zoom:25%;" />

<img alt="搜索" src="https://pic.downk.cc/item/5eafcec1c2a9a83be5906662.jpg	" style="zoom:25%;" /><img alt="课程详情" src="https://pic.downk.cc/item/5eafcec1c2a9a83be5906669.jpg" style="zoom:25%;" /><img alt="修改用户名" src="https://pic.downk.cc/item/5eafcec1c2a9a83be590666d.jpg" style="zoom:25%;" /><img alt="答题" src="https://pic.downk.cc/item/5eafce7ec2a9a83be5901ced.jpg" style="zoom:25%;" />

<img alt="提交答题" src="https://pic.downk.cc/item/5eafce7ec2a9a83be5901cf2.jpg" style="zoom:25%;" /><img alt="登录" src="https://pic.downk.cc/item/5eafce7ec2a9a83be5901cfc.jpg" style="zoom:25%;" /><img alt="骨架屏" src="https://pic.downk.cc/item/5eafce7ec2a9a83be5901d01.jpg" style="zoom:25%;" />

<br>

### 运行方式

将项目从仓库clone或直接打包下载下来，按顺序运行下面的命令即可查看开发版演示效果：

1. `npm install`
2. `npm run serve`
3. 根据`npm run serve`所生成的地址，打开浏览器相应的地址，在开发者调试器中打开移动端视图即可

<br>



### src目录结构
|-- vue-mobile-video-learning-webapp
    |-- App.vue
    |-- main.js                              //项目主入口
    |-- mock.js                              //mockjs模拟请求
    |-- assets                               //资源
    |   |-- images                           //图片资源
    |   |-- style                            //样式资源
    |-- components
    |   |-- common                           //公共组件
    |   |   |-- content-card
    |   |   |   |-- content-card-mini.vue
    |   |   |   |-- content-card.vue
    |   |   |-- footer
    |   |   |   |-- footer.vue
    |   |   |-- nav-tab-bottom
    |   |   |   |-- nav-tabbar-bottom.vue
    |   |   |-- title-bar              
    |   |       |-- title-bar.vue
    |   |-- mine                             //mine页面功能组件
    |       |-- menu-info-item
    |           |-- menu-info-item.vue
    |-- http
    |   |-- api.js                           //后端数据API管理
    |   |-- index.js                         //请求api封装
    |-- libs
    |   |-- setRem.js                        //设置rem
    |   |-- validator.js                     //表单校验器
    |-- router
    |   |-- index.js                         //router路由配置
    |-- store
    |   |-- index.js                         //vuex配置
    |   |-- mutationType.js                  //存放mutation类型
    |-- views            
        |-- Category                         //分类页
        |   |-- Category.vue  
        |-- Detail                           //详情页      
        |   |-- Detail.vue     
        |-- Edit                             //信息编辑页
        |   |-- Edit.vue
        |-- Examination                      //答题页
        |   |-- Examination.vue
        |-- Home                             //主页
        |   |-- Home.vue
        |-- Login                            //登录页
        |   |-- Login.vue
        |-- Mine                             //我的页
        |   |-- Mine.vue
        |-- MyLearning                       //我的学习页
        |   |-- MyLearning.vue
        |-- SearchResult                     //搜索页
            |-- SearchResult.vue


## 技术关键点和问题

下面只说说实现的关键技术点和问题细节描述。

#### Rem移动端适配

由于此项目只有移动端页面，所以为了适配各种分辨率和不同屏幕大小的手机，故使用rem（不懂可以百度）来进行响应式适配，以设计稿 **屏幕逻辑像素宽度/10** 为基准单位，设计稿通常使用iPhone 6为屏幕参照 ，物理像素和逻辑像素比为2，故`1rem = 375/10 = 37.5px`，为了在写代码方便，需要引入`postcss-pxtorem`插件进行单位转换生成相应的rem值。

```javascript
//在vue.config.js中配置postcss-pxtorem
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            // 把px单位换算成rem单位
            rootValue: 37.5, // 换算的基数
            selectorBlackList: [],
            propList: ['*'],
          }),
        ],
      },
    },
  }
};
```

```javascript
// 建立一个setRem.js用于设置rem基准单位的函数，在main.js中导入即可
function setRem() {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 10 + 'px';
}

setRem();

window.onresize = function() {
  setRem();
};

```

效果

![](https://pic.downk.cc/item/5eafda19c2a9a83be59a8d12.gif)

<br>

#### Eruda移动端调试器

这个移动端调试神器用了都说好，比那个vConsole好用很多，附上使用教程地址（https://github.com/liriliri/eruda）

<img alt="eruda移动端调试器" src="https://pic.downk.cc/item/5eafcecbc2a9a83be59070e3.jpg" style="zoom:25%;" />

<br>

#### Vant组件按需导入问题

在局部vue组件导入vant组件使用存在无法识别name问题，故注册组件需要这样写才能正确识别(全局注册的组件无需写)：

```javascript
//无法识别vant组件标签
components: {
    Swipe: Swipe,
    SwipeItem: SwipeItem,
 },
   
//正确识别vant组件标签
components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
```

<br>

#### 登录验证和路由拦截

按照前端后端分离的模式采用token的验证方式，在登录时利用localstorage存入token，router路由切换到需要登录凭证的页面组件先检查是否登录，在进行路由切换

``````javascript
//路由表route配置需要验证的页面
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine/Mine.vue'),
    meta: { requiresAuth: true },//此页面需要身份验证标识
  }
]

//路由鉴权
router.beforeEach((to,from,next) => {
  const token = localStorage.getItem('uid');
  //判断to路由是否需要授权，防止重复验证导致爆栈
   if (to.meta.requiresAuth) {
     if (!token || token === '') {
       next({ name: 'Login' });
     } else {
       next();
     }
   } else {
     next(); // 确保一定要调用 next()
   }
})
``````

<br>

#### 后端数据API管理和封装

后端数据采用一个api.js文件进行批量后端api管理，再封装生成基于axios的Http请求库即可，这种设计模式灵活性高，便于管理数据接口，如有新接口只需添加接口信息即可使用。

``````javascript
/**
 *  http/api.js 接口管理
 */
const API = {
  login: {
    url: '/login',
    method: 'post',
    params: {
      phoneNumber: '',
      validateCode: '',
    },
  },
  home: {
    url: '/home',
    method: 'get',
    params: {},
  },
}
``````

``````javascript
/**
 *  http/index.js 封装Http请求库
 *	导出Http库，在需要使用的地方导入Http，然后使用对象的方式调用和传参即可
 *  增加新的接口直接在api管理文件加入接口属性即可
 */ 
//axios拦截器添加请求头Authorization
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('uid')||'';
  config.headers.common['Authorization'] = 'Bearer ' + token;
  return config;
});

//根据api生成对应请求库
import API from './api';
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
``````

<br>

#### Mockjs模拟后端数据请求

在src根目录创建mock.js文件即可

``````javascript
//这最简单粗暴的模拟接口，更详细的使用得看官方文档 http://mockjs.com/
Mock.setup({
  timeout: 500, // 设置模拟延迟响应
});
const url = '';
const method = ''
const responseData = {}

//URL无参数
Mock.mock(url, method, responseData);

//对url尾部带参数的需要写正则表达式适配，如
Mock.mock(
  new RegExp(url + '.*'),
  method,
  responseData
);
``````

<br>

#### Keep-alive页面缓存

很多页面基本上都是在mounted时候获取后端数据，所以在页面切换的时候会每一次都发送请求，可以使用`keep-alive`组件缓存不需要频繁刷新的页面，这样每次打开某些页面组件就不用频繁刷新获取数据了。

``````html
//exclude属性设定detail和examination页面组件不需要缓存，也可以用include设定需要缓存的页面组件
<keep-alive exclude="detail,examination">
   <router-view/>
</keep-alive>
``````

<br>

#### 策略模式表单验证

通过编写各种要求的正则表达式，生成validator验证器，可以很方便的在各种表单复用验证器

``````javascript
const validateStrategy = {
  //校验手机号码
  telephone: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
  //校验非空字符
  notEmpty: /\S/,
  //匹配验证码（6位数字）
  msgCode: /^\d{6}$/,
};

/* 这种写法可以直接验证，也可以向自定义form组件属性传入验证函数
*  直接验证 Validator('telephone')(value)
*	 通过 Validator('telephone') 返回的验证函数通过属性的方式传入自定义form组件 
*/
const Validator = (strategyName) => {
  return (data) => {
    return validateStrategy[strategyName].test(data);
  }
}

export default Validator;
``````

<br>

#### 骨架屏和loading提示用户体验优化

vue做网页其实很容易引起白屏，使用路由懒加载可以加快加载速度，搭配使用骨架屏（占位块）和loading提示让用户知道加载情况，体验更加友好。

<br>

#### 分配置环境测试与打包

不同的配置环境是为了区分正式和测试版本的运行环境如：测试版本需要运行专门的测试服务器，需要添加调试语句和移动端调试器，没有压缩优化代码等，这些为了开发调试而专门设置的工具会在正式版本打包中应要被删除或者优化。

vue-cli3简化了分环境配置文件，可以在项目根目录新建配置文件`.env.[模式名称]`，如`.env.dev`
[官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html)，如不用自定义环境配置文件可以通过全局访问`process.env.NODE_ENV`来区分正式（production）和测试环境（development）<br>

添加npm命令即可运行自定义模式和访问`process.env`对象获取相应配置信息。
``````javascript
// package.json自定义配置环境命令
"scripts": {
    "serve": "vue-cli-service serve",  //官方测试命令
    "build": "vue-cli-service build" 	 //官方打包命令
    "my-build":"vue-cli-service build --mode [模式名称]" // 对应.env.[模式名称]文件中的模式名称
    "my-serve":"vue-cli-service serve --mode [模式名称]" // 对应.env.[模式名称]文件中的模式名称
 },
``````



**注意：.env配置文件自定义属性时需要添加`VUE_APP_`前缀即`VUE_APP_[属性名]=xxx`才可被`process.env`访问**

<br>




<center>Code By FEZIRO</center>