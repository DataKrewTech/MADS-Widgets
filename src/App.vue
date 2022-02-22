<template>
  <div id="app">
    <highchart name="line" :visualProperties="visualProperties" :data="series"></highchart>
  </div>
</template>

<script>
const visualProperties = {
  title: {
    text: "Solar Employment Growth by Sector, 2010-2016",
  },

  subtitle: {
    text: "Source: thesolarfoundation.com",
  },

  yAxis: {
    title: {
      text: "Number of Employees",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2017",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },
}

const series = [
  {
    name: "Installation",
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  },
  {
    name: "Manufacturing",
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
  },
  {
    name: "Sales & Distribution",
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
  },
  {
    name: "Project Development",
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
  },
  {
    name: "Other",
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
  },
]

import Highchart from './components/higchart'

export default {
  data() {
    return {
      visualProperties: visualProperties,
      series: series
    }
  },
  components: {
    Highchart
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
