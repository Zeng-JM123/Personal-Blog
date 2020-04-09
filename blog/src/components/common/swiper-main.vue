<template>
  <div class="swiper">
    <li v-for="(img,i) in imgList" :key="i" class="item" v-show="curPage == i+1"><img :src="img.src" alt=""></li>
    <div class="left-btn btn" @click="downPage">&lt;</div>
    <div class="right-btn btn" @click="upPage">&gt;</div>
    <div class="jump-wrap">
      <div class="jump" v-for="i in len" :key="i" @mouseenter="jumpPage(i)" @mouseleave="initMove"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      curPage: 1,
      timer: null,
      imgList: [
        {src: require('../../assets/images/9.png')},
        {src: require('../../assets/images/10.jpg')},
        {src: require('../../assets/images/16.jpg')},
        {src: require('../../assets/images/12.jpg')},
        {src: require('../../assets/images/13.jpg')},
      ],
      len: 0,
    }
  },
  methods: {
    upPage(){
      clearInterval(this.timer)
      if(this.curPage == 5){
        this.curPage = 0
      }
      ++this.curPage;
      this.initMove()
    },
    downPage(){
      clearInterval(this.timer)
      if(this.curPage == 1){
        this.curPage = 6
      }
      --this.curPage;
      this.initMove()
    },
    initMove(){
      this.timer = setInterval(() => {
        if(this.curPage == 5){
          this.curPage = 0;
        }
        ++this.curPage;
      }, 8000);
    },
    jumpPage(i){
      clearInterval(this.timer)
      this.curPage = i;
    }
  },
  mounted(){
    this.initMove();
    this.len = this.imgList.length;
  }
}
</script>

<style lang="scss">
  .swiper{
    width: 100%;
    height: 100%;
    position: relative;
      .item{
        width: 100%;
        height: 100%;
        position: absolute;
        animation: identifier 1.2s ease-in-out;
        @keyframes identifier {
          from{
            opacity: 0;
          }
          to{
            opacity: 1;
          }
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
      .btn{
        width: 36px;
        height: 36px;
        background-color: #777;
        opacity: 0.5;
        color: white;
        border-radius: 18px;
        position: absolute;
        font-size: 25px;
        line-height: 36px;
        top: 50%;
        margin-top: -18px;
        right: 0px;
        text-align: center;
        cursor: pointer;
      }
      .left-btn{
        left: 0px;
      }
      .jump-wrap{
        height: 9px;
        width: 100%;
        position: absolute;
        bottom: 5px;
        display: flex;
        justify-content: center;
        .jump{
          width: 45px;
          height: 100%;
          background-color: #555;
          border-radius: 5px;
          opacity: 0.5;
          cursor: pointer;
          margin: 0 5px;
        }
      }
  }
</style>