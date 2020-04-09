<template>
  <div class="detail">
    <div class="title">{{blogDetail.title}}</div>
    <div class="info">发布于：铭铭 | 发布时间：{{blogDetail.time}} | 浏览：{{blogDetail.views}} | 标签：{{blogDetail.tags}}</div>
    <div class="detail-content" v-html="$xss(blogDetail.content)"></div>
    <send-comment></send-comment>
    <show-comments></show-comments>
  </div>
</template>

<script>
import api from '@/api/index'
import SendComment from '../common/comment/send-comment'
import ShowComments from '../common/comment/show-comments'
export default {
  data(){
    return {
      blogDetail: {},

    }
  },
  components: {
    SendComment,
    ShowComments
  },
  methods: {

  },
  mounted(){
    var search = location.search;
    var params = search.split('?')[1].split('=')[1];
    api.queryBlogDetail({params: params}).then(resp => {
      var result = resp.data.data[0];
      this.blogDetail = {
        title: result.title,
        time: result.ctime,
        views: result.views,
        tags: result.tags,
        content: result.content
      }
      window.scrollTo(0,0)
    })
    
  }
}
</script>

<style lang="scss">
  .detail{
    width: 100%;
    // height: 95%;
    box-sizing: border-box;
    background: white;
    margin: 20px 0;
    .title{
      padding: 30px 0 15px 30px;
      font-size: 20px;
      font-weight: bold;
    }
    .info{
      padding: 0 0 10px 30px;
    }
    .detail-content{
      margin: 5px 30px;
      padding: 20px 0;
      // min-height: 500px;
      border-top: 1px solid #ccc;
      line-height: 22px;
    }
  }
</style>