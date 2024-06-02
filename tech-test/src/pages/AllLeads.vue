<template>
  <h3>All Leads Page</h3>
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
