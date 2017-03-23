<template>
  <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse" ></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
      <router-link to="/">
       Words Colony
      </router-link>
    </b-link>

    <b-collapse is-nav id="nav_collapse">


      <b-nav is-nav-bar class="ml-auto">
          <b-button :size="lg" :variant="danger" @click="createArticle">Create Article</b-button>
        <b-nav-item-dropdown right-alignment>

          <!-- Using text slot -->
          <template slot="text">
            <span style="font-weight: bold;">User</span>
          </template>

          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    methods: {
      createArticle () {
        this.$emit('showCreateArticle')
      }
    }
  }
</script>

<style></style>
