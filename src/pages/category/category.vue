<template>
  <div class="cateGorysListContainer">
		<!-- 头部 -->
		<div class="header">
			<div class="search">搜索商品</div>
		</div>
		<!-- 内容 -->
		<div class="contentContainer">
			<div class="leftContainer" ref="contentContainer">
        <div class="leftContent">
          <div 
						@click="changeClickId(item.id)"
						class="leftItem" 
						:class="{active:item.id === clickId}" 
						v-for="(item) in CategoryData" 
						:key="item.id"
					>{{item.name}}</div>
        </div>
			</div>
			<div class="rightContainer" ref="rightContainer" v-if="CategoryData.length>0"> 
				<div class="rightContent">
            <img class="rightImg" :src="cateObj.imgUrl">
						<div class="rightItem" v-for="(item) in cateObj.subCateList" :key="item.id">
							<img :src="item.wapBannerUrl" >
							<div class="text">{{item.name}}</div>
						</div>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
  import http from '@/http'
  import BSscroll from 'better-scroll'
  export default {
    data:()=>{
      return{
        CategoryData:[],
        clickId:0
      }
    },
    async mounted(){
      let result = await http.index.getCategoryDatas()
      this.CategoryData = result.data
      this.clickId = this.CategoryData[0].id
      //右侧滑屏
      this.$nextTick(() => {
        // DOM 现在更新了
        let rightWraper = this.$refs.rightContainer
        console.log(rightWraper)
        rightWraper && new BSscroll(rightWraper,{scrollY:true,click:true})
      })
        
      
      
      
    },
    methods:{
      changeClickId(id){
        this.clickId = id
      }
    },
    computed:{
			cateObj(){
        console.log(this.CategoryData.find( item=>{
					return item.id === this.clickId
				}))
				return this.CategoryData.find( item=>{
					return item.id === this.clickId
				})
			}
		}
  }
</script>

<style lang="stylus" scoped>
  .cateGorysListContainer
    .header
      height 56px
      padding 10px 0
      .search
        width 90%
        height 100%
        margin 0 auto
        font-size 26px
        text-align center
        line-height 56px
        border-radius 10px
        background #EEEEEE
    .contentContainer
        display flex
        border-top 1px solid #eee
        box-sizing border-box
        height calc(100vh - 174px)
        overflow hidden
        .leftContainer
          width 20%
          height 100%
          overflow hidden
          .leftContent
            border-right 1px solid #eee
            box-sizing border-box
            .leftItem
              position relative
              font-size 26px
              text-align center
              line-height 80px
              &.active
                color #ab2b2b
                &:after
                  position absolute
                  left 2px
                  top 15px
                  content ''
                  width 2px
                  height 50px
                  background #ab2b2b
			
        .rightContainer
          width 80%
          height 100%
          overflow hidden
          .rightContent
            display flex
            flex-wrap wrap
            .rightImg
              width 520px
              height 190px
              margin 20px auto
            .rightItem
              width 33.333%
              height 216px
              display flex
              flex-direction column
              align-items center
              img
                width 144px
                height 144px
              .text
                font-size 24px















      
</style>