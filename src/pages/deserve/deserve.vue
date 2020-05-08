<template>
  <div>
    <div class="box" :class="{active:flag}" @click="handleClick"></div>
  </div>
</template>

<script>
  export default {
    data:()=>{
      return {
        flag:false
      }
    },
    methods:{
      handleClick(){
        this.flag = true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .box
    position absolute
    width 100px
    height 100px
    background-color pink
    transition all 1s linear 
    &.active  
      width 200px

</style>