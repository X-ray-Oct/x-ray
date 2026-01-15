export const zhNavbar = [
  //单层
  {
    text: "主页",
    link: "/",
    // 该元素将一直处于激活状态
    activeMatch: "/",
  },
  //两层嵌套
  {
    text: "学习",
    children: [
      {
        text: "前端",
        children: [
          { text: "HTML", link: "/html/" },
          { text: "JavaScript", link: "/js/" },
          { text: "TypeScript", link: "/ts/" },
          { text: "CSS", link: "/css/" },
          { text: "Lint", link: "/lint/" },
        ],
      },
      {
        text: "后端",
        children: [
          { text: "Express", link: "/express/" },
          { text: "Node", link: "/node-express/" },
        ],
      },
      {
        text: "框架",
        children: [
          { text: "Vue", link: "/vue/" },
          { text: "React", link: "/react/" },
          { text: "Uniapp", link: "/uniapp/" },
        ],
      },
      {
        text: "其他",
        children: [
          { text: "Git", link: "/git/" },
          { text: "Nginx", link: "/nginx/" },
          { text: "vercel", link: "/vercel/" },
        ],
      },
    ],
  },
  {
    text: "标签",
    link: "/tag/",
  },
  {
    text: "分类",
    link: "/category/",
  },
  {
    text: "归档",
    link: "/article/",
  },
  // 字符串 - 页面文件路径
  "/about",
];

// 英文导航栏
export const enNavbar = [
  //单层
  {
    text: "Home",
    link: "/en/",
    // 该元素将一直处于激活状态
    activeMatch: "/",
  },
  //两层嵌套
  {
    text: "Language",
    children: [
      {
        text: "Program",
        children: [
          { text: "C", link: "https://en.cppreference.com/w/c" },
          {
            text: "Js",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
          { text: "Ts", link: "https://www.typescriptlang.org/docs/" },
          { text: "Java", link: "https://www.w3schools.com/java/" },
        ],
      },
      {
        text: "Mark",
        children: [
          {
            text: "HTML",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          { text: "Markdown", link: "https://www.markdownguide.org/" },
          {
            text: "CSS",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          { text: "Sass", link: "https://sass-lang.com/documentation/" },
          {
            text: "Tailwindcss",
            link: "https://tailwindcss.com/docs/installation/using-vite",
          },
        ],
      },
    ],
  },
  {
    text: "Tag",
    link: "/en/tag/",
  },
  {
    text: "Category",
    link: "/en/category/",
  },
  {
    text: "Archive",
    link: "/en/article/",
  },
  // 字符串 - 页面文件路径
  "/en/about",
];
