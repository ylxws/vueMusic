import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend'
import Singer from 'components/singer'
import Rank from 'components/rank'
import Search from 'components/search'
import TimeLine from 'components/timeLine'

Vue.use(Router)
// 注册路由

export default new Router({
  routes: [
    {
      path: '/',
      component: Recommend
    },
    {
      path: '/timeLine',
      component: TimeLine
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
