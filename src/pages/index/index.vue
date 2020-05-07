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
      <div class="indexNavContainer" ref="indexNavContainer" v-if="indexData.kingKongModule">
        <div v-if="!showAllNav" class="indexNavContent">
          <div class="navItem active">推荐</div>
          <div class="navItem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="item.l1Id">{{item.text}}</div>
        </div>

        <!-- 展示全部导航 -->
        <div v-if="showAllNav" class="all">
          <div class="title">全部频道</div>
          <div class="showAllNav">
            <div class="navItem active">推荐</div>
            <div class="navItem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="item.l1Id">{{item.text}}</div>
          </div>
        </div>

        <!-- 右侧图标 -->
        <div class="right" @click="handleClickToggle">
          <div class="linear"></div>
          <div class="toggle" :class="{active:showAllNav}" ></div>
        </div>
        
        <!-- 背景遮罩 -->
        <div v-if="showAllNav" class="mask"></div>
      </div>
    </div>


    
        
      
    <div class="scrollWraper" ref="scrollWraper">
      <div class="scrollContent">
        <!-- 轮播图 -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/3ebbdfa48590946eba80297c9a4a66c4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/84d82137e854e58bf26791db3ba203b8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
              </div>
              <div class="swiper-slide">
                <img src="http://yanxuan-miaobi.nos-jd.163yun.com/3416001_1_3_wap_860a663e551a39c739d518ec5ae95c89.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/b7f94a107096c60038eba24f542d62c5.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/bf849fa967a5fc45c03f3501c64affff.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/0f00bf923cb91876dc9fbcc875148bbe.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
              </div>
              <div class="swiper-slide">
                <img src="http://yanxuan-miaobi.nos-jd.163yun.com/1241013_1_6_wap_a54690d5bf49aad12d2045e02470a901.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/5da6e1abc7ed4815999fa35cbb390d69.png?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>

        <!-- 服务 -->
          <div class="indexServicePolicy">
            <ul>
              <li v-for="(item,index) in indexData.policyDescList" :key="index">
                <img :src="item.icon" alt="">
                {{item.desc}}
              </li>
            </ul>
          </div>

          <div v-if="indexData.kingKongModule">
            <!-- 导航列表 -->
            <div class="kingkongCarousel">
              <ul>
                <li class="kingkong-item" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
                  <a :href="item.schemeUrl">
                    <div class="icon">
                      <img :src="item.picUrl" alt="">
                    </div>
                    <span class="text">{{item.text}}</span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- 底部推荐 -->
            <div class="floorShop">
              <a class="floorUrl" href="">
                <img class="floorImg" :src="indexData.bigPromotionModule.floorList[1].cells[0].picUrl" alt="">
              </a>
            </div>
            <!-- 新人优惠 -->
            <div class="freshmanModule">
              <div class="title">新人专享礼</div>
              <div class="content">
                <div class="left">
                  <div class="text">新人专享礼包</div>
                  <img src="" alt="">
                </div>
                <div class="right">
                  <div class="rightcontent">
                    <div class="textTop">福利社</div>
                    <div class="textDown">今日特价</div>
                    <img src="" alt="">
                  </div>
                  <div class="rightcontent rightDown">
                    <div class="textTop">新人拼团</div>
                    <div class="textDown bg">今日特价</div>
                    <img src="" alt="">
                  </div>
                </div>
              </div>
            </div>
            <!-- 类目热销榜 -->
            <div class="hotCategoryModule">
              <div class="title">新人专享礼</div>
              <div class="content">
                <div class="rank hotSell">
                  <div class="name">热销榜</div>
                  <img src="" alt="">
                </div>
                <div class="rank goodRep">
                  <div class="name">好评榜</div>
                  <img src="" alt="">
                </div>
                <div class="categoryItem">
                  <span>居家生活榜</span>
                  <img src="" alt="">
                </div>
                <div class="categoryItem">
                  <span>居家生活榜</span>
                  <img src="" alt="">
                </div>
                <div class="categoryItem">
                  <span>居家生活榜</span>
                  <img src="" alt="">
                </div>
                <div class="categoryItem">
                  <span>居家生活榜</span>
                  <img src="" alt="">
                </div>
                <div class="categoryItem">
                  <span>居家生活榜</span>
                  <img src="" alt="">
                </div>
                <div class="categoryItem">
                  <span>居家生活榜</span>
                  <img src="" alt="">
                </div>
                <div class="categoryItem">
                  <span>居家生活榜</span>
                  <img src="" alt="">
                </div>
                <div class="categoryItem">
                  <span>居家生活榜</span>
                  <img src="" alt="">
                </div>
              </div>
            </div>
            <!-- 人气推荐 -->
            <div class="popularItemModule">
              <div class="title"></div>
              <div class="spItem"></div>
              <div class="list"></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import {CHANGEINDEXDATA} from '../../store/mutation_types'
  import BSscroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import http from '../../http'
  export default {
    data:()=>{
      return{
        showAllNav:false
      }
    },
    async mounted(){
      // 获取首页数据
      await this[CHANGEINDEXDATA]()
      //内容滑屏
      let contentWrapper = this.$refs.scrollWraper
      let contentScroll = new BSscroll(contentWrapper,{scrollY:true,click:true})
      //导航滑屏
      let wrapper = this.$refs.indexNavContainer
      let scroll = new BSscroll(wrapper,{scrollX:true,click:true})
      //轮播图
      let swiperWrapper = this.$refs.swiperWraper
      console.log(swiperWrapper)
      let mySwiper = new Swiper('.swiper-container',{
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    computed:{
			...mapState({indexData:state=>state.index.indexData})
    },
    methods:{
      ...mapActions([CHANGEINDEXDATA]),
      handleClickToggle(){
        console.log('click')
        this.showAllNav = !this.showAllNav
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl';
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
          transform rotate(0deg)
          background white url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp') no-repeat center
          transition transform 1s linear 
          &.active
            transform rotate(180deg)
            
      .mask
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        height calc(100vh - 56px)
        background rgba(0,0,0,.5)
        z-index 1
  .scrollWraper
    overflow hidden
    height calc(100vh - 246px)
    .scrollContent
      .swiper-container
        .swiper-wrapper
          display inline-flex
          .swiper-slide      
            width 750px
            height 296px
            img 
              position absolute
              top 50%
              left 0
              transform translateY(-50%)
      .indexServicePolicy
        padding 0 30px
        ul
          width 100%
          height 72px
          display flex
          justify-content space-between
          align-items center
          li
            display flex
            align-items center
            font-size 24px
            color #333
            line-height 72px
            img 
              width 32px
              height 32px
              margin-right 8px
      .kingkongCarousel    
        ul
          height 372px
          display flex
          flex-wrap wrap
          .kingkong-item
            a
              display flex
              flex-direction column
              justify-content center
              align-items center
              width 110px
              height 156px
              margin 10px 20px 9px 20px
              .icon
                img 
                  width 110px
                  height 110px
              .text 
                font-size 24px
                line-height 36px
                white-space nowrap
                color rgb(51,51,51)
                margin-top 10px
      .floorShop
        .floorUrl
          display block
          .floorImg
            width 750px
            height 240px
      .freshmanModule
        border-top 20px solid #eee
        module()
        .title  
          title()
          text-align center
        .content
          content()
          .left
            width  343px
            height 434px
            box-sizing border-box
            background #F9E9CF
            .text
              padding 30px 0 0 30px
              font-size 32px
              color #333
            img
              width 258px
              height 257px
              background blue
              display block
              margin 37px auto
          .right
            width 343px
            height 434px
            display flex
            flex-direction column
            justify-content space-between
            .rightcontent
              position relative
              background #FBE2D3
              padding 20px 0 0 30px
              height 195px
              .textTop
                font-family: PingFangSC-Medium
                font-size 32px
                line-height 1.5
                color #333
              .textDown
                font-size 24px
                color #7F7F7F
                &.bg
                  display inline-block
                  padding 0 10px
                  border-radius 4px
                  background #CBB693
                  color #fff
              img
                position absolute
                right 0
                bottom 0
                width 200px
                height 200px
                background purple
            .rightDown
              background #FFECC2
      .hotCategoryModule
        module()
        .title
          title()
        .content
          content()
          .rank
            position relative
            width 340px
            height 200px
            margin-bottom 10px
            .name
              position relative
              color #333
              font-family PingFangSC-Medium
              font-size 28px
              padding-left 24px
              margin-top 66px
              &:after
                content ''
                position absolute
                left  24px
                bottom  -16px
                width 48px
                height  4px
                background #333
            img 
              position absolute
              right 0
              top 0
              width 200px
              height 200px
              background pink 
          .hotSell
            background #F9F3E4
          .goodRep
            background #EBEFF6
          .categoryItem
            width 165px
            height 180px
            margin-bottom 10px
            background #F5F5F5 
            display flex
            flex-direction column
            align-items center
            span 
              margin-top 10px
              font-size 24px
              color #333
              line-height 1.5
              font-family PingFangSC-Medium
            img
              width 120px
              height 120px
              background pink
      .popularItemModule
        module()
      //   .title
      //   .spItem
      //   .list   












      

  
  
  
  
  
  .test
    zoom 1
</style>