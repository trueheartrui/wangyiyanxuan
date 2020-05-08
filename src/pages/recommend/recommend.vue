<template>
  
    <div>
      <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper" ref="swiperWraper">
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
                <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
              </div>
              <div class="right">
                <div class="rightcontent" v-for="(item,index) in indexData.indexActivityModule" :key="index">
                  <div class="textTop">{{item.title}}</div>
                  <div class="textDown">{{item.subTitle}}</div>
                  <div class="bg">{{item.tag}}</div>
                  <img :src="item.picUrl" alt="">
                </div>
              </div>
            </div>
          </div>
          <!-- 类目热销榜 -->
          <div class="hotCategoryModule">
            <div class="title">{{indexData.categoryHotSellModule.title}}</div>
            <div class="content">
              <div class="rank" v-for="(item,index) in indexData.categoryHotSellModule.categoryList.slice(0,2)" :key="index">
                <div class="name">
                  {{item.categoryName}}
                  <i class="line"></i>
                </div>
                <img :src="item.picUrl" alt="">
              </div>
              <div class="categoryItem" v-for="(item,index) in indexData.categoryHotSellModule.categoryList.slice(2)" :key="index+2">
                <div class="name">{{item.categoryName}}</div>
                <img :src="item.picUrl" alt="">
              </div>
            </div>
          </div>
          <!-- 人气推荐 -->
          <div class="popularItemModule">
            <div class="title">
              <div class="left">人气推荐</div>
              <a href="javascript:;" class="right">更多<span class="iconfont icon-youjiantou"></span></a>
            </div>
            <div class="content">
              <a href="javascript:;" class="spItem">
                <div class="spItemLeft">
                  <img :src="indexData.popularItemList[0].showPicUrl" alt="">
                </div>
                <div class="spItemRight">
                  <div class="spItemTitle"><span class="text">{{indexData.popularItemList[0].promTag}}</span></div>
                  <div class="spItemDesc">{{indexData.popularItemList[0].name}}</div>
                  <div class="text">{{indexData.popularItemList[0].simpleDesc}}</div>
                  <div class="price">{{indexData.popularItemList[0].listPromBanner.promoSubTitle}}</div>
                </div>
              </a>
              <div class="popularItem" v-for="(item,index) in indexData.popularItemList.slice(1,4)" :key="item.id">
                <img class="itemImg" :src="item.listPicUrl" alt="">
                <span class="itemDesc">{{item.name}}</span>
                <span class="itemPrice">￥{{item.retailPrice}}</span>
                <span class="itemText"><span class="textWrap">热购</span></span>
              </div>
            </div>
          </div>
          <!-- 限时购 -->
          <div class="flashSaleModule">
            <div class="title">
              <div class="left">限时购</div>
              <a href="javascript:;" class="right">更多<span class="iconfont icon-youjiantou"></span></a>
            </div>
            <div class="content">
              <div class="flashItem" v-for="item in indexData.flashSaleModule.itemList" :key="item.id">
                <img class="itemImg" :src="item.picUrl" alt="">
                <div>
                  <span class="nowPrice">￥{{item.activityPrice}}</span>
                  <span class="oldPrice" v-if="item.originPrice">￥{{item.originPrice}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 新品首发 -->
          <div class="newItemModule">
            <div class="title">
              <div class="left">新品首发</div>
              <a href="javascript:;" class="right">更多<span class="iconfont icon-youjiantou"></span></a>
            </div>
            <div class="content">
              <div class="newItem" v-for="item in indexData.newItemList.slice(0,6)" :key="item.id">
                <img class="itemImg" :src="item.listPicUrl" alt="">
                <span class="itemDesc">{{item.name}}...</span>
                <span class="itemPrice" v-if="item.counterPrice">￥{{item.counterPrice}}</span>
                <span class="itemText"><span class="textWrap">热购</span></span>
              </div>
            </div>
          </div>
          <!-- 购物导航模块 -->
          <div class="sceneLightShoppingGuideModule">
            <div class="content">
              <div class="shopingModule" v-for="(item,index) in indexData.sceneLightShoppingGuideModule" :key="index">
                <div class="title">{{item.styleItem.title}}</div>
                <div class="desc">{{item.styleItem.desc}}</div>
                <div class="img">
                  <img v-for="(item,index) in item.styleItem.picUrlList" :key="index" :src="item" alt="">
                </div>
              </div>
            </div>
            
          </div>
          <!-- 底部声明 -->
          <div class="ftWrap">
            <div class="device">
              <a class="app" href="javascript:;">下载APP</a>
              <a class="pc" href="javascript:;">电脑版</a>
            </div>
            <div class="copyright">
              <p>网易公司版权所有 © 1997-<br/>食品经营许可证：JY13301080111719</p>
            </div>
          </div>
        </div>

    </div>
    
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import {CHANGEINDEXDATA} from '../../store/mutation_types'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  export default {
    data:()=>{
      return{
        showAllNav:false
      }
    },
    async mounted(){
      console.log('mounted')
      // 获取首页数据
      await this[CHANGEINDEXDATA]()
      this.$nextTick(()=>{
        //轮播图
        let mySwiper = new Swiper('.swiper-container',{
          loop: true, // 循环模式选项
          autoplay:true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
        })
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
              width 100%
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
              .bg
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
            background-color #eee
            .name
              position relative
              color #333
              font-family PingFangSC-Medium
              font-size 28px
              padding-left 24px
              margin-top 66px
              .line
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
          .categoryItem
            width 165px
            height 180px
            margin-bottom 10px
            background #F5F5F5 
            display flex
            flex-direction column
            align-items center
            .name 
              margin-top 10px
              font-size 24px
              color #333
              line-height 1.5
              font-family PingFangSC-Medium
            img
              width 120px
              height 120px
      .popularItemModule
        module()
        .title
            title()
            display flex
            justify-content space-between
            .right
              display block
              font-size 28px
              color #333
              .iconfont
                font-size 28px
        .content
          content()
          .spItem
            display flex
            height 280px
            background-color #FEF0DF
            margin-bottom 20px
            .spItemTitle
              display flex
            .spItemLeft
              img 
                display block
                width 280px
                height 280px
            .spItemRight
                width 350px
                height 162px
                line-height 1.5
                margin auto 30px
                .spItemTitle
                  .text
                    display inline-block
                    padding 2px 8px
                    background rgba(255,255,255,.9)
                    border-radius 15px
                    border 1px solid #DD1A21
                    font-size 18px
                    color #DD1A21
                .spItemDesc
                  font-size 28px
                  color #333
                  white-space nowrap
                  text-overflow ellipsis
                  overflow hidden
                .text
                  font-size 24px
                  color #7F7F7F
                .price
                  font-size 28px
                  color #DD1A21
          .popularItem
            shopItem()
      .flashSaleModule
        module()
        .title
          title()
          display flex
          justify-content space-between
          .right
            display block
            font-size 28px
            color #333
            .iconfont
              font-size 28px
        .content
          content()
          .flashItem
            display flex
            flex-direction column
            .itemImg
              width 216px
              height 216px
              margin-bottom 12px
              background #eee
            div
              padding-left 20px
              line-height 1.5
              .nowPrice
                font-size 28px
                color #DD1A21
                margin-right 12px
              .oldPrice
                font-size 24px
                color #7F7F7F
                text-decoration line-through
      .newItemModule
        module()
        .title
          title()
          display flex
          justify-content space-between
          .right
            display block
            font-size 28px
            color #333
            .iconfont
              font-size 28px
        .content
          content()
        .newItem
          shopItem()
      .sceneLightShoppingGuideModule
        module()
        .content
          content()
          .shopingModule
            width 319px
            height 244px
            padding 20px 0 0 20px
            margin 4px 0 0 4px
            line-height 1.5
            .title
              font-size 32px
              color rgb(51, 51, 51)
              padding-left 10px
            .desc
              font-size 24px
              color rgb(127, 127, 127)
              padding-left 10px
            .img
              display flex
              img
                width 150px
                height 150px
                margin-right 4px
                background #eee  
      .ftWrap
        height  244px
        padding 54px 20px 28px 20px
        box-sizing border-box
        background-color #414141
        .device
          height 62px
          margin-bottom 36px
          text-align center
          .app
            display inline-block
            width 172px
            height 60px
            border 1px solid #999
            margin-right 50px
            font-size 24px
            color #fff
            line-height 60px
          .pc
            display inline-block
            width 172px
            height 60px
            border 1px solid #999
            font-size 24px
            color #fff
            line-height 60px
        .copyright
          text-align center
          font-size 24px
          line-height 32px
          color #999
</style>