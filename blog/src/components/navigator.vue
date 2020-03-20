<template>
  <div class="navigator">
    <div class="nav_container clearfloat">
      <router-link class="title" to="/" tag="a"><h1>铭铭の博客</h1></router-link>
      <div class="welcome">你好，开发者</div>
      <ul class="li-wrap">
        <li class="wrap">
          <router-link to="/home" tag="a">首页</router-link>
        </li>
        <li class="wrap"><router-link to="/works" tag="a">文章列表</router-link></li>
        <li class="wrap"><router-link to="/about" tag="a">关于我</router-link></li>
        <li class="wrap"><router-link to="/guestbook" tag="a">留言板</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.navigator{
  background-color: #333;
  .nav_container{
    line-height: 50px;
    width: 1170px;
    margin: 0 auto;
    .title{
      float: left;
      h1{
        color: white;
        font-size: 20px;
      }
    }
    .welcome{
      float: right;
      color: white;
      font-weight: 550;
    }
    .li-wrap{
      // float: right;
      margin-left: 200px;
      width: 60%;
      display: flex;
      justify-content: space-around;
      .wrap{
        float: left;
        font-size: 14px;
        width: 25%;
        text-align: center;
        a{
          color: white;
          font-weight: 550;
          width: 100%;
          height: 100%;
          display: inline-block;
        }
        a:hover{
          background-color: #111;
        }
      }
    }
  }
}
</style>