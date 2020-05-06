const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境压缩代码和删除console
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true,  
            },
            warnings: false,
          },
          sourceMap: false,
          parallel: true,
        })
      );
    }
  },
  chainWebpack: (config) => {
    //全局导入scss文件
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/assets/style/*.scss',
        })
        .end();
    });
  },
};
