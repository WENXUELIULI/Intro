import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "竞赛和项目",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "学科竞赛",
        icon: "lightbulb",
        prefix: "bar/",
        children: [ { text: "竞赛", icon: "ellipsis", link: "" }],
      },
      {
        text: "培养项目",
        icon: "lightbulb",
        prefix: "foo/",
        children: [ { text: "项目", icon: "ellipsis", link: "" }],
      },
    ],
  },
  
]);
