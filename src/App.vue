<template>
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapGetters({
      dataMap: "cookies/dataMap"
    })
  },
  methods: {
    ...mapActions({
      set: "cookies/set"
    })
  },
  mounted() {
    this.set();
  }
};
</script>
