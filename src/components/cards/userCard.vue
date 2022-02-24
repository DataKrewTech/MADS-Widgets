<template>
  <div class="user-card" :style="{ background: getCardBackgroundColor() }">
    <div class="image-wrap">
      <img :src="getImage().url" alt="">
    </div>
    <div class="info-wrap" :style="{color: getFontColor()}">
      <div class="name">
        {{getTitle().text}}
      </div>
      <div class="role" :style="{color: getFontColor()}">
        {{getSubTitle().text}}
      </div>
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
    getImage () {
      return this.visualProperties.image || {}
    },
    getTitle () {
      return this.visualProperties.title || {}
    },
    getSubTitle () {
      return this.visualProperties.subtitle || {}
    },
    getCard () {
      return this.visualProperties.card || {}
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
  }
}
</script>

<style lang="scss" scoped>
  .user-card {
    height: calc(100% - 28px);
    display: flex;
    padding: 5px;
    .image-wrap {
      height: 100%;
      width: 75px;
      display: flex;
      align-items: center;
      img {
        height: 75px;
        width: 75px;
        border-radius: 50%;
      }
    }
    .info-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: calc(100% - 75px);
      padding-left: 20px;
      .name {
        font-weight: bold;
      }
    }
  }
</style>
