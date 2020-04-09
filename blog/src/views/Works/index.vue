<template>
  <div class="works">
    <router-link to="/home"><h2 class="back rotate">回到首页</h2></router-link>
    <h2 class="title rotate">作品展示</h2>
    <ul class="img-list clearfix" @click="showDetail($event)">
      <li class="item-img" v-for="(img, i) in imgList" :key="i" :index="i"><img :src="img.src" alt=""></li>
    </ul>
    <div class="layer" v-show="isShowLayer" @click="closeLayer"></div>
    <div class="img-wrap" v-show="isShowLayer">
      <div class="article-title">标题：{{Object.assign({}, imgList[curIndex]).title}}</div>
      <div class="left-btn btn" @click="leftWork">&lt;</div>
      <img :src="Object.assign({}, imgList[curIndex]).src" alt="">
      <div class="right-btn btn" @click="rightWork">&gt;</div>
      <button class="click-to"><a :href="Object.assign({}, imgList[curIndex]).link">点击前往</a></button>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data(){
    return {
      imgList: [],
      curIndex: 5,
      isShowLayer: false,
      column: '',
      imgLength: 9
    }
  },
  methods: {
    showDetail(e){
      if(e.target.nodeName.toLowerCase() == 'img'){
        this.curIndex = parseInt(e.target.parentNode.getAttribute('index'));
        this.isShowLayer = true;
      }
    },
    closeLayer(){
      this.isShowLayer = false;
    },
    leftWork(){
      if(this.curIndex == 0){
        this.curIndex = this.imgList.length
      }
      this.curIndex = this.curIndex - 1;
    },
    rightWork(){
      if(this.curIndex == this.imgList.length - 1){
        this.curIndex = 1
      }
      this.curIndex = this.curIndex + 1;
    },
    getData(num = this.imgLength){
      api.queryWorks({params: num}).then(resp => {
        var result = resp.data.data;
        var temp = [];
        for(let i = 0; i < result.length; i++){
          var obj = {};
          obj.title = result[i].title;
          obj.link = '/detail?id=' + result[i].id;
          // obj.src = 'http://118.178.178.159:9090/getSrc?path=' + result[i].pic_path;
          obj.src = this.baseURL + '/getSrc?path=' + result[i].pic_path;
          temp.push(obj)
        }
        this.imgList = temp;
      })
    },
  },
  created(){
    this.getData()
  },
  mounted(){
    window.onscroll = () => {
      var clientHeight = document.documentElement.clientHeight;
      var scrollTop = document.documentElement.scrollTop;
      var offsetHeight = document.documentElement.offsetHeight;
      if(clientHeight + scrollTop == offsetHeight){
        this.imgLength += 5;
        this.getData(this.imgLength)
      }
    }
  }
}
</script>

<style lang="scss">
.works{
  background-color: #000;
  position: relative;
  // min-height: 100vh;
  .layer{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
  }
  .img-wrap{
    width: 560px;
    height: 360px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    .article-title{
      line-height: 20px;
      padding-bottom: 5px;
      text-align: center;
      font-size: 16px;
      color: white;
      font-weight: 550;
    }
    .click-to{
      width: 80px;
      height: 30px;
      position: absolute;
      bottom: 0;
      margin-left: 20px;
      background-color: #ccc;
      border: none;
      border-radius: 5px;
    }
    img{
      width: 100%;
      height: calc(100% - 25px);
    }
    .btn{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(6,6,6,0.4);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      line-height: 40px;
      text-align: center;
      font-size: 26px;
      color: rgba(255,255,255,.7);
      cursor: pointer;
    }
    .right-btn{
      right: 0;
    }
  }
  .rotate{
    background-color: white;
    position: fixed;
    z-index: 10;
    top: 65px;
    left: -110px;
    transform: rotateZ(-45deg);
    width: 500px;
    text-align: center;
    padding: 3px;
    border-radius: 5px;
    box-shadow: 2px 2px 3px #abc;
  }
  .back{
    left: -160px;
    top: 75px;
  }
  .title{
    top: 20vh;
  }
  .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
  }
  .img-list{
    width: 1000px;
    margin: 0 auto;
    column-count: 3;
    column-gap: 10px;
    // display: flex;
    // justify-content: space-between;
    // flex-wrap: wrap;
    perspective: 800;
    transform: rotateX(40deg) rotateZ(40deg);
    .item-img{
      width: 320px;
      overflow: hidden;
      margin: 5px;
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        cursor: pointer;
      }
      img:hover{
        transform: scale(1.2);
        transition: transform 1.5s;
      }
    }
  }
}
</style>