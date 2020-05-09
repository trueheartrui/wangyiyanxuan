import Index from '../pages/index/index'
import Cart from '../pages/cart/cart'
import Category from '../pages/category/category'
import Deserve from '../pages/deserve/deserve'
import Personal from '../pages/personal/personal'
import CategoryItem from '../pages/categoryItem/categoryItem'
import Recommend from '../pages/recommend/recommend'
import Search from '../pages/search/search'
export default [
  { 
    path: '/index', component: Index,
    children:[
      {path:'recommend',component:Recommend,meta: { requiresNav: true }},
      {path:'/',redirect:'recommend'},
      {path:':id',component:CategoryItem,props:true,meta: { requiresNav: true }}
    ]
  },
  { path: '/cart', component: Cart, meta: { requiresNav: true } },
  { path: '/category', component: Category, meta: { requiresNav: true } },
  { path: '/deserve', component: Deserve, meta: { requiresNav: true } },
  { path: '/personal', component: Personal,meta: { requiresNav: false }},
  { path: '/search', component: Search, meta: { requiresNav: false }},
  { path: '/', redirect: '/deserve' }
]