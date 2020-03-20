<template>
  <div class="swiper-wrap-science">
    <ul class="swiper-box-science" ref="info">
      <li><img src="@/assets/images/01.jpg" alt=""></li>
      <li><img src="@/assets/images/02.jpg" alt=""></li>
      <li><img src="@/assets/images/03.jpg" alt=""></li>
      <li><img src="@/assets/images/01.jpg" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      timer: null,
      boxWidth: '',
      imgWidth: ''
    }
  },
  methods: {
    AutoMove(){
      var box = document.getElementsByClassName('swiper-box-science')[0];
      this.timer = setInterval(() => {
        box.style.left = box.offsetLeft - 1 + 'px';
        if(box.offsetLeft == -(this.boxWidth * 3 / 4)){
          box.style.left = 0 + 'px';
        }
      }, 16);
    }
  },
  mounted(){
    this.boxWidth = document.getElementsByClassName('swiper-box-science')[0].clientWidth;
    this.imgWidth = document.getElementsByClassName('swiper-box-science')[0].clientWidth / 4;
    this.AutoMove()
  },
  beforeDestroy(){  
    clearInterval(this.timer)
    this.timer = null;
  }
}
</script>

<style lang="scss">
.swiper-wrap-science{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .swiper-box-science{
    width: 400%;
    height: 100%;
    position: absolute;
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