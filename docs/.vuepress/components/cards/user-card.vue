<template>
  <mads-card class="data-card-demo-wrap" :name="'user_card'" :visualProperties="visualProperties"></mads-card>
</template>

<script>
const visualProperties = {
  "card": {
    "backgroundColor": "linear-gradient(to right, #b92b27, #1565c0)",
    "fontColor": "#e2cbcb",
    "type": "user card"
  },
  "image": {
    "align": [
      "left",
      "right",
      "center",
      "top",
      "bottom"
    ],
    "url": "https://mads-image.s3.ap-southeast-1.amazonaws.com/uploads/dashboard/avatar.jpeg"
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
    "fontSize": "12px",
    "text": "Manager"
  },
  "title": {
    "align": [
      "left",
      "right",
      "center",
      "top",
      "bottom"
    ],
    "fontColor": "#f1f2f4",
    "fontSize": "15px",
    "text": "Chandra Shekhar"
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
    width: 300px;
    height: 200px;
  }
</style>
