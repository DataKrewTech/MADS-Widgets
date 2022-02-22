<template>
  <div>
    <div class="widget-container">
      <div :id="'highChart' + widgetId" style="display: flex; justify-content: center;"></div>
    </div>
  </div>
</template>

<script>

import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
import StockInit from 'highcharts/modules/stock'
import hcMore from 'highcharts/highcharts-more'
import solidgauge from 'highcharts/modules/solid-gauge'
import Boost from 'highcharts/modules/boost'
import ExportData from 'highcharts/modules/export-data'
import NoData from 'highcharts/modules/no-data-to-display'

Exporting(Highcharts)
StockInit(Highcharts)
hcMore(Highcharts)
solidgauge(Highcharts)
Boost(Highcharts)
ExportData(Highcharts)
NoData(Highcharts)

export default {
  components: {
  },
  props: {
    visualProperties: {
      type: Object,
      required: true
    },
    series: {
      type: Array,
      required: true
    },
    widgetId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'chart'
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    timezone: {
      type: String
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      widget: null
    }
  },
  methods: {
    generateWidget () {
      let widgetOptions = Object.assign(
        this.visualProperties,
        {
          time: {
            timezone: this.timezone
          },
          caption: {
            text: ''
          },
          boost: {
            useGPUTranslations: true
          },
          plotOptions: {
            line: {
              marker: {
                enabled: false
              }
            },
            series: {
              showInNavigator: true
            }
          },
          rangeSelector: {
            enabled: false
          },
          title: {
            style: {
              display: 'none'
            }
          },
          subtitle: {
            style: {
              display: 'none'
            }
          },
          navigation: {
            buttonOptions: {
              enabled: false
            }
          },
          credits: {
            enabled: false
          },
          lang: {
            noData: 'No Data available'
          }
        }
      )

      let series = this.series

      widgetOptions = Object.assign(widgetOptions, {
        series: series
      })

      if (this.type === 'stock_chart') {
        this.widget = Highcharts.stockChart('highChart' + this.widgetId, widgetOptions)
      } else {
        this.widget = Highcharts.chart('highChart' + this.widgetId, widgetOptions)
      }
    },
    downloadCSV () {
      this.widget.downloadCSV()
    },
    viewData () {
      this.widget.toggleDataTable()
    },
    downloadXLS () {
      this.widget.downloadXLS()
    },
    printChart () {
      this.widget.print()
    },
    downloadPNG () {
      this.widget.exportChart()
    },
    downloadJPEG () {
      this.widget.exportChart({
        type: 'image/jpeg'
      })
    },
    downloadPDF () {
      this.widget.exportChart({
        type: 'application/pdf'
      })
    },
    downloadSVG () {
      this.widget.exportChart({
        type: 'image/svg+xml'
      })
    },
    resizeWidget (width, height) {
      setTimeout(() => {
        this.widget.setSize(width, height)
      }, 10)
    },
    addDataPoint (point, index) {
      this.widget.series[index].addPoint(point, true, true)
    },
    updateSeriesData (data, index) {
      this.widget.series[index].update({
        data: data
      }, true)
    },
    getCardBackgroundColor () {
      return this.visualProperties.chart ? this.visualProperties.chart.backgroundColor : '#ffffff'
    },
    getSVG () {
      return this.widget.getSVG()
    }
  },
  watch: {
    series () {
      this.generateWidget()
      this.resizeWidget(this.width, this.height)
    }
  },
  mounted () {
    this.generateWidget()
    this.resizeWidget(this.width, this.height)
  }
}
</script>

<style lang="scss" scoped>
.widget-container {
  position: relative;
  background-color: transparent;
  .centered-loader {
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
</style>

<style lang="scss">
  .highcharts-background, .highcharts-plot-background {
    fill: none;
  }
  .highcharts-caption {
    background-color: #e0e0e0;
  }
  .highcharts-label.highcharts-data-label {
    .highcharts-label-box.highcharts-data-label-box {
      display: none;
    }
    text {
      font-size: 30px !important;
      font-family: 'Nunito Sans', sans-serif;
      .highcharts-text-outline {
        stroke: none;
        fill: none;
      }
    }

  }
</style>
