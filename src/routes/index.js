import Index from '../pages/index/index'
import Cart from '../pages/cart/cart'
import Category from '../pages/category/category'
import Deserve from '../pages/deserve/deserve'
import Personal from '../pages/personal/personal'
import CategoryItem from '../pages/categoryItem/categoryItem'
import Recommend from '../pages/recommend/recommend'
export default [
  { 
    path: '/index', component: Index,
    children:[
      {path:'recommend',component:Recommend},
      {path:'/',redirect:'recommend'},
      {path:':id',component:CategoryItem,props:true}
    ]
  },
  { path: '/cart', component: Cart },
  { path: '/category', component: Category },
  { path: '/deserve', component: Deserve },
  { path: '/personal', component: Personal },
  { path: '/', redirect: '/index' }
]