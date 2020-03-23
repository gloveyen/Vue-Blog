<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand href="#">GloveCoding</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/">
              Home
            </b-nav-item>
            <b-nav-item to="/about">
              About
            </b-nav-item>
            <b-nav-item to="/login">
              Login
            </b-nav-item>
          </b-navbar-nav>
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="searchKey"
            ></b-form-input>
            <b-button
              @click.prevent="submitSearchKey"
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      searchKey: "",
    }
  },
  methods: {
    ...mapActions( [ 'changeSearchKey' ] ),

    submitSearchKey: function () {
      this.changeSearchKey( this.searchKey )
    }
  },
  watch: {
    searchKey: function () {
      if ( this.searchKey === "" ) {
        this.submitSearchKey()
      }
    }
  }
}

</script>
<style
  lang="scss"
  scoped
>
div {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
}

.navbar-brand {
  font-weight: 700;
}

.navbar-collapse {
  height: 56px;
}

.navbar-nav {
  padding-right: 1rem;
}

.nav-item {
  color: #ffffff;
  margin-right: 1rem;
}

.form-inline {
  margin-right: 1rem;
}

</style>
