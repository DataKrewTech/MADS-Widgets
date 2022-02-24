<template>
  <div class="image-card-wrap" :style="{ background: getCardBackgroundColor() }">
    <!-- <div class="image-subtitle" :style="{fontSize: getSubtitle().fontSize + 'px', color: getSubtitle().fontColor}">{{getSubtitle().text}}</div> -->
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
    return {}
  },
  props: {
    visualProperties: {
      type: Object,
      required: true
    }
  },
  methods: {
    getCard () {
      return this.visualProperties.card || {}
    },
    getTitle () {
      return this.visualProperties.title || {}
    },
    getSubtitle () {
      return this.visualProperties.subtitle || {}
    },
    getDescription () {
      return this.visualProperties.description || {}
    },
    getCardBackgroundColor () {
      return this.getCard().backgroundColor
    },
    getImageUrl () {
      let imageUrl = (this.visualProperties.image && this.visualProperties.image.url) || (this.visualProperties.icon && this.visualProperties.icon.text)
      return imageUrl || '/assets/img/no-image.png'
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-card-wrap {
    height: calc(100% - 28px);
    overflow: auto;
    .image-subtitle {
      font-size: 14px;
      color: #74788d;
      margin-top: -5px;
      margin-bottom: 20px;
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
