<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">Календарь праздников</div>
    </v-app-bar>

    <v-snackbar top v-model="show" :timeout="timeout">
      {{ message }}
      <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data: () => ({
    snackbar: false,
    timeout: 2000,
    text: "",
    show: false
  }),
  methods: {
    errorMessage() {
      this.snackbar = true;
      this.show = true;
    }
  },
  computed: {
    ...mapGetters(["GET_ERROR_MESSAGE"]),
    message() {
      if (this.GET_ERROR_MESSAGE) {
        this.errorMessage();
        return this.GET_ERROR_MESSAGE;
      } else {
        return this.GET_ERROR_MESSAGE;
      }
    }
  }
};
</script>
