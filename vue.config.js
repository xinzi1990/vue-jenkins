/*
 * @file: /
 * @Author: wangxin
 * @LastEditTime: 2020-05-27 15:18:56
 */

// const isProduction = process.env.NODE_ENV === 'production'
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, './', dir)
}
module.exports = {
    // 保存的时候是否验证验证代码规范性
    lintOnSave: false,
    outputDir: 'dist',
    // 部署应用包时的基本URL
    // 默认值为'/'，可设置''或'./'，所有资源会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可设置为/my-app/这样的子路径
    // history.pushState路由和多页面配置时相对路径无效，请使用后面方式指定生产特定绝对路径process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
    // publicPath: '/',
    integrity: true,
    // webpack 配置
    chainWebpack: config => {
        // svg rule loader
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule.include.add(resolve('src/icons')) // 只匹配某个文件夹下的
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })

        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                //这个是加上自己的路径，
                //注意：试过不能使用别名路径
                path.resolve(__dirname, "./src/assets/style/var.less")
            ]
        }
    },
    configureWebpack: {
        
        externals: {
            // 此部分组件已经在html中统一添加
            // 'vue': 'Vue',
            // 'vue-router': 'VueRouter',
            // 'vuex': 'Vuex',
            // 'axios': 'axios',
            // 'element-ui': 'ELEMENT'
        },
        resolve: {
            extensions: ['.less'],
            // 路径别名
            alias: {
                '@components': '@/components'
            }
        }
    },
    // 所有 webpack-dev-server 的选项
    devServer: {
        port: 8888,
        disableHostCheck: true,
        overlay: {
            warnings: false,
            errors: false
        },
        // API 请求代理
        proxy: {
            '/map': {
                // target: 'http://13.114.8.11:8880',//保定物理机
                // target: 'http://10.86.187.30:8880',
                // target: 'http://10.32.105.109:8880',
                target: 'http://10.130.49.121:8883',
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true,
                ws: false
                // pathRewrite: {
                //     '^/map': ''
                // }
            }
        }
    }
};
