<template>
  <div class="data-percent-card-wrap" :style="{ background: getCardBackgroundColor() }">
    <div class="data-card-wrap">
      <div class="image-wrap h-100">
        <img :src="getImage().url" alt="">
      </div>
      <div class="data-wrap" :style="{color: getFontColor()}">
        <div class="data-value" v-if="value || value === 0" :style="{color: activeThresholdColor}">{{value.toFixed(2)}} {{getUnit().text}}</div>
        <div class="data-value" v-else>No Data</div>
        <!-- <div class="data-title">{{getTitle().text}}</div> -->
      </div>
    </div>
    <div class="percent-wrap" :style="{color: getFontColor()}">
      <div class="total-bar">
        <div class="percent-bar" :style="{width: getBarPercent() + '%'}"></div>
        <div class="percent-title">Target</div>
        <div class="percent-value">{{getBarPercent()}}%</div>
      </div>
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
    getPercentageBar () {
      return this.visualProperties.percentage_bar || {}
    },
    getBarPercent () {
      let data = this.value
      let max = this.getPercentageBar().max
      let percent = 0

      if (data && max) {
        percent = (data / parseInt(max)) * 100
      }

      return percent.toFixed(2)
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
  .data-percent-card-wrap {
    height: calc(100% - 28px);
    .data-card-wrap {
      display: flex;
      height: calc(100% - 70px);
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
          // color: #98a6ad;
          text-align: right;
        }
      }
    }
    .percent-wrap {
      height: 30px;
      display: flex;
      padding: 5px;
      margin-top: 30px;
      align-items: flex-end;
      .total-bar {
        background-color: #eef0f2;
        height: 8px;
        border-radius: 4px;
        width: 100%;
        position: relative;
        font-size: 14px;
        .percent-bar {
          background-color: #4a81d4;
          height: 8px;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .percent-title, .percent-value {
          position: absolute;
          top: -25px;
        }
        .percent-value {
          right: 0;
        }
      }
    }
  }
</style>
