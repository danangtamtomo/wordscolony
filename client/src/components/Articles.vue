<template>
  <div class="articles-container">
    <app-article-item v-for="article in articles" :article="article"></app-article-item>
  </div>
</template>

<script>
  import ArticleItem from '../components/ArticleItem'

  export default {
    name: 'articles',
    data () {
      return {
        articles: []
      }
    },
    components: {
      'app-article-item': ArticleItem
    },
    methods: {
      getArticles () {
        this.$http.get('http://localhost:3000/article')
          .then((responses) => {
            this.articles = responses.data
          })
          .catch((err) => {
            console.log(err.message)
          })
      }
    },
    mounted () {
      this.getArticles()
    }
  }
</script>

<style>
  .articles-container {
    display: flex;
    width: 80%;
    margin: 50px auto 50px auto;
  }
</style>
