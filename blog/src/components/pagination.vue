<template>
  <div class="item-wrap" @click="turnPage($event)">
    <div class="item" :class="{active: curPage == page.text}" v-for="(page,i) in pageList" :key="i">{{page.text}}</div>
  </div>
</template>

<script>
import api from '../api/index'
export default {
  data(){
    return {
      curPage: 1,
      pageSize: 5,
      count: 100,
      pageNum: 5,
      pageList: []
    }
  },
  methods: {
    jumpTo(index){
      if(index>this.pageNum){
        return
      }else if(index < 1){
        return
      }
      this.curPage = index;
      this.$emit('func', {curPage: this.curPage, pageSize: this.pageSize})
      window.scrollTo(0,0)
    },
    turnPage(e){
      if(e.target.className == 'item'){
        var page = e.target.innerText;
        if(page == '<'){
          this.jumpTo(this.curPage - 1)
        }else if(page == '>'){
          this.jumpTo(this.curPage + 1)
        }else if(page == '>>'){
          this.jumpTo(this.pageNum)
        }else if(page == '<<'){
          this.jumpTo(1)
        }else{
          this.jumpTo(+page)
        }
        this.getPageTool()
      }
    },
    getPageTool(){
      var result = [];
      result.push({text: '<<'});
      result.push({text: '<'});
      if(this.curPage > 2){
        result.push({text: this.curPage - 2})
      }
      if(this.curPage > 1){
        result.push({text: this.curPage - 1})
      }
      result.push({text: this.curPage})
      if(this.curPage + 1<= this.pageNum){
        result.push({text: this.curPage + 1})
      }
      if(this.curPage + 2<= this.pageNum){
        result.push({text: this.curPage + 2})
      }
      result.push({text: '>'});
      result.push({text: '>>'});
      this.pageList = result;
    }
  },
  mounted(){
    if(location.search){
      var tags = location.search.split('?')[1].split('=')[1];
    }
    // console.log(tags)
    api.queryBlogCount('?tags='+tags).then(resp => {
      this.count = resp.data.data[0].count;
      // console.log(this.count)
      this.pageNum = parseInt((this.count + this.pageSize - 1) / this.pageSize);
      // console.log(this.pageNum)
      this.getPageTool()
    });

  }
}
</script>

<style lang="scss">
  .item-wrap{
    .item{
      display: inline-block;
      background-color: #999;
      width: 32px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      margin: 0 5px;
    }
    .active{
      color: white;
    }
  }
</style>