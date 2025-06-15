import { createRouter, createWebHistory } from 'vue-router'
import viewLinscroll from '../view/linscroll/index.vue'
import viewTaskList from '../view/taskList/index.vue'
const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes: [
      {
        path: '/linscroll',
        name: 'viewLinscroll',
        component: viewLinscroll
      },
      {
        path: '/tasklist',
        name: 'viewTaskList',
        component: viewTaskList
      },
      {
        path: '/',           // 当访问根路径时
        redirect: '/linscroll'    
      },
    
    ]
  })
  export default router