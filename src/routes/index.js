import Index from '../pages/index/index'
import Cart from '../pages/cart/cart'
import Category from '../pages/category/category'
import Deserve from '../pages/deserve/deserve'
import Personal from '../pages/personal/personal'
export default [
  { path: '/index', component: Index },
  { path: '/cart', component: Cart },
  { path: '/category', component: Category },
  { path: '/deserve', component: Deserve },
  { path: '/personal', component: Personal },
  { path: '/', redirect: '/index' }
]