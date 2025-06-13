import LinScroll from "./src/index.vue"
import type { App } from 'vue';
LinScroll.name = "LinScroll"
LinScroll.install = (app: App) => {  
  app.component(LinScroll.name as string, LinScroll)
}
export default LinScroll 