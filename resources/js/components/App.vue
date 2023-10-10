<template>
  <v-app>
    <v-navigation-drawer expand-on-hover rail permanent >
      <v-list>
        <v-list-item>
          <v-img src="./img/logo.png">
          </v-img>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
            prepend-icon="mdi-home"
            title="Home"
            router-link
            to="/">
        </v-list-item>
        <v-list-item
            prepend-icon="mdi-archive-plus"
            title="Adicionar Produto"
            router-link
            to="/register-product">
        </v-list-item>
        <v-list-item
            prepend-icon="mdi-list-box"
            title="Catálago de Produtos"
            router-link
            to="/list-products">
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-snackbar v-model="snackbar" :color="color" :timeout="timeout">
      {{ message }}
      <template v-slot:actions>
        <v-btn color="white" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      timeout: 3000,
    };
  },
  computed: {

    message() {
      return this.$store.state.message.text;
    },
    color() {
      return this.$store.state.message.color;
    },
    snackbar: {
      get() {
        return !!this.message || !!this.color;
      },
      set() {
        this.$store.dispatch("message", { text: "", color: "" });
      },
    },
  },
}
</script>
