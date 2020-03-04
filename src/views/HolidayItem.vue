<template>
  <div v-if="item">
    <template>
      <v-card
        class="mx-auto card"
        max-width="344"
        outlined
        :style="{ 'background-color': item.colour }"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{item.title}}</v-list-item-title>
            <v-list-item-subtitle>{{item.colour}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{item.rank}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{item.rank_num}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      default: 0
    }
  },
  data: () => ({
    item: null
  }),
  created() {
    if (this.$store.getters.GET_HOLIDAYS.length == 0) {
      let dateUrl = this.$route.params.id.replace(/-/g, "/");
      this.$store.dispatch("LOAD_HOLIDAYS", dateUrl).then(() => {
        this.item = this.$store.getters.GET_HOLIDAYS_BY_ID(this.index);
      });
    } else {
      this.item = this.$store.getters.GET_HOLIDAYS_BY_ID(this.index);
    }
  }
};
</script>

<style>
.card {
  margin-top: 2rem;
}
</style>