<template>
  <div class="indexContainer">
  <!-- 头部 -->
    <div class="header"> 
      <img class="logo" src="../../assets/logo.png" alt="">
      <div class="search"><span class="iconfont icon-sousuo"></span>搜索商品</div>
      <div class="btn" >登录</div>
    </div>


  <!-- 导航 -->
    <div class="indexNav"> 
      <div class="indexNavContainer" ref="indexNavContainer">
        <div v-if="true" class="indexNavContent">
          <div class="navItem active">推荐</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">居家生活</div>
        </div>

        <!-- 展示全部导航 -->
        <div v-if="false" class="all">
          <div class="title">全部频道</div>
          <div class="showAllNav">
            <div class="navItem active">推荐</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
            <div class="navItem">居家生活</div>
          </div>
        </div>

        <!-- 右侧图标 -->
        <div class="right">
          <div class="linear"></div>
          <div class="toggle"></div>
        </div>
        
        <!-- 背景遮罩 -->
        <div v-if="false" class="mask"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BSscroll from 'better-scroll'
  export default {
    data:()=>{
      return{

      }
    },
    mounted(){
      let wrapper = this.$refs.indexNavContainer
      console.log(wrapper)
      let scroll = new BSscroll(wrapper,{scrollX:true})
    },
    computed:{
			...mapState({test:state=>state.index.test})
		}
  }
</script>

<style lang="stylus" scoped>
  .header
    height 56px
    padding 16px 30px
    display flex    
    align-items center
    .logo
      width 138px 
      height 40px
      margin-right 20px
    .search
      width 442px
      height 56px
      background #ededed
      border-radius 8px
      font-size 28px
      text-align center
      line-height 56px
      color #666
      .iconfont
        width 28px
        height 28px
        font-size 28px
        margin-right 4px
        font-weight bold
    .btn
      width 72px
      height 38px
      margin-left 16px
      color #DD1A21
      text-align center
      line-height 38px
      font-size 24px
      border 1px solid #DD1A21
  .indexNav
    position relative
    .indexNavContainer
      width 650px
      height 60px
      overflow hidden
      .indexNavContent
        padding 0 30px
        display inline-flex
        white-space nowrap
        .navItem
          position relative
          height 60px
          font-size 28px
          color #333
          text-align center
          line-height 60px
          padding 0 15px
          margin-left 20px
          &:nth-child(1)
            margin 0
          &.active
            color #DD1A21
            &:after
              content ''
              position absolute
              left 0
              bottom 0
              width 100%
              height 4px
              background-color #DD1A21
      .all
          position absolute
          left 0
          top 0
          background #fff
          z-index 2
        .title
            height 60px
            line-height 60px
            padding-left 30px
            font-size 28px
            color #333
        .showAllNav
          display flex
          flex-wrap wrap
          padding-top 24px
          .navItem
            width 148px    
            height 54px
            margin 0 0 40px 30px
            border 1px solid #cccccc
            border-radius 4px
            text-align center
            line-height 54px
            &.active
              color #DD1A21
              border 1px solid #DD1A21
      .right
        position absolute
        right 0
        top 0
        display flex
        z-index 3
        .linear
          width 60px
          height 60px
          background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);
        .toggle
          width 100px
          height 60px
          text-align center
          line-height 60px
          background #fff url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp') no-repeat center
      .mask
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        height calc(100vh - 56px)
        background rgba(0,0,0,.5)
        z-index 1
        






      

  .test
    zoom 1
</style>