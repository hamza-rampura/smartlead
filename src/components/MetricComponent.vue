<template>
  <div
    class="col q-pr-lg"
    :class="{ 'custom-max-width': metric.label == 'Sent' }"
  >
    <div class="row items-baseline no-wrap">
      <div :style="metricColor" class="metric-count">{{ metric.count }}</div>
      <div
        v-if="metric.percent != null"
        class="light-grey-text font-size-12 q-ml-xs"
      >
        {{ metric.percent.toFixed(1) }}%
      </div>
    </div>
    <div class="row items-center q-mt-sm light-grey-text font-size-14 no-wrap">
      <p>{{ metric.label }}</p>
      <q-icon
        v-if="metric?.isError"
        name="warning"
        color="amber-9 q-ml-xs"
      ></q-icon>
      <q-icon
        v-if="metric.label == 'Positive Reply'"
        name="info_outline"
        class="q-ml-xs"
      ></q-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    metric: {
      type: Object,
      required: true,
      default: () => {},
    },
    status: {
      type: String,
      required: true,
      default: "",
    },
  },
  computed: {
    metricColor() {
      if (this.metric.label == "Sent") {
        return { color: "#6E58F1" };
      }
      if (this.metric.label == "Opened") {
        return { color: "#EEB728" };
      }
      if (this.metric.label == "Clicked") {
        return { color: "#BF51C1" };
      }
      if (this.metric.label == "Replied") {
        return { color: "#51C1C1" };
      }
      if (this.metric.label == "Positive Reply") {
        return { color: "#2CDB28" };
      }
      return 1;
    },
  },
};
</script>
<style lang="scss" scoped>
.metric-count {
  font-size: 20px;
}
</style>
