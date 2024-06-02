<template>
  <campaign-details></campaign-details>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import CampaignDetails from "../components/CampaignDetails.vue";

export default {
  components: {
    CampaignDetails,
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
