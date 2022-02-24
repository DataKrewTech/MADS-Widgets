<template>
  <mads-card class="data-card-demo-wrap" :name="'data_card'" :visualProperties="visualProperties" :series="series"></mads-card>
</template>

<script>
const visualProperties = {
  "card": {
    "backgroundColor": "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
    "fontColor": "#ffffff",
    "type": "data card"
  },
  "image": {
    "align": [
      "left",
      "right",
      "center",
      "top",
      "bottom"
    ],
    "url": "https://mads-image.s3.ap-southeast-1.amazonaws.com/uploads/dashboard/preferences-system-power-icon.png"
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
    "text": "Data Card"
  },
  "unit": {
    "align": [
      "left",
      "right",
      "center",
      "top",
      "bottom"
    ],
    "text": "Amp"
  }
}

const series = [{
  "color": null,
  "data": [
    {
      "y": 2.12
    }
  ],
  "name": null,
  "unit": null
}]

export default {
  data() {
    return {
      visualProperties: visualProperties,
      series: series
    }
  },
}
</script>

<style lang="scss" scoped>
  .data-card-demo-wrap {
    width: 500px;
    height: 300px;
  }
</style>
