<template>
  <div class="swiper-wrap-hot">
    <ul class="swiper-box-hot" ref="info">
      <li><img src="@/assets/images/04.jpg" alt=""></li>
      <li><img src="@/assets/images/05.jpg" alt=""></li>
      <li><img src="@/assets/images/06.jpg" alt=""></li>
      <li><img src="@/assets/images/04.jpg" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      timer: null,
      boxWidth: '',
      imgWidth: '',
      box: '',
      index: 0
    }
  },
  methods: {
    AutoMove(){
      this.timer = setInterval(() => {
        this.moving(this.index)
        this.index ++;
      }, 4000);
    },
    moving(index){
      this.box.style.transform = 'translateX(' + (-300 * index + 'px');
      if(index == 3){
        this.index = 0;
      }
    }
  },
  mounted(){
    this.boxWidth = document.getElementsByClassName('swiper-box-hot')[0].clientWidth;
    this.imgWidth = document.getElementsByClassName('swiper-box-hot')[0].clientWidth / 4;
    this.box = document.getElementsByClassName('swiper-box-hot')[0];
    this.AutoMove()
  },
  beforeDestroy(){  
    clearInterval(this.timer)
    this.timer = null;
  }
}
</script>

<style lang="scss">
.swiper-wrap-hot{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .swiper-box-hot{
    width: 400%;
    height: 100%;
    position: absolute;
    transition: transform 1s ease-in-out;
    li{
      width: calc(100% / 4);
      height: 100%;
      float: left;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>