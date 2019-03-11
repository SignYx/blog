module.exports = {
  base: '/blog/',
  dest: 'dist',
  title: "草丛迷了鹿",
  description: "不务正业程序员",
  themeConfig: {
    editLinks: true,
    docsDir: "docs",
    nav: [{ text: "Github", link: "/" }],
    sidebar: [
      {
        title: "运维部署",
        collapsable: false,
        children: [
          {
            title: "前端部署",
            collapsable: false,
            path: "/onm/frontend"
          }
        ]
      },
      {
        title: "工具",
        collapsable: false,
        children: [
          {
            title: "git",
            collapsable: false,
            path: "/tools/git"
          }
        ]
      }
    ]
  }
};
