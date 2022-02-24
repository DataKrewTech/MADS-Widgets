<template>
  <div class="table-card-wrap">
    <div class="header-wrap">
      <div v-for="(item, index) in getSeries()" :key="index" @click="selectedIndex = index" class="header-tab" :class="{active: index === selectedIndex}">{{item.name}} {{item.unit ? ('(In ' + item.unit + ')') : ''}}</div>
    </div>
    <div class="table-wrap mads-table">
      <table class="table w-100">
        <tbody>
          <tr v-for="(row, rowIndex) in dataList[selectedIndex]" :key="rowIndex">
            <td>{{$moment(row[0]).format('lll')}}</td>
            <td>{{row[1].toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    widget: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dataList: [],
      selectedIndex: 0
    }
  },
  methods: {
    getSeries () {
      return this.widget.series
    },
    addDataPoint (point, index) {
      this.dataList[index] = this.$_.concat([point], this.dataList[index])
      this.dataList = this.$_.concat([], this.dataList)
    }
  },
  mounted () {
    this.dataList = this.$_.map(this.widget.series, (serie) => {
      return serie.data
    })
  }
}
</script>

<style lang="scss" scoped>
  .table-card-wrap {
    height: calc(100% - 28px);
    .header-wrap {
      display: flex;
      margin-bottom: 5px;
      .header-tab {
        flex-grow: 1;
        cursor: pointer;
        border: 1px solid #dee2e6;
        border-right: none;
        font-weight: bold;
        padding: 5px 15px;
        font-size: 14px;
        &:last-child {
          border-right: 1px solid #dee2e6;
        }
        &.active {
          color: #ffffff;
          background-color: #3576AB;
          border: 1px solid #3576AB;;
        }
      }
    }
    .table-wrap {
      overflow: auto;
      height: calc(100% - 30px);
      .table > tbody > tr:nth-of-type(odd) {
        background-color: #f2f2f2;
      }
      .table {
        td {
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
    }
  }
</style>
