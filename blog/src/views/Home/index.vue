<template>
  <div class="home">
    <div class="swiper-wrap">
      <div class="left-swiper">
        <Swiper/>
      </div>
      <div class="right-swiper">
        <div class="top-swiper small">
          <img src="@/assets/images/15.jpg" alt="">
        </div>
        <div class="bottom-swiper small">
          <img src="@/assets/images/11.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="blog-list">
      <div class="blog" v-for="(blog,i) in blogList" :key="i">
        <div class="logo">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=553482221,2748229528&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="blog-box">
          <router-link :to="blog.link">
            <h2 class="blog-title">{{blog.title}}</h2>
            <div class="blog-content"><span v-html="blog.content"></span></div>
          </router-link>
            <div class="blog-info">发布于：{{blog.time}} | 浏览：{{blog.views}} | 标签： {{blog.tags}}</div>
        </div>
      </div>
    </div>
    <!-- 测试xss注入，拦截onclick事件 -->
    <!-- <p v-html="test"></p> -->
    <!-- <p v-html="$xss(test)"></p> -->
    <div class="pagination">
      <Pagination @func="queryBlog"/>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper-main'
import Pagination from "@/components/pagination";
import api from '@/api/index'
export default {
  data(){
    return {
      blogList: [],
      curPage: 1,
      pageSize: 5,
      test: `<a onclick="alert(document.cookie)">lianjie</a>`
    }
  },
  components: {
    Swiper,
    Pagination
  },
  methods: {
    queryBlog(data){
      if(location.search){
        var tags = location.search.split('?')[1].split('=')[1];
      }
      data = Object.assign({},{curPage:1,pageSize:5},data,{tags: tags});
      // console.log(data)
      api.queryBlog({params: data}).then(resp => {
        var result = resp.data.data;
        var temp = [];
        for(let i = 0; i < result.length; i++){
          var obj = {};
          obj.title = result[i].title;
          obj.content = result[i].content;
          obj.time = result[i].ctime;
          obj.views = result[i].views;
          obj.link = `/detail?id=${result[i].id}`;
          obj.tags = result[i].tags;
          temp.push(obj)
        }
        this.blogList = temp;
      })
      
    }
  },
  mounted(){
    this.queryBlog();
  }
}
</script>

<style lang="scss">
  .home{
    width: 100%;
    height: 100%;
    .swiper-wrap{
      width: 100%;
      height: 300px;
      margin-top: 15px;
      display: flex;
      box-shadow: 0px 0px 2px #000;
      .left-swiper{
        width: 70%;
        height: 100%;
      }
      .right-swiper{
        flex: 1;
        background-color: wheat;
        .small{
          width: 100%;
          height: 50%;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
          img:hover{
            transform: scale(1.5);
            transition: transform 2s;
          }
        }
      }
    }
    .blog-list{
      margin-top: 15px;
      width: 100%;
      .blog{
        width: 100%;
        height: 200px;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        align-items: center;
        .logo{
          width: 35%;
          height: 85%;
          display: flex;
          align-items: center;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            max-width: 100%;
            cursor: pointer;
          }
          img:hover{
            transform: scale(1.2);
            transition: transform 1.5s;
          }
        }
        .blog-box{
          width: 58%;
          height: 100%;
          position: relative;
          .blog-title{
            margin: 15px 0 10px 0;
            color: #555;
            cursor: pointer;
          }
          .blog-content{
            color: #555;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
          }
          .blog-info{
            position: absolute;
            bottom: 15px;
          }
        }
      }
    }
    .pagination{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
    }
  }
</style>