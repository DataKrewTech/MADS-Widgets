<template>
  <div>
    <component v-bind:is="componentMappings[name]" :type="type" :visualProperties="visualProperties" :series="series"></component>
  </div>
</template>

<script>
import DynamicCard from './dynamicCard.vue'
import ImageCard from './imageCard.vue'
import PercentageCard from './dataPercentCard.vue'
import UserCard from './userCard.vue'
import DataCard from './dataCard.vue'
import StaticCard from './staticCard.vue'

const mappings = {
  'dynamic_card': DynamicCard,
  'image_card': ImageCard,
  'percentage_card': PercentageCard,
  'user_card': UserCard,
  'data_card': DataCard,
  'static_card': StaticCard
}

export default {
  name: 'MadsCard',
  components: {
    DynamicCard,
    ImageCard,
    PercentageCard,
    UserCard,
    DataCard,
    StaticCard
  },
  data () {
    return {
      componentMappings: mappings
    }
  },
  props: {
    visualProperties: {
      type: Object,
      required: true
    },
    series: {
      required: true
    },
    type: {
      type: String,
      default: 'card'
    },
    name: {
      type: String,
      required: true
    }
  },
  mounted () {
    console.log('afadsadsf', this.name)
  }
}
</script>

