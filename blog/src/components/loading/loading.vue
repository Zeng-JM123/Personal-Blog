<template>
  <div class="loading">
    <div class="loading-box">
      <span class="text">LOADING</span>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.loading{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  .loading-box{
    width: 200px;
    height: 200px;
    .text{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      animation: changeText 2s ease-in-out infinite;
    }
    .box{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 160px;
      height: 160px;
      margin-left: -80px;
      margin-top: -80px;
      background-color: #DB2F00;
      animation: changeBox 2s ease-in-out infinite;
    }
    @keyframes changeBox {
      0%{
        border-radius: 0%;
        background-color: #DB2F00;
        transform: scale(1) rotate(0deg);
      }
      50%{
        border-radius: 50%;
        background-color: #13A3A5;
        transform: scale(0.5) rotate(360deg);
      }
      100%{
        border-radius: 0%;
        background-color: #DB2F00;
        transform: scale(1) rotate(720deg);
      }
    }
    @keyframes changeText {
      0%{
        font-size: 24px;
      }
      50%{
        font-size: 15px;
      }
      100%{
        font-size: 24px;
      }
    }
  }
}
</style>