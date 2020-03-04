<template>
  <div>
    <div class="title">
      <h1>{{GET_HOLIDAYS.date}}</h1>
      <div>{{GET_HOLIDAYS.season}}</div>
      <div>{{GET_HOLIDAYS.season_week}}</div>
      <div>{{GET_HOLIDAYS.weekday}}</div>
    </div>
    <div v-for="(item, index) in GET_HOLIDAYS.celebrations" :key="item.title" class="card">
      <Card :item="item" :index="index" />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card";
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  components: {
    Card
  },
  created() {
    if (this.$store.getters.GET_HOLIDAYS.length == 0) {
      let dateUrl = this.$route.params.id.replace(/-/g, "/");
      this.$store.dispatch("LOAD_HOLIDAYS", dateUrl);
    }
  },
  computed: {
    ...mapGetters(["GET_HOLIDAYS"])
  }
};
</script>
<style scoped>
.card {
  margin-top: 2rem;
}
.title {
  padding-top: 3rem;
  text-align: center;
}
</style>