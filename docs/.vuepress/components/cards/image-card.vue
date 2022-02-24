<template>
  <mads-card class="data-card-demo-wrap" :name="'image_card'" :visualProperties="visualProperties"></mads-card>
</template>

<script>
const visualProperties = {
  "card": {
    "backgroundColor": "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
    "fontColor": "#ffffff",
    "type": "image card"
  },
  "description": {
    "align": [
      "left",
      "right",
      "center",
      "top",
      "bottom"
    ],
    "fontColor": "#212529",
    "fontSize": "14px",
    "text": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
  },
  "image": {
    "align": [
      "left",
      "right",
      "center",
      "top",
      "bottom"
    ],
    "url": "https://news.microsoft.com/wp-content/uploads/prod/sites/133/2019/11/Microsoft-CoE_Image-5dca6a56722bd-960x510.jpg"
  },
  "subtitle": {
    "align": [
      "left",
      "right",
      "center",
      "top",
      "bottom"
    ],
    "fontColor": "#74788d",
    "fontSize": "14px",
    "text": "afdasdfa"
  },
  "title": {
    "align": [
      "left",
      "right",
      "center",
      "top",
      "bottom"
    ],
    "fontColor": "#495057",
    "fontSize": "15px",
    "text": "Industry"
  }
}

export default {
  data() {
    return {
      visualProperties: visualProperties
    }
  },
}
</script>

<style lang="scss" scoped>
  .data-card-demo-wrap {
    width: 450px;
    height: 500px;
  }
</style>
