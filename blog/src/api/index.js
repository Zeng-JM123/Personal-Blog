import axios from '../axios.js';

var api = {
  queryBlog(params){
    return axios.get('/queryBlog', params)
  },
  queryBlogCount(search){
    return axios.get('/queryBlogCount'+search)
  },
  queryBlogDetail(params){
    return axios.get('/queryBlogDetail', params)
  },
  queryWorks(params){
    return axios.get('/queryWorks', params)
  },
  queryTagsRank(){
    return axios.get('/queryTagsRank')
  },
  queryCommentByQuestbook(){
    return axios.get('/queryCommentByQuestbook')
  },
  insertCommentByQuestbook(params){
    return axios.post('/insertCommentByQuestbook', params)
  },
  insertCommentByDetail(params){
    return axios.post('/insertCommentByDetail', params)
  },
  queryCommentByDetail(params){
    return axios.get('/queryCommentByDetail?id=' + params)
  },
  testXss(params){
    return axios.get('/testXss?userName=' + params)
  }
}

export default api;