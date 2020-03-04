<template>
  <div>
    <div class="text-center">
      <v-snackbar top v-model="snackbar" :timeout="timeout">
        {{ text }}
        <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </div>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="320px">
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Picker in dialog"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row justify="center">
      <div>
        <v-btn class="mx-2" dark color="pink" depressed @click="clearDate">
          <v-icon dark>mdi-delete</v-icon>Очистить
        </v-btn>

        <v-btn
          @click="goToDateInfo"
          class="ma-2"
          :loading="GET_LOADING"
          :disabled="GET_LOADING"
          color="primary"
        >
          <v-icon dark>mdi-arrow-right-bold</v-icon>Перейти
        </v-btn>
      </div>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    date: "",
    menu: false,
    modal: false,
    snackbar: false,
    text: "Введите дату",
    timeout: 2000
  }),
  methods: {
    clearDate() {
      this.date = "";
    },
    goToDateInfo() {
      if (this.date) {
        let dateUrl = this.date.replace(/-/g, "/");
        this.$store.dispatch("LOAD_HOLIDAYS", dateUrl).then(() => {
          this.$router.push(`/list/${this.date}`);
        });
      } else {
        this.snackbar = true;
      }
    }
  },
  computed: {
    ...mapGetters(["GET_ERROR_MESSAGE", "GET_LOADING"])
  }
};
</script>
<style scoped>
.alert {
  position: absolute;
  z-index: 99;
  right: 20px;
  top: 0px;
  width: 320px;
  height: 90px;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
