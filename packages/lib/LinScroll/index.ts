import LScroll from "./src/LScroll.vue"
import type { App } from 'vue';
LScroll.install = (app: App) => {  
  // 组件名会以文件名命名
  app.component(LScroll.__name || 'LScroll', LScroll)
}
export default LScroll