<template>
  <v-app id="inspire">
    <Sidebar />
    <v-main class="bg-grey-lighten-3">
      <Toolbar />
      <v-container fluid>       
        <router-view></router-view>       
      </v-container>
      <a class="btn-elevator" href="#toolbar">
        <v-icon size="large">mdi-arrow-up-bold</v-icon>
      </a>
    </v-main>
  </v-app>
  <Bottombar />
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Toolbar from './components/Toolbar.vue';
import Bottombar from './components/Bottombar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Toolbar,
    Bottombar,
  },
}
</script>

<style>
@import "../src/assets/css/site.css";
@import "../src/assets/css/layout.css";
</style>