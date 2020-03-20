<template>
  <div class="right-content">
    <div class="wrapper">
      <science-news></science-news>
    </div>
    <div class="wrapper">
      <hot-news></hot-news>
    </div>
    <div class="wrapper">
      <!-- <hot-tags></hot-tags> -->
    </div>
  </div>
</template>

<script>
import ScienceNews from './science-news'
import HotNews from './hot-news'
// import HotTags from './hot-tags'
export default {
  components: {
    ScienceNews,
    HotNews,
    // HotTags
  }
}
</script>

<style lang="scss">
  .right-content{
    .wrapper{
      background-color: #333;
      border-radius: 5px;
      margin: 20px 0;
    }
  }
</style>