<template>
  <mads-card class="data-card-demo-wrap" :name="'percentage_card'" :visualProperties="visualProperties" :series="series"></mads-card>
</template>

<script>
const visualProperties = {
  "card": {
    "backgroundColor": "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
    "fontColor": "#ffffff",
    "type": "percentage card"
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
  "percentage_bar": {
    "max": "1000000"
  },
  "threshold": [
    {
      "color": "#55BF3B",
      "from": 0,
      "to": 30
    },
    {
      "color": "#DDDF0D",
      "from": 30,
      "to": 45
    },
    {
      "color": "#DF5353",
      "from": 45,
      "to": 100
    }
  ],
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
    "text": "Energy Consumption"
  },
  "unit": {
    "align": [
      "left",
      "right",
      "center",
      "top",
      "bottom"
    ],
    "text": "Joules"
  }
}

const series = [{
  "color": null,
  "data": [
    {
      "y": 45662.37
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
    width: 100%;
    height: 300px;
  }
</style>
