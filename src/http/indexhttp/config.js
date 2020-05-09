export default{
  // host:'http://localhost:4001',
  timeout:5000,
  name:'index',
  api:{
    getIndexData:{
      url:'/getIndexData',
      method:'get',
      corsUrl:'api'
    },
    getCategoryDatas:{
      url:'/getCategoryDatas',
      method:'get',
      corsUrl:'api'
    },
    getCateList:{
      url:'/getIndexCateList',
      method:'get',
      corsUrl:'api'
    },
    getCateContent:{
      url:'/getCateLists',
      method:'get',
      corsUrl:'api'
    }
  }
}