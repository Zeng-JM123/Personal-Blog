<template>
  <div class="works">
    <router-link to="/home"><h2 class="back rotate">回到首页</h2></router-link>
    <h2 class="title rotate">作品展示</h2>
    <ul class="img-list" @click="showDetail($event)">
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
      column: ''
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
    }
  },
  created(){
    api.queryWorks().then(resp => {
      var result = resp.data.data;
      var temp = [];
      for(let i = 0; i < result.length; i++){
        var obj = {};
        obj.title = result[i].title;
        obj.link = '/detail?id=' + result[i].id;
        obj.src = 'http://127.0.0.1:9090/getSrc?path=' + result[i].pic_path;
        temp.push(obj)
      }
      this.imgList = temp;
    })
  }
}
</script>

<style lang="scss">
.works{
  overflow-x: hidden;
  background-color: #000;
  position: relative;
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
  .img-list{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    perspective: 800;
    transform: rotateX(45deg) rotateZ(45deg);
    .item-img{
      width: 320px;
      height: 200px;
      overflow: hidden;
      margin: 10px 0;
      img{
        width: 100%;
        height: 100%;
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