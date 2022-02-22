<template>
  <div class="line-chart-wrap">
    <highchart :visualProperties="visualProperties" :series="data" :widgetId="widgetId"></highchart>
  </div>
</template>

<script>
import Highchart from "./highcart.vue"

export default {
  components: {
    Highchart,
  },
  props: {
    visualProperties: {
      type: Object,
      required: true
    },
    data: {
      required: true
    }
  },
  data() {
    return {
      widgetId: 'areaChartId'
    }
  },
}
</script>

<style lang="scss" scoped></style>
