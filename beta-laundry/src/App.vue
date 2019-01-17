<template>
  <div id="app">
    <v-app dark>
      <nav-bar></nav-bar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/shared/nav-bar";

export default {
  data() {
    return {};
  },

  components: {
    "nav-bar": NavBar
  }
}
</script>


<style>
</style>
