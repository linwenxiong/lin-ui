import '@/utils/iscroll-probe'
import LinScroll from "@/lib/LinScroll"
import LinLoading from "@/lib/LinLoading"
import type { App } from 'vue';
const components = [LinScroll, LinLoading]
export default {
  install: (app: App) => {
    components.forEach((component) => {
      console.log(component)
      if(component?.name) {
        app.component(component.name, component)
      } else {
         console.log("组件：", component, "缺少组件name")
      }      
    })
  }
}
export type { IScrollInstance } from "@/lib/LinScroll/src/types" // 导出类型文件
// export type { XXX } from "@/lib/XXXX/src/types"