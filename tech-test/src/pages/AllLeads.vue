<template>
  <h1>All Leads Page</h1>
  <p>{{ getUserDetails }}</p>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("auth", ["getUserDetails"]),
  },
  created() {
    if (!this.getUserDetails) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    ...mapMutations("auth", ["setUserDetails"]),
  },
};
</script>
