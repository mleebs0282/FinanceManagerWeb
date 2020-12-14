<template>   <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <router-link to='/'>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 logo"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

       <h1>Finance Manager</h1>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <router-link to='/budget'>
        <v-icon class="mr-2">mdi-alarm-panel-outline</v-icon>
        <span>Budget</span>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .v-application header a {
    color: #fff !important;
    text-decoration: none;
  }

  .logo {
    display: inline-block !important;
    vertical-align: bottom;
  }

  .logo + h1 {
    display: inline-block;
  }
</style>
