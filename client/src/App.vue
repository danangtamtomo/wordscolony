<template>
  <div id="app">
    <app-header @showCreateArticle="showCreate"></app-header>
    <app-create-article v-if="isShow"></app-create-article>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import CreateArticle from './components/CreateArticle'

export default {
  name: 'app',
  data () {
    return {
      isLoggedIn: false,
      isShow: false
    }
  },
  components: {
    'app-header': Header,
    'app-main': Main,
    'app-footer': Footer,
    'app-login': Login,
    'app-create-article': CreateArticle
  },
  methods: {
    showCreate () {
      this.isShow = !this.isShow
    },
    checkLogin () {
      if (localStorage.getItem('token')) {
        this.isLoggedIn = true
        this.checkLogin()
      } else {
        this.isLoggedIn = false
        this.checkLogin()
      }
    },
    doLogout () {
      localStorage.removeItem('token')
      this.checkLogin()
    },
    getDashboard () {
      this.coba = 'lah bisa'
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
