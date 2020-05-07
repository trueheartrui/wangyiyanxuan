<template>
  <div class="module">
    <div class="title">
      <slot name='title'></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl';
  .module
    // padding-bottom 30px
    // border-bottom 20px solid #eee
    // padding 0 30px 30px 30px
    module()
    .title  
      height 90px
      font-size 32px
      font-family PingFangSC-Regular
      color #333
      line-height 90px
    .content
      display flex
      justify-content space-between
      flex-wrap wrap
</style>