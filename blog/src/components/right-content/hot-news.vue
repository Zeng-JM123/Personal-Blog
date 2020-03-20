<template>
  <div class="hot-news">
    <p class="title">最新资讯</p>
    <div class="swiper">
      <swiper/>
    </div>
    <a :href="news.link" v-for="(news,i) in hotNewsList" :key="i"><p class="news">{{news.title}}</p></a>
  </div>
</template>

<script>
import Swiper from '../common/swiper-hot'
export default {
  data(){
    return {
      hotNewsList: [
        {title: '小米10刚发布 就要被友商压在身下？', link: 'http://sh.zol.com.cn/738/7383953.html'},
        {title: '4月3日发布，iPhone 9将是小屏爱好者福音', link: 'http://jd.zol.com.cn/738/7385109.html'},
        {title: 'DIY从入门到放弃：CPU买盒装还是散片？', link: 'http://diy.zol.com.cn/738/7383651.html'},
        {title: '新冠病毒的“高清彩照”到底长啥样？', link: 'http://sh.zol.com.cn/738/7383904.html'},
        {title: '1亿像素下的地球原来是这样的!看完我慌了', link: 'http://sh.zol.com.cn/738/7386233.html'},
        {title: '一颗CPU跑分破100万！成为了历史第一U', link: 'http://diy.zol.com.cn/738/7386834.html'},
        {title: '四年来首次增长！2019年PC市场为何厚积薄发', link: 'http://nb.zol.com.cn/738/7380111.html'},
        {title: 'iQOO 3要把“机械键盘”装进手机里？', link: 'http://mobile.zol.com.cn/738/7386549.html'},
        {title: '未来已来 盘点2020最具潜力智能家居新品', link: 'http://sh.zol.com.cn/738/7385376.html'},
        {title: '微信支付上线新冠肺炎保障 公共出行更安心', link: 'http://sh.zol.com.cn/738/7385607.html'},
      ],
    }
  },
  components: {
    Swiper
  }
}
</script>

<style lang="scss">
.hot-news{
    .swiper{
      width: 100%;
      height: 120px;
      margin: 3px 0;
    }
    .title{
      color: #fff;
      font-size: 20px;
      font-weight: 550;
      margin: 0 20px;
      padding: 20px 0 10px;
      border-bottom: 1px black solid;
    }
    .news{
      padding: 5px 0 5px 20px;
      margin: 3px 0;
      vertical-align: middle;
      font-size: 15px;
      color: #777;
      font-weight: 650;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .news:hover{
      color: wheat;
      border-left: 4px solid #4dc;
    }
  }
</style>