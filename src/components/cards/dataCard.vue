<template>
  <div class="data-card-wrap" :style="{ background: getCardBackgroundColor() }">
    <div class="image-wrap h-100">
      <img :src="getImage().url" alt="">
    </div>
    <div class="data-wrap" :style="{color: getFontColor()}">
      <div class="data-value" v-if="value || value === 0" :style="{color: activeThresholdColor}">{{value.toFixed(2)}} {{getUnit().text}}</div>
      <div class="data-value" v-else>No Data</div>
      <!-- <div class="data-title">{{getTitle().text}}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      activeThresholdColor: ''
    }
  },
  props: {
    visualProperties: {
      type: Object,
      required: true
    },
    series: {
      required: true
    }
  },
  methods: {
    getImage () {
      return this.visualProperties.image || {}
    },
    getTitle () {
      return this.visualProperties.title || {}
    },
    getUnit () {
      return this.visualProperties.unit
    },
    getCard () {
      return this.visualProperties.card || {}
    },
    addDataPoint (point, _) {
      if (point) {
        this.value = point['y']
      }
    },
    getCardBackgroundColor () {
      return this.getCard().backgroundColor
    },
    getFontColor () {
      if ((this.getCard().backgroundColor) === '#ffffff') {
        return '#000000'
      } else {
        return this.getCard().fontColor
      }
    }
  },
  mounted () {
    let thresholds = this.visualProperties.threshold || []
    if (this.series[0] && this.series[0].data[0]) {
      this.value = this.series[0].data[0]['y']
    }

    thresholds.forEach((threshold) => {
      if (this.value >= threshold.from && this.value <= threshold.to) {
        this.activeThresholdColor = threshold.color
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .data-card-wrap {
    height: calc(100% - 28px);
    display: flex;
    padding: 5px;
    .image-wrap {
      width: calc(100% - 150px);
      img {
        height: 100%;
        border-radius: 4px;
      }
    }
    .data-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      width: 150px;
      .data-value {
        font-weight: bold;
        font-size: 24px;
      }
      .data-title {
        text-align: right;
      }
    }
  }
</style>
