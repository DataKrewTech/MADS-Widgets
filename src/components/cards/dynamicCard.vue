<template>
  <div class="dynamic-card-wrap" :style="{backgroundColor: getCard().backgroundColor}">
    <div class="image-subtitle">
      <div class="data-wrap">
        <span v-if="value" :style="{color: activeThresholdColor}">{{value.toFixed(2)}} {{getUnit().text}}</span>
        <span v-else>No Data</span>
      </div>
      <div class="icon-wrap">
        <svg class="icon">
          <use xlink:href="/assets/img/mads-sensor-icons.svg#motion-sensor"></use>
        </svg>
      </div>
    </div>
    <div class="image-wrap">
      <img :src="getImageUrl()" alt="">
    </div>
    <div class="description">
      <span :style="{fontSize: getDescription().fontSize, color: getDescription().fontColor}">{{getDescription().text}}</span>
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
    widget: {
      type: Object,
      required: true
    }
  },
  methods: {
    getCard () {
      return this.widget.visual_properties.card || {}
    },
    getTitle () {
      return this.widget.visual_properties.title || {}
    },
    getSubtitle () {
      return this.widget.visual_properties.subtitle || {}
    },
    getDescription () {
      return this.widget.visual_properties.description || {}
    },
    getUnit () {
      return this.widget.visual_properties.unit
    },
    getImageUrl () {
      let imageUrl = (this.widget.visual_properties.image && this.widget.visual_properties.image.url) || (this.widget.visual_properties.icon && this.widget.visual_properties.icon.text)
      return imageUrl || '/assets/img/no-image.png'
    }
  },
  mounted () {
    let thresholds = this.widget.visual_properties.threshold
    if (this.widget.series[0] && this.widget.series[0].data[0]) {
      this.value = this.widget.series[0].data[0]['y']
    }

    this.$_.forEach(thresholds || [], (threshold) => {
      if (this.value >= threshold.from && this.value <= threshold.to) {
        this.activeThresholdColor = threshold.color
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .dynamic-card-wrap {
    height: calc(100% - 28px);
    overflow: auto;
    .image-subtitle {
      margin-bottom: 10px;
      height: 75px;
      position: relative;
      > span {
        font-size: 14px;
        color: #74788d;
        height: 20px;
      }
      .data-wrap {
        color: #212529;
        height: 75px;
        display: flex;
        align-items: center;
        span {
          font-size: 21px;
        }
      }
      .icon-wrap {
        position: absolute;
        top: 0;
        right: 0;
        .icon {
          width: 75px;
          height: 75px;
          padding: 10px;
        }
      }
    }
    .image-wrap {
      margin-bottom: 20px;
      img {
        border-radius: 4px;
        width: 100%;
        height: auto;
      }
    }
  }
</style>
