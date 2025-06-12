import LinScroll from "@/lib/LinScroll"
import LinLoading from "@/lib/LinLoading"
import type { App } from 'vue';
const components = [LinScroll, LinLoading]
export default {
  install: (app: App) => {
    components.forEach((component) => {
      if(component?.__name) {
        app.component(component.__name, component)
      } else {
         console.log("组件：", component, "缺少组件name")
      }      
    })
  }
}