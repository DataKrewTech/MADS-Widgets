<template>
  <div class="line-chart-wrap">
    <highchart :visualProperties="visualProperties" :series="data" :widgetId="widgetId"></highchart>
  </div>
</template>

<script>
import Highchart from "./highchart.vue"

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
  mounted () {
    console.log('area chart')
  }
}
</script>

<style lang="scss" scoped></style>
