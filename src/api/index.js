// 导入axios
import Axios from 'axios'
// Global axios defaults
Axios.defaults.baseURL = 'http://www.lovegf.cn:8899/api/'
// 获取首页轮播图数据
export const getSwiper = params => Axios.get('getlunbo').then(res => res.data)
// 获取新闻资讯数据
export const getNewList = params => Axios.get('getnewslist').then(res => res.data)
// 获取信息资讯详情页面数据
export const getNewInfo = params => Axios.get(`getnew/${params.id}`).then(res => res.data)
// 获取评论信息
export const getComments = params => Axios.get(`getcomments/${params.id}?pageindex=${params.pageindex}`).then(res => res.data)
// 点击添加评论
export const AddComment = params => Axios.post(`postcomment/${params.id}`).then(res => res.data)
// 获取商品列表
export const getGoodsList = params => Axios.get(`getgoods?pageindex=${params.pageindex}`).then(res => res.data)
// 商品详情轮播图
export const getGoodInfoswipe = params => Axios.get(`getthumimages/${params.id}`).then(res => res.data)