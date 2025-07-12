import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "大创申报",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "竞赛与项目",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    
  ],
});
