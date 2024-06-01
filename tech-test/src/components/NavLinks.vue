<template>
  <q-item clickable :to="link.to" class="nav-links">
    <q-item-section v-if="link.icon">
      <img :src="src" />
      {{ src == "../assets/leads.svg" }}
      <img src="../assets/leads.svg" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ link.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavLinks",
  props: {
    link: {
      type: Object,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
});
</script>
