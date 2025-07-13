import { defineClientConfig } from 'vuepress/client'
import CenterHighlights from './components/ConterFeatures.vue'
export default defineClientConfig({
  enhance({ app}) {
    // 全局注册组件

    app.component('CenterHighlights', CenterHighlights)
  },
})