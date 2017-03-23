<template>
  <div class="create-article-container">
    <h1>Create Article</h1>
    <b-form-input v-model="title" type="text" placeholder="" :state="title.length?'success':'warning'" :formatter="format" lazy-formatter></b-form-input>

    <br>

    <b-form-input textarea v-model="content" placeholder="Content Here"></b-form-input>

    <br>
    <p>Value: {{content}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        content: '',
        author: ''
      }
    }
  }
</script>

<style>
  .create-article-container {
    margin: 20px auto 20px auto;
    width: 50%;
  }
</style>
