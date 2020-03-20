<template>
  <div class="science-news">
    <p class="title">科技快报</p>
    <div class="swiper">
      <swiper/>
    </div>
    <a :href="news.link" v-for="(news,i) in scienceNewsList" :key="i"><p class="news">{{news.title}}</p></a>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper-science'
export default {
  data(){
    return {
      scienceNewsList: [
        {title: '多地实行扫码出入 扫码小程序是否泄露个人信息', link: 'http://www.citreport.com/content/79492-1.html'},
        {title: '影谱科技：智能影像生产技术应用成倍级增长', link: 'http://www.citreport.com/content/79491-1.html'},
        {title: '阿里腾讯优刻得云中集结，云计算、大数据、AI的科技战“疫”', link: 'http://www.citreport.com/content/79488-1.html'},
        {title: '疫情中迎来生机，UCloud优刻得等云计算的生鲜电商流量生意', link: 'http://www.citreport.com/content/79485-1.html'},
        {title: '疫情之下，SaaS生态的“危”与“机”', link: 'http://www.citreport.com/content/79482-1.html'},
        {title: '国家邮政局：力争月底前行业产能恢复至六成以上', link: 'http://www.citreport.com/content/79479-1.html'},
      ],
    }
  },
  components: {
    Swiper
  }
}
</script>

<style lang="scss">
  .science-news{
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