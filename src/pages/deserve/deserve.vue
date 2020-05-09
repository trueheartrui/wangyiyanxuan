<template>
  <div class="deserveContainer">
    <div class="header">
      <i class="home iconfont icon-shouye"></i>
      <span class="logo">值得买</span>
      <i class="cart iconfont icon-gouwuche1"></i>
      <i class="search iconfont icon-sousuo"></i>
    </div>
    <div class="navWrapper">
      <div class="bg">
        <img class="bgimg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
      </div>
      <div class="title">
        <img class="logoimg" src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <span class="text">严选好物 用心生活</span>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="list">
              <li class="item">
                <a class="itemUrl" href="javascript:;">
                  <div class="itemImg"></div>
                  <span>9.9超值</span>
                  <span>定价直降</span>
                </a>
              </li>
              <li class="item">
                <div class="itemImg"></div>
                <span>9.9超值</span>
                <span>定价直降</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import http from '@/http'
  const array = require('lodash/array')
  export default {
    data:()=>{
      return {
        flag:false,
        navList:[]
      }
    },
    methods:{
      
    },
    async mounted(){
      let result = await http.search.getDeserveNav()
      this.navList = array.chunk(result.data.navList,2)

      this.$nextTick(()=>{
        let mySwiper = new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
        })
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .deserveContainer
    .header
      position relative
      padding 0 26px 0 24px
      height 100px
      .iconfont
        font-size 50px
        display inline-block
        height 100px
        line-height 100px
      .home
        float left
      .logo
        position absolute
        left 50%
        top 0
        height 100px
        line-height 100px
        font-size 40px
        transform translateX(-50%)
      .search
        float right
        margin-right 40px
      .cart
        float right

    .navWrapper
      position relative
      .bg
        position absolute
        left 0
        top 0
        z-index -1
        .bgimg 
          width 100%
          height 498px
      .title
        height 145px
        display flex
        align-items flex-end
        .logoimg 
          margin-left 20px
          margin-bottom 10px
          margin-right 10px
          width 130px
          height 69px
        .text
          margin-bottom 20px
          font-size 30px
          color #fff
      .swiper-container
        margin 0 auto
        width 710px
        height 540px
        .swiper-wrapper
          .swiper-slide
            display inline-block
            padding 36px 6px 6px 6px
            width 168px
            height 100%
            &:nth-child(even)
              background-color pink
            &:nth-child(odd)
              background-color blue
            .list
              width 100%
              height 428px
              .item
                .itemUrl
                  display flex
                  flex-direction column
                  .itemImg
                    width 120px
                    height 120px
                    background pink
</style>