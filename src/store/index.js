import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    holidays: [],
    loading: false,
    errorMessage: false
  },
  getters: {
    GET_HOLIDAYS: state => state.holidays,
    GET_HOLIDAYS_BY_ID: state => (index = 0) => {
      return state.holidays.celebrations[index];
    },
    GET_LOADING: state => state.loading,
    GET_ERROR_MESSAGE: state => state.errorMessage
  },
  mutations: {
    SET_HOLIDAYS(state, payload) {
      state.holidays = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_ERROR_MESSAGE(state, payload) {
      state.errorMessage = payload;
    }
  },
  actions: {
    LOAD_HOLIDAYS({ commit }, dateUrl) {
      commit("SET_ERROR_MESSAGE", false);
      commit("SET_LOADING", true);
      return axios
        .get(
          `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${dateUrl}`
        )
        .then(res => {
          // console.log(res.data);
          commit("SET_HOLIDAYS", res.data);
          commit("SET_LOADING", false);
        })
        .catch(e => {
          commit("SET_LOADING", false);
          commit("SET_ERROR_MESSAGE", e.message);
          console.log(e);
        });
    }
  },
  modules: {}
});
