<template>
  <q-menu transition-show="jump-down" transition-hide="jump-up">
    <q-list style="min-width: 100px">
      <q-item>
        <q-item-section></q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable @click="handleLogout">
        <q-item-section>Logout</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters("auth", ["getUserDetails"]),
    isUserLoggedIn() {
      return this.getUserDetails;
    },
  },

  methods: {
    ...mapActions("auth", ["setUserDetailsFn"]),
    handleLogout() {
      this.setUserDetailsFn(null);
      this.$router.push({ name: "login" });
    },
  },
});
</script>

<style lang="scss" scoped></style>
