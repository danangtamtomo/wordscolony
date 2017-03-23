<template>
  <div class="article-container">
    <b-card :header="'Article by '+ article.author.fullname"
            class="mb-2"
            :title="article.title"
            :sub-title="article.content"
            show-footer
    >
      <small slot="footer" class="text-muted">
        Last updated at {{ article.updatedAt }}
    </small>
    </b-card>

  </div>
</template>

<script>
  export default {
    name: 'article',
    data () {
      return {
        article: {}
      }
    },
    components: {
    },
    methods: {
      getArticle () {
        this.$http.get('http://localhost:3000/article/' + this.$route.params.id)
          .then((response) => {
            this.article = response.data
          })
          .catch((err) => {
            this.article = err.message
          })
      }
    },
    mounted () {
      this.getArticle()
    }
  }
</script>

<style>
  .article-container {
    width: 50%;
    margin: 20px auto 20px auto;
  }
</style>
