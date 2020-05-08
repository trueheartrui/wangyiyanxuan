<template>
  <div class="indexContainer" :class="{bg:showAllNav}">
  <!-- 头部 -->
    <div class="header"> 
      <img class="logo" src="../../assets/logo.png" alt="">
      <div class="search"><span class="iconfont icon-sousuo"></span>搜索商品</div>
      <div class="btn" >登录</div>
    </div>

  <!-- 导航 -->
    <div class="indexNav"> 
      <div class="indexNavContainer" ref="indexNavContainer" v-if="indexData.kingKongModule">
        <div v-show="!showAllNav" class="indexNavContent">
          <div class="navItem" ref="recommend"  :class="{active:clickId === 0}" @click="toRoute(true)">推荐</div>
          <div 
            class="navItem" 
            ref="navItem"
            :class="{active:clickId === item.L1Id}" 
            @click="toRoute(false,item.L1Id,index)" 
            v-for="(item,index) in indexData.kingKongModule.kingKongList" 
            :key="item.l1Id"
          >{{item.text}}</div>
          
        </div>

        
        
        
        
      </div>


    <!-- 展示全部导航 -->
      <div v-if="showAllNav" class="all">
        <div class="title">全部频道</div>
        <div class="showAllNav">
          <div class="navItem" :class="{active:clickId === item.L1Id}"  v-for="item in indexData.kingKongModule.kingKongList" :key="item.l1Id">{{item.text}}</div>
        </div>
      </div>

      


      
      <!-- 右侧图标 -->
      <div class="right">
        <div class="linear"></div>
        <span class="toggle iconfont icon-jiantou9" @click="handleClickToggle" :class="{active:showAllNav}" ></span>
      </div>

    </div>
    
    
    

    <router-view></router-view>

      
  </div>
</template>

<script>
  import BSscroll from 'better-scroll'
  import {mapState,mapActions} from 'vuex'
  import {CHANGEINDEXDATA} from '../../store/mutation_types'
  export default {
    data:()=>{
      return{
        showAllNav:false,
        clickId:0,
        ref:''
      }
    },
    async mounted(){
      console.log('mounted')
      // 获取首页数据
      await this[CHANGEINDEXDATA]()
      this.$nextTick(()=>{
        console.log('nexttick')
        //导航滑屏
        let navWrapper = this.$refs.indexNavContainer
        if(navWrapper){
          this.bs =  new BSscroll(navWrapper,{
          scrollX:true,
          click:true,
          })
        }
      })
    },
    computed:{
      ...mapState({indexData:state=>state.index.indexData})
    },
    methods:{
      ...mapActions([CHANGEINDEXDATA]),
      handleClickToggle(){
        this.showAllNav = !this.showAllNav
      },
      toRoute(isRecommend,navId,index){
        //动态路由跳转
        if(isRecommend){
          this.clickId = 0
          console.log(this.$refs.recommend)
          this.bs.scrollToElement(this.$refs.recommend,500)
          this.$router.push('/index/recommend')
        }else{
          this.clickId = navId
          console.log(this.$refs,index)
          this.bs.scrollToElement(this.$refs.navItem[index],500)
          this.$router.push(`/index/${navId}`)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  
.indexContainer
  position relative
  &.bg
    &:after
      content ''
      position absolute
      left 0
      top 160px
      right 0
      bottom 0
      background rgba(0,0,0,.5)
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
    .right
      position absolute
      right 0
      top 0
      width 160px
      height 60px
      z-index 100
      display flex
      text-align center
      .linear
        width 60px
        height 60px
        background linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
      .iconfont
        width 100px
        height 60px
        font-size 40px
        line-height 60px
        transform rotate(0deg)
        transition all 0.5s linear 
        &.active
          transform rotate(180deg)
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
            &:before
              content ''
              position absolute
              left 0
              bottom 2px
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
      
            
  .scrollWraper
    overflow hidden
    height calc(100vh - 246px)
</style>