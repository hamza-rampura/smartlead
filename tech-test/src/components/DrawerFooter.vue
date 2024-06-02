<template>
  <div class="q-py-sm">
    <q-item
      clickable
      :href="link.to"
      target="_blank"
      class="nav-links q-py-sm flex-center"
    >
      <q-item-section v-if="link.icon" class="link-icon">
        <img :src="link.icon" />
      </q-item-section>

      <q-item-section class="link-title">
        <q-item-label>{{ link.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DrawerFooter",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.nav-links {
  max-height: 40px;
  min-height: 40px;

  .link-icon {
    height: 20px;
    max-width: 20px;
    margin-left: 4px;
  }
  .link-title {
    margin-left: 17px;
  }
}
</style>
