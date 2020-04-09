<template>
  <div class="comment-info">
    <div class="title">期待有您的评论</div>
    <div class="user-info">
      <label for="user-name">昵称：<input type="text" id="user-name" placeholder="请输入昵称" v-model="commentsForm.userName"></label>
      <label for="email">邮箱：<input type="text" id="email" placeholder="请输入邮箱" v-model="commentsForm.email"></label>
    </div>
    <textarea id="inp-comment" cols="90" rows="5" placeholder="请输入您的评论" v-model="commentsForm.comments"></textarea>
    <button class="btn" @click="sendComment">提交评论</button>
  </div>
</template>

<script>
import api from '@/api/index'
import escape from '@/utils/common'
export default {
  data(){
    return {
      commentsForm: {
        userName: '',
        email: '',
        comments: ''
      },
      test: ''
    }
  },
  methods: {
    sendComment(){
      var path = location.pathname;
      var query = location.search;
      for(var prop in this.commentsForm){
        this.commentsForm[prop] = escape(this.commentsForm[prop])
      }
      if(path == '/guestbook'){  
        if(confirm('确定要提交吗？')){
          api.insertCommentByQuestbook(this.commentsForm)
          this.commentsForm = {};
          this.$router.go(0)
        }else{
          return
        }
      }
      if(path == '/detail'){
        if(query){
          var id = query.split('?')[1].split('=')[1];
          if(confirm('确定要提交吗？')){
            api.insertCommentByDetail(Object.assign({}, this.commentsForm, {id: id}))
          }else{
            return
          }
        }
      }
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss">
  .comment-info{
    width: 100%;
    height: 100%;
    .title{
      padding: 20px;
      font-size: 18px;
    }
    .title:after{
      content: '';
      width: 80%;
      margin: 0 10px;
      display: inline-block;
      height: 20px;
      transform: translateY(-5px);
      border-bottom: 1px solid #ddd;
    }
    .user-info{
      font-size: 15px;
      display: flex;
      padding: 0 20px;
      label{
        margin-right: 30px;
        input{
          width: 200px;
          height: 19px;
        }
      }
    }
    #inp-comment{
      // margin: 0 auto;
      margin: 20px;
      font-size: 14px;
      border-radius: 5px;
      box-shadow: 0 0 5px #ccc;
      resize: none;
    }
    .btn{
      position: relative;
      bottom: 30px;
      cursor: pointer;
      background-color: #999;
      border: none;
      border-radius: 5px;
      padding: 5px 12px;
    }
  }
</style>