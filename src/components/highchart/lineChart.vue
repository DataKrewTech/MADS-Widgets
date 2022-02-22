<template>
  <div class="line-chart-wrap">
    <highchart :visualProperties="visualProperties" :series="data" :widgetId="widgetId"></highchart>
  </div>
</template>

<script>
import Highchart from "./highchart.vue"

export default {
  components: {
    Highchart
  },
  props: {
    visualProperties: {
      type: Object,
      required: true
    },
    data: {
      required: true
    },
    type: {
      type: String,
      default: 'chart'
    }
  },
  data() {
    return {
      widgetId: 'lineChartId'
    }
  },
  mounted () {
    console.log('line chart')
  }
}
</script>

<style lang="scss" scoped></style>
