<template>
  <div>
    <component v-bind:is="componentMappings[name]" :type="type" :visualProperties="visualProperties" :data="data"></component>
  </div>
</template>

<script>
import LineChart from './lineChart.vue'
import AreaChart from './areaChart.vue'

const mappings = {
  'line': LineChart,
  'area': AreaChart
}

export default {
  name: 'MadsHighchart',
  components: {
    LineChart,
    AreaChart
  },
  data () {
    return {
      componentMappings: mappings
    }
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
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

