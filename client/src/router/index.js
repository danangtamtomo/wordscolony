import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Articles from '@/components/Articles'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    }

  ]
})
