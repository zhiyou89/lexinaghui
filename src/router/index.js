import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index/index.vue'
import list from '../pages/list/list.vue'
import personCenter from '../pages/personCenter/personCenter.vue'
import goodsList from '../pages/goodsList/goodsList.vue'
import goodsDetail from '../pages/goodsDetail/goodsDetail.vue'
import Search from '../pages/search/search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      meta: {
         showFooter: true
      }
    },
    {
      path: '/list',
      component: list,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personCenter',
      component: personCenter,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      component: index,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/goods_list',
      component: goodsList
    },
    {
      path: '/goods_detail',
      component: goodsDetail
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
