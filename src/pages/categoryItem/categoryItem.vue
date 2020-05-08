<template>

<div class="scrollWraper" ref="scrollWraper">
  <div class="scrollContent">


    <div class="cateListContainer" v-if="cateData.length>0">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide" 
            v-for="(item,index) in cateData[0].category.bannerUrlList"
            :key="index"
          >
            <img class="swiperItem_img" :src="item">
          </div>
        </div>
      </div>
		
      <span class="title">{{cateData[0].category.name}}</span>
      <span class="desc">{{cateData[0].category.frontName}}</span>
      <!-- <ShopList :cateObj="cateObj"></ShopList> -->

      <div class="shopList">
        <div 
          class="item" 
          v-for="(item,index) in cateData[0].itemList" 
          :key="index"
          @click="toDetail(item)"
        >
          <img class="item_img" :src="item.listPicUrl">
          <span class="item_name">{{item.name}}</span>
          <span class="item_price">$ {{item.retailPrice}}</span>
        </div>
      </div>
    </div>


  </div>
</div>

</template>

<script>
  import http from '@/http'
  import Swiper from 'swiper'
  import BSscroll from 'better-scroll'
  import 'swiper/css/swiper.css'


  export default {
    data:() => {
      return {
        cateData:[],
      }
    },
    props:{
      id:String
    },
    async mounted(){
      let result = await http.index.getCateList()
      this.cateData = result.data
      this.$nextTick(()=>{
        //内容滑屏
        let contentWrapper = this.$refs.scrollWraper
        contentWrapper && new BSscroll(contentWrapper,{scrollY:true,click:true})
        //轮播图
        let mySwiper = new Swiper('.swiper-container',{
          loop: true, // 循环模式选项
          autoplay:true,
        })
      })
      //保存传过来的
      console.log(this.id)
    },
    computed:{
      cateObj(){
        console.log('computed')
        console.log(this.cateData.find((item)=>{item.category.parentId === this.id}))
        return this.cateData.find((item)=>{item.category.parentId === this.id})
      }
    },
    // watch:{
    //   $router:()=>{

    //   }
    // }
  }
</script>

<style lang="stylus" scoped>
  .cateListContainer
		.swiper-container
      width 100%
      .swiper-wrapper
        display inline-flex
        .swiper-slide
          width 750px
          height 370px
          .swiperItem_img
            width 100%
            height 100%
      .title
        display block
        text-align center
        font-size 34px
        color #333
        line-height 70px
      .desc
        display block
        text-align center
        font-size 24px
        color #999
        line-height 40px
      .shopList
        display flex
        justify-content space-around
        flex-wrap wrap
        .item
          width 345px
          .item_img
            width 345px
            height 345px
          span
            // white-space pre-wrap
            font-size 28px
            line-height 50px
            text-align left
          .item_price
            display block
            color: red;
            font-weight: bold;
        &:after
          content ''
          width 345px
          height 0px
</style>