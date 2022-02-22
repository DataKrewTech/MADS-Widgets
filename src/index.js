import * as components from "./components/index"

import { use } from "./utils/plugins"

const MadsWidgets = {
  install(Vue) {
    for (let componentKey in components) {
      Vue.use(components[componentKey])
    }
  },
}

use(MadsWidgets)

export default MadsWidgets

// export all components as vue plugin
export * from "./components/index"
