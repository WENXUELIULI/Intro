import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "沧州市智能3D打印制造技术创新中心",
  description: "沧州交通学院实验楼B-333的汇总",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
