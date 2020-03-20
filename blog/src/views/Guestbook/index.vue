<template>
  <div class="guestbook">
    <div class="user-comments">
      <send-comment></send-comment>
    </div>
    <div class="comments-wrap">
      <show-comments></show-comments>
    </div>
  </div>
</template>

<script>
import SendComment from '../common/comment/send-comment'
import ShowComments from '../common/comment/show-comments'
export default {
  components: {
    SendComment,
    ShowComments
  }
}
</script>

<style lang="scss">
  .guestbook{
    width: 100%;
    height: 100%;
    .user-comments{
      height: 220px;
      border: 1px solid #ddd;
      margin: 20px 0;
      background: white;
      box-shadow: 0 0 5px #555;
    }
    .comments-wrap{
      margin-top: 30px;
      border: 1px solid #ddd;
      box-sizing: border-box;
      width: 100%;
      display: inline-block;
      background-color: white;
    }
  }
</style>