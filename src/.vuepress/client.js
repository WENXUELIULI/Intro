import { defineClientConfig } from 'vuepress/client'
import ProjectTable from './components/ProjectTable.vue'
import PatentTable from './components/PatentTable.vue'
export default defineClientConfig({
  enhance({ app }) {
    // 全局注册组件
    app.component('ProjectTable', ProjectTable)
    app.component('PatentTable', PatentTable)
  },
})