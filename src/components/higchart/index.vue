<template>
  <div>
    Check
  </div>
  <!-- <component v-bind:is="name" :visualProperties="visualProperties" :data="data"></component> -->
</template>

<script>
// import Line from './lineChart.vue'
// import AreaRange from './areaRangeChart.vue'

export default {
  components: {
    // Line,
    // AreaRange
  },
  props: {
    visualProperties: {
      type: Object,
      required: true
    },
    data: {
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

