import Highchart from "./index.vue"

import { use, registerComponent } from "../../utils/plugins"

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Highchart)
  },
}

use(Plugin)

export default Plugin

export {
  Highchart as MadsHighchart
}
