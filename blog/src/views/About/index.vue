<template>
  <div class="about">
    <div class="word-wrap">
      <div class="content-English word">Never lose hope. Storms make people stronger and never last forever.</div>
      <div class="content-Chinese word">永远怀抱希望。暴风雨会让人更加坚强，而且不会恒久长存。</div>
    </div>
    <div class="description">
      <h2 class="about_title">我的介绍</h2>
      <!-- <img class="personal_img" src="../assets/images/timg.gif" alt="头像啦"/> -->
      <p>昵称：铭铭</p>
      <p>年龄：20</p> 
      <p>坐标：广东汕头</p>
      <p>梦想：成为一个快乐的程序猿</p>
      <p>邮箱：399702236@qq.com</p>
    </div>
    <div class="description">
      <h2 class="about_title">关于博客</h2>
      <p class="about_detail">该博客布局以及相关功能有很多来自于网络，但实现技术一定是自己的啦，虽然不是很好，但如有不妥的地方，还望您联系我，我一定第一时间做出改正</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .about{
    width: 100%;
    height: 100%;
    .word-wrap{
      padding: 20px;
      background-color: #dda;
      border-radius: 5px;
      box-shadow: 2px 2px 2px #999;
      margin-top: 20px;
      .word{
        padding: 5px 20px;
      }
    }
    .description{
      background: #fff;
      border-radius: 5px;
      padding: 10px;
      margin: 20px auto;
      position: relative;
      .about_title{
        font-size: 22px;
        padding: 20px 0 10px;
        margin: 0 20px;
        border-bottom: 2px solid #eee;
      }
      .personal_img{
        width: 140px;
        height: 140px;
        position: absolute;
        right: 100px;
      }
      .about_detail{
        padding: 10px 20px;
        margin: 10px 0;
      }
      p{
        font-size: 15px;
        padding: 5px 20px;
      }
    }
}
</style>