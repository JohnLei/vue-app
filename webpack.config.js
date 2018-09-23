const path = require('path')
//插件webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
module.exports = {
    mode:'development',
    //手动配置文件的入口文件
    //entry:path.join(__dirname,'./src/main.js'),
    //出口文件
    // output:{
    //     path:path.join(__dirname,'./dist'),
    //     filename:'bundle.js'
    // },
    plugins:[   //配置插件的节点
        new htmlWebpackPlugin({ //创建一个下内存中的HTML页面插件
            template:path.join(__dirname,'./src/index.html'),   //指定模块页面
            filename:'index.html',   //指定生成的页面
        }),
        new vueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
        
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},    //css加载器
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},    //scss加载器
            //配置图片格式URl的loader
            {test:/\.jpg|png|gif|bmp|jpeg$/,use:'url-loader?limit==7631&name=[hash:8]-[name].[ext]'},
            //配置字体文件的loader
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            //配置babel的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //配置vue-loader
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },
    //修改vue被导入包的路径
    resolve:{
        alias:{
            "vue$": "vue/dist/vue.js",
            '@':path.join(__dirname,'./src')    //配置项目根目录
        },
        extensions:['.js','.jsx','json','.vue'] //省略后缀名
    }
}
