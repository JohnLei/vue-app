// 导入axios
import Axios from 'axios'
// Global axios defaults
Axios.defaults.baseURL = 'http://www.lovegf.cn:8899/api/'
// 获取首页轮播图数据
export const getSwiper = params => Axios.get('getlunbo').then(res => res.data)
// 获取新闻资讯数据
export const getNewList = params => Axios.get('getnewslist').then(res => res.data)