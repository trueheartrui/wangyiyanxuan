<template>
  <div>
    <router-view></router-view>
    <!-- 底部导航 -->
    <div class="footerNav">
      <router-link class="footerItem"  to="/index">
        <div class="iconfont icon-shouye active"></div>
        <span class="active">首页</span>
      </router-link>
      <router-link class="footerItem" to="/category">
        <div class="iconfont icon-fenlei2"></div>
        <span>分类</span>
      </router-link>
      <router-link class="footerItem" to="/deserve">
        <div class="iconfont icon-mai"></div>
        <span>值得买</span>
      </router-link>
      <router-link class="footerItem" to="/cart">
        <div class="iconfont icon-gouwuche1"></div>
        <span>购物车</span>
      </router-link>
      <router-link class="footerItem" to="/personal">
        <div class="iconfont icon-geren"></div>
        <span>个人</span>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="stylus">
  .footerNav
    position fixed
    bottom 0
    left 0
    display flex
    width 100%
    height 98px
    .footerItem
      width 20%
      height 98px
      display flex
      flex-direction column
      justify-content center
      text-align center
      &.active
        .iconfont
          color #DD1A21 
        span
          color #DD1A21 
      .iconfont
        font-size 45px
        color #666
        margin-bottom 7px
      span
        font-size 24px
        color #666
        

</style>

