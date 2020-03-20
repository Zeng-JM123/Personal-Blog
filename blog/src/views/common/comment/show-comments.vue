<template>
  <div class="commonds-box">
    <div class="title">留言列表</div>
    <div class="item-box" v-for="(item, i) in commentList" :key="i">
      <div class="time">{{item.time}}</div>
      <div class="user-name">{{item.userName}}</div>
      <div class="commond-content">{{item.comments}}</div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data(){
    return {
      commentList: []
    }
  },
  mounted(){
    var path = location.pathname;
    if(location.search){
      var id = location.search.split('?')[1].split('=')[1];
    }
    if(path == '/detail'){
      api.queryCommentByDetail(id).then(resp => {
        var result = resp.data.data;
        var temp = [];
        for(let i = 0; i < result.length; i++){
          var obj = {};
          obj.comments = result[i].comments;
          obj.userName = result[i].user_name;
          obj.time = result[i].ctime;
          temp.push(obj)
        }
        this.commentList = temp;
      })
    }
    if(path === '/guestbook'){
      api.queryCommentByQuestbook().then(resp => {
        var result = resp.data.data;
        var temp = [];
        for(let i = 0; i < result.length; i++){
          var obj = {};
          obj.comments = result[i].comments;
          obj.userName = result[i].user_name;
          obj.time = result[i].ctime;
          temp.push(obj)
        }
        this.commentList = temp;
      })
    }
    
  }
}
</script>

<style lang="scss">
  .commonds-box{
    margin: 20px;
    padding: 10px 0;
    .title{
      font-size: 18px;
      padding: 8px 0;
      font-weight: bold;
      border-bottom: 1px solid black;
    }
    .item-box{
      margin: 10px 0;
      padding: 10px 0;
      .time{
        float: right;
      }
      .commond-content{
        margin: 10px 0 5px 20px;
        background-color: #888;
        color: white;
        padding: 8px 5px;
        border-radius: 5px;
      }
    }
  }
</style>