<template>
  <v-card class="mx-auto" max-width="344" outlined :style="{ 'background-color': item.colour }">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{item.date}}</div>
        <v-list-item-title class="headline mb-1">{{item.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text @click="goToHolidayIndex()">Подробнее</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["item", "index"],
  methods: {
    goToHolidayIndex() {
      let dateUrl = this.$route.params.id;
      this.$router.push(`/item/${dateUrl}/${this.index}`);
    }
  }
};
</script>
