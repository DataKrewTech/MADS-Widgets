import Chart from "./index.vue"

import { use, registerComponent } from "../../utils/plugins"

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Chart)
  },
}

use(Plugin)

export default Plugin

export {
  Chart as MadsHighchart
}
