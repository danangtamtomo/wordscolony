<template>
  <div class="article-item">
    <router-link  :to="{name: 'Article', params: {id:article._id}}">
        <b-card img="http://placeskull.com/200/200/ABABAB/-1/0"
                :title="article.title" class="mb-2"
        >
          by {{ article.author.fullname }} on {{ article.createdAt }}
    </b-card>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'article-item',
    props: ['article'],
    data () {
      return {
      }
    },
    components: {
    },
    methods: {
    },
    mounted () {
    }
  }
</script>

<style>
  .article-item {
    width: 20%;
  }
</style>
