<template>
  <div class="searchContainer">
    <div class="header">
      <form class="search" action="" role="search">
        <div class="inputWrapper">
          <i class="searchIcon iconfont icon-sousuo"></i>
          <input 
            class="searchInput" 
            ref="searchInput"
            type="span" 
            :placeholder="defaultKeyword.keyword" 
            @input="handleInput"
          >
          <i v-show="true" @click="clearInputValue" class="deleteIcon iconfont icon-shanchu" ></i>
        </div>
      </form>
      <span class="cancel" @click="$router.back()">取消</span>
    </div>
    


  <!-- 搜索显示 -->
    <div v-if="inputValue !== '' " class="searchShow">
      <ul class="searchList">
        <li class="item" v-for="(item,index) in searchList" :key="index">
          <span class="text">{{item}}</span>
          <i class="icon iconfont icon-youjiantou"></i>
        </li>
      </ul>
    </div>

    <div  v-else class="content">
      <div class="history">
        <div class="historyHeader">
          <span class="title">历史记录</span>
          <i class="iconfont icon-shanchu1"></i>
        </div>
        <div class="historyList" >
          <div class="item">手机</div>
        </div>
      </div>
      <div class="topSearch">
        <div class="title">热门搜索</div>
        <div class="itemWrapper">
          <div class="item" :class="{highlight:item.highlight}" v-for="(item,index) in hotKeywordVOList" :key="index"> 
            {{item.keyword}}
          </div>
        </div>
      </div>
    </div>





    
  </div>
</template>

<script>
import http from '@/http'
  export default {
    data:()=>{
      return {
        inputValue:'',
        defaultKeyword:{},
        hotKeywordVOList:[],
        isSearch:true,
        searchList:[]
      }
    },
    methods:{
      //清空输入内容
      clearInputValue(){
        this.inputValue = ''
      },
      //实时搜索关键字
      async handleInput(){
        //获取实时搜索关键字
        let inputValue = this.$refs.searchInput.value
        this.inputValue = inputValue
        if(this.isSearch){
          this.isSearch = false
          console.log(inputValue)
          setTimeout(() => {
            this.isSearch = true
          }, 500)
          if(!inputValue) return
          let result = await http.search.getSearchAuto({keywordPrefix:inputValue})
          this.searchList = result.data
        }
        
      }
    },
    async mounted(){
      let result = await http.search.getKeywords()
      this.defaultKeyword = result.data.defaultKeyword
      this.hotKeywordVOList = result.data.hotKeywordVOList
    } 
  }
</script>

<style lang="stylus" scoped>
  .searchContainer
    height 100vh
    background #eeeeee
    .header
      height 88px
      padding 0 30px
      background-color #fff
      display flex
      align-items center
      .search
        position relative
        width 564px
        height 56px
        padding 0 20px
        background-color #f4f4f4
        .inputWrapper
          width 100%
          height 100%
          display flex
          .searchIcon
            width 28px
            height 56px
            margin-right 16px
            font-size 32px
            line-height 56px
          .searchInput
            flex 1
            height 56px
            background-color #f4f4f4
            outline none 
            font-size 28px
            color rgba(0,0,0,.8)
          .deleteIcon
            width 50px
            height 56px
            span-align center
            line-height 56px
            font-size 32px
            color #888
      .cancel
        height 56px
        margin-left 30px
        line-height 56px
        font-size 28px
    .content
      .history
        padding 0 30px
        background-color #fff
        margin-bottom 20px
        .historyHeader
          display flex
          align-items center
          justify-content space-between
          height 90px
          color #999
          .title
            font-size 28px
          .iconfont
            font-size 32px
        .historyList
          .item
            display inline-block
            font-size 24px
            line-height 45px
            padding 0 15px
            border 1px solid #999
            margin 0 32px 32px 0
      .topSearch
        padding 0 30px
        background-color #fff
        .title
          height 90px
          line-height 90px
          font-size 28px
          color #999
        .itemWrapper
          .item
            display inline-block
            font-size 24px
            line-height 45px
            padding 0 15px
            border 1px solid #999
            margin 0 32px 32px 0
            &.highlight
              border-color #DD1A21
              color #DD1A21
    .searchShow
      background-color #fff
      padding-left 30px
      .searchList
        .item
          position relative
          height 90px
          display flex
          justify-content space-between
          font-size 28px
          line-height 104px
          &:after
            content ''
            position absolute
            left 0
            bottom 0
            width 100%
            height 1px  
            background-color #d9d9d9
          .icon
            width 80px
            height 90px
            text-align center
            line-height 90px
            font-size 36px


</style>