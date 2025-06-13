import LinLoading from "./src/index.vue"
import type { App } from 'vue';
LinLoading.name = "LinLoading"
LinLoading.install = (app: App) => {  
  // 组件名会以文件名命名
  app.component(LinLoading.name || "LinLoading", LinLoading)
}
export default LinLoading