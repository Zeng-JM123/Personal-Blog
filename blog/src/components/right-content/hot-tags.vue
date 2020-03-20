<template>
  <div class="hot-tags">
    <p class="title">热门标签</p>
    <ul class="rag_wrap">
      <li class="rag"
          v-for="(rag, index) in tagsList"
          :key="index"><a :href="rag.link">{{rag.name}}</a></li>
    </ul>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data(){
    return {
      tagsList: []
    }
  },
  mounted(){
    api.queryTagsRank().then(resp => {
      var result = resp.data.data;
      var temp = [];
      for(let i = 0; i < result.length; i++){
        var obj = {};
        obj.name = result[i].tags;
        obj.link = './home?tags=' + result[i].tags;
        temp.push(obj)
      }
      this.tagsList = temp;
    }).catch(resp => {
      console.log(resp)
    })
  }
}
</script>

<style lang="scss">
.hot-tags{
  .title{
    color: #fff;
    font-size: 20px;
    font-weight: 550;
    margin: 0 20px;
    padding: 20px 0 10px;
    border-bottom: 1px black solid;
  }
  .rag_wrap{
    width: 100%;
    min-height: 150px;
  }
 .rag_wrap .rag{
    border-radius: 5px;
    margin: 6px 20px;
  }
  .rag_wrap .rag>a{
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    display: inline-block;
  }
}
</style>