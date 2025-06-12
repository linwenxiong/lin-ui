import LLoading from "./src/LLoading.vue"
import type { App } from 'vue';
LLoading.install = (app: App) => {  
  // 组件名会以文件名命名
  app.component(LLoading.__name || "LLoading", LLoading)
}
export default LLoading