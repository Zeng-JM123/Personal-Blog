<template>
  <div class="main">
    <div class="nav">
      <Nav/>
    </div>
    <div class="content">
      <div class="left_content">
        <router-view/>
      </div>
      <right-content class="right_content"/>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Nav from '../../components/navigator'
import RightContent from '../../components/right-content/index'
import Footer from '../../components/footer'
export default {
  components: {
    Nav,
    RightContent,
    Footer
  }
}
</script>

<style lang="scss">
  .main{
    background-color: #eee;
    .nav{
      height: 50px;
    }
    .content{
      width: 1170px;
      margin: 20px auto 0;
      display: flex;
      justify-content: space-around;
      .left_content{
        width: 800px;
      }
      .right_content{
        width: 300px;
      }
    }
    .footer{
      height: 30px;
      background-color: #222;
      margin-top: 10px;
    }
  }
</style>